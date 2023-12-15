import { useState, useEffect } from "react";
import axios from "axios"; 
 

const useFetch = (endpoint, query)=> {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query},
    headers: {
        'X-RapidAPI-Key': '719b70b9a1msh54c33d2678a647bp134223jsn814df118caee'  ,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    };
 

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            console.log(response.data);
        } catch (error) {
            setError(error);
            alert('Error');
            console.error(error);
        }

    }

    useEffect(() => {
      fetchData(); 
    }, [])
    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}

export default useFetch;