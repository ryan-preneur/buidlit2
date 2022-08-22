import React from "react";
import "./Sidebar.css";
import { Icon } from "web3uikit";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { defaultImgs } from "../defaultimgs";

const Sidebar = () => {

  const { Moralis} = useMoralis();
  const user = Moralis.User.current();

  return (
    <>
      <div className="siderContent">
        <div className="menu">
          <div className="details">
            <img src="/logo.png" width="150"/>
          </div>

          <Link to="/" className="link">
            <div className="menuItems">
              <Icon fill="#000000" size={25} svg="list" />
              Home
            </div>
          </Link>

          <Link to="/profile" className="link">
            <div className="menuItems">
              <Icon fill="#000000" size={25} svg="user" />
              Profile
            </div>
          </Link>

          <Link to="/settings" className="link">
            <div className="menuItems">
              <Icon fill="#000000" size={25} svg="cog" />
              Settings
            </div>
          </Link>
            <div className="menuItems">
            <i class="fa-solid fa-hashtag"></i>
              Explore
            </div>
            <div className="menuItems">
            <i class="fa-solid fa-list"></i>
              Lists
            </div>
        </div>

        <div className="details">
          <img src={user.attributes.banner ? user.attributes.banner : "https://buidlit.s3.ap-south-1.amazonaws.com/dp.jpg"} className="profilePic"></img>
          <div className="profile">
            <div className="who">
              {user.attributes.username.slice(0, 6)}
            </div>
            <div className="accWhen">
              {`${user.attributes.ethAddress.slice(0, 4)}...${user.attributes.ethAddress.slice(38)}`}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
