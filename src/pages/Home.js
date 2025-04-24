import React from "react";
import "./home.css";
import heroImage from "../assets/hero-image.png";

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <img src={heroImage} alt="Parlons Ensemble Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Parlons Ensemble</h1>
          <p>Créer un lien humain intergénérationnel par la parole.</p>
          <button>Commencer mon essai gratuit</button>
        </div>
      </div>

      <section>
        <h2>Pourquoi choisir notre service ?</h2>
        <ul>
          <li>Rompre la solitude avec des échanges réguliers</li>
          <li>Stimuler la mémoire et les émotions positives</li>
          <li>Créer un lien humain sincère et intergénérationnel</li>
        </ul>

        <h2>Nos formules</h2>
        <ul>
          <li><strong>Formule Douce</strong> – 1 appel de 30 min/semaine : 29€/mois</li>
          <li><strong>Formule Confort</strong> – 2 appels de 30 min/semaine : 49€/mois</li>
          <li><strong>Formule Illimitée</strong> – Autant d’appels que souhaité (sur rdv) : 79€/mois</li>
        </ul>
      </section>
    </div>
  );
}
