import Header from './Header';
import Footer from './Footer';
import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Weight() {
  return (
    <div>
      <Header />
      
      <div class="profile">
        <p class="title">반려동물 프로필</p>
        <div class="contains">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_517_5433)">
        <path d="M13.6951 17.0474L-0.345551 9.62373L13.6134 2.04761" stroke="black" stroke-width="1.54984" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_517_5433">
        <rect width="18.598" height="18.598" fill="white" transform="translate(0 0.101318) rotate(-0.311979)"/>
        </clipPath>
        </defs>
        </svg>
        <Link to="/profile"><img src="./profile.png"width="331px"></img></Link>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.1022 15.864L15.0612 8.28789L1.02052 0.864231" stroke="black" stroke-width="1.54984" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div> 
      <div class="board">
        <p class="title">오늘의 인기글</p>
        <img src="./board.png" width="302px"></img>
      </div>
      <div class="map">
        <p class="title">오늘의 추천 경로</p>
        <img src="./map.png" width="302px"></img>
      </div>
      
      <Footer />
    </div>
    
  );
}

export default Weight;
