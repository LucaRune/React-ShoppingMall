import './App.css';
import './layout/layout.module.css'
import {flowerData} from './data';
import ElementCard from "./component/ElementCard";
import MainBanner from "./component/MainBanner";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar/Navbar";
import DetailPage from "./component/DetailPage/DetailPage";

import { Link,Route,Switch } from 'react-router-dom';
import JoinPage from "./component/JoinPage/JoinPage";



function App(data = data) {
    return (
        <div className="App">
            <div className="layoutContainer">
                <Route exact path="/">
                    <Navbar/>
                    <div className="containerInner">
                        <MainBanner/>
                        <section className="ElementCardSection">
                            {
                                flowerData.map((data, id) =>
                                    (
                                        <div className="ElementCardWrapper" key={id}>
                                            <ElementCard data={data}/>
                                        </div>
                                    )
                                )
                            }
                        </section>
                    </div>
                    <Footer/>
                </Route>
                <Route path="/detail">
                    <Navbar/>
                    <DetailPage data={data}/>
                </Route>
                <JoinPage/>

            </div>
        </div>
            );
            }

export default App;
