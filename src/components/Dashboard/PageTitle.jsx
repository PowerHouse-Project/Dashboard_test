import "../../css/pageTitle.css";

const PageTitle = () => {
  return (
    <div className="pageTitle">
      <h1 className="font-jetBrainsExtraBold text-main-light-blue-dark font-light">
        Dashboard
      </h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageTitle;
