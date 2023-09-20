import React from 'react';
import {Link} from 'react-router-dom';

function LoginPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        overflow: "auto",
        minHeight: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "844px",
          display: "flex",
          overflow: "hidden",
          position: "relative",
          alignItems: "flex-start",
          flexShrink: "0",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <span
          style={{
            top: 226,
            left: 32,
            color: "rgba(102, 102, 102, 1)",
            width: "326px",
            height: "auto",
            fontSize: 24,
            position: "absolute",
            fontStyle: "Semi Bold",
            textAlign: "left",
            
            fontWeight: 700,
            lineHeight: "normal",
            fontStretch: "normal",
            textDecoration: "none",
          }}
        >
          <span>로그인</span>
        </span>
        <span
          style={{
            top: 730,
            left: 25,
            color: "rgba(0, 0, 0, 0.3199999928474426)",
            width: "326px",
            height: "auto",
            fontSize: 13,
            position: "absolute",
            fontStyle: "Medium",
            textAlign: "center",
            
            fontWeight: 500,
            lineHeight: "normal",
            fontStretch: "normal",
            textDecoration: "none",
          }}
        >
          <span>계정이 없다면? 회원가입</span>
        </span>
        <span
          style={{
            top: 730,
            left: 25,
            color: "rgba(0, 0, 0, 0.3199999928474426)",
            width: "326px",
            height: "auto",
            fontSize: 13,
            position: "absolute",
            fontStyle: "Medium",
            textAlign: "center",
            
            fontWeight: 500,
            lineHeight: "normal",
            fontStretch: "normal",
            textDecoration: "none",
          }}
        >
          <span>계정이 없다면? 회원가입</span>
        </span>
        <span
          style={{
            top: 609,
            left: 32,
            color: "rgba(17, 13, 13, 0.6000000238418579)",
            width: "326px",
            height: "auto",
            fontSize: 13,
            position: "absolute",
            fontStyle: "Medium",
            textAlign: "center",
            
            fontWeight: 500,
            lineHeight: "normal",
            fontStretch: "normal",
            textDecoration: "none",
          }}
        >
          <span>아이디/비밀번호 찾기</span>
        </span>
        <div
          style={{
            gap: "10px",
            top: "393px",
            left: "39px",
            width: "317px",
            display: "flex",
            padding: "10px",
            position: "absolute",
            alignItems: "flex-start",
            flexShrink: "0",
            borderColor: "rgba(115, 115, 115, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              gap: "10px",
              display: "flex",
              padding: "10px",
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
          >
            <span
              style={{
                color: "rgba(102, 102, 102, 1)",
                height: "auto",
                fontSize: 14,
                fontStyle: "Medium",
                textAlign: "center",
                
                fontWeight: 500,
                lineHeight: "normal",
                fontStretch: "normal",
                textDecoration: "none",
              }}
            >
              <input
                type="password"
                placeholder="비밀번호"
                style={{
                  border: "0",
                  outline: "0",
                  fontSize: "15px",
                }}
              ></input>
            </span>
          </div>
        </div>
        <div
          style={{
            gap: "10px",
            top: "314px",
            left: "39px",
            width: "317px",
            display: "flex",
            padding: "10px",
            position: "absolute",
            alignItems: "flex-start",
            flexShrink: "0",
            borderColor: "rgba(115, 115, 115, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              gap: "10px",
              display: "flex",
              padding: "10px",
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
          >
            <span
              style={{
                color: "rgba(102, 102, 102, 1)",
                height: "auto",
                fontSize: 14,
                fontStyle: "Medium",
                textAlign: "center",
                
                fontWeight: 500,
                lineHeight: "normal",
                fontStretch: "normal",
                textDecoration: "none",
              }}
            >
              <input
                type="text"
                placeholder="아이디"
                style={{
                  border: "0",
                  outline: "0",
                  fontSize: "15px",
                }}
              ></input>
            </span>
          </div>
        </div>
        <Link to="/petinfo">
        <button
          style={{
            top: "504px",
            left: "48px",
            backgroundColor: "#e2e1ff",
            border: "0",
            width: "315px",
            height: "37px",
            display: "flex",
            position: "absolute",
            alignItems: "flex-start",
            flexShrink: "0",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              top: 10,
              left: 135.98936462402344,
              color: "rgba(255, 255, 255, 1)",
              height: "auto",
              fontSize: 14,
              position: "absolute",
              fontStyle: "Bold",
              textAlign: "center",
              
              fontWeight: 700,
              lineHeight: "normal",
              fontStretch: "normal",
              textDecoration: "none",
            }}
          >
            <span>로그인</span>
          </span>
        </button>
        </Link>
        <img
          alt="Facebook"
          src="facebook.png"
          style={{
            top: "652px",
            left: "113px",
            width: "35px",
            height: "35px",
            position: "absolute",
            boxShadow: "0px 4px 4px 0px rgba(17, 13, 13, 0.15000000596046448) ",
          }}
        />
        <img
          alt="Google"
          src="google.png"
          style={{
            top: "652px",
            left: "178px",
            width: "35px",
            height: "35px",
            position: "absolute",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.09000000357627869) ",
          }}
        />
        <img
          alt="kakao"
          src="kakao.jpeg"
          style={{
            top: "652px",
            left: "243px",
            width: "35px",
            height: "35px",
            position: "absolute",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15000000596046448) ",
          }}
        />
        <div
          style={{
            top: "62px",
            left: "134px",
            width: "120px",
            height: "120px",
            display: "flex",
            position: "absolute",
            alignItems: "flex-start",
            flexShrink: 1,
          }}
        >
          <div
            style={{
              top: "60px",
              left: "0px",
              width: "60px",
              height: "60px",
              display: "flex",
              position: "absolute",
              alignItems: "flex-start",
              flexShrink: "0",
            }}
          ></div>

          <div
            style={{
              top: "0px",
              left: "0px",
              width: "60px",
              height: "60px",
              display: "flex",
              position: "absolute",
              alignItems: "flex-start",
              flexShrink: "0",
            }}
          >
            <img
              alt="applogo"
              src="applogo.png"
              style={{
                top: "0px",
                left: "0px",
                width: "150px",
                height: "150px",
                position: "absolute",
              }}
            />
          </div>
        </div>
        <span
          style={{
            top: 572,
            left: 37,
            color: "rgba(17, 13, 13, 0.6000000238418579)",
            width: "326px",
            height: "auto",
            fontSize: 13,
            position: "absolute",
            fontStyle: "Medium",
            textAlign: "center",
            
            fontWeight: 500,
            lineHeight: "normal",
            fontStretch: "normal",
            textDecoration: "none",
          }}
        >
          <span>자동 로그인</span>
        </span>
        <div
          style={{
            top: "572px",
            left: "140px",
            width: "16px",
            height: "16px",
            display: "flex",
            position: "absolute",
            alignItems: "flex-start",
            flexShrink: "0",
          }}
        >
          <input type="checkbox"></input>
          <div
            style={{
              top: "1.600000023841858px",
              left: "1.600000023841858px",
              width: "13px",
              height: "12.799999237060547px",
              display: "flex",
              position: "absolute",
              alignItems: "flex-start",
              flexShrink: "0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
