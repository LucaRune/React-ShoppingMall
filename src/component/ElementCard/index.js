import React from 'react';
import red from '../../img/red.jpg';
import purple from '../../img/purple.jpg';
import yellowtulip from '../../img/yellow tulip.jpg';
import redsnapdragon from '../../img/red snapdragon.jpg';
import yellowsnapdragon from '../../img/yellow snapdragon.jpg';
import pinksnapdragon from '../../img/pink snapdragon.jpg';
import './ElementCard.css'

const ElementCard = (props) => {
    const {
        content,title,id,price,img
    }=props.data
    console.log(props)

    const imgHandler = (img)=> {
        switch (img){
            case 'yellow tulip' :
                return yellowtulip
            case 'red' :
                return red
            case 'purple' :
                return purple
            case 'red snapdragon' :
                return redsnapdragon
            case 'yellow snapdragon' :
                return yellowsnapdragon
            case 'pink snapdragon' :
                return pinksnapdragon
        }
    }

    return (
        <div style={{maxWidth:"250px"}}>
            <img src={imgHandler(img)} className='thumbnail'/>
            <br/>
            <h4 className="name">{title}</h4>
            <p className="price">{content} <br/> {price}$</p>
        </div>
    );
};

export default ElementCard;