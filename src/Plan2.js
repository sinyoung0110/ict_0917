import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { Link } from 'react-router-dom';

function Plan() {
  return (
    <div>
    <Header />
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "flex-start",
          flexShrink: "0",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "390px",
            position: "fixed",
            zIndex: "10",
            top: "68px",
            zIndex: "10",
          }}
        ><Link to='/diary'>
          <img
            src="./nav.png"
            style={{
              width: "100%",
            }}
          ></img>
          </Link>
        </div>
        <div 
        style={{
          width: "390px",
          position: "fixed",
          left:"-199px",
          top:"7px",
          
          
          
        }}>
        <Link to='/cal'>
        <img
          src="./plan2.png"
          style={{
            width: "100%",
            position: "absolute",
            top: "125px",
            zIndex: "-10",
          }}
        ></img>
        </Link></div>
      </div>
    </div>
    <Footer />
  </div>
    
  );
}

export default Plan;
