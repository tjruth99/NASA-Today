import React from "react";

class APOD extends React.Component {
  constructor() {
    super();
    this.state = { imageSource: null, description: "", title: "" };
  }

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=AaQ9U1djcIeHrpWVG2uEZeTuodH4QcoBngaoVsNI",
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
        console.log(data.hdurl);
        this.setState({
          imageSource: data.hdurl,
          description: data.explanation,
          title: data.title,
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Server Timeout");
      });
  }

  render() {
    return (
      <>
        <div className="left">
          <img src={this.state.imageSource} alt="APOD" id="apod-image"/>
        </div>
        <div className="right" id="apod-description">
          <p id="image-title">{this.state.title}</p>
          <br />
          <p id="image-description">{this.state.description}</p>
        </div>
      </>
    );
  }
}

export default APOD;
