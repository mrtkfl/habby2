import React from 'react';
import "./Landing.css";
import { Link } from "react-router-dom";
import pic154 from "./assets/Group154.png";
import { Box } from '@mui/material';

function Landing() {
  return (
    <>
      <div className="header" style={{ fontFamily: "outfit" }}>
        Habby!
      </div>
      <Box bgcolor="white" justifyItems="center" marginLeft="5%" marginRight="5%" borderRadius="15px">
        <div className="blurb-header" style={{ fontFamily: "outfit" }}>
          Discover new friends & hobbies
        </div>
        <div className="blurb" style={{ fontFamily: "outfit" }}>
          Take part in your favourite Hobbies with new people or create your
          own event and host a hobby.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={pic154} alt="yoga pose" className="ima"></img>
        </div>
      </Box>
      <div className="button-container">
        <Link to={{ pathname: `/login` }}
        >
          <button className="button login-button">
            Log In
          </button>
        </Link>
        <Link to={{ pathname: `/signup` }}>
          <button className="button signup-button">
            Sign Up
          </button>
        </Link>
      </div>
    </>
  )
}

export default Landing;