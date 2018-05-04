const babel = require('babel-core');
const { NodeVM } = require('vm2');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const globby = require('globby');

class DiagramRenderer {
    constructor(file) {
        this.transform = this.transform.bind(this);
        this.vm = new NodeVM({
            compiler: this.transform,
            console: 'inherit',
            sandbox: {
                React,
                Box: require('./builtins/Box'),
                Statechart: require('./builtins/Statechart'),
                State: require('./builtins/State'),
                Transition: require('./builtins/Transition')
            },
            require: {
                external: true
            }
        });
    }
    compile(code, scriptPath = process.cwd()) {
        const moduleExport = this.vm.run(code, scriptPath);
        return ReactDOMServer.renderToStaticMarkup(React.createElement(moduleExport.default));
    }
    async render(code, scriptPath) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const content = this.compile(code, scriptPath);
        const markup = `<html>
            <head>
                <style>
                    #container {
                        padding: 50px;
                    }
                </style>
            </head>
            <body>
                <div id="container">${content}</div>
            </body>
        </html>`;
        await page.setContent(markup);
        const diagram = await page.$('#container');
        const diagramName = path.basename(scriptPath, '.js');
        await diagram.screenshot({ path: `${diagramName}.png` });
    }
    async createDiagram(file) {
        const scriptPath = path.resolve(file);
        const diagramCode = String(fs.readFileSync(scriptPath));
        await this.render(diagramCode, scriptPath);
    }
    async createDiagrams(diagramsPath) {
        const paths = await globby([`${diagramsPath}/**/*.js`]);
        for (let diagram of paths) {
            await this.createDiagram(diagram);
        }
    }
    transform(code, filepath) {
        const options = {
            presets: ['env', 'react']
        };
        return babel.transform(code, options).code;
    }
}

module.exports = DiagramRenderer;
