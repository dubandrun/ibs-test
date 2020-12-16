import "./App.css";
import ResultsContainer from "./containers/ResultsContainer";
import SearchFormContainer from "./containers/SearchFormContainer";

const App = () => (
  <div className="app">
    <SearchFormContainer />
    <ResultsContainer />
  </div>
);

export default App;
