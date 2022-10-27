import React, {  } from "react";

import { useAppDispatch } from '../../redux/app/hooks';
import {selecttimeseries } from "../../redux/features/chart/chartSlice";


const ChartOptions: React.FC = () => {

    const dispatch = useAppDispatch();

    const select1D = () => {
        dispatch(selecttimeseries(0));
    }
    const select5D = () => {
        dispatch(selecttimeseries(1));
    }
    const select1M = () => {
        dispatch(selecttimeseries(2));
    }
    const select1Y = () => {
        dispatch(selecttimeseries(3));
    }


    return(
        <div>
            <div onClick={select1D}>
                <div>1D</div>
            </div>
            <div onClick={select5D}>
                <div>5D</div>
            </div>
            <div onClick={select1M}>
                <div>1M</div>
            </div>
            <div onClick={select1Y}>
                <div>1Y</div>
            </div>
        </div>
    )
}

export default ChartOptions;