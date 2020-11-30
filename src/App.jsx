import './App.css';
import ResultsContainer from './containers/ResultsContainer';
import SearchFormContainer from './containers/SearchFormContainer';

function App() {
  return (
    <div className="App">
      <div className="search">
        <SearchFormContainer />
        <ResultsContainer />
      </div>
    </div>
  );
}

export default App;
