import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import MainHeader from "./components/header/MainHeader";
import RecentProject from "./components/recentProjects/RecentProjects";
import AboutJenny from "./components/about/AboutJenny";
import Footer from "./components/footer/Footer";
import MainContent from "./components/content/MainContent";
import Productions from "./components/productions/Productions";
import FuzzyHead from "./components/productions/fuzzyHead/FuzzyHead";
import Orient from "./components/productions/orient/Orient";
import Montblanc from "./components/productions/montblanc/Montblanc";
import FunnyFace from "./components/productions/funnyFace/FunnyFace";
import Museum from "./components/productions/museum/Museum";
import Orchid from "./components/productions/orchid/Orchid";
import Tribecca from "./components/productions/tribecca/Tribecca";
import Interiors from "./components/interiors/Interiors";
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {/* Production Links */}
        <Route path="/production/fuzzyhead" component={FuzzyHead} />
        <Route path="/production/orient" component={Orient} />
        <Route path="/production/montblanc" component={Montblanc} />
        <Route path="/production/funnyface" component={FunnyFace} />
        <Route path="/production/museum" component={Museum} />
        <Route path="/production/orchid" component={Orchid} />
        <Route path="/production/tribecca" component={Tribecca} />

        <Route path="/production" component={Productions} />
        {/* Production Links */}
        {/* Interior Links */}

        <Route path="/interiors" component={Interiors} />
        {/* Interior Links */}
        <Route exact path="/">
          <MainHeader />
          <MainContent />
          <AboutJenny />
          <RecentProject />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
// src="https://dl.airtable.com/.attachments/c37797dcf0407f4d9bb5d5d9a8892ad6/b55976e0/about_image_jenny.jpg"
