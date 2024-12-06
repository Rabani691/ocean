import React from "react";

const HumanBody = ({ selectedSystem, setSelectedSystem }) => {
  return (
    <div className="human-body">
      <img src="/human.png" alt="Human body anatomy" className="human-body-img" />

      <div className="body-buttons">
        {/* Heart/Circulatory System - positioned over chest area */}
        <button
          className={`body-button circulatory-btn ${
            selectedSystem === "circulatory" ? "active" : ""
          }`}
          onClick={() => setSelectedSystem("circulatory")}
          title="Système Circulatoire"
        />

        {/* Respiratory System - positioned over lung area */}
        <button
          className={`body-button respiratory-btn ${
            selectedSystem === "respiratory" ? "active" : ""
          }`}
          onClick={() => setSelectedSystem("respiratory")}
          title="Système Respiratoire"
        />

        {/* Cells/Plankton - positioned over abdomen area */}
        <button
          className={`body-button plankton-btn ${
            selectedSystem === "plankton" ? "active" : ""
          }`}
          onClick={() => setSelectedSystem("plankton")}
          title="Plancton & Cellules"
        />

        {/* Temperature - positioned over skin area */}
        <button
          className={`body-button temperature-btn ${
            selectedSystem === "temperature" ? "active" : ""
          }`}
          onClick={() => setSelectedSystem("temperature")}
          title="Régulation Thermique"
        />
      </div>

      {/* Your existing overlays */}
      {selectedSystem === "circulatory" && (
        <div className="system-overlay circulatory-overlay">
          {/* Add circulatory system specific overlays */}
        </div>
      )}

      {selectedSystem === "respiratory" && (
        <div className="system-overlay respiratory-overlay">
          {/* Add respiratory system specific overlays */}
        </div>
      )}

      {selectedSystem === "plankton" && (
        <div className="system-overlay plankton-overlay">
          {/* Add plankton system specific overlays */}
        </div>
      )}

      {selectedSystem === "temperature" && (
        <div className="system-overlay temperature-overlay">
          {/* Add temperature regulation specific overlays */}
        </div>
      )}
    </div>
  );
};

export default HumanBody;
