import React from "react";
import "./Burger.css";
import Footerbar from "../../Footerbar";
import res56 from "../../../assets/burger.jpeg";
import res57 from "../../../assets/chese.jpeg";
import res58 from "../../../assets/tavukkk.jpg";
import res59 from "../../../assets/ham.jpeg";
const Burger = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Burger</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res56} alt="" />
                <h3 className="card-title">Hamburger</h3>
                <p className="card-text">230 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res57} alt="" />
                <h3 className="card-title">Cheese Burger</h3>
                <p className="card-text">240 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res58} alt="" />
                <h3 className="card-title">Tavuk Burger</h3>
                <p className="card-text">210 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res59} alt="" />
                <h3 className="card-title">Kanka Burger</h3>
                <p className="card-text">270 TL</p>
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

export default Burger;
