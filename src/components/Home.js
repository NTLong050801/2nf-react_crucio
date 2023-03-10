import React, { Component } from 'react'
import Slide1 from '../assets/images/Slider1.jpg'
import Slide2 from '../assets/images/Slider2.jpg'
import Slide3 from '../assets/images/Slider3.jpg'
export default class Home extends Component {
  state = {
    backgroundImage: '',
  };

  componentDidMount() {
    const imageURLs = [
      Slide1,
      Slide2,
      Slide3,
    ];

    this.setState({ backgroundImage: imageURLs[0] });
    this.interval = setInterval(() => {

      const currentIndex = imageURLs.indexOf(this.state.backgroundImage);

    this.setState({ backgroundImage: imageURLs[currentIndex + 1] || imageURLs[0] });
    }, 25000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className='home' id='home' style={{ backgroundImage: `url(${this.state.backgroundImage})` }} >
        {/* <canvas id="reactive-bg-canvas"></canvas> */}
        <div className="row text-center">
          <h1>CRUCIO</h1>
          <hr />
          <h2>POWERFUL WEBSITES</h2>
        </div>
        <div className="text-center">
          <a href="#about" className="scroll-down">
          </a>
        </div>
      </div>
    )
  }
}
