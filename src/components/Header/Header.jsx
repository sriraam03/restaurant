import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Welcome all, 
          Order your food here</h2>
        <p>
        Our food ordering app brings you an extensive menu featuring mouthwatering meals prepared by experienced chefs using top-notch ingredients

        From the comfort of your home, select your favorite dishes and have them delivered to your doorstep, all just-in-time!
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
