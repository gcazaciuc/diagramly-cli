# Diagramly

Create diagrams (UML & other types) from React components. Not usable yet, just demonstrating the basic concept
using an unit test.

## Installing

```console
    npm install -g diagramly
```

## Defining a statechart

Define the diagram as a React component, let's say in `diagrams/PageLoadingStatechart.js`. Use the built-in `Statechart`, `State` and `Transition` components.

```js
const PageLoadingStateChart = props => (
    <Statechart>
        <State name="Idle" />
        <State name="Loading" />
        <Transition from="Idle" to="Loading" />
    </Statechart>
);
export default PageLoadingStateChart;
```

Generate the statechart:

```console
    diagramly --create diagrams
```

## Generating diagrams

Run

```console
    diagramly --create <directory that contains diagrams react component>
```
