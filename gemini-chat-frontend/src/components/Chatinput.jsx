import React from "react";

const ChatInput = ({ onSubmit, inputText, setInputText, onMicClick, isListening }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSubmit(inputText);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", position: "relative" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Ask anything"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{
          paddingRight: "80px",
          backgroundColor: "#888",
          color: "#ccc",
          borderColor: "#666",
          borderRadius: "6px",
          height: "49px",
          fontSize: "1.3rem",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <button
          type="button"
          onClick={onMicClick}
          disabled={isListening}
          title={isListening ? "Listening..." : "Start Speaking"}
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <i
            className={`bi ${isListening ? "bi-mic-fill" : "bi-mic"}`}
            style={{ fontSize: "1.4rem", color: "#fff" }}
          />
        </button>

        <button
          type="submit"
          title="Send"
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <i
            className="bi bi-arrow-up-circle-fill"
            style={{ fontSize: "1.6rem", color: "#fff" }}
          />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
