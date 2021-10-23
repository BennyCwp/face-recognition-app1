import React from "react";
import Navigation from "./components/Navigation/navigation";
import Logo from "./components/Logo/logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particle from "./components/Particles/Particles";
import FaceImage from "./components/FaceImage/FaceImage";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import "./App.css";

const initialState = {
  input: "",
  imageUrl: "",
  faceBox: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceBoxLocation = (data) => {
    const boxData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector(".faceImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: boxData.left_col * width,
      topRow: boxData.top_row * height,
      rightCol: width - boxData.right_col * width,
      bottomRow: height - boxData.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({
      faceBox: box,
    });
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onPictureDetect = () => {
    this.setState({
      imageUrl: this.state.input,
    });
    fetch("https://still-citadel-18506.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://still-citadel-18506.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch((err) => console.log(err));
        }
        this.displayFaceBox(this.calculateFaceBoxLocation(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({ isSignedIn: true });
    } else {
      this.setState(initialState);
    }
    this.setState({
      route: route,
    });
  };

  render() {
    return (
      <div className="App">
        <Particle />
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "signin" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : this.state.route === "register" ? (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <div>
            <Logo />
            <Rank
              userEntries={this.state.user.entries}
              userName={this.state.user.name}
            />
            <ImageLinkForm
              onPictureDetect={this.onPictureDetect}
              onInputChange={this.onInputChange}
            />
            <FaceImage
              faceBox={this.state.faceBox}
              imageUrl={this.state.imageUrl}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
