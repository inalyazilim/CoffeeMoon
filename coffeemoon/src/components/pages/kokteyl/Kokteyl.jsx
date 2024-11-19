import React from "react";
import "./Kokteyl.css";
import res515 from "../../../assets/blue.jpeg";
import res516 from "../../../assets/casablanca.jpeg";
import res517 from "../../../assets/pino.jpeg";
import res518 from "../../../assets/sex.jpeg";
import res519 from "../../../assets/rainbow.jpeg";
import res520 from "../../../assets/isabella.jpeg";
import res521 from "../../../assets/swetbonanza.jpeg";
import res522 from "../../../assets/special.jpeg";
import Footerbar from "../../Footerbar";
const Kokteyl = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Kokteyl</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res515} alt="" />
                <h3 className="card-title">Blue Sky</h3>
                <p className="card-text">150 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res516} alt="" />
                <h3 className="card-title">Casablanca</h3>
                <p className="card-text">150 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res517} alt="" />
                <h3 className="card-title">Pina Colada</h3>
                <p className="card-text">150 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res518} alt="" />
                <h3 className="card-title">Sex On The Beach</h3>
                <p className="card-text">120 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res519} alt="" />
                <h3 className="card-title">Rainbow</h3>
                <p className="card-text">150 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res520} alt="" />
                <h3 className="card-title">Isabella</h3>
                <p className="card-text">150 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res521} alt="" />
                <h3 className="card-title">Sweet Bonanza</h3>
                <p className="card-text">150 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res522} alt="" />
                <h3 className="card-title">CoffeMoon Special</h3>
                <p className="card-text">180 TL</p>
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

export default Kokteyl;
