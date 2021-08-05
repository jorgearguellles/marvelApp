import {BrowserRouter,Switch ,Route} from "react-router-dom";
import {AuthProvider} from "../context/AuthContext";

import Global from "../globalStyles";
import Home from "../pages/Home/index";
import LogIn from "../pages/LogIn"
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import HeroDetails from "../pages/HeroDetails";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/hero" component={HeroDetails}/>
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
