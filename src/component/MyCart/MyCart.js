import React from 'react';
import './MyCard.css';
import {Route,useHistory} from "react-router-dom";

const MyCart = () => {

    const history = useHistory();

    return (

        <div>
            <Route path="/mycart">
                <h2>여긴 장바구니</h2>
                <button onClick={()=>{history.goBack()}}>Go Back</button>
            </Route>
        </div>
    );
};

export default MyCart;