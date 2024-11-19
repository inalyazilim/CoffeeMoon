import React from "react";
import "./Pizza.css";
import Footerbar from "../../Footerbar";
import res52 from "../../../assets/karisik.jpeg";
import res53 from "../../../assets/margarita.jpeg";
import res54 from "../../../assets/vej.jpeg";
import res55 from "../../../assets/tavukp.jpeg";
const Pizza = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Pizza</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res52} alt="" />
                <h3 className="card-title">Karışık Pizza</h3>
                <p className="card-text">210 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res53} alt="" />
                <h3 className="card-title">Margarita Pizza</h3>
                <p className="card-text">190 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res54} alt="" />
                <h3 className="card-title">Vejeteryan Pizza</h3>
                <p className="card-text">200 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res55} alt="" />
                <h3 className="card-title">Tavuklu Pizza</h3>
                <p className="card-text">210 TL</p>
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

export default Pizza;
