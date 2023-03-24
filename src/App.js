import "./styles.css";
import React, { Component } from "react";
import styled from "styled-components";

const MyFont = styled.div`
  font-family: "Roboto", sans-serif;
`;

const Container = styled.section`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 50px;
  width: 150vw;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  position: relative;
`;

const ButtonsBox = styled.div`
  width: 30vw;
  height: 35vh;
  border: solid 1px;
  box-shadow: 10px;
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: whitesmoke;
  box-shadow: 10px 10px 30px 2px rgba(0, 0, 0, 0.3);
  button {
    width: 9vw;
    height: 4vh;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: black;
    background-color: orange;
    border-radius: 25px;
    &:hover {
      cursor: pointer;
      background-color: darkviolet;
    }
  }
`;

const MarioBox = styled.div`
  width: 30px;
  height: 30px;
  position: center;
  bottom: 0;
  left: 50%;
  border-radius: 100px;
  transform: translateX(-50%);
  background-color: darkblue;
`;

export default class App extends Component {
  state = {
    number: 0,
    backgroundColors: [
      "deeppink",
      "coral",
      "greenyellow",
      "orchid",
      "lightseagreen"
    ],
    position: {
      x: 0,
      y: 0
    }
  };

  Soma = () => {
    const { number } = this.state;
    if (number < 10) {
      this.setState({
        number: number + 1,
        backgroundColor: this.state.backgroundColors[number % 5]
      });
    }
  };

  Diminui = () => {
    const { number } = this.state;
    if (number > 0) {
      this.setState({
        number: number - 1,
        backgroundColor: this.state.backgroundColors[number % 5]
      });
    }
  };

  Play = () => {
    const Stop = setInterval(() => {
      if (this.state.number < 10) {
        const newNumber = this.state.number + 1;
        const newBackgroundColor = this.state.backgroundColors[newNumber % 5];
        this.setState({
          number: newNumber,
          backgroundColor: newBackgroundColor
        });
      }
    }, 1000);
    this.Stop = () => {
      clearInterval(Stop);
    };
  };

  Reset = () => {
    this.setState({
      number: 0,
      backgroundColor: "aqua"
    });
  };

  handleClick = () => {
    const newPosition = {
      x: this.state.position.x + 10,
      y: this.state.position.y + 10
    };
    this.setState({ position: newPosition });
  };

  render() {
    return (
      <>
        <Container
          backgroundColor={this.state.backgroundColors[this.state.number % 5]}
        >
          <h1>{this.state.number}</h1>
          <ButtonsBox>
            <button onClick={this.Soma}>+</button>
            <button onClick={this.Diminui}>-</button>
            <button onClick={this.Reset}>Reset</button>
            <button onClick={this.Play}>Play</button>
            <button onClick={this.Stop}>Stop</button>
            <button onClick={this.handleClick}>Move</button>
          </ButtonsBox>
          <MarioBox
            style={{
              left: this.state.position.x,
              bottom: this.state.position.y
            }}
          />
        </Container>
      </>
    );
  }
}
