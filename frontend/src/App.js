import React, { useState } from "react";
import Invited from "./pages/Invited";
import Accepted from "./pages/Accepted";

function App() {
  const [tab, setTab] = useState("invited");

  const tabs = [
    { name: "invited", label: "Invited" },
    { name: "accepted", label: "Accepted" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Lead Management</h1>
      
      {/* Abas */}
      <div style={{ display: "flex", borderBottom: "2px solid #ddd", marginBottom: "20px" }}>
        {tabs.map((t) => (
          <div
            key={t.name}
            onClick={() => setTab(t.name)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              borderBottom: tab === t.name ? "4px solid orange" : "none",
              fontWeight: tab === t.name ? "bold" : "normal",
              color: tab === t.name ? "black" : "#555",
            }}
          >
            {t.label}
          </div>
        ))}
      </div>

      {/* Conteúdo */}
      {tab === "invited" && <Invited />}
      {tab === "accepted" && <Accepted />}
    </div>
  );
}

export default App;
