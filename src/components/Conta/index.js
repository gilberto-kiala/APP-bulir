import {BrowserRouter as Router,Routes, Route, link} from "react-router-dom";
import Contratos from "../Contratos";


function Conta() {
  return (
    <Router >
      <Routes>
            <div>
                <link to="/Contratos">Contratos</link>
                <link to="/help">Help</link>
            </div>
          <Route exact path="/Contratos">
                <Contratos/>
          </Route>
          <Route exact path="/help">
                
          </Route>
         
      </Routes>
    </Router>
    
  );
}

export default Conta;
