export function convertFetchData(timeseries: any) {
    let data:any = [];
    timeseries.forEach((d:any)=> {
        let arr = [d.datetime, parseFloat(d.high), parseFloat(d.open), parseFloat(d.close), parseFloat(d.low)];
        data.unshift(arr);
    });
    data.unshift(["datetime", "", "", "", ""]);
    return data;
}