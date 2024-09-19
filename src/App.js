import Clock from './components/Clock';
import Todo from './components/todo/Todo';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        todo
        <Clock />
      </nav>
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;
