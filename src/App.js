import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Footer from "./components/Footer"
import Header from "./components/Header";
import Nav from "./components/Nav"
import pokemon from "./pokemon.json";

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon,
    score: 0
  };

  removeCard = id => {
    // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
    const pokemon = this.state.pokemon.filter(friend => friend.id !== id);
    // Set this.state.pokemon equal to the new pokemon array
    this.setState({ pokemon });
    this.setState({ score: this.state.score + 1});
  };


  // Map over this.state.pokemon and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav 
        score={this.state.score}
        />
        <Header>Pokemon List</Header>
        <Container>
        {this.state.pokemon.map(friend => {
         return(
         <GameCard
            removeCard={this.removeCard}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
         )
         })}
        </Container>
        <Footer />
      </Wrapper>
              

    );
  }
}

export default App;
