import { useEffect, useState } from "react"
import axios from "axios"


const useAxiosfetch = (dataUrl) => {
    const [data,setData]= useState([])
    const [fetchError,setfetchError]=useState(null)
    const [isLoding,setIsloading]=useState(false)


    useEffect(()=>{
        let isMounted=true;
        const source=axios.CancelToken.source();

        const fetchData = async (url)=>{
            setIsloading(true);
            try{
                const response = await axios.get(url,{cancelToken:source.token})
                if(isMounted){
                    setData(response.data)
                    setfetchError(null)
                }
            }catch(err){
                if(isMounted){
                    setfetchError(err.message)
                    setData([])
                }
            }finally{
                isMounted && setTimeout(()=>
                setIsloading(false),2000);
            }
        }
        fetchData(dataUrl)

        const cleanUp=()=>{
            isMounted=false;
            source.cancel()
        }
        return cleanUp;
    },[dataUrl])
  return {data,fetchError,isLoding}
}

export default useAxiosfetch