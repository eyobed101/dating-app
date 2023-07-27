import './App.css';
import Header from './components/Header/Header';
import DatingCards from './components/DatingCard/DatingCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';


function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
