import React, {  } from "react";
import { Chart } from "react-google-charts";

import { useAppSelector } from '../../redux/app/hooks';
import { timeSeries, timeSeriesStatus} from "../../redux/features/stock/stockSlice";

import { convertFetchData } from "../../utils/index";

const ChartData: React.FC = () => {
    const status = useAppSelector(timeSeriesStatus);
    const chartData = useAppSelector(timeSeries);

    const options = {
        legend: "none",
        bar: { groupWidth: "100%"},
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
            <Chart
                chartType="CandlestickChart"
                width="100%"
                height="400px"
                data={convertFetchData(chartData?.values)}
                options={options}
            />
        </div>
    );
}

export default ChartData;