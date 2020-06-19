import React from "react";

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
    return (
      <div>
        {this.state.photos.map((i) => (
          <img src={i.img_src} alt="Curiosity" id="curiosity-image" />
        ))}
      </div>
    );
  }
}

export default CuriosityPictures;
