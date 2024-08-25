import React from 'react'
import download from '../Assets/andriod2.webp'
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
        <footer>
            <div className="foot">
                <div className="foot1">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="">LIVESCORE</a></li>
                        <li><a href="">POLICY</a></li>
                        <li><a href="">BRANDS</a></li>
                        <li><a href="">BETTING LINKS</a></li>
                    </ul>
                </div>

                <div className="foot1">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="">TERMS & CONDITIONS</a></li>
                        <li><a href="">DISCLAIMER</a></li>
                        <li><a href="">ABOUT US</a></li>
                        <li><a href="">CONTACT US</a></li>
                    </ul>
                </div>

                <div className="foot1">
                    <h4>Contact Us</h4>
                    <div className="icons">
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaTelegram /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaYoutube /></a>
                        <a href=""><FaGoogle /></a>
                    </div>
                    <p>Email Us: info@victorspredict.com</p>
                    <p>Advert: advert@victorspredict.com</p>
                </div>

                <div className="foot1">
                    <h4>Mobile App</h4>
                    <a href=""><img src={download} alt="" /></a>
                </div>

            </div>

            <div className="right">
                <p>© 2024 VictorsPredict. All rights reserved.</p>
            </div>

        </footer>
    </div>
  )
}

export default Footer