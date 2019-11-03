import React from "react";
import Logo from "../Images/logo.png";

import Bullshits from "./Bullshits";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { processStep: 0 };
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.setState(state => ({
      processStep: this.state.processStep + 1
    }));
  }

  render() {
    let buttonText;
    let processText;
    let button;
    switch (this.state.processStep) {
      case 0:
        buttonText = "Näytä viestit";
        processText =
          "Noudetaan ensin viestit API:sta ja katsotaan minkälaista huuhata saamme nähdä.";
        button = <button type="button" onClick={this.nextStep}>{buttonText}</button>;
        break;
      case 1:
        buttonText = "Pura kryptaus";
        processText =
          "Huhhuh mitä shaibaa! Eihän tuota suomeksi tunnista. Kokeillaanpa purkaa kryptaus siirtämällä lauseiden kirjaimia ja valitaan ne iteraatiot, jotka parhaiten noudattavat suomenkielen kirjainfrekvenssiä.";
        button = <button type="button" onClick={this.nextStep}>{buttonText}</button>;
        break;
      case 2:
        buttonText = "Tutki syntaksia";
        processText =
          "Noniin, näyttää jo paremmalta! Tsekataan seuraavaksi syntaksi, kuten sanojen ensimmäisiä ja viimeisiä kirjaimia ja jaetaan lauseet No bullshit ja bullshit -lauseisiin.";
        button = <button type="button" onClick={this.nextStep}>{buttonText}</button>;
        break;
      case 3:
        buttonText = "Tutki vokaalisointua";
        processText =
          "Pikkuhiljaa asia etenee. No bullshiteissä on näköjään vieläkin huuhaata. Seuraavaksi tutkitaan vokaalisointua ja yritetään sen avulla tarkentaa tulosta.";
          button = <button type="button" onClick={this.nextStep}>{buttonText}</button>;
        break;
      case 4:
        buttonText = "Tutki sanoja";
        processText =
          "Parempi! Mutta vielä ei olla ihan perillä. Selvitetään seuraavaksi paljonko lauseet sisältävät suomenkielen yleisimpiä sanoja.";
          button = <button type="button" onClick={this.nextStep}>{buttonText}</button>;
        break;
    case 5:
        buttonText = "Bullshit -lauseet alkuperäismuotoon.";
        processText =
            "Siinäpä se. Paljon tätä paremmaksi ei varmaan päästä. Alkuperäisessä tehtävänannossa pyydettiin palauttamaan bullshit -lauseet, jotka eivät käänny suomeksi alkuperäismuotoonsa.";
            button = <button type="button" onClick={this.nextStep}>{buttonText}</button>;
        break;
    default:
        processText = "Valmista tuli. Alla vielä No bullshit ja bullshit -lauseet tehtävänannon mukaan järjestettyinä."
        button = "";
        break;
    }
    return (
      <div className="hero">
        <img src={Logo} alt="Koodihaaste logo" />
        <p className="processText">
          Tässä ratkaisuni Solidabiksen koodihaasteeseen. Toteutus on jaettu
          kahteen osaan:{" "}
          <a
            href="https://github.com/kaarlol/koodihaaste-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python Flask backendiin
          </a>
          , joka on hostattu Google Cloudin app enginessä ja tähän{" "}
          <a
            href="https://github.com/kaarlol/koodihaaste-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            React fronttiin
          </a>
          , joka pyörii Firebasessa. Koska jo koulussa opetettiin, että
          ratkaisun työvaiheet pitää esitellä, niin tässä köykäinen
          käyttöliittymä, joka pyrkii avaamaan miten ratkaisu on toteutettu.
        </p>
        <p className="processText">{processText}</p>
        {button}
        <Bullshits processStep={this.state.processStep} />
      </div>
    );
  }
}
