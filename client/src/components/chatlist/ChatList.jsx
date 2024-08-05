import React from "react";
import "./ChatList.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="chatList">
      <span className="title">
        <i class="fa-solid fa-house"></i>DASHBOARD
      </span>
      <Link to="/dashboard">
        <i class="fa-solid fa-comment"></i>Create a New Chat
      </Link>
      <Link to="/">
        <i class="fa-solid fa-globe"></i>Explore Echo AI
      </Link>
      <Link to="/">
        <i class="fa-brands fa-phoenix-framework"></i>Contact
      </Link>
      <hr />
      <span className="title">
        <i class="fa-solid fa-chart-simple"></i>RECENT CHATS
      </span>
      <div className="list">
        {isPending
          ? "Loading ..."
          : error
          ? "You have no chats. First make a Chat with Echo."
          : data.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                <i class="fa-solid fa-bars-staggered"></i>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to ECHO AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
