import React, { Component } from "react";
import "./Header.scss";
import HamburgerIcon from "../../assets/images/svgs/hamburger.svg";
import CancelIcon from "../../assets/images/svgs/cancel.svg";
import { Link } from "react-router-dom";
import pmuLogo from "../../assets/images/pngs/pmu.jpg"

const ITEMS_LIST = [
  {
    name: "Projects",
    linkTo: "/projects",
    className: "",
  },
  {
    name: "Resources",
    linkTo: "/resources",
    className: "",
  },
  {
    name: "Resource Utilisation",
    linkTo: "/resource-utilisation",
    className: "",
  },
  {
    name: "Logout",
    linkTo: "/",
    className: "",
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openHamburger: false,
    };

    this.handleHamburgerButtonClick =
      this.handleHamburgerButtonClick.bind(this);
  }

  handleHamburgerButtonClick() {
    this.setState((state) => {
      return {
        openHamburger: !state.openHamburger,
      };
    });
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="nav-brand">
          <a class="navbar-brand-logo" href="###">
            <img className="logoImg" src={pmuLogo} alt="brand-logo" />
          </a>
        </div>
        <div className="nav-bar"></div>
        <div className="hamburger">
          <button
            type="button"
            className="addBtn"
            onClick={this.handleHamburgerButtonClick}
          >
            <img
              className="hamburgerImg"
              src={HamburgerIcon}
              alt="hamburger-icon"
            />
          </button>
          {this.state.openHamburger && (
            <div
              className="hamburgerDropdown"
              ref={this.hamburgerDropdown}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hamburger-close-icon-section">
                <img
                  className="hamburger-cancelIcon"
                  src={CancelIcon}
                  alt="Cancel icon"
                  onClick={this.handleHamburgerButtonClick}
                />
              </div>
              <div className="hamburger-list-section">
                <ul className="hamburger-list">
                  {ITEMS_LIST.map((eachItem) => (
                    <Link to={eachItem.linkTo}>
                      <li className="hamburger-list-item">{eachItem.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
