import React from "react";
import ImageDisplay from "./ImageDisplay";

const NUM_OF_IMAGES = 9;

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
          hdSource: data.hdurl,
          description: data.explanation,
          title: data.title,
          date: data.date,
        };
        let newArray = this.state.images;
        newArray.push(o);

        newArray.sort((a, b) => (a.date < b.date ? 1 : -1));
        console.log(newArray);

        this.setState({ images: newArray });
      })
      .catch((error) => {
        console.log(error);
        alert("Server Timeout");
      });
  }

  componentDidMount() {
    let d = new Date();

    for (let i = 0; i < NUM_OF_IMAGES; i++) {
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
        {this.state.images.map((i) => (
          <ImageDisplay info={i} />
        ))}
      </>
    );
  }
}

export default APOD;
