import React from "react";
import "../../css/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar" id="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Home</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="/"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-controller"></i>
            <span>Devices</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="/"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-alarm"></i>
            <span>Automation Schedules</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="/"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-bar-chart"></i>
            <span>Energy Usage</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="/"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-collection"></i>
            <span>Rooms</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
