import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError] =useState(null);
    useEffect(() => {
    const fetchData = async() => {
      try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=8');
        setData(response.data);
      }catch(error) {
        setError(error.message);
      }finally{
        setLoading(false);
      }
    };
    const addNote = (note)=>{
        setData((prevData) => [...prevData, note]);
    }
    fetchData();
  },[]);

  return (
    <DataContext.Provider value={{data,loading,error}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;