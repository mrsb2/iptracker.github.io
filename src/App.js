import { Blog } from './containers';
import { Article } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Article/>

      </div>
      <Blog/>
    </div>
  );
}

export default App;
