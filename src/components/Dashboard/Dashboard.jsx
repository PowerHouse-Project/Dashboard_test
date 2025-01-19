import { useState, useEffect } from "react";
import "../../css/dashboard.css";
import Cards from "../Components/Cards";

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [resources, setResources] = useState([]);

  const fetchResources = () => {
    fetch("http://localhost:8000/resources")
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
      })
      .catch((e) => console.log(e.message));
  };

  const fetchDevices = () => {
    fetch("http://localhost:8000/devices")
      .then((res) => res.json())
      .then((data) => {
        setDevices(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {resources &&
              resources.length > 0 &&
              resources.map((card) => <Cards key={card._id} card={card} />)}
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
};

export default Dashboard;
