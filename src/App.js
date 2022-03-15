import './App.css';
import './layout/layout.module.css'
import {flowerdata} from "./data";
import ElementCard from "./component/ElementCard";
import MainBanner from "./component/MainBanner";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar/Navbar";
import DetailPage from "./component/DetailPage/DetailPage";
import MyCart from "./component/MyCart/MyCart";
import JoinPage from "./component/JoinPage/JoinPage";

import { Link,Route,Switch } from 'react-router-dom';



function App() {

    return (
        <div className="App">
            <Navbar/>
            <div className="layoutContainer">
                <Route exact path="/">
                    <div className="containerInner">
                        <MainBanner/>
                        <section className="ElementCardSection">
                            {
                                flowerdata.map((data, id) =>
                                    (
                                        <div className="ElementCardWrapper" key={id}>
                                            <ElementCard data={data}/>
                                        </div>
                                    )
                                )
                            }
                        </section>
                    </div>
                </Route>
                <Route path="/detail">
                    <DetailPage data={data}/>
                </Route>
                <JoinPage/>
                <MyCart/>
                <Footer/>
            </div>
        </div>
            );
            }


export default App;
