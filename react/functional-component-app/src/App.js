import logo from './logo.svg';
import './App.css';
import { FunctionComponent } from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <FunctionComponent text="comp 1"></FunctionComponent>
      <FunctionComponent text="comp 2"></FunctionComponent>
      <FunctionComponent text="comp 3"></FunctionComponent>
    </div>
  );
}

export default App;
