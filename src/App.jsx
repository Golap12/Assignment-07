import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Recipes from './components/Recipes';
import Cooking from './components/Cooking';
import Table from './components/Table';
import TableTwo from './components/TableTwo';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cooks, setCooks] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [cooked, setCooked] = useState([]);

  const [min, setMin] = useState(0);
  const [calories, setCalories] = useState(0);



  useEffect(() => {
    fetch("./coocks.json")
      .then(res => res.json())
      .then(data => {
        setCooks(data);
      });
  }, []);


  const handleCook = (c) => {
    const isExist = cooking.find(item => item.id == c.id);
    if (!isExist) {
      setCooking([...cooking, c]);
    }
    else {
      toast("Item can only be added once!");
    }
  }



  const handlePrepare = (t2, minutes, cal, id) => {

    setCooked([...cooked, t2]);

    const newCook = cooking.filter(item => item.id != id);
    setCooking(newCook);

    const newMin = min + minutes;
    setMin(newMin);

    const newCalories = calories + cal;
    setCalories(newCalories);


  }




  return (
    <div className='container mx-auto px-3 body'>

      <Navbar></Navbar>
      <Hero></Hero>
      <Recipes></Recipes>

      <div className='flex md:flex-row flex-col justify-between gap-5 mt-10 mb-20'>
        <div className='left side grid grid-cols-1 md:grid-cols-2 gap-5'>
          {
            cooks.map(cooks =>
              <Cooking key={cooks.id} cooks={cooks} handleCook={handleCook}>

              </Cooking>)
          }
        </div>

        <div className='right-side border rounded-xl flex-1'>
          <Table cooking={cooking} handlePrepare={handlePrepare}>

          </Table>

          <TableTwo cooked={cooked} min={min} calories={calories}>

          </TableTwo>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
