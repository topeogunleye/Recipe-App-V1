import Header from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MealInfo from './MealInfo';
import RandomMeal from './RandomMeal';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/MealInfo/:mealID">
            <MealInfo />
          </Route>
          <Route exact path="/RandomMeal/">
            <RandomMeal />
          </Route>
        </Switch>  
    </Router>
  );
}

export default App;
