import React from "react";
import "./Home.css";
import videoFile from './assets/video.mp4'; // Make sure the video path is correct

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="video-container">
          <video
            src={videoFile}
            type="video/mp4"
            autoPlay
            loop
            muted
            className="background-video"
          />
        </div>
        <div className="hero">
          <h1>Transform Your Brand with Cutting-Edge Digital Marketing & Video Production</h1>
          <p>
            Maximize your reach and impact with professional digital marketing services and high-quality video production. 
            Our team specializes in creating compelling marketing strategies, video content, and brand narratives that connect with your audience. 
            From SEO to social media campaigns, we ensure your brand stands out online.
          </p>
          <p>
            Whether you're looking to increase website traffic, boost social media engagement, or produce captivating videos that tell your story, 
            we have the expertise to deliver results. Let us help you grow your business and achieve your marketing goals with precision and creativity.
          </p>
          <div className="cta-button-container">
            <button className="cta-button">SEE YOUR MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
