import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";
import TweetInFeed from "../components/TweetInFeed";
import { useMoralis } from "react-moralis";


const Profile = () => {
  const { Moralis} = useMoralis();
  const user = Moralis.User.current();

  return (
    <>
    <img className="profileBanner" src={user.attributes.pfp ? user.attributes.pfp : 'https://buidlit.s3.ap-south-1.amazonaws.com/banner.jpg'}></img>
    <div className="pfpContainer">
      <img className="profilePFP" src={user.attributes.banner ? user.attributes.banner : "https://buidlit.s3.ap-south-1.amazonaws.com/dp.jpg"}></img>
      <div className="profileName">{user.attributes.username.slice(0, 6)}</div>
      <div className="profileWallet">{`${user.attributes.ethAddress.slice(0, 4)}...
            ${user.attributes.ethAddress.slice(38)}`}</div>
      <Link to="/settings">
          <div className="profileEdit">Edit profile</div>
      </Link>
      <div className="profileBio">
      {user.attributes.bio}
      </div>
    </div>
    <TweetInFeed profile={true}></TweetInFeed>
    </>
  );
};

export default Profile;

