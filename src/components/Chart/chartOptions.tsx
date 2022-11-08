import React, {  } from "react";

import { useAppDispatch } from '../../redux/app/hooks';
import {selecttimeseries } from "../../redux/features/chart/chartSlice";


const ChartOptions: React.FC = () => {

    const dispatch = useAppDispatch();

    const select1D = () => {
        dispatch(selecttimeseries(0));
    }
    const select1W = () => {
        dispatch(selecttimeseries(1));
    }
    const select1M = () => {
        dispatch(selecttimeseries(2));
    }
    const select1Y = () => {
        dispatch(selecttimeseries(3));
    }


    return(
        <div id="chart-menu-container">
            <div className="chart-menu-wrapper" onClick={select1D}>
                <div className="chart-menu-item">D</div>
            </div>
            <div className="chart-menu-wrapper chart-menu-border" onClick={select1W}>
                <div className="chart-menu-item">W</div>
            </div>
            <div className="chart-menu-wrapper chart-menu-border" onClick={select1M}>
                <div className="chart-menu-item">M</div>
            </div>
            <div className="chart-menu-wrapper chart-menu-border" onClick={select1Y}>
                <div className="chart-menu-item" >Y</div>
            </div>
        </div>
    )
}

export default ChartOptions;