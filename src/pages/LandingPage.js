import React from 'react'
import '../styles/LandingPage.css'
import LandingPicture from '../assets/LandingPicture.jpg'

export const LandingPage = () => {
  return (
    <div>
      <div className='BackgroundImage'></div>
      <div className='LandingPageLayout'>

        <div className='LandingText'>
          Welcome To <br></br><a href='https://www.instagram.com/synstagrammm/'>Synergy Hip Hop Dance Company</a><br></br><br></br>Promoting Unity Among Students <br></br>of Diverse Cultural Backgrounds through<br></br> Hip Hop Dance <br></br> EST. 2004
        </div>

        <img src = {LandingPicture} className='Photo' ></img>
      </div>
    </div>
  );
};
