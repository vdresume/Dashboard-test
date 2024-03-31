import React, { useState } from 'react';
import "./Dashboard.css";

let Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showMenu = () => {
    setSidebarVisible(true);
  };

  const hideMenu = () => {
    setSidebarVisible(false);
  };

  return (
    <section className="body-section">
      <aside className="container" id="sidebar" style={{ left: sidebarVisible ? '0' : '-280px' }}>
        <div className="logo">
          <img src="./images/Group 1.png" alt="logo" />
          <span>
            <button className="btn-min" onClick={hideMenu}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </span>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-itam" id="active">
              <a className="nav-link">
                <span className="material-symbols-outlined"> dashboard </span>
                Dashboard
              </a>
            </li>
            <li className="nav-itam">
              <a className="nav-link">
                <span className="material-symbols-outlined"> request_page</span>
                Invoices
              </a>
            </li>
            <li className="nav-itam">
              <a className="nav-link">
                <span className="material-symbols-outlined"> description</span>
                Proposals
              </a>
            </li>
            <li className="nav-itam">
              <a className="nav-link">
                <span className="material-symbols-outlined">
                  settings_b_roll
                </span>
                Services
              </a>
            </li>
            <li className="nav-itam">
              <a className="nav-link">
                <span className="material-symbols-outlined">receipt_long</span>
                Transactions
              </a>
            </li>
            <li className="nav-itam">
              <a className="nav-link">
                <span className="material-symbols-outlined">folder</span>
                Customers
              </a>
            </li>
            <span>
              <hr />
            </span>
            <li className="nav-itam">
              <a className="nav-link">
                <span className="material-symbols-outlined">settings</span>
                Settings
              </a>
            </li>
            <li className="nav-itam">
              <a className="nav-link">
                <span className="material-symbols-outlined">logout</span>
                Log out
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <span>
          <button className="btn" onClick={showMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </span>
        {/*header top*/}
        <section>
          <div className="main-header">
            <div className="header-nav">
              <h4>
                Hi, Welcome back{" "}
                <span style={{ color: "#1cd2ad" }}>Robert!</span>
              </h4>
              <div className="header-left">
                <span className="material-symbols-outlined fa-search">
                  search
                </span>
                <input
                  type="text"
                  placeholder="search..."
                  className="search-box"
                />
                <div className="icon-box">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*top end*/}
        {/*header box*/}
        <div className="sale-item">
          <h4>Finance Overview</h4>
          <div className="header-box">
            <div className="child">
              <div>
                <h3>$ 2,77,120</h3>
                <p>Sales</p>
              </div>
              <img src="./images/salse.png" className="sale-img" />
            </div>
            <div className="child">
              <div>
                <h3>$ 60,100</h3>
                <p>Expense</p>
              </div>
              <img src="./images/Expense.jpg" className="sale-img" />
            </div>
            <div className="child">
              <div>
                <h3>$ 57,230</h3>
                <p>Profit</p>
              </div>
              <img src="./images/profit.jpg" className="sale-img" />
            </div>
            <div className="child">
              <div>
                <h3>$ 1,60,124</h3>
                <p>Income</p>
              </div>
              <img src="./images/income.avif" className="sale-img" />
            </div>
          </div>
        </div>
        {/*header box*/}
        <div className="recent-order">
          <div className="project">
            <h1>
              <i>Current Projects</i>
            </h1>
            <button className="btn-paid">Create</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Customer</th>
                <th>Sent Deta</th>
                <th>Amount</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Travel app design</td>
                <td>Jacob Jones</td>
                <td>28 Oct 2022</td>
                <td>$240.90</td>
                <td>
                  <a href="" style={{ behavior: "courser" }}>
                    <button className="btn-sent">SENT</button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  UX-Research for Event
                  <br />
                  management-app
                </td>
                <td>Jacob Jones</td>
                <td>28 Oct 2022</td>
                <td>$240.90</td>
                <td>
                  <button className="btn-sent">SENT</button>
                </td>
              </tr>
              <tr>
                <td>
                  Redesign-Food
                  <br />
                  delivery app
                </td>
                <td>Wade Warren</td>
                <td>28 Oct 2022</td>
                <td>$120.00</td>
                <td>
                  <button className="btn-draft">DRAFT</button>
                </td>
              </tr>
              <tr>
                <td>
                  Web App-Online
                  <br />
                  Learning
                </td>
                <td>Cameron Williamson</td>
                <td>17 Oct 2022</td>
                <td>$240.90</td>
                <td>
                  <button className="btn-paid">PAID</button>
                </td>
              </tr>
              <tr>
                <td>Railway web casestudy</td>
                <td>Robert Fox</td>
                <td>15 Oct 2022</td>
                <td>$153.0</td>
                <td>
                  <button className="btn-sent">SENT</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* footer-box start */}
        <div className="footer-main">
          <div className="footer-box">
            <div className="head">
              <header>
                <h4>Events</h4>
              </header>
            </div>
            <div className="main">
              <div className="firstChild">
                <div className="mainImg">
                  <div />
                </div>
                <div className="mainText">
                  <h3>Wade Warren</h3>
                  <p>Birthday Today</p>
                </div>
                <div className="mainButton">
                  <button>Wish</button>
                </div>
              </div>
              <div className="firstChild">
                <div className="mainImg">
                  <div />
                </div>
                <div className="mainText">
                  <h3>Wade Warren</h3>
                  <p>Birthday Today</p>
                </div>
                <div className="mainButton">
                  <button>Congratulations</button>
                </div>
              </div>
              <div className="firstChild">
                <div className="mainImg">
                  <div />
                </div>
                <div className="mainText">
                  <h3>Wade Warren</h3>
                  <p>Birthday Today</p>
                </div>
                <div className="mainButton">
                  <button>Wish</button>
                </div>
              </div>
              <div className="firstChild">
                <div className="mainImg">
                  <div />
                </div>
                <div className="mainText">
                  <h3>Wade Warren</h3>
                  <p>Birthday Today</p>
                </div>
                <div className="mainButton">
                  <button>Wish</button>
                </div>
              </div>
              <div className="firstChild">
                <div className="mainImg">
                  <div />
                </div>
                <div className="mainText">
                  <h3>Wade Warren</h3>
                  <p>Birthday Today</p>
                </div>
                <div className="mainButton">
                  <button>Wish</button>
                </div>
              </div>
              <div className="firstChild">
                <div className="mainImg">
                  <div />
                </div>
                <div className="mainText">
                  <h3>Wade Warren</h3>
                  <p>Birthday Today</p>
                </div>
                <div className="mainButton">
                  <button>Wish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-box close */}
      </main>
    </section>
  );



  
};
export default Dashboard;

