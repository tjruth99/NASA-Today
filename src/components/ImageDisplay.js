import React from "react";
import Modal from "./Modal";

class ImageDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    let youtubeRegex = new RegExp(/(www.youtube.com)/);
    if (youtubeRegex.test(this.props.info.imageSource)) {
      return (
        <>
          <div className="video-display">
            <div className="video-container">
              <iframe
                src={this.props.info.imageSource}
                title={this.props.info.title}
                frameBorder="0"
                className="apod-video"
                allowFullScreen="true"
              />
              <button className="show-modal-button" onClick={this.showModal}>
                More Info
              </button>
            </div>

            <Modal onClose={this.showModal} show={this.state.show}>
              <div className="modal-box">
                <iframe
                  src={this.props.info.imageSource}
                  title={this.props.info.title}
                  frameBorder="0"
                  className="apod-video-modal"
                  allowFullScreen="true"
                />
              </div>
              <div className="modal-box">
                <div className="modal-information">
                  <p id="image-title">{this.props.info.title}</p>
                  <br />
                  <p id="image-date">{this.props.info.date}</p>
                  <br />
                  <p id="image-description">{this.props.info.description}</p>
                </div>
              </div>
            </Modal>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="image-display">
            <img
              src={this.props.info.imageSource}
              alt={this.props.info.title}
              className="apod-image"
              onClick={this.showModal}
            />
            <Modal onClose={this.showModal} show={this.state.show}>
              <div className="modal-box">
                <img
                  src={this.props.info.hdSource}
                  alt={this.props.info.title}
                  id="apod-hd-image"
                />
              </div>
              <div className="modal-box">
                <div className="modal-information">
                  <p id="image-title">{this.props.info.title}</p>
                  <br />
                  <p id="image-date">{this.props.info.date}</p>
                  <br />
                  <p id="image-description">{this.props.info.description}</p>
                </div>
              </div>
            </Modal>
          </div>
        </>
      );
    }
  }
}

export default ImageDisplay;
