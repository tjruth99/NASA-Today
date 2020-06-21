import React from "react";
import ImageDisplay from "./ImageDisplay";

class APOD extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  addToList(year, month, day) {
    let date = year + "-" + month + "-" + day;
    let request =
      "https://api.nasa.gov/planetary/apod?date=" +
      date +
      "&api_key=AaQ9U1djcIeHrpWVG2uEZeTuodH4QcoBngaoVsNI";
    console.log(request);
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
        let o = {
          imageSource: data.url,
          description: data.explanation,
          title: data.title,
          date: data.date,
        };
        let newArray = this.state.images;
        newArray.push(o);

        this.setState({ images: newArray });
      })
      .catch((error) => {
        console.log(error);
        alert("Server Timeout");
      });
  }

  componentDidMount() {
    let d = new Date();

    for (let i = 0; i < 3; i++) {
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      this.addToList(year, month, day);

      d.setDate(d.getDate() - 1);
    }
  }

  render() {
    return (
      <>
        {this.state.images.map((i) => {
          return <ImageDisplay info={i} />;
        })}
      </>
    );
  }
}

export default APOD;
