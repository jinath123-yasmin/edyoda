
import './App.css';
import {Lesson1} from "./Lesson1";
import Lesson2 from "./Lesson2"
import StateFulComponent from "./Lesson3"
import Todo from "./Lesson4"

function App() {
  return (
    <div className="App">
      <Lesson1 name={"jinath"} designation={"software engineer"} />
      <Lesson2 name={"jinath1"} designation={"software engineer1"} />
      <StateFulComponent />
      <Todo />
    </div>
  );
}



export default App;





