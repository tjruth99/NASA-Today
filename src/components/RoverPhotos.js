import React from "react";

class RoverImage extends React.Component {
  constructor() {
    super();
    this.state = { rover: "", imgUrl: "", camera: "" };
  }

  componentDidMount() {
    this.setState({
      rover: this.props.rover,
      imgUrl: this.props.imgUrl,
      camera: this.props.camera,
      num: parseInt(this.props.num) % 2,
    });
  }

  render() {
    console.log(this.state.num);
    if (this.state.num === 0) {
      return (
        <>
          <div className="left" id="rover-description">
            <p>
              {this.state.rover} Camera: {this.state.camera}
            </p>
          </div>
          <div className="right" id="rover-image">
            <img
              src={this.state.imgUrl}
              alt={this.state.rover + "_" + this.state.camera}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="left" id="rover-image">
            <img
              src={this.state.imgUrl}
              alt={this.state.rover + "_" + this.state.camera}
            />
          </div>
          <div className="right" id="rover-description">
            <p>
              {this.state.rover} Camera: {this.state.camera}
            </p>
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
        {this.state.photos.map((i) => (
          <RoverImage
            rover={i.rover.name}
            imgUrl={i.img_src}
            camera={i.camera.name}
            num={n++}
          />
        ))}
      </>
    );
  }
}

export default CuriosityPictures;
