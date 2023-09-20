import React, { useState } from 'react'
import smile from './smile.JPG'
import {Link} from 'react-router-dom';

const PetInfo = (props) => {
    const [bgColor, setbgColor] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',

      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: '100%',
          height: '709px',
          display: 'flex',
          alignItems: 'flex-start',
          flexShrink: '0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <div
          style={{
            backgroundColor: 'rgba(225, 225, 254, 1)',
            width: '390px',
            height: '709px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '32px 16px',
            flexShrink: '0',
            position: 'absolute',
            top: '54px',
            left: '0px',
          }}
        ></div>
        <div
          style={{
            width: '410px',
            display: 'flex',
            gap: '8.756743431091309px',
            padding: '8.756743431091309px 21.89185905456543px',
            flexShrink: '0',
            position: 'absolute',
            top: '7px',
            left: '0px',
          }}
        >
          <div
            style={{
              width: '26.270231246948242px',
              height: '26.270231246948242px',
              display: 'flex',
              alignItems: 'flex-start',
              flexShrink: '0',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '26.270231246948242px',
                height: '26.270231246948242px',
                display: 'flex',
                alignItems: 'flex-start',
                flexShrink: 1,
                position: 'absolute',
                top: '0px',
                left: '0px',
              }}
            >
              <div
                style={{
                  width: '26.270231246948242px',
                  height: '26.270231246948242px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexShrink: 1,
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                }}
              >
                <img src={smile} style={{
                    width : '28px'
                }} />
              </div>
            </div>
          </div>
          <span
            style={{
              color: 'rgba(19, 19, 20, 1)',
              height: 'auto',
              textAlign: 'left',
              lineHeight: '129.99999523162842%',
              flexGrow: 1,
               
              fontSize: 19.702672958374023,
              fontStretch: 'normal',
              fontStyle: 'Bold',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <span>반려동물 프로필</span>
          </span>
        </div>
        <input
          type="text"
          placeholder="이름"
          style={{
            lineHeight : '100px',
            fontWeight: 400,
             
            textAlign: 'left',
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '122px',
            height: '56px',
            display: 'flex',
            alignItems: 'flex-start',
            textAlign : 'left',
            flexShrink: '0',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '86px',
            left: '42px',
          }}
        />
        <input
          type="text"
          placeholder="나이"
          style={{
            fontWeight: 400,
             
            textAlign: 'left',
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '122px',
            height: '56px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '86px',
            left: '227px',
          }}
        />

        <textarea
          placeholder="성격 및 매력"
          style={{
            fontWeight: 400,
             
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '309px',
            height: '150px',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '331px',
            left: '43px',
            paddingLeft : '10px',
            paddingTop : '10px'
          }}></textarea>
        <textarea
          placeholder="특이사항"
          style={{
            fontWeight: 400,
             
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '309px',
            height: '150px',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '507px',
            left: '44px',
            paddingLeft : '10px',
            paddingTop : '10px'
          }}></textarea>
        <select
          placeholder="성별"
          style={{
            fontWeight: 400,
             
            textAlign: 'left',
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '126px',
            height: '58px',
            display: 'flex',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '250px',
            left: '43px',
            
          }}>
            <option value="" disabled selected hidden>성별</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        <input
          type="text"
          placeholder="몸무게"
          style={{
            fontWeight: 400,
             
            textAlign: 'left',
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '120px',
            height: '56px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '169px',
            left: '228px',
          }}
        />
        <input
          type="text"
          placeholder="털색"
          style={{
            fontWeight: 400,
             
            textAlign: 'left',
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '120px',
            height: '56px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '250px',
            left: '228px',
          }}
        />
        <input
          type="text"
          placeholder="키"
          style={{
            fontWeight: 400,
             
            textAlign: 'left',
            fontSize: '16px',
            color: 'rgba(117, 117, 117, 1)',
            backgroundColor: 'white',
            width: '120px',
            height: '56px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '169px',
            left: '43px',
          }}
        />
        <div
          style={{
            width: '12px',
            height: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            position: 'absolute',
            top: '120px',
            left: '323px',
            overflow: 'hidden',
          }}
        ></div>
        <div
            onMouseOver= {() => setbgColor(!bgColor) }
            onMouseOut= {() => setbgColor(!bgColor) }
          style={{
            backgroundColor: bgColor ? '#EEE' : 'white',
            width: '83px',
            height: '27px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderRadius: '4px',
            borderWidth: '1px',
            borderColor: 'rgba(2, 2, 2, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '675px',
            left: '157px',
          }}></div>
        {bgColor}
        <span
          style={{
            height: 'auto',
            textAlign: 'left',
            lineHeight: '100%',
            position: 'absolute',
            top: 682,
            left: 184,
             
            fontSize: 16,
            fontStretch: 'normal',
            fontStyle: 'Regular',
            fontWeight: 400,
            textDecoration: 'none',
          }}
        >
          <Link to="/main" style={{ textDecoration: "none" }}><span>등록</span></Link>
        </span>
      </div>
    </div>
  )
}




export default PetInfo;