import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-to-do">
      <div className = 'to-do-main-list'>
        <h1>TO-DO</h1>
         <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
