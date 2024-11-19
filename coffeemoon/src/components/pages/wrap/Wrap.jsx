import React from "react";
import "./Wrap.css";
import Footerbar from "../../Footerbar";
import res65 from "../../../assets/tavukk.jfif";
import res66 from "../../../assets/indir.jfif";

const Wrap = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Wrap</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res65} alt="" />
                <h3 className="card-title">Tavuklu Wrap</h3>
                <p className="card-text">190 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res66} alt="" />
                <h3 className="card-title">Biftekli Wrap</h3>
                <p className="card-text">220 TL</p>
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

export default Wrap;
