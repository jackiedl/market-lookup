import React, { } from "react";
import { Chart } from "react-google-charts";

import ChartOptions from "./chartOptions";
import { useAppSelector } from '../../redux/app/hooks';
import { chartstatus, showchart } from "../../redux/features/chart/chartSlice";

import { convertFetchData } from "../../utils";

const ChartData: React.FC = () => {
    const chart = useAppSelector(showchart);
    const status = useAppSelector(chartstatus);

    //create options for each timeseries response
    const options = {
        legend: "none",
        bar: { groupWidth: "100%"},
        hAxis: {
            showTextEvery: 10,
        },
        candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
            risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
        },
    }

    if (status === "loading"){
        return <div>loading</div>
    }

    return(
        <div>
            <ChartOptions />
             <Chart
                chartType="CandlestickChart"
                width="100%"
                height="400px"
                data={convertFetchData(chart?.values)}
                options={options}
            />
        </div>
    );
}

export default ChartData;