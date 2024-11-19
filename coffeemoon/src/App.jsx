import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Atistirmalik from "./components/pages/Atistirmalik/Atistirmalik";
import Citirsepet from "./components/pages/citirsepet/Citirsepet";
import Makarna from "./components/pages/Makarna/Makarna";
import Beyazet from "./components/pages/beyazet/Beyazet";
import Kirmiziet from "./components/pages/Kirmiziet/Kirmiziet";
import Salata from "./components/pages/salata/Salata";
import Pizza from "./components/pages/pizza/Pizza";
import Burger from "./components/pages/burger/Burger";
import Tost from "./components/pages/tost/Tost";
import Wrap from "./components/pages/wrap/Wrap";
import Fastfood from "./components/pages/fastfood/Fastfood";
import Kahvalti from "./components/pages/kahvalti/Kahvalti";
import Corba from "./components/pages/corba/Corba";
import Tatli from "./components/pages/tatli/Tatli";
import Pasta from "./components/pages/pasta/Pasta";
import Dunyakahve from "./components/pages/dunyakahve/Dunyakahve";
import Filtrekahve from "./components/pages/filtrekahve/Filtrekahve";
import Geleneksel from "./components/pages/geleneksel/Geleneksel";
import Sicak from "./components/pages/sicak/Sicak";
import Cay from "./components/pages/cay/Cay";
import Natural from "./components/pages/natural/Natural";
import Soguk from "./components/pages/soguk/Soguk";
import Frozen from "./components/pages/frozen/Frozen";
import Kokteyl from "./components/pages/kokteyl/Kokteyl";
import Sogukcikolata from "./components/pages/sogukcikolata/Sogukcikolata";
import Milkshake from "./components/pages/milkshake/Milkshake";
import Smoothie from "./components/pages/smoothie/Smoothie";
import Frappe from "./components/pages/frappe/Frappe";

import Sogukkahve from "./components/pages/sogukkahve/Sogukkahve";
import Nargile from "./components/pages/nargile/Nargile";
import Meyveli from "./components/pages/nargileler/Meyveli";
import Jibiar from "./components/pages/nargileler/Jibiar";
import Adalya from "./components/pages/nargileler/Adalya";
import Alfakher from "./components/pages/nargileler/Alfakher";
import Nakhla from "./components/pages/nargileler/Nakhla";
import Daim from "./components/pages/nargileler/Daim";
import Naturall from "./components/pages/nargileler/Naturall";

import Mojitolar from "./components/pages/mojito/Mojitolar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Menü" element={<Home />} />
        <Route path="/Hizmetlerimiz" element={<About />} />
        <Route path="/İletişim" element={<Contact />} />
        <Route path="/Atıştırmalık" element={<Atistirmalik />} />
        <Route path="/Çıtırsepet" element={<Citirsepet />} />
        <Route path="/Makarnalar" element={<Makarna />} />
        <Route path="/Beyazet" element={<Beyazet />} />
        <Route path="/Kırmızıet" element={<Kirmiziet />} />
        <Route path="/Salatalar" element={<Salata />} />
        <Route path="/Makarnalar" element={<Makarna />} />
        <Route path="/Pizzalar" element={<Pizza />} />
        <Route path="/Burgerler" element={<Burger />} />
        <Route path="/Tostlar" element={<Tost />} />
        <Route path="/Wraplar" element={<Wrap />} />
        <Route path="/Fastfood" element={<Fastfood />} />
        <Route path="/Kahvaltı" element={<Kahvalti />} />
        <Route path="/Burgerler" element={<Burger />} />
        <Route path="/Çorbalar" element={<Corba />} />
        <Route path="/Tatlılar" element={<Tatli />} />
        <Route path="/Pastalar" element={<Pasta />} />
        <Route path="/Dünyakahveleri" element={<Dunyakahve />} />
        <Route path="/Filtrekahveler" element={<Filtrekahve />} />
        <Route path="/Gelenekselkahveler" element={<Geleneksel />} />
        <Route path="/Sıcakiçecekler" element={<Sicak />} />
        <Route path="/Çaylar" element={<Cay />} />
        <Route path="/Naturalbitkiçayları" element={<Natural />} />
        <Route path="/Soğukiçecekler" element={<Soguk />} />
        <Route path="/Frozen" element={<Frozen />} />
        <Route path="/Soğukçikolatalar" element={<Sogukcikolata />} />
        <Route path="/Kokteyl" element={<Kokteyl />} />
        <Route path="/Milkshake" element={<Milkshake />} />
        <Route path="/Smoothie" element={<Smoothie />} />
        <Route path="/Frappe" element={<Frappe />} />
        <Route path="/Mojitolar" element={<Mojitolar />} />
        <Route path="/Soğukkahveler" element={<Sogukkahve />} />
        <Route path="/Nargile" element={<Nargile />} />
        <Route path="/Meyveli" element={<Meyveli />} />
        <Route path="/Jibiar" element={<Jibiar />} />
        <Route path="/Adalya" element={<Adalya />} />
        <Route path="/Alfakher" element={<Alfakher />} />
        <Route path="/Nakhla" element={<Nakhla />} />
        <Route path="/Daim" element={<Daim />} />
        <Route path="/Naturel" element={<Naturall />} />
      </Routes>
    </div>
  );
}

export default App;
