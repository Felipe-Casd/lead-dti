import React from "react";

const LeadCard = ({ lead, onAccept, onDecline }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Nome e data */}
      <h3 style={{ margin: "0 0 5px 0", color: "#000" }}>{lead.firstName} {lead.lastName}</h3>
      <p style={{ margin: "0 0 10px 0", color: "#555", fontSize: "0.9rem" }}>
        {new Date(lead.dateCreated).toLocaleString()}
      </p>

      {/* Endereço + trabalho + ID */}
      <p style={{ margin: "0 0 10px 0", fontSize: "0.9rem" }}>
        {lead.suburb} - {lead.category} | Job ID: {lead.id}
      </p>

      {/* Pedido / descrição */}
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "5px",
          marginBottom: "15px",
          fontSize: "0.9rem",
        }}
      >
        {lead.description}
      </div>

      {/* Botões e valor */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          {onAccept && (
            <button
              onClick={() => onAccept(lead.id)}
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Accept
            </button>
          )}
          {onDecline && (
            <button
              onClick={() => onDecline(lead.id)}
              style={{
                backgroundColor: "#ccc",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                padding: "8px 15px",
                cursor: "pointer",
              }}
            >
              Decline
            </button>
          )}
        </div>

        {/* Valor */}
        <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Lead invitation: ${lead.price}</span>
      </div>
    </div>
  );
};

export default LeadCard;
