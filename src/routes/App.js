import {BrowserRouter,Switch ,Route} from "react-router-dom";
import Global from "../globalStyles";
import Home from "../pages/Home/index";
import Login from "../pages/Login"
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
