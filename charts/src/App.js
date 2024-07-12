import './App.css';
import { Chart } from './ChartComponent';
const chartExamples = [
  '{"$schema":"https://vega.github.io/schema/vega-lite/v5.json","description":"Stock prices of 5 Tech Companies over Time.","data":{"url":"https://vega.github.io/vega-lite/data/stocks.csv"},"mark":{"type":"line","point":{"filled":false}},"encoding":{"x":{"timeUnit":"year","field":"date"},"y":{"aggregate":"mean","field":"price","type":"quantitative"},"color":{"field":"symbol","type":"nominal"}}}',
  '{"$schema":"https://vega.github.io/schema/vega-lite/v5.json","description":"A simple donut chart with embedded data.","data":{"values":[{"category":1,"value":4},{"category":2,"value":6},{"category":3,"value":10},{"category":4,"value":3},{"category":5,"value":7},{"category":6,"value":8}]},"mark":{"type":"arc","innerRadius":50},"encoding":{"theta":{"field":"value","type":"quantitative"},"color":{"field":"category","type":"nominal"}}}',
  '{"$schema":"https://vega.github.io/schema/vega-lite/v5.json","repeat":["Horsepower","Miles_per_Gallon","Acceleration","Displacement"],"columns":2,"spec":{"data":{"url":"https://vega.github.io/vega-lite/examples/data/cars.json"},"mark":"bar","encoding":{"x":{"field":{"repeat":"repeat"},"bin":true},"y":{"aggregate":"count"},"color":{"field":"Origin"}}}}',
  '{"$schema":"https://vega.github.io/schema/vega-lite/v5.json","description":"Boxplot example with random data","data":{"values":[{"group":"Group A","value":34},{"group":"Group A","value":28},{"group":"Group A","value":55},{"group":"Group B","value":91},{"group":"Group B","value":81},{"group":"Group B","value":67},{"group":"Group C","value":45},{"group":"Group C","value":66},{"group":"Group C","value":73},{"group":"Group D","value":28},{"group":"Group D","value":35},{"group":"Group D","value":56},{"group":"Group E","value":12},{"group":"Group E","value":45},{"group":"Group E","value":99}]},"mark":"boxplot","encoding":{"y":{"field":"group","type":"nominal"},"x":{"field":"value","type":"quantitative"}}}',
  '{"$schema":"https://vega.github.io/schema/vega-lite/v5.json","repeat":{"row":["Horsepower","Acceleration"],"column":["Miles_per_Gallon","Acceleration"]},"spec":{"data":{"url":"https://vega.github.io/vega-lite/examples/data/cars.json"},"mark":"point","params":[{"name":"brush","select":{"type":"interval","resolve":"union","on":"[pointerdown[event.shiftKey], window:pointerup] > window:pointermove!","translate":"[pointerdown[event.shiftKey], window:pointerup] > window:pointermove!","zoom":"wheel![event.shiftKey]"}},{"name":"grid","select":{"type":"interval","resolve":"global","translate":"[pointerdown[!event.shiftKey], window:pointerup] > window:pointermove!","zoom":"wheel![!event.shiftKey]"},"bind":"scales"}],"encoding":{"x":{"field":{"repeat":"column"},"type":"quantitative"},"y":{"field":{"repeat":"row"},"type":"quantitative","axis":{"minExtent":30}},"color":{"condition":{"param":"brush","field":"Origin","type":"nominal"},"value":"grey"}}}}',
  '{"$schema":"https://vega.github.io/schema/vega-lite/v5.json","title":"US Unemployment by county","data":{"url":"https://vega.github.io/editor/data/us-10m.json","format":{"type":"topojson","feature":"counties"}},"transform":[{"lookup":"id","from":{"data":{"url":"https://vega.github.io/editor/data/unemployment.tsv"},"key":"id","fields":["rate"]}}],"projection":{"type":"albersUsa"},"mark":"geoshape","encoding":{"color":{"field":"rate","type":"quantitative"}}}',
];

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Chart
          content={chartExamples[0]}
          container-height="300px"
          container-width="800px"
          carbonify
          debug-mode
          theme="g100"
          render-method="canvas"
          loading={false}
          enable-legend-filtering={false}
          enable-multi-selections
          enable-single-selections={false}
          enable-zooming={false}
          enable-tooltip
          disable-options={false}
          disable-editor={false}
          disable-code-inspector={false}
          disable-export={false}
          disable-fullscreen={false}></Chart>

        <Chart
          content={chartExamples[3]}
          container-height="450px"
          container-width="450px"></Chart>

        <Chart
          content={chartExamples[4]}
          container-height="600px"
          container-width="600px"
          debug-mode
          render-method="svg"
          enable-zooming
          enable-tooltip
          disable-options></Chart>

        <Chart container-height="246px" container-width="512px">
          {' '}
        </Chart>
      </div>
    </div>
  );
}

export default App;
