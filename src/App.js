
import { useState } from 'react';
import './App.css';
import {Lesson1} from "./Lesson1";
import Lesson2 from "./Lesson2"
import StateFulComponent from "./Lesson3"
import Todo from "./Lesson4"
import CounterApp from './Lesson5';
import ItemList from './Lesson5f';
import TodoFuntion from './Lesson5fi';
import MyPureComponent from "./Lesson6";
import CounterAppLifeCycle from "./Lesson6f"
import Carousel from './Lesson7';
import SearchText from './Lesson7f';
import ShoppingCart from './Lesson8';
import LifeCycleExamples from './Lesson9';
import ProductCard from './Lesson9f';

function App() {

  const [prop1,setProp1]=useState('Value1')
  const [prop2,setProp2]=useState('Value2')

  function handleProp1(){
   setProp1('New Value 1')
  }

  function handleProp2(){
    setProp2('New Value 2')
  }
  return (
    <div className="App">
      {/* <Lesson1 name={"jinath"} designation={"software engineer"} />
      <Lesson2 name={"jinath1"} designation={"software engineer1"} />
      <StateFulComponent />
      <Todo /> */}
      {/* <CounterApp />
      <ItemList /> */}
      {/* <TodoFuntion /> */}
       {/* <MyPureComponent prop1={prop1} prop2={prop2}  />
      <button onClick={handleProp1}>Change Prop1</button>
      <button onClick={handleProp2}>Change Prop2</button> */}
      {/* <CounterAppLifeCycle /> */}
      {/* <Carousel /> */}
      {/* <SearchText /> */}

      {/* <ShoppingCart /> */}
      {/* <LifeCycleExamples /> */}
      <ProductCard />

    </div>
  );
}



export default App;





