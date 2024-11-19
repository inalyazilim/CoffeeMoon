import React from "react";
import "./kahvalti.css";
import Footerbar from "../../Footerbar";
import res75 from "../../../assets/mmm.jpeg";
import res76 from "../../../assets/menemensade.jpg";
import res77 from "../../../assets/Karisikmenemen.jpeg";
import res78 from "../../../assets/sucuklumenemen.jpeg";
import res79 from "../../../assets/Kasarlimenemen.jpeg";
import res80 from "../../../assets/ssadee.jpeg";
import res81 from "../../../assets/karisikomlet.jpeg";
import res82 from "../../../assets/kasarliomlet.jpeg";
import res83 from "../../../assets/sucuklu.jpeg";
import res84 from "../../../assets/sahanda.jpeg";
import res85 from "../../../assets/i.jfif";
const Kahvalti = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Kahvaltı</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res85} alt="" />
                <h3 className="card-title">Serpme Kahvaltı</h3>
                <p className="card-text">650 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res75} alt="" />
                <h3 className="card-title">Kahvaltı Tabağı</h3>
                <p className="card-text">190 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res76} alt="" />
                <h3 className="card-title">Sade Menemen</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res77} alt="" />
                <h3 className="card-title">Karışık Menemen</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res78} alt="" />
                <h3 className="card-title">Sucuklu Menemen</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res79} alt="" />
                <h3 className="card-title">Kaşarlı Menemen</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res80} alt="" />
                <h3 className="card-title">Sade Omlet</h3>
                <p className="card-text">110 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res81} alt="" />
                <h3 className="card-title">Karışık Omlet</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res82} alt="" />
                <h3 className="card-title">Kaşarlı Omlet</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res83} alt="" />
                <h3 className="card-title">Sucuklu Omlet</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res84} alt="" />
                <h3 className="card-title">Sahanda Yumurta</h3>
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

export default Kahvalti;
