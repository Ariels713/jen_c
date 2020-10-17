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
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/production/fuzzyhead" component={FuzzyHead} />
        <Route path="/production/orient" component={Orient} />
        <Route path="/production" component={Productions} />

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
