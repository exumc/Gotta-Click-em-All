import React, { Component } from "react";

import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Footer from "./components/Footer"
import Header from "./components/Header";
import Nav from "./components/Nav"
import pokemon from "./pokemon.json";
import Hero from "./components/Hero";

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon,
    score: 0,
    topscore: 0,
    shake: false,
    gameover: ""
  };

  updateScore = id => {
    const filtered = this.state.pokemon.filter(data => data.id === id)

    if (filtered.length > 0) {
      if (filtered[0].clicked) {
        this.shakePicture();
        this.setState({ gameover: "Game Over Man!" });
        this.updateTopScore(this.state.score);
        this.newGame();
      } else {
        filtered[0].clicked = true;
        this.setState({ score: this.state.score + 1 });
        this.randomizeBoard();
      }
    }
  }

  updateTopScore = score => {
    this.state.topscore < score ? this.setState({ topscore: score }) : this.setState({ topscore: this.state.topscore })
  }

  shakePicture() {
    this.setState({ shake: !this.state.shake });
  }

  newGame() {
    let pokemon = this.state.pokemon.map(data => {
      data.clicked = false;
      return data;
    })

    this.setState({
      score: 0,
      pokemon,
      gameover: ""
    })

    this.randomizeBoard();
    this.shakePicture();
  }

  randomizeBoard = (id) => {
    let sourceArray = this.state.pokemon
    for (let i = 0; i < sourceArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (sourceArray.length - i));
      let temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    this.setState({ pokemon: sourceArray })
  }

  render() {
    return (
      <Wrapper background="https://cdn.vox-cdn.com/uploads/chorus_asset/file/11680589/Map_Art.png">
        <Header>
          <Nav
            score={this.state.score}
            topscore={this.state.topscore}
          />
          <Hero>
            <div className="row">
              <div className="col s12 center">
                <h1>Pokemon List</h1>
              </div>

              <div className="col s12 center">
                <h3 className="flow-text">Try and catch all the Pokemon to score a point! Be careful, you can only catch each Pokemon one time!</h3>
              </div>
            </div>
          </Hero>
        </Header>
        <Main >
          {this.state.pokemon.map(friend => {
            return (
              <GameCard
                removeCard={this.updateScore}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
              />
            )
          })}
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
