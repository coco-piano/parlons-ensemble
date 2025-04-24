
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Parlons Ensemble</h1>
        <p className="text-lg">Des conversations chaleureuses avec des jeunes bienveillants</p>
      </header>
      <section className="max-w-3xl mx-auto text-center my-10">
        <h2 className="text-2xl font-semibold mb-4">Pourquoi choisir notre service ?</h2>
        <ul className="space-y-3">
          <li>✔ Rompre la solitude avec des échanges réguliers</li>
          <li>✔ Stimuler la mémoire et les émotions positives</li>
          <li>✔ Créer un lien humain sincère et intergénérationnel</li>
        </ul>
      </section>
      <section className="max-w-3xl mx-auto text-center my-12">
        <h2 className="text-2xl font-semibold mb-4">Nos formules</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold">Formule Douce</h3>
            <p>1 appel de 30 minutes / semaine</p>
            <p className="font-semibold mt-2">29€/mois</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold">Formule Confort</h3>
            <p>2 appels de 30 minutes / semaine</p>
            <p className="font-semibold mt-2">49€/mois</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold">Formule Illimitée</h3>
            <p>Autant d'appels que souhaité (sur rdv)</p>
            <p className="font-semibold mt-2">79€/mois</p>
          </div>
        </div>
      </section>
      <section className="text-center my-10">
        <h2 className="text-xl font-semibold mb-4">Essayez gratuitement pendant 7 jours</h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Je commence mon essai gratuit
        </button>
      </section>
      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 Parlons Ensemble — Le lien humain avant tout.
      </footer>
    </div>
  );
}
export default App;
