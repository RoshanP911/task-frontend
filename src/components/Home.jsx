import React, { useEffect, useState } from "react";
import Axios from "../services/axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("/userdetails");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container" style={{ backgroundColor: "grey", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
           
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        
        <div className="user-details">
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Mobile:</strong> {data.mobile}
          </p>
        </div>
      ) : (
        <p>No user details found.</p>
      )}
    </div>
  );
};

export default Home;
