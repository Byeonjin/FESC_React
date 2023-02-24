
import './App.css';
import { CountButton } from './CountButton';
import { ReactComponent as Logologo } from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logologo/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>리액트 시작합니다.</p>
      <CountButton/>
      </header>
    </div>
  );
}

export default App;
