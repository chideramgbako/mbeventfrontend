import axios from "axios";
import {useState, useEffect} from "react";

export const useFetch = (url)=>{
    const [data, setData]= useState([])
    const [isLoading, setIsLoading]= useState(true)

    useEffect(()=>{
const getData = async ()=>{
try {
    setIsLoading(true)
    const res = await fetch(url)
    const result = await res.json()
    setIsLoading(false)
    setData(result)
} catch (error) {
    console.log(error);
}finally{
    setIsLoading(false)
}
};
getData();
    }, [url])

    return {data, isLoading}
}