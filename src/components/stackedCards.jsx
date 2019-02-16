import React, { Component } from "react";
import Slider from "react-slick";

const StackedCardsStyle = {
    display:'flex',
    //border:'solid 2px #FFC0CB',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    color:'#ffffff',
    overflow:'hidden',
    boxShadow:'0px 2px 10px #ffc0cb',
    marginTop:'auto',
}

export default class StackedCards extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay:true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover:'true',
      arrows:false,
      lazyLoad:true,
    };

    return (
      <div className="StackedCards" style={StackedCardsStyle}>
        <Slider {...settings}>
          <div>
            <img src={this.props.baseUrl + "/travis1.jpg"} alt="Travis Scott"/>
          </div>
          <div>
            <img src={this.props.baseUrl + "/travis2.jpg"} alt="Travis Scott"/>
          </div>
          <div>
            <img src={this.props.baseUrl + "/travis3.jpg"} alt="Travis Scott"/>
          </div>
          <div>
            <img src={this.props.baseUrl + "/travis4.jpg"} alt="Travis Scott"/>
          </div>
        </Slider>
      </div>
    );
  }
}

StackedCards.defaultProps = {
    baseUrl:'./assets',
}