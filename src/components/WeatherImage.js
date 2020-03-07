import React, { Component } from 'react';
import './WeatherImage.css';
import sunImg from '../images/weather-sun.svg';
import rainImg from '../images/weather-rain.svg';
import cloudImg from '../images/weather-clouds.svg';


class WeatherImage extends Component {

  render() {
    let src=sunImg;
    if (this.props.conditions.toLowerCase().includes("rain")) {
      src=rainImg;
    } else if (this.props.conditions.toLowerCase().includes("cloud")) {
      src=cloudImg;
    }

    return (
      <img className="WeatherImage" src={src} alt={this.props.conditions} />
    );
  }
}

export default WeatherImage;