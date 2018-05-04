#!/usr/bin/env node
const { DiagramRenderer } = require('../src/index');
const argv = require('minimist')(process.argv.slice(2));
const diagramCreator = new DiagramRenderer();
diagramCreator.createDiagrams(argv.create);
console.dir(argv);
