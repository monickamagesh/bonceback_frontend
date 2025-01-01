import React from "react";
import "./Chat.css";
import b4 from "../../../assets/therapist/b4.png";
import b2 from "../../../assets/therapist/b2.jpg";
import b5 from "../../../assets/therapist/b5.jpg";

const Chat = () => {
  const handleOpenChat = (user) => {
    console.log(`Opening chat with ${user}`);
  };

  const handleSendMessage = () => {
    console.log("Sending message...");
  };

  return (
    <div className="chat-container">
      {/* Sidebar */}
      <div className="chat-sidebar">
        <div className="chat-user">
          <img src={b4} alt="@gdhanushgopi" />
          <span>@gdhanushgopi</span>
          <button
            className="open-button"
            onClick={() => handleOpenChat("@gdhanushgopi")}
          >
            open
          </button>
        </div>
        <div className="chat-user">
          <img src={b5} alt="@madhumitag" />
          <span>@madhumitag</span>
          <button
            className="open-button"
            onClick={() => handleOpenChat("@madhumitag")}
          >
            open
          </button>
        </div>
        <div className="chat-user">
          <img src={b2} alt="@vizhi" />
          <span>@vizhi</span>
          <button
            className="open-button"
            onClick={() => handleOpenChat("@vizhi")}
          >
            open
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-main">
        {/* Header */}
        <div className="chat-header">
          <div className="header-left">
            <img src={b4} alt="@gdhanushgopi" />
            <div>
              <span>@gdhanushgopi</span>
              <span className="status">online</span>
            </div>
          </div>
          <button className="view-profile-button">View Profile</button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          <div className="message sent">
            <p>
              Lorem ipsum dolor sit amet. Vel provident praesentium sit totam
              sequi a voluptate.
            </p>
            <span className="timestamp">11:11</span>
          </div>
          <div className="message received">
            <p>
              Lorem ipsum dolor sit amet. Vel provident praesentium sit totam
              sequi a voluptate aliquam a esse accusamus non animi similique in
              dolorum assumenda eos sint rerum. Aut dolorem dolorum aut
              possimus.
            </p>
            <span className="timestamp">11:11</span>
          </div>
        </div>

        {/* Input */}
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button className="send-button" onClick={handleSendMessage}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
