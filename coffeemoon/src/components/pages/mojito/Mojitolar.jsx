import React from "react";
import "./Mojitolar.css";
import Footerbar from "../../Footerbar";
import res3800 from "../../../assets/klasikmo.jpeg";
import res3900 from "../../../assets/frambuazmo.jpeg";
import res4000 from "../../../assets/cilekmo.jpeg";
import res4100 from "../../../assets/bluem.jpeg";
import res4200 from "../../../assets/salatm.jpeg";

const Mojitolar = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Mojitolar</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res3800} alt="" />
                <h3 className="card-title">Klasik Mojito</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res3900} alt="" />
                <h3 className="card-title">Frambuazlı Mojito</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res4000} alt="" />
                <h3 className="card-title">Çilekli Mojito</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res4100} alt="" />
                <h3 className="card-title">Blue Sky Mojito</h3>
                <p className="card-text">130 TL</p>
              </div>
            </div>

            <div className="card">
              <img className="card-image" src={res4200} alt="" />
              <h3 className="card-title">Salatalık Mojito</h3>
              <p className="card-text">130 TL</p>
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

export default Mojitolar;
