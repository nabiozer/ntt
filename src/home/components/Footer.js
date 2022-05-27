import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer-container">
     
    <div className="footer-container__brand">
    <div className="footer-container__socials">
    {/* Safe link to the own website *//* eslint-disable-next-line react/jsx-no-target-blank */}
    <a href="https://www.instagram.com/nabiozer/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
    {/* Safe link to the own website *//* eslint-disable-next-line react/jsx-no-target-blank */}
    <a href="https://api.whatsapp.com/send/?phone=905303180728&text&app_absent=0" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i></a> 
    </div>
     
      <p>
        <i className="fa-solid fa-copyright"></i> 2022 Nabiozer Tüm Hakları
        Saklıdır.
      </p>
    </div>
    <div className="footer-container__contact">
      <p>0530 318 07 28</p>
      <p>nabi.ozer@windowslive.com</p>
      <p>Üsküdar/Istanbul</p>
    </div>
  </footer>
  )
}

export default Footer