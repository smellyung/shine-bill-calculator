import React, { useState, useEffect } from "react";
import { homedir } from "os";
function Home() {
    return (
        <div className="Home">
            <h1>Calculate Your Energy Bill</h1>
          <h2>Please Select Energy Type</h2>
          <div className="container">
            <div className="text">{}</div>
            <img
              className="image"
              src={require(`./shine-energy-small-image.png`)}
              alt='logo'
            />
          </div>
        </div>

    );

}
export default Home; 