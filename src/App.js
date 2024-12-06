import React, { useState } from "react";
import "./App.css";
import HumanBody from "./components/HumanBody";
import Bubbles from "./components/Bubbles";
import AudioPlayer from "./components/audio";

function App() {
  const [selectedSystem, setSelectedSystem] = useState("circulatory");

  const systems = {
    circulatory: {
      title: "Le système circulatoire",
      leftDetails: [
        { label: "Pression artérielle", value: "120/80 mmHg" },
        { label: "Fréquence cardiaque", value: "70 bpm" },
      ],
      rightDetails: [
        { label: "Volume sanguin", value: "5-6 L" },
        { label: "Température", value: "37°C" },
      ],
      description:
        "Tout comme le cœur pompe le sang à travers le corps, les courants marins (pompe thermohaline) distribuent chaleur et nutriments à travers les océans.",
        
        
      },
    respiratory: {
      title: "Le système respiratoire",
      leftDetails: [
        { label: "Capacité pulmonaire", value: "6 L" },
        { label: "Fréquence respiratoire", value: "12-20/min" },
      ],
      rightDetails: [
        { label: "Saturation O2", value: "95-100%" },
        { label: "Échange CO2", value: "2.3 L/min" },
      ],
      description:
        "Les poumons échangent l'oxygène et le CO2 avec l'air, similaire à la photosynthèse et la dissolution du CO2 dans l'océan.",
    },
    plankton: {
      title: "Le plancton et les cellules",
      leftDetails: [
        { label: "Taille cellulaire", value: "10-100 µm" },
        { label: "Densité cellulaire", value: "~37.2 billions" },
      ],
      rightDetails: [
        { label: "Densité plancton", value: "~1000/L" },
        { label: "Taille plancton", value: "2-200 µm" },
      ],
      description:
        "Comme les cellules dans notre corps, le plancton forme la base de la vie océanique, transformant l'énergie et les nutriments.",
    },
    temperature: {
      title: "La régulation thermique",
      leftDetails: [
        { label: "Température corporelle", value: "37°C" },
        { label: "Variation normale", value: "±0.5°C" },
      ],
      rightDetails: [
        { label: "Température océan", value: "-2 à 30°C" },
        { label: "Variation moyenne", value: "±5°C" },
      ],
      description:
        "Le corps maintient une température stable comme l'océan régule le climat terrestre à travers ses courants et sa capacité thermique.",
    },
  };

  return (
    <div className="App">
      <Bubbles />
      <header className="App-header">
        <h1>Le Corps Humain et l'Océan</h1>
      </header>

      <main className="App-main">
        <div className="side-details left-details">
          {systems[selectedSystem].leftDetails.map((detail, index) => (
            <div key={index} className="detail-item">
              <div className="detail-label">{detail.label}</div>
              <div className="detail-value">{detail.value}</div>
            </div>
          ))}
        </div>

        <div className="visualization-container">
          <HumanBody
            selectedSystem={selectedSystem}
            setSelectedSystem={setSelectedSystem}
          />
          <p className="description">{systems[selectedSystem].description}</p>
        </div>

        <div className="side-details right-details">
          {systems[selectedSystem].rightDetails.map((detail, index) => (
            <div key={index} className="detail-item">
              <div className="detail-label">{detail.label}</div>
              <div className="detail-value">{detail.value}</div>
            </div>
          ))}
        </div>
        <div className="audio">
          <AudioPlayer />
        </div>
      </main>
    </div>
  );
}

export default App;
