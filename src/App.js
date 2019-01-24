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
    score: 0,
    topscore: 0,
    shake:false,
    gameover:""
  };

  
  
  updateScore = id => {
    const filtered = this.state.pokemon.filter(data => data.id === id)

    if(filtered.length > 0){
      if(filtered[0].clicked){
        this.shakePicture();
        this.setState({ gameover: "Game Over Man!" });
        this.updateTopScore(this.state.score);
        this.newGame();
      }else{
        filtered[0].clicked = true;
        this.setState({ score: this.state.score + 1});
        this.randomizeBoard();
      }
    }
  }
  
updateTopScore = score => {
  this.state.topscore < score ? this.setState({ topscore: score}) : this.setState({ topscore: this.state.topscore})
}

  shakePicture(){
    this.setState({ shake: !this.state.shake });
  }

  newGame(){
    let pokemon = this.state.pokemon.map(data =>{
      data.clicked= false;
      return data;
    })

    this.setState({
      score:0,
      pokemon,
      gameover: ""
    })

    this.shakePicture();
  }
    randomizeBoard = (id) =>{
      let sourceArray = this.state.pokemon
        for (let i = 0; i < sourceArray.length - 1; i++){
          let j = i + Math.floor(Math.random() * (sourceArray.length - i));
          let temp = sourceArray[j];
          sourceArray[j] = sourceArray[i];
          sourceArray[i] = temp;
        }
        this.setState({ pokemon:sourceArray })
    }
  // Map over this.state.pokemon and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav 
        score={this.state.score}
        topscore={this.state.topscore}
        />
        <Header>Pokemon List</Header>
        <Container>
        {this.state.pokemon.map(friend => {
         return(
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
        </Container>
        <Footer />
      </Wrapper>
              

    );
  }
}

export default App;
