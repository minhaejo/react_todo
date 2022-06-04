
import './App.css';
import Header from './components/Header';
import Time from './components/Time';
import AddTodoList from './components/AddTodoList';
import Greeting from './components/Greeting';
import Greetingjs from './components/Greetingjs';


function App() {
  return (
    <div className="App">
    <Header />
    <Time />
    <Greeting name=""/>
    {/* <Greetingjs /> */}
    <AddTodoList />
    </div>
  );
}

export default App;

