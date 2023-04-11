import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-center bg-dark text-light py-4" id="footer-style">

        <i className="fa-brands fa-facebook footer-icons" id="facebook"></i>
        <i className="fa-brands fa-instagram footer-icons" id="instagram"></i>
        <i className="fa-brands fa-twitter footer-icons" id="twitter"></i>
        <i className="fa-brands fa-github footer-icons" id="github"></i>
        <i className="fa-brands fa-medium footer-icons" id="medium"></i>
        <i className="fa-brands fa-linkedin footer-icons" id="linkedin"></i>
        <i className="fa-regular fa-envelope footer-icons" id="mail"></i>

        <p className="copyright">
          Copyright © 2023 GRAVITON Productions Pvt. Ltd. All Rights Reserved.
        </p>

        </footer>
    </div>
  )
}

export default Footer
