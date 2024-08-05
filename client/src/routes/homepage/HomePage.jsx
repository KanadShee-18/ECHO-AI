import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("Human1");

  return (
    <div className="homePage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ECHO AI
        </motion.h1>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Supercharge your creativity and productivity
        </motion.h2>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          An AI-powered chat application designed to assist with a wide range of
          queries. It leverages advanced natural language processing to provide
          accurate and relevant responses, making it an ideal tool for
          information retrieval, customer support, and interactive
          conversations.
        </motion.h3>
        <Link to="/dashboard">Start Your Journey</Link>
      </div>
      <div className="right">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="imgContainer"
        >
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "Human1"
                  ? "/human1.jpeg"
                  : typingStatus === "Human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Alex: We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("Bot");
                },
                "Bot: We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("Human2");
                },
                "Merry: We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("Bot");
                },
                "Bot: We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("Human1");
                },
              ]}
              wrapper="span"
              style={{
                fontSize: "1.2rem",
                display: "inline-block",
                color: "lightblue",
                fontFamily: "poppins",
              }}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </motion.div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
