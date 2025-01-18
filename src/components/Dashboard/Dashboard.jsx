import { useState, useEffect } from "react";
import "../../css/dashboard.css";

const Dashboard = () => {
  const [devices, setDevices] = useState([]);

  const fetchDevices = () => {
    fetch("http://localhost:4000/devices")
      .then((res) => res.json())
      .then((data) => {
        setDevices(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row"></div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
};

export default Dashboard;
