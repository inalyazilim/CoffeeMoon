import React from "react";
import "./Pasta.css";
import Footerbar from "../../Footerbar";
import res100 from "../../../assets/mozaik.jpeg";
import res101 from "../../../assets/tiramisu.jpeg";
import res102 from "../../../assets/fistik.jpeg";
import res103 from "../../../assets/frambuazli.jpeg";
import res104 from "../../../assets/limonn.jpeg";
import res105 from "../../../assets/sufle.jpeg";
import res106 from "../../../assets/ballicevizli.jpeg";
import res107 from "../../../assets/monolatte.jpeg";
import res108 from "../../../assets/cakee.jpeg";
import res109 from "../../../assets/brownii.jpeg";
const Pasta = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Pasta</h1>
              </div>

              <div className="card">
                <img className="card-image" src={res100} alt="" />
                <h3 className="card-title">Mozaik Pasta</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res101} alt="" />
                <h3 className="card-title">Tiramisu</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res102} alt="" />
                <h3 className="card-title">Fıstık Dünyası</h3>
                <p className="card-text">140 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res103} alt="" />
                <h3 className="card-title">Frambuaz Cheesecake </h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res104} alt="" />
                <h3 className="card-title">Limonlu Cheesecake</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res105} alt="" />
                <h3 className="card-title">Suffle</h3>
                <p className="card-text">140 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res106} alt="" />
                <h3 className="card-title">Ballı Cevizli</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res107} alt="" />
                <h3 className="card-title">Monolatte</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res108} alt="" />
                <h3 className="card-title">Devil's Cake</h3>
                <p className="card-text">130 TL</p>
              </div>

              <div className="card">
                <img className="card-image" src={res109} alt="" />
                <h3 className="card-title">Browni</h3>
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

export default Pasta;
