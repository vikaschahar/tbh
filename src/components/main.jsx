import React from 'react';
import fire from '../fire.js';

import StackedCards from './stackedCards.jsx';

const MainStyle = {
    height:'100vh',
    width:'100vw',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
}

const HeaderStyle = {
    color:'#FFC0CB',
    fontSize:'1em',
    margin:'10px',
}

const StackedCardsStyle = {
    marginTop:'auto',
    margin:'20px',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'flex-start',

}

const Row2Style = {
    justifySelf:'flex-start',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-end',
    overflow:'hidden',
    padding:'20px',
    marginBottom:'auto',
}

const InputStyle = {
    height:'50px',
    padding: '10px 15px 10px',
    borderRadius:'5px',
    border:'solid 2px #FFC0CB',
    fontSize:'0.6em',
    margin: '8px 0',
    boxSizing: 'border-box',
    boxShadow:'0px 2px 2px #ffc0cb',
}

const ButtonStyle = {
    padding: '6px 12px',
    borderRadius:'9999px',
    border:'solid 2px #FFC0CB',
    fontSize:'0.6em',
    margin: '10px 0',
    boxSizing: 'border-box',
    backgroundColor:'#ffc0cb',
    cursor:'pointer',
    outline:'none',
    boxShadow:'0px 2px 10px #ffc0cb',
}

export default class Main extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.InstaIdRef = React.createRef;
    }

    handleClick(e){
        e.preventDefault();
        const instaId = this.InstaIdRef.current.value;

        fire.database().ref('InstaId').push( instaId );

    }

    render(){
        return(
            <div className="Main" style={MainStyle}>
                <div className="Header" style={HeaderStyle}>
                    Join the queue
                </div>
                <div className="StackedCards" style={StackedCardsStyle}>
                    <StackedCards/>
                </div>
                <div className="Row2" style={Row2Style}>
                    <input className="Input" style={InputStyle} type="text" placeholder="Enter Instagram Id" ref={this.InstaIdRef}/>
                    <button className="Button" style={ButtonStyle} onClick={this.handleClick}>GET IN!</button>
                </div>
            </div>
        )
    }
}