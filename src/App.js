import Todo from './components/todo/Todo';
import { IoCheckmarkSharp } from 'react-icons/io5';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <IoCheckmarkSharp />
        TO DO
      </nav>
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;
