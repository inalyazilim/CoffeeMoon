import React from "react";
import "./Home.css";
import { BsStarFill } from "react-icons/bs";
import res1 from "../assets/Atistirmalik.jpeg";
import res2 from "../assets/sepet.jpeg";
import res3 from "../assets/makarna.jpeg";
import res4 from "../assets/beyazet.jpeg";
import res5 from "../assets/kirmiziet.jpeg";
import res6 from "../assets/salata.jpeg";
import res7 from "../assets/pizza.jpeg";
import res8 from "../assets/burgerr.jpeg";
import res9 from "../assets/tost.jpeg";
import res10 from "../assets/wrap.jpeg";
import res11 from "../assets/f.jpeg";
import res12 from "../assets/kahvalti.jpeg";
import res13 from "../assets/corba.jpeg";
import res14 from "../assets/tatli.jpeg";
import res15 from "../assets/pasta.jpeg";
import res16 from "../assets/dunya.jpeg";
import res17 from "../assets/filtre.jpeg";
import res18 from "../assets/gel.jpeg";
import res19 from "../assets/sicakicecekler.jpeg";
import res20 from "../assets/bardak.jpeg";
import res21 from "../assets/bitkicay.jpeg";
import res22 from "../assets/sogukic.jpeg";
import res23 from "../assets/frozen.jpeg";
import res24 from "../assets/kok.jpeg";
import res25 from "../assets/so.jpeg";
import res26 from "../assets/milkshake.jpeg";
import res27 from "../assets/smu.jpeg";
import res28 from "../assets/frappe.jpeg";
import res29 from "../assets/mojito.jpeg";
import res30 from "../assets/kah.jpeg";
import res31 from "../assets/images.jfif";
import Footerbar from "./Footerbar";
const Home = () => {
  return (
    <div>
      <div className="homes container">
        <div className="homes-text">
          <div className="programs">
            <div className="program">
              <div className="baslikdiv">
                <h1 className="anabaslik">MENÜ</h1>
              </div>
              <a href="Atıştırmalık">
                <div className="card">
                  <img className="card-image" src={res1} alt="" />
                  <h3 className="card-title">Atıştırmalık</h3>
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

              <a href="Çıtırsepet">
                <div className="card">
                  <img className="card-image" src={res2} alt="" />
                  <h3 className="card-title">Çıtır Sepet</h3>
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

              <a href="Makarnalar">
                <div className="card">
                  <img className="card-image" src={res3} alt="" />
                  <h3 className="card-title">Makarnalar</h3>
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

              <a href="Beyazet">
                <div className="card">
                  <img className="card-image" src={res4} alt="" />
                  <h3 className="card-title">Beyaz Etler</h3>
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

              <a href="Kırmızıet">
                <div className="card">
                  <img className="card-image" src={res5} alt="" />
                  <h3 className="card-title">Kırmızı Et</h3>
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

              <a href="Salatalar">
                <div className="card">
                  <img className="card-image" src={res6} alt="" />
                  <h3 className="card-title">Salatalar</h3>
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

              <a href="Pizzalar">
                <div className="card">
                  <img className="card-image" src={res7} alt="" />
                  <h3 className="card-title">Pizzalar</h3>
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

              <a href="Burgerler">
                <div className="card">
                  <img className="card-image" src={res8} alt="" />
                  <h3 className="card-title">Burgerler</h3>
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

              <a href="Tostlar">
                <div className="card">
                  <img className="card-image" src={res9} alt="" />
                  <h3 className="card-title">Tostlar</h3>
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

              <a href="Wraplar">
                <div className="card">
                  <img className="card-image" src={res10} alt="" />
                  <h3 className="card-title">Wrapler</h3>
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

              <a href="Fastfood">
                <div className="card">
                  <img className="card-image" src={res11} alt="" />
                  <h3 className="card-title">Fast & Food</h3>
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

              <a href="Kahvaltı">
                <div className="card">
                  <img className="card-image" src={res12} alt="" />
                  <h3 className="card-title">Kahvaltı</h3>
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

              <a href="Çorbalar">
                <div className="card">
                  <img className="card-image" src={res13} alt="" />
                  <h3 className="card-title">Çorbalar</h3>
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

              <a href="Tatlılar">
                <div className="card">
                  <img className="card-image" src={res14} alt="" />
                  <h3 className="card-title">Tatlılar</h3>
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

              <a href="Pastalar">
                <div className="card">
                  <img className="card-image" src={res15} alt="" />
                  <h3 className="card-title">Pastalar</h3>
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

              <a href="Dünyakahveleri">
                <div className="card">
                  <img className="card-image" src={res16} alt="" />
                  <h3 className="card-title">Dünya Kahveleri</h3>
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

              <a href="Filtrekahveler">
                <div className="card">
                  <img className="card-image" src={res17} alt="" />
                  <h3 className="card-title">Filtre Kahveler</h3>
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

              <a href="Gelenekselkahveler">
                <div className="card">
                  <img className="card-image" src={res18} alt="" />
                  <h3 className="card-title">Geleneksel Kahveler</h3>
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

              <a href="Sıcakiçecekler">
                <div className="card">
                  <img className="card-image" src={res19} alt="" />
                  <h3 className="card-title">Sıcak İçecekler</h3>
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

              <a href="Çaylar">
                <div className="card">
                  <img className="card-image" src={res20} alt="" />
                  <h3 className="card-title">Çaylar</h3>
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

              <a href="Naturalbitkiçayları">
                <div className="card">
                  <img className="card-image" src={res21} alt="" />
                  <h3 className="card-title">Natural Bitki Çayları</h3>
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

              <a href="Soğukiçecekler">
                <div className="card">
                  <img className="card-image" src={res22} alt="" />
                  <h3 className="card-title">Soğuk İçecekler</h3>
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

              <a href="Frozen">
                <div className="card">
                  <img className="card-image" src={res23} alt="" />
                  <h3 className="card-title">Frozen</h3>
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

              <a href="Kokteyl">
                <div className="card">
                  <img className="card-image" src={res24} alt="" />
                  <h3 className="card-title">Kokteyl</h3>
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

              <a href="Soğukçikolatalar">
                <div className="card">
                  <img className="card-image" src={res25} alt="" />
                  <h3 className="card-title">Soğuk Çikolatalar</h3>
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

              <a href="Milkshake">
                <div className="card">
                  <img className="card-image" src={res26} alt="" />
                  <h3 className="card-title">Milkshake</h3>
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

              <a href="Smoothie">
                <div className="card">
                  <img className="card-image" src={res27} alt="" />
                  <h3 className="card-title">Smoothie</h3>
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

              <a href="Frappe">
                <div className="card">
                  <img className="card-image" src={res28} alt="" />
                  <h3 className="card-title">Frappe</h3>
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

              <a href="Mojitolar">
                <div className="card">
                  <img className="card-image" src={res29} alt="" />
                  <h3 className="card-title">Mojito</h3>
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

              <a href="soğukkahveler">
                <div className="card">
                  <img className="card-image" src={res30} alt="" />
                  <h3 className="card-title">Soğuk Kahveler</h3>
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

              <a href="Nargile">
                <div className="card">
                  <img className="card-image" src={res31} alt="" />
                  <h3 className="card-title">Nargile</h3>
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

export default Home;
