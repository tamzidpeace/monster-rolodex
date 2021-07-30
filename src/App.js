import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {


  constructor() {
    super();


    this.state = {
      monsters: [],
      name: 'arafat',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => this.setState({ monsters: result }));
  }



  render() {
    return (
      <div className="App">
        <CardList name={"arafat"}>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>

        <h1>{this.state.name}</h1>

      </div>
    );
  }
}

export default App;
