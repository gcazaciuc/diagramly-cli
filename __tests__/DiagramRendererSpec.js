const { DiagramRenderer } = require('../src/index');
const path = require('path');

describe('Should compile code correctly', () => {
    test('Should compile React component with no external depedencies', async () => {
        const renderer = new DiagramRenderer();
        const code = `
            const Chart = (props) => (
                <Box></Box>
            );
            export default Chart;
        `;
        await renderer.createDiagram(
           path.resolve(__dirname, '..', 'fixtures', 'PageLoadingStatechart.js')
        );
    });
});
