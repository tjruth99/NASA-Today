/*
 * The parent component to all images/videos from NASA's APOD. This component makes the calls to the API to get information for each image/video.
 */

import React from "react";
import ImageDisplay from "./ImageDisplay";

const NUM_OF_IMAGES = 18;

class APOD extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      length: 0,
    };

    this.loadMoreImages = this.loadMoreImages.bind(this);
  }

  /*
   * Make an API call to NASA to fetch the picture for the given date and add it to the list of images
   */
  addToList(year, month, day) {
    let request = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
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
        if (data.url != null) {
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

          this.setState({ images: newArray, length: newArray.length });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Server Timeout");
      });
  }

  /*
   * Called when user requests more images, add NUM_OF_IMAGES more images to the array
   */
  loadMoreImages() {
    if (process.env.REACT_APP_NASA_API_KEY == null) {
      alert("No NASA API key found");
    } else {
      let d = new Date();

      let num = this.state.length;

      d.setDate(d.getDate() - num);

      for (let i = 0; i < NUM_OF_IMAGES; i++) {
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();

        this.addToList(year, month, day);

        d.setDate(d.getDate() - 1);
      }
    }
  }

  /*
   * When the website opens, make NUM_OF_IMAGES calls to the API to fetch that many number of images to display
   */
  componentDidMount() {
    if (process.env.REACT_APP_NASA_API_KEY == null) {
      alert("No NASA API key found");
    } else {
      let d = new Date();

      for (let i = 0; i < NUM_OF_IMAGES; i++) {
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();

        this.addToList(year, month, day);

        d.setDate(d.getDate() - 1);
      }
    }
  }

  render() {
    return (
      <>
        <div className="container">
          {this.state.images.map((i) => (
            <ImageDisplay info={i} />
          ))}
        </div>
        <button className="extend-button" onClick={this.loadMoreImages}>
          More Images
        </button>
      </>
    );
  }
}

export default APOD;
