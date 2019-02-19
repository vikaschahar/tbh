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
}

// const ImageContainerStyle = {
//     display:'flex',
//     height:'100%',
//     width:'100%',
//     position:'relative',
// }

// const ImageStyle = {
//     maxWidth:'100%',
//     maxHeight:'100%',
//     height: 'auto',
//     width: 'auto',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     objectFit:'cover',
// }

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
          <div >
            <img src={this.props.baseUrl + "/P1.jpg"} alt="P1"/>
          </div>
          <div >
            <img src={this.props.baseUrl + "/P2.jpg"} alt="P2"/>
          </div>
          <div >
            <img src={this.props.baseUrl + "/P3.jpg"} alt="P3" />
          </div>
        </Slider>
      </div>
    );
  }
}

StackedCards.defaultProps = {
    baseUrl:'./assets',
}