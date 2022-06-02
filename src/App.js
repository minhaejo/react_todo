
import './App.css';
import Header from './components/Header';
import Time from './components/Time';
import AddTodoList from './components/AddTodoList';
import Greeting from './components/Greeting';


function App() {
  return (
    <div className="App">
    <Header />
    <Time />
    {/* <Greeting /> */}
    <AddTodoList name ="ㅁㄴㅇㅁㄴㅇ"/>
    </div>
  );
}

export default App;

