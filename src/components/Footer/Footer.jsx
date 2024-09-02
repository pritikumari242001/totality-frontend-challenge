import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <p className="title">RENTIFY</p>
                    <p className="justified-text">Follow Us</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>
                            {" "}
                            <i class="fa-solid fa-house"></i>Home
                        </li>
                        <li>
                            {" "}
                            <i class="fa-regular fa-address-card"></i>About Us
                        </li>
                        <li>
                            {" "}
                            <i class="fa-solid fa-phone"></i>Call Us
                        </li>
                        <li>
                            {" "}
                            <i class="fa-solid fa-fingerprint"></i>Privacy
                            Policy
                        </li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>
                            {" "}
                            <i class="fa-solid fa-envelope"></i> +91 8500000001
                        </li>
                        <li>
                            {" "}
                            <i class="fa-solid fa-phone"></i>contact@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @ rentify.com - All Right Reserved
            </p>
        </div>
    );
};

export default Footer;
