import {BrowserRouter,Switch ,Route} from "react-router-dom";
import Global from "../globalStyles";
import Home from "../pages/Home/index";
import Login from "../pages/LogIn"
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
