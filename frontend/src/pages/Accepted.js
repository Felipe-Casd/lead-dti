import React, { useEffect, useState } from "react";
import axios from "axios";
import LeadCard from "../components/LeadCard"

export default function Accepted() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await axios.get("http://localhost:5000/api/leads/accepted");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div>
      <h2>Accepted Leads</h2>
      {leads.map(lead => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
