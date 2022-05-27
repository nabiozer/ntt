import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Task1 from "./task1/pages/Task1";
import Task2 from "./task2/pages/Task2";
import Task3 from "./task3/pages/Task3";
import MainHeader from "./shared/components/Navigation/MainNavigation";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from "./home/pages/HomePage";

function App() {
  return (
    <>
      <MainNavigation />

      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/task1" exact>
            <Task1 />
          </Route>
          <Route path="/task2" exact>
            <Task2 />
          </Route>
          <Route path="/task3" exact>
            <Task3 />
          </Route>
          <Route path="*" exact>
            <HomePage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
