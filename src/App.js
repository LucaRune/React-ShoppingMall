import './App.css';
import './layout/layout.module.css'
import {flowerData} from './data';
import ElementCard from "./component/ElementCard";
import MainBanner from "./component/MainBanner";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar/Navbar";


function App() {
    return (
        <div className="App">
            <div className="layoutContainer">
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
            </div>
            <Footer/>
        </div>
    );
}

export default App;
