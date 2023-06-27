
import React from "react";
import { useState,useEffect } from "react";
import './../styles/App.css';

const App = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
     function fetchData() {
      fetch("https://dummyjson.com/products")
      .then((res)=>(res.json()))
      .then((res)=>{setdata(res)})
      .catch((err)=>{console.log(err); setdata(`An error occurred: ${err}`)})
    }
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading product data...</p>;
  }

  return (
    <div className="app">
    <h1>Data Fetched from API</h1>
        <pre className="data">{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default App