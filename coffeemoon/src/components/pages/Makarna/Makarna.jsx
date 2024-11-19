import React from "react";
import "./Makarna.css";
import Footerbar from "../../Footerbar";
import res38 from "../../../assets/penne.jpeg";
import res39 from "../../../assets/spagetti.jpeg";
import res40 from "../../../assets/fet.jpeg";
import res41 from "../../../assets/pennee.jpeg";
import res42 from "../../../assets/noodle.jpeg";
const Makarna = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Makarnalar</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res38} alt="" />
                <h3 className="card-title">Penne Arabiata</h3>
                <p className="card-text">150 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res39} alt="" />
                <h3 className="card-title">Spagetti Bolonez</h3>
                <p className="card-text">180 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res40} alt="" />
                <h3 className="card-title">Tavuk Mantar Fettucini</h3>
                <p className="card-text">190 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res41} alt="" />
                <h3 className="card-title">Tavuklu Penne</h3>
                <p className="card-text">180 TL</p>
              </div>
            </div>

            <div className="card">
              <img className="card-image" src={res42} alt="" />
              <h3 className="card-title">Noodle</h3>
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

export default Makarna;
