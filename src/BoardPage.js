import Header from "./Header";
import Footer from "./Footer";
function BoardPage() {
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
          >
            <img
              src="./top.png"
              style={{
                width: "100%",
              }}
            ></img>
          </div>
          <img
            src="./board_bot.png"
            style={{
              width: "100%",
              position: "absolute",
              top: "180px",
              zIndex: "-10",
            }}
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BoardPage;
