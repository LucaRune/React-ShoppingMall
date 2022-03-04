import React from 'react';
import red from '../../img/red.jpg';
import purple from '../../img/purple.jpg';
import yellow from '../../img/Yellow.jpg';
import './ElementCard.css'

const ElementCard = (props) => {
    const {
        content,title,id,price,img
    }=props.data
    console.log(props)

    const imgHandler = (img)=> {
        switch (img){
            case 'yellow' :
                return yellow
            case 'red' :
                return red
            case 'purple' :
                return purple
        }
    }

    return (
        <div id="ElementCardWrapper">
            <img src={imgHandler(img)} className='thumbnail'/>
            <br/>
            <h4 className="name">{title}</h4>
            <p className="price">{content} <br/> {price}$</p>
        </div>
    );
};

export default ElementCard;