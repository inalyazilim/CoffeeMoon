import React from "react";
import "./Atistirmalik.css";

import res32 from "../../../assets/parmak.jpeg";
import res33 from "../../../assets/elma.jpeg";
import res34 from "../../../assets/soganha.jpeg";
import res35 from "../../../assets/max.jpeg";
import Footerbar from "../../Footerbar";
const Atistirmalik = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Atıştırmalık</h1>
              </div>
              <div className="card">
                <img className="card-image" src={res32} alt="" />
                <h3 className="card-title">Parmak Patates</h3>
                <p className="card-text">110 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res33} alt="" />
                <h3 className="card-title">Elma Dilim Patates</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res34} alt="" />
                <h3 className="card-title">Soğan Halkası</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res35} alt="" />
                <h3 className="card-title">Mix Chicken Finges</h3>
                <p className="card-text">160 TL</p>
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

export default Atistirmalik;
