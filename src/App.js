import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/score";
import friends from "./friends.json";
import "./App.css";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    losses: 0,
    clickedFriends: []
  };

  removeFriend = id => {
    console.log(id);
    if (this.state.clickedFriends.includes(id)) {
      console.log(this.state.clickedFriends);
      alert("You Lose")
      console.log("You Lose");
      this.state.losses++;
      this.state.score = 0;
      const clickedFriends = []
      this.setState({ clickedFriends });
    }
    else if (!this.state.clickedFriends.includes(id)) {
      this.state.clickedFriends.push(id);
      console.log("you clicked a new friend");
      console.log(this.state.clickedFriends);
      this.state.score++;
      console.log(this.state.score);
    }
    if (this.state.score == 10) {
      alert("You Win")
      this.state.score = 0;
    }

    const friends = shuffle(this.state.friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title>Friends List</Title>
        <div className="container-fluid">
          <div className="row">
            <Score score={this.state.score} name="score" />
            <Score score={this.state.losses} name="losses" />
          </div>
        </div>

        {/* <div><p>
          Score: {this.state.score}
        </p>
        <p>
          Losses: {this.state.losses} 
        </p>
        </div>
        <hr></hr> */}


        <br></br>
          <Wrapper>
              {this.state.friends.map(friend => (
                <FriendCard
                  removeFriend={this.removeFriend}
                  id={friend.id}
                  key={friend.id}
                  name={friend.name}
                  image={friend.image}
                  occupation={friend.occupation}
                  location={friend.location}
                />
              ))}

      
        </Wrapper>
      </div>
    );
  }
}

export default App;

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}