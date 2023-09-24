
import './App.css';
import { useState } from 'react';

function App() {
   const [newsList,setNewsList]=useState([]);
   const fetchData=async ()=>{
    let url="https://newsapi.org/v2/everything?q=tesla&from=2023-08-24&sortBy=publishedAt&apiKey=2e7cc35850954282a2c9761092639d1e"
      let data=await fetch(url);
      let parseData=await data.json();
      setNewsList(parseData);
      console.log("data",newsList);
  }

  return (
    <div className="App">
        <button onClick={fetchData} >fetchData from service</button>
    </div>
  );
}

export default App;
