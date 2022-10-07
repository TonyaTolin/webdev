import logo from './logo.svg';
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';

function App() {
  const name = "tonya"
  let variable = ""
  if (name=== "tonya"){
    variable = (<p>this is tonya</p>);
  }
  let nameString = name === "ton" ? "this is ton!" : "this is not ton";
  
  const buttonClick = () => {
    console.log("i clicked the button");
  }

  const siblings = ["renee", "kelsi"];
  const siblingsMap = siblings.map 

  const onInputChange = (event) => {
    console.log(event.target.value);
  } 

  const list = [1,2,3,4];

  const ListPlusOe = list.map(number =>) {
    return number + 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {siblingsFunction }
        
        {if(name == "tonya"){
          return (<p>person's name is tonya</p>
        <p>Hi my name is {name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick = {buttonClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
