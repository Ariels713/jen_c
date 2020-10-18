import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import MainHeader from "./components/header/MainHeader";
import RecentProject from "./components/recentProjects/RecentProjects";
import AboutJenny from "./components/about/AboutJenny";
import NewsLetter from "./components/newsletter/NewsLetter";
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
import Forest from "./components/interiors/forrest/Forrest";
import Rendering from "./components/interiors/rendering/Rendering";
import UWS from "./components/interiors/uws/UWS";
import Styling from "./components/styling/Styling";
import Doji from "./components/styling/dojo/Doji";
import Fitzpartrick from "./components/styling/fitzpatrick/Fitpatrick";
import Ldsass from "./components/styling/ldsass/Ldsass";
import Mazza from "./components/styling/mazzaNYC/Mazza";
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
        <Route path="/interiors/forest" component={Forest} />
        <Route path="/interiors/rendering" component={Rendering} />
        <Route path="/interiors/uws" component={UWS} />

        <Route path="/interiors" component={Interiors} />

        {/* Interior Links */}

        {/* Styling Links */}
        <Route path="/styling/doji" component={Doji} />
        <Route path="/styling/fitzpatrick" component={Fitzpartrick} />
        <Route path="/styling/ldsass" component={Ldsass} />
        <Route path="/styling/mazza" component={Mazza} />

        <Route path="/styling" component={Styling} />
        {/* Styling Links */}
        <Route exact path="/">
          <MainHeader />
          <MainContent />
          <AboutJenny />
          <RecentProject />
        </Route>
      </Switch>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
// src="https://dl.airtable.com/.attachments/c37797dcf0407f4d9bb5d5d9a8892ad6/b55976e0/about_image_jenny.jpg"
