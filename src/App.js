import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";
import ImageForm from "./components/ImageForm";
import ImageRec from "./components/ImageRec";
import Rank from "./components/Rank";
import Clarifai from "clarifai";
import { Particles } from "@blackbox-vision/react-particles";

// const app = new Clarifai.App({
//   apiKey: "402d49523004428791d8a1306afdd1c7",
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onChangeInput = (event) => {
    this.setState({ input: event.target.value });
  };

  onClick = () => {
    this.setState({ imageUrl: this.state.input });

    // app.models
    //   .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    //   .then((response) => console.log("hi", response))
    //   .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="tc">
        <Particles
          id="simple"
          width="auto"
          height="100vh"
          style={{
            backgroundColor: "transparent",
            position: "fixed",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            zIndex: "-1",
          }}
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <Navigation />
        <Rank />
        <ImageForm onChangeInput={this.onChangeInput} onClick={this.onClick} />
        <ImageRec imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
