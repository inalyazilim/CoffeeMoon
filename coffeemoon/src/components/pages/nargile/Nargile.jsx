import React from "react";
import "./Nargile.css";
import res550 from "../../../assets/shisha.jpeg";
import res551 from "../../../assets/imagess.jfif";
import res552 from "../../../assets/adalya.jpeg";
import res553 from "../../../assets/alfakher.jpeg";
import res554 from "../../../assets/nakhla.jpeg";
import res555 from "../../../assets/daim.jpeg";
import res556 from "../../../assets/natural.jpeg";
import Footerbar from "../../Footerbar";
import { BsStarFill } from "react-icons/bs";

const Nargile = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="baslik">Nargile</h1>
              </div>

              <a href="/Meyveli">
                <div className="card">
                  <img className="card-image" src={res550} alt="" />
                  <h3 className="card-title">Meyveli</h3>
                  <p className="card-text">
                    <div className="icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </p>
                </div>
              </a>
              <a href="/Jibiar">
                <div className="card">
                  <img className="card-image" src={res551} alt="" />
                  <h3 className="card-title">Jibiar</h3>
                  <p className="card-text">
                    <div className="icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </p>
                </div>
              </a>
              <a href="Adalya">
                <div className="card">
                  <img className="card-image" src={res552} alt="" />
                  <h3 className="card-title">Adalya</h3>
                  <p className="card-text">
                    <div className="icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </p>
                </div>
              </a>
              <a href="/Alfakher">
                <div className="card">
                  <img className="card-image" src={res553} alt="" />
                  <h3 className="card-title">Al Fakher</h3>
                  <p className="card-text">
                    <div className="icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </p>
                </div>
              </a>
              <a href="/Nakhla">
                <div className="card">
                  <img className="card-image" src={res554} alt="" />
                  <h3 className="card-title">Nakhla</h3>
                  <p className="card-text">
                    <div className="icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </p>
                </div>
              </a>
              <a href="/Daim">
                <div className="card">
                  <img className="card-image" src={res555} alt="" />
                  <h3 className="card-title">Daim</h3>
                  <p className="card-text">
                    <div className="icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </p>
                </div>
              </a>
              <a href="/Naturel">
                <div className="card">
                  <img className="card-image" src={res556} alt="" />
                  <h3 className="card-title">Natural</h3>
                  <p className="card-text">
                    <div className="icon">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </p>
                </div>
              </a>
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

export default Nargile;
