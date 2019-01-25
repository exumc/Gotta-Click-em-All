import React, { Component } from "react";

import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import pokemon from "./pokemon.json";
import Hero from "./components/Hero";

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon,
    score: 0,
    topscore: 0,
    shake: false
  };

  // updating the score and filtering out the clicked item
  updateScore = id => {
    const filtered = this.state.pokemon.filter(data => data.id === id);

    if (filtered.length > 0) {
      if (filtered[0].clicked) {
        this.shakePicture();
        // alert("Try again! You gotta Catch 'Em All!");
        this.updateTopScore(this.state.score);
        this.newGame();
      } else {
        filtered[0].clicked = true;
        this.setState({ score: this.state.score + 1 });
        this.randomizeBoard();
      }
    }
  };

  // checking the topscore against the current score and updating accordingly
  updateTopScore = score => {
    this.state.topscore < score
      ? this.setState({ topscore: score })
      : this.setState({ topscore: this.state.topscore });
  };

  // animating the card shake
  shakePicture() {
    this.setState({ shake: !this.state.shake });
  }

  // creating a new game. reseting the state of the score and the pokemon array
  newGame() {
    let pokemon = this.state.pokemon.map(data => {
      data.clicked = false;
      return data;
    });

    this.setState({
      score: 0,
      pokemon
    });

    this.randomizeBoard();
    this.shakePicture();
  }

  // looping through the pokemon array in a temporary array to randomly place them within the array
  randomizeBoard = () => {
    let sourceArray = this.state.pokemon;
    for (let i = 0; i < sourceArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (sourceArray.length - i));
      let temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    this.setState({ pokemon: sourceArray });
  };

  render() {
    if (this.state.score > 11) {
      alert(
        "Congratulations you have won! Now go do something better with your time."
      );
    }

    return (
      <Wrapper background="https://cdn.vox-cdn.com/uploads/chorus_asset/file/11680589/Map_Art.png">
        <Header>
          <Nav score={this.state.score} topscore={this.state.topscore} />
          <Hero>
            <div className="row">
              <div className="col s12 center">
                <h1>Pokemon List</h1>
              </div>

              <div className="col s12 center">
                <h3 className="flow-text">
                  Try and catch all the Pokemon to score a point! Be careful,
                  you can only catch each Pokemon one time!
                </h3>
              </div>
            </div>
          </Hero>
        </Header>
        <Main>
          {this.state.pokemon.map(friend => {
            return (
              <GameCard
                removeCard={this.updateScore}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                shake={this.state.shake}
              />
            );
          })}
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
