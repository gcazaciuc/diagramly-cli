const React = require('react');

const State = props => {
    const textX = (props.x + props.width) / 2;
    const textY = (props.y + props.height) / 2;
    const textWidth = 100;
    const textHeight = 100;
    return React.createElement('g', {}, [
        React.createElement(
            'rect',
            {
                x: props.x,
                y: props.y,
                width: props.width,
                height: props.height,
                rx: 15,
                ry: 15,
                style: props.rectangleStyle
            },
            []
        ),
        React.createElement(
            'text',
            { x: textX, y: textY, width: textWidth, height: textHeight, style: props.textStyle },
            [props.name]
        )
    ]);
};
State.defaultProps = {
    name: 'State',
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    textStyle: {
        fill: 'blue'
    },
    rectangleStyle: {
        fill: 'green'
    }
};
module.exports = State;
