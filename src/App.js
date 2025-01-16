import "./App.css";
import Header from "./components/Header/Header";

import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Dashboard/Main";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
