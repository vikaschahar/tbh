import React, { Component } from "react";
import Slider from "react-slick";

const StackedCardsStyle = {
    display:'flex',
    //border:'solid 2px #FFC0CB',
    borderRadius:'5px',
    height:'250px',
    width:'250px',
    color:'#ffffff',
    overflow:'hidden',
    boxShadow:'0px 2px 10px #ffc0cb',
    position:'relative',
}

const ImageContainerStyle = {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    left: '50%',
    top:'50%',
}

const ImageStyle = {
    height:'auto',
    width:'auto',
}

export default class StackedCards extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay:true,
      speed: 2000,
      slidesToShow: '1',
      slidesToScroll: '1',
      autoplaySpeed: 2000,
      cssEase: 'linear',
      pauseOnHover:'true',
      arrows:false,
      lazyLoad:true,
    };

    return (
      <div className="StackedCards" style={StackedCardsStyle}>
        <Slider {...settings}>
          <div style={ImageContainerStyle}>
            <img src={this.props.baseUrl + "/TBH Phase1_1.png"} alt="Phase1_1" style={ImageStyle}/>
          </div>
          <div style={ImageContainerStyle}>
            <img src={this.props.baseUrl + "/TBH Phase1_2.png"} alt="Phase1_2" style={ImageStyle}/>
          </div>
          <div style={ImageContainerStyle}>
            <img src={this.props.baseUrl + "/TBH Phase1_3.png"} alt="Phase1_3" style={ImageStyle}/>
          </div>
          <div style={ImageContainerStyle}>
            <img src={this.props.baseUrl + "/TBH Phase1_4.png"} alt="Phase1_4" style={ImageStyle}/>
          </div>
        </Slider>
      </div>
    );
  }
}

StackedCards.defaultProps = {
    baseUrl:'./assets',
}