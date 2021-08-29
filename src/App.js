import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import { PeopleList } from "./PeopleList";

const people = [
  {
  name: 'John',
  age: 40,
  hairColor: 'blond',
},
{
  name: 'Helen',
  age: 42,
  hairColor: 'brown',
},
{
  name: 'Ola',
  age: 33,
  hairColor: 'brown',
},

]
//as props: person={{surname: "J", age: 33}}
  //<Greeting />
function App() {
   
  
  let url = "https://reactjs.org";
  let msg = 20;

  const displayAlert = () => {
    alert('Hello');
  }

  return (
    <div className="App">
      <header className="App-header">
   
       <Greeting  name="Vullnet"  numberOfMessages={msg}/>
        <PeopleList people={people}/>
        <button onClick={() => alert('Hello again')}>Click Me!</button>

        <img src={logo} className="App-logo" alt="logo" />

        <a className="App-link" href={url} target="_blank" rel="noreferrer">
          You can click here to learn more:
        </a>
      </header>
    </div>
  );  
}

export default App;
