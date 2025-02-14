import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchData } from './services/api';
import Navbar from './components/Navbar'
import ShowQNA from './components/ShowQNA'
import AddQNA from './components/AddQNA';


function App() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (

  <Router>
        <>
  <Navbar />
    <Routes>
      <Route path='/' element={<ShowQNA Data={Data} ></ShowQNA>}></Route>
  <Route path='/addqna' element={<AddQNA/>}></Route>
    </Routes>
    </>
  </Router>
 


  )
}
export default App;
