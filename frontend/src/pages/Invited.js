import React, { useEffect, useState } from "react";
import axios from "axios";
import LeadCard from "../components/LeadCard"


export default function Invited() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await axios.get("http://localhost:5000/api/leads/invited");
    setLeads(res.data);
  };

  const handleAccept = async (id) => {
    await axios.post(`http://localhost:5000/api/leads/${id}/accept`);
    fetchLeads();
  };

  const handleDecline = async (id) => {
    await axios.post(`http://localhost:5000/api/leads/${id}/decline`);
    fetchLeads();
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div>
      <h2>Invited Leads</h2>
      {leads.map(lead => (
        <LeadCard key={lead.id} lead={lead} onAccept={handleAccept} onDecline={handleDecline} />
      ))}
    </div>
  );
}
