import './App.css';
import Results from './components/Results';
import SearchForm from './components/SearchForm';

function App({}) {
  return (
    <div className="App">
      <div className="search">
        <SearchForm />
        <Results />
      </div>
    </div>
  );
}

export default App;
