import React from "react";
import "./Dunyakahve.css";
import Footerbar from "../../Footerbar";
import res110 from "../../../assets/expresso.jpeg";
import res111 from "../../../assets/debb.jpeg";
import res112 from "../../../assets/americanoo.jpeg";
import res113 from "../../../assets/cappucino.jpeg";
import res114 from "../../../assets/kahvee.jpeg";
import res115 from "../../../assets/debb.jpeg";
import res116 from "../../../assets/mac.jpeg";
import res117 from "../../../assets/k.jpeg";
import res118 from "../../../assets/cafelattee.jpeg";
import res119 from "../../../assets/aromalatte.jpeg";
import res120 from "../../../assets/mocha.jpeg";
import res121 from "../../../assets/dark.jpeg";
import res122 from "../../../assets/white.jpeg";
const Dunyakahve = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Dünya Kahveleri</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res110} alt="" />
                <h3 className="card-title">Espresso</h3>
                <p className="card-text">80 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res111} alt="" />
                <h3 className="card-title">Double Espresso</h3>
                <p className="card-text">90 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res112} alt="" />
                <h3 className="card-title">Americano</h3>
                <p className="card-text">90 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res113} alt="" />
                <h3 className="card-title">Cappucino</h3>
                <p className="card-text">110 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res114} alt="" />
                <h3 className="card-title">Sade-Klasik Kahve</h3>
                <p className="card-text">80 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res115} alt="" />
                <h3 className="card-title">Sütlü-Klasik Kahve</h3>
                <p className="card-text">90 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res116} alt="" />
                <h3 className="card-title">Macchiato</h3>
                <p className="card-text">110 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res117} alt="" />
                <h3 className="card-title">Caramel Macchiato</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res118} alt="" />
                <h3 className="card-title">Cafe Latte</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res119} alt="" />
                <h3 className="card-title">Aromalı Latte</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res120} alt="" />
                <h3 className="card-title">Cafe Mocha</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res121} alt="" />
                <h3 className="card-title">Dark Mocha</h3>
                <p className="card-text">120 TL</p>
              </div>
              <div className="card">
                <img className="card-image" src={res122} alt="" />
                <h3 className="card-title">White Mocha</h3>
                <p className="card-text">120 TL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbar">
        <Footerbar />
      </div>
    </div>
  );
};

export default Dunyakahve;
