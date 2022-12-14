import React from "react";
import './Rightbar.css';
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const Rightbar = () => {
  const trends = [
    {
      img: "https://buidlit.s3.ap-south-1.amazonaws.com/games.webp",
      text: "Lets Learn About Hack2skill",
      link: "",
    },
    {
      img: "https://buidlit.s3.ap-south-1.amazonaws.com/movies.jpg",
      text: "Let's Netflix and chill...",
      link: "",
    },
    // {
    //   img: academy,
    //   text: "Master DeFi in 2022. Start  at the Moralis Academy...",
    //   link: "",
    // },
    // {
    //   img: js,
    //   text: "Become a Web3 Developer with just simple JS...",
    //   link: "",
    // }
  ];

  return (
    <>
    <div className="rightbarContent">
      <Input
        label="Search Freeitter"
        name ="Search Twitter"
        prefixIcon="search"
        labelBgColor="#141d26" 
        >
      </Input>

    <div className="trends">
      Explore Now
      {trends.map((e) => {
          return(
            <>
            <div className="trend" onClick={() => window.open(e.link)}>
              <img src={e.img} className="trendImg"></img>
            </div>
            </>
          )
      })}

    </div>

    </div>
    </>
  );
};

export default Rightbar;

