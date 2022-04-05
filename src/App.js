import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [githubData, setGithubData] = useState({});
  let [starWarsData, setStarWarsData] = useState({});
  let [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/marcllopis")
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  }, []);

  const starWarsCall = () => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setStarWarsData(data);
        setApiLoaded(true);
      });
  };

  return (
    <div className="App">
      <h1>Api Calls</h1>
      <h3>Github api stuff</h3>
      <p>{githubData.name}</p>
      <p>{githubData.location}</p>
      <p>{githubData.url}</p>
      <hr />
      <hr />
      <h3>Star Wars API stuff</h3>
      <button onClick={starWarsCall}>Give me Star Wars</button>
      {
        // apiLoaded &&
        //   starWarsData.results.map(function (item) {
        //     let newItem = item.name;
        //     return <p>{newItem}</p>;
        //   })
        // apiLoaded && starWarsData.results.map((item) => <p>{item.name}</p>)
        apiLoaded &&
          starWarsData.results.map(function (item, index) {
            return (
              <div key={index}>
                <h2>{item.name}</h2>
                <h3>{item.gender}</h3>
                <p>
                  {item.height}cm and {item.mass} kg
                </p>
                <br />
              </div>
            );
          })
      }
    </div>
  );
}

export default App;
