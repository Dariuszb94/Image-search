import "./App.css";
import { SearchPage } from "./Components/SearchPage/SearchPage";
import { ResultsPage } from "./Components/ResultsPage/ResultsPage";
import { Route, Switch,withRouter } from "react-router-dom";
function App({location}) {
  return (
    <div className="App">
              
      <Switch location={location}>
                  
        <Route exact path="/image-search" component={SearchPage} />
                  
        <Route path="/ResultsPage" component={ResultsPage} />
               
        <Route component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;
