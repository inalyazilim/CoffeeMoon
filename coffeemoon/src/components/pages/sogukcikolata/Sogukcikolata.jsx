import React from "react";
import "./Sogukcikolata.css";
import res519 from "../../../assets/muzlucikolata.jpeg";
import res520 from "../../../assets/findikli.jpeg";
import res521 from "../../../assets/hindistan.jpeg";
import res522 from "../../../assets/cilekk.jpeg";
import Footerbar from "../../Footerbar";
const Sogukcikolata = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Soğuk Çikolatalar</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res519} alt="" />
                <h3 className="card-title">Muzlu Çikolata</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res520} alt="" />
                <h3 className="card-title">Fındıklı Çikolata</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res521} alt="" />
                <h3 className="card-title">Hindistan Cevizli</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res522} alt="" />
                <h3 className="card-title">Çilekli Çikolata</h3>
                <p className="card-text">130 TL</p>
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

export default Sogukcikolata;
