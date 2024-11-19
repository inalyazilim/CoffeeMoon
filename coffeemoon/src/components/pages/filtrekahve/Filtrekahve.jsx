import React from "react";
import "./Filtrekahve.css";
import res132 from "../../../assets/sadefiltre.jpeg";
import res133 from "../../../assets/fres.jpeg";
import res134 from "../../../assets/sff.jpeg";
import res135 from "../../../assets/hazelnut.jpeg";
import res136 from "../../../assets/rosebarryfrench.jpeg";
import Footerbar from "../../Footerbar";
const Filtrekahve = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Filtre Kahveler</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res132} alt="" />
                <h3 className="card-title">Sade Filtre Kahve</h3>
                <p className="card-text">90 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res133} alt="" />
                <h3 className="card-title">French Vanilya</h3>
                <p className="card-text">110 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res134} alt="" />
                <h3 className="card-title">Irısh Cream</h3>
                <p className="card-text">110 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res135} alt="" />
                <h3 className="card-title">Hazelnut French</h3>
                <p className="card-text">110 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res136} alt="" />
                <h3 className="card-title">Rose Berry French</h3>
                <p className="card-text">110 TL</p>
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

export default Filtrekahve;
