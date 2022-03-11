import React from 'react';
import './DetailPage.css';
import {useHistory} from "react-router-dom";

const DetailPage = (props) => {

    let history = useHistory();

    return (
        <div>
            <button onClick={()=>{history.goBack()}}>Go Back</button>
            <button onClick={()=>{history.push("mycart")}}>My Cart</button>
            <button>Order</button>
        </div>
    );
};

export default DetailPage;