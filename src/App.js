import Header from './Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MealInfo from './MealInfo';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/MealInfo/:mealID">
            <MealInfo />
          </Route>
        </Switch> 
    </Router>
  );
}

export default App;
