import React from "react";
import res600 from "../../../assets/imagesss.jfif";
import Footerbar from "../../Footerbar";
const Jibiar = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Jibiar</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res600} alt="" />
                <h3 className="card-title">Dejavu</h3>
                <p className="card-text">250 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res600} alt="" />
                <h3 className="card-title">Plombır</h3>
                <p className="card-text">250 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res600} alt="" />
                <h3 className="card-title">Turkish Mastik</h3>
                <p className="card-text">250 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res600} alt="" />
                <h3 className="card-title">İnferno</h3>
                <p className="card-text">250 TL</p>
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

export default Jibiar;
