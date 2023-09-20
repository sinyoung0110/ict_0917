import React, { useState }  from 'react'
import i1 from './iconframei514-ikpj.jpg'
import AIChat from "./components/AIChat"
import PersonChat from "./components/PersonChat"
import ChatDate from "./components/ChatDate"
import Header from "./Header";
import Footer from "./Footer";


const Chatbot = (props) => {
  const AIChatArray = [
    '안녕하세요! 물론 강아지 건강에 관한 질문을 해도 됩니다. 강아지의 건강과 관련된 어떤 정보나 도움이 필요하신가요?',
    '규칙적인 운동으로 활동량을 늘리세요. 또한, 적절한 식사량과 건강한 강아지 사료로 식사를 조절해야 합니다. 불필요한 간식과 먹거리를 제한하고 건강한 간식을 선택하세요. 마지막으로, 수의사와 상의하여 비만 관리 계획을 수립하고 체중 감량을 진행하세요.',
    '산책 중에는 강아지에게 충분한 물을 제공하고 피로가 누적되지 않도록 휴식을 주세요. 수풀사이에는 진드기와 같은 해충이 숨어 있으므로 주의하여 산책하세요.'
  
  ]
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const [count, setCount] = useState(0);
  const [que, setQue] = useState("");
  const [chatArray, setChatArray] = useState([]);
  const [visDate,setVisDate] = useState(false);
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setQue(inputValue); 
  };
  const addItem = async (text) =>{
    if(count === 3) setCount(0);
    setVisDate(true);
    const newItem = text;

    const newArray = [...chatArray, newItem];
    setChatArray(newArray);

    await delay(2000);
    const t = AIChatArray[count];
    const tArray = [...newArray, t];
    setChatArray(tArray);
    setCount(count+1);
  }
  
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
        alignItems: 'center'
      }}
    >
      
        <div
          style={{
            width: '390px',
            height: '750px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            marginTop : '-150px',
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
              position: 'fixed',
              top: '70px',
              left: '-2px',
              zIndex : 2
            }}
          >
            { visDate === true ? <ChatDate text="오늘"/> : null}
            {chatArray.map((item,index)=> (
              index % 2 === 1 ? <AIChat key={index} text={item} /> : <PersonChat key={index} text={item} />
            )) }
          </div>
          <div
            style={{
              width: '375px',
              height: '66px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              flexShrink: '0',
              position: 'absolute',
              top: '705px',
              left: '-2px',
            }}
          >
            <input
              type="text"
              placeholder="메세지를 입력하세요."
              onChange={handleChange}
              value={que}
              style={{
                width : 320,
                fontWeight: 400,
                
                textAlign: 'left',
                fontSize: '16px',
                color: 'rgba(160, 155, 162, 1)',
                backgroundColor: '#eee',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '8px 12px',
                flexGrow: '1',
                borderRadius: '8px',
                borderColor : "black",
                position : 'fixed',
                bottom : '90px'
              }}
            />
            <div
              style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                flexShrink: '0',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={i1}
                alt="IconFrameI514"
                style={{
                  width: '24px',
                  height: '24px',
                  bottom: '95px',
                  left: '370px',
                  position : 'fixed'
                }}
                onClick={()=>{
                  setQue("");
                  addItem(que);
                }}
              />
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
      </div>

  )
}

export default Chatbot
