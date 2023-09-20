import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Cal() {
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
              top: "68px",
            }}
          >
            <img
              src="./cal.png"
              style={{
                width: "100%",
              }}
            ></img>
          </div>
          <input
            type="text"
            placeholder="제목"
            style={{
              position: "absolute",
              zIndex: "10",
              border: "none",
              fontSize: "20px",
              top: "95px",
              left: "30px",
              outline: "0",
            }}
          ></input>
          <input
            type="text"
            placeholder="날짜"
            style={{
              position: "absolute",
              zIndex: "10",
              border: "none",
              fontSize: "20px",
              top: "140px",
              left: "30px",
              outline: "0",
            }}
          ></input>
          <textarea
            type="text"
            placeholder="메모"
            style={{
              width:"300px",
              height:"200px",
              resize: "none",
              position: "absolute",
              zIndex: "10",
              border: "none",
              fontSize: "20px",
              top: "185px",
              left: "30px",
              outline: "0",
            }}
          ></textarea>
          <Link to='/plan2'>
          <button
            style={{
              position: "absolute",
              height: "28px",
              width: "90px",
              fontSize: "17px",
              zIndex: "10",
              backgroundColor: "white",
              border: "None",
              top: "399px",
              left: "163px",
              cursor: "pointer",
            }}
          >
            등록
          </button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cal;
