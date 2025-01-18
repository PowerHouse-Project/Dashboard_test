import "../../css/main.css";
import Dashboard from "./Dashboard";
import PageTitle from "./PageTitle";

const Main = () => {
  return (
    <main id="main" className="main">
      <PageTitle />
      <Dashboard />
    </main>
  );
};

export default Main;
