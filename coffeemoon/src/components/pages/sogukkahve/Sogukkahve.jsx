import React from "react";
import "./Sogukkahve.css";
import Footerbar from "../../Footerbar";
import res38 from "../../../assets/ice.jpeg";
import res39 from "../../../assets/indirs.jpeg";
import res40 from "../../../assets/icew.jpeg";
import res41 from "../../../assets/icea.jpeg";
import res42 from "../../../assets/ffrappee.jpeg";
const Sogukkahve = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Soğuk Kahveler</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res38} alt="" />
                <h3 className="card-title">Ice Chocolatte</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res39} alt="" />
                <h3 className="card-title">Ice Mocha</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res40} alt="" />
                <h3 className="card-title">Ice White Mocha</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res41} alt="" />
                <h3 className="card-title">Ice Americano</h3>
                <p className="card-text">120 TL</p>
              </div>
            </div>

            <div className="card">
              <img className="card-image" src={res42} alt="" />
              <h3 className="card-title">Ice Türk Kahvesi</h3>
              <p className="card-text">120 TL</p>
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

export default Sogukkahve;
