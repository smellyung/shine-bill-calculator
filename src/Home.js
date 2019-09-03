import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { homedir } from "os";
function Home() {
    return (
        <div className="Home">
          <div className="container">
            {/* <div className="text">{}</div> */}
            <img
              className="image"
              src={require(`./shine-energy-small-image.png`)}
              alt='logo'
            />
          </div>
          <h1>Calculate Your Energy Bill</h1>
          <h2>Please Select Energy Type</h2>
          <div className='energy-links'>
            <Link to='/enter-meter-read'>Gas</Link>
            <Link to='/enter-meter-read'>Electricity</Link>
          </div>
        </div>

    );

}
export default Home; 