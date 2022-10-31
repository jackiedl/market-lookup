export function convertFetchData(timeseries: any, meta: any) {
    if (meta.interval === "5min"){
        return convertData1D(timeseries);
    }
    else if (meta.interval === "30min"){
        return convertData1W(timeseries);
    }
    else{
        return convertData1M(timeseries);
    }
}

function convertData1D(timeseries: any){
    let data:any = [];
    let today = new Date();
    timeseries.forEach((d:any)=> {
        let date = new Date(d.datetime);
        let fullDate = date.toLocaleString('en-US', { month: 'short' }) + " " + date.getDate() + " " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        if (date.getDate() === today.getDate()){
            let arr = [fullDate, parseFloat(d.close)]
            data.unshift(arr);
        }
    });
    data.unshift(["", "close"]);            
    return data;
}
function convertData1W(timeseries: any){
    let data:any = [];
    timeseries.forEach((d:any)=> {
        let date = new Date(d.datetime);
        let fullDate = date.toLocaleString('en-US', { month: 'short' }) + " " + date.getDate() + " " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        let arr = [fullDate, parseFloat(d.close)]
        data.unshift(arr);
    });
    data.unshift(["", "",]);            
    return data;
}
function convertData1M(timeseries: any){
    let data:any = [];
    timeseries.forEach((d:any)=> {
        let date = new Date(d.datetime);
        let arr = [date,parseFloat(d.close)]
        data.unshift(arr);
        
    });
    data.unshift(["", ""]);            
    return data;
}
