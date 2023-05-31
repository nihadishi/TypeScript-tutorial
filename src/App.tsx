import { Route, Routes } from 'react-router-dom'
import Home from './TS-1/pages/Home';
import Products from './TS-1/pages/Products';
import Todo from './TS-2/todos/Todo';
import "./TS-2/todos/todo.css"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
    </Routes>
    // <Todo />

  );
}

export default App;
