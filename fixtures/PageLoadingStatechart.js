const PageLoadingStateChart = (props) => (
    <Statechart>
        <State name="Idle" />
        <State name="Loading" />
        <Transition from='Idle' to='Loading' />
    </Statechart>
);
export default PageLoadingStateChart;