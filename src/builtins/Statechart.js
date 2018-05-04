const React = require('react');

const Statechart = props => {
    const children = React.Children.map(props.children, (child) => React.cloneElement(child));
    return React.createElement(
        'svg',
        { viewBox: `0 0 ${props.width} ${props.height}`, xmlns: 'http://www.w3.org/2000/svg' },
        children
    );
}
Statechart.defaultProps = {
    width: 220,
    height: 100
};

module.exports = Statechart;
