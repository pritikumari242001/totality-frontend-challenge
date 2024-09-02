import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import PropertyDisplay from "../../components/PropertyDisplay/PropertyDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
    return (
        <div>
            <Header />
            <PropertyDisplay />
            <AppDownload />
        </div>
    );
};

export default Home;
