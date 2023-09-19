import React, { useState }  from 'react'
import map from "./petmap.jpg"
import Modal from "./components/Modal"
import Header from "./Header";
import Footer from "./Footer";

const Map = (props) => {
    let [modal, setModal] = useState(false)
  return (
    <div>
      <Header />
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '390px',
          height: '844px',
          display: 'flex',
          alignItems: 'flex-start',
          flexShrink: 1,
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            width: '390px',
            height: '844px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            position: 'absolute',
            top: '0px',
            left: '0px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '395px',
              height: '562px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flexShrink: '0',
              position: 'absolute',
              top: '100px',
              left: '-2px',
            }}
          >
            <img src={map} 
                style={{
                    borderRadius : '8px',
                    position :'fixed',
                    left : 10,
                    top : 70,
                    height : '90%',
                    width : '380px'

                }}
                onClick={()=>{
                    setModal(!modal);
                }}
                /
            >
        {
            modal ? <Modal /> : <div />
        }
          </div>

          </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Map
