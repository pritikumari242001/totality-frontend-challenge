import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
    return (
        <div className="app-download" id="app-download">
            <h6>Our Awards</h6>
            <p className="Happy">
                Over 1,24000+ Happy User Bieng With Us Still <br /> They Love
                Our Services{" "}
            </p>
            <div className="Awards">
                <ul>
                    <li>
                        <h4>
                            <i class="fa-solid fa-trophy"></i>
                        </h4>

                        <h3>32M</h3>
                        <p>Blue Burmin Award</p>
                    </li>
                    <li>
                        <h4>
                            <i class="fa-solid fa-bag-shopping"></i>
                        </h4>
                        <h3>43M</h3>
                        <p>Mimo X!! Award</p>
                    </li>
                    <li>
                        <h4>
                            <i class="fa-solid fa-heart"></i>{" "}
                        </h4>
                        <h3>51M</h3>
                        <p>Australian UGC Awards</p>
                    </li>
                    <li>
                        <h4>
                            <i class="fa-regular fa-lightbulb"></i>
                        </h4>
                        <h3>42M</h3>
                        <p>IITCA Green Award</p>
                    </li>
                </ul>
            </div>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    );
};

export default AppDownload;
