import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import DiamondsPage from "./DiamondsPage";

function Index() {
    return <IndexPage />;
}

function Diamonds() {
    return <DiamondsPage />;
}
  
function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/diamonds/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav> */}
  
          <Route path="/" exact component={Index} />
          <Route path="/diamonds/" component={Diamonds} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
  
export default AppRouter;