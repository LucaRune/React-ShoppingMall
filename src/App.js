import './App.css';
import './layout/layout.module.css'
import {flowerData} from './data';
import ElementCard from "./component/ElementCard";
import MainBanner from "./component/MainBanner";


function App() {
    return (
        <div className="App">
            <div className="layoutContainer">
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
        </div>
    );
}

export default App;
