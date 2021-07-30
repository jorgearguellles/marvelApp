import {BrowserRouter, Route} from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/Login"
import Global from "../globalStyles";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
    </BrowserRouter>
  );
}

export default App;
