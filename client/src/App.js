import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; // подключили сюды стили навбарчика
import SignUp from './components/SignUp/SignUp';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/signup">
      <SignUp />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
