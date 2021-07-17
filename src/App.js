import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import { ToastContainer  } from "react-toastify";
import Home from "./components/Home/Home";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/add">
          <AddContact />
        </Route>
        <Route exact path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
