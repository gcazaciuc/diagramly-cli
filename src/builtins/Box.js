const React = require('react');

const Box = props => (
    React.createElement('svg', { viewBox: "0 0 220 100", xmlns: "http://www.w3.org/2000/svg"},
        React.createElement('rect', { x: 120, y: 0, width: 100, height: 100, rx: 15, ry: 15}, [])
    )
);

module.exports = Box;
