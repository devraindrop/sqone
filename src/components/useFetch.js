import { useEffect, useState } from "react";

const useFetch = (url,afterFetch) => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [errMsg,setErrMsg] = useState('');
        
    const loadCarsAll = () => {
        fetch(url)
        .then(res => res.json() )
        .then( data => {
            setLoading(false)
            setData(data)
            console.log(data)
            if (afterFetch) afterFetch(data);
        }).catch((err) =>{
            setErrMsg(err.message)
        })
    }
    useEffect( () =>{
        loadCarsAll();
    },[url])
    

    return {data,loading,errMsg,loadCarsAll,setErrMsg}

}
 
export default useFetch;