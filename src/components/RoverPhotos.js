/*
 * This component was made to display Curiosity Rover images but decided to focus on APOD since those images were more diverse and more interesting to look at.
 */

import React from "react";

class RoverImage extends React.Component {
  constructor() {
    super();
    this.state = { rover: "", imgUrl: "", camera: "", date: "" };
  }

  componentDidMount() {
    let camName = "";

    switch (this.props.camera) {
      case "FHAZ":
        camName = "Front Hazard Avoidance Camera";
        break;
      case "RHAZ":
        camName = "Rear Hazard Avoidance Camera";
        break;
      case "NAVCAM":
        camName = "Navigation Camera";
        break;
      default:
        camName = "I DONT KNOW";
    }

    console.log(this.props.date);

    this.setState({
      rover: this.props.rover,
      imgUrl: this.props.imgUrl,
      camera: camName,
      date: this.props.date,
      num: parseInt(this.props.num) % 2,
    });
  }

  render() {
    if (this.state.num === 0) {
      return (
        <>
          <div className="left" id="rover-description">
            <p id="image-title">
              {this.state.rover}'s {this.state.camera}
            </p>
            <br />
            <p id="image-description">Image taken on {this.state.date}</p>
          </div>
          <div className="right">
            <img
              src={this.state.imgUrl}
              alt={this.state.rover + "_" + this.state.camera}
              id="rover-image"
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="left">
            <img
              src={this.state.imgUrl}
              alt={this.state.rover + "_" + this.state.camera}
              id="rover-image"
            />
          </div>
          <div className="right" id="rover-description">
            <p id="image-title">
              {this.state.rover}'s {this.state.camera}
            </p>
            <br />
            <p id="image-description">Image taken on {this.state.date}</p>
          </div>
        </>
      );
    }
  }
}

class CuriosityPictures extends React.Component {
  constructor() {
    super();
    this.state = { date: null, photos: [] };
  }

  getPictures() {
    let request =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
      this.state.date +
      "&api_key=AaQ9U1djcIeHrpWVG2uEZeTuodH4QcoBngaoVsNI";
    fetch(request, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ photos: data.photos });
      })
      .catch((error) => {
        console.log(error);
        alert("Server Timeout");
      });
  }

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=AaQ9U1djcIeHrpWVG2uEZeTuodH4QcoBngaoVsNI",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.photo_manifest.max_date);
        this.setState({ date: data.photo_manifest.max_date });
        this.getPictures();
      })
      .catch((error) => {
        console.log(error);
        alert("Server Timeout");
      });
  }

  render() {
    let n = 0;
    return (
      <>
        {this.state.photos.map((i) => {
          if (i.camera.name !== "CHEMCAM") {
            return (
              <RoverImage
                rover={i.rover.name}
                imgUrl={i.img_src}
                camera={i.camera.name}
                date={this.state.date}
                num={n++}
              />
            );
          } else {
            return "";
          }
        })}
      </>
    );
  }
}

export default CuriosityPictures;
