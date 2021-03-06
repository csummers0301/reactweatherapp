import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Date from "./Date";
import City from "./City";
import Temperature from "./Temperature";
import Icon from "./Icon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <Search />
          </div>
          <div className="col">
            <div className="col date">
              <Date />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col city">
            <City />
            <Temperature />
          </div>
          <div className="col weather-image">
            <Icon />
          </div>
        </div>
      </div>
      <div>
        <a href="https://github.com/csummers0301/weather-app-project">
          Open-source code{" "}
        </a>
        by Cristine Summers
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);