import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatRespons from "./components/ChatRespons";
import ChatInput from "./components/Chatinput";
import { fetchChatResponse } from "./services/api";
import { Sun, Moon, Plus } from 'lucide-react';


function App() {
  const [respons, setRespons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Toggle theme and persist in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;
  if (recognition) recognition.lang = "en-US";

  const startListening = () => {
    if (!recognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    setIsListening(true);
    recognition.start();
  };

  if (recognition) {
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setIsListening(false);
      recognition.stop();
      setInputText(spokenText);
    };

    recognition.onerror = () => {
      setIsListening(false);
      recognition.stop();
    };
  }

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setRespons(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setRespons(apiResponse);
      setInputText("");
    } catch (error) {
      alert("Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
  <h1 className="App-header-title">MY ChatBot 🤖</h1>
  <div className="header-buttons">
    <button onClick={toggleTheme} className="theme-toggle" title="Toggle Theme">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
    <button onClick={() => setRespons(null)} className="new-convo-btn" title="Start New Conversation">
      <Plus size={20} />
    </button>
  </div>
</header>



      <main className="App-main" role="main">
        {!loading && !respons && (
          <div className="welcome-message">👋 Hi there! Ask me anything, I’m all ears!</div>
        )}

        {loading ? (
          <div className="loading-text">
            Loading<span className="dot one">.</span>
            <span className="dot two">.</span>
            <span className="dot three">.</span>
          </div>

        ) : (
          <div className="chat-container">
            <ChatRespons respons={respons} />
          </div>
        )}
      </main>

      <div className="App-input-container">
        <ChatInput
          onSubmit={handleQuestionSubmit}
          inputText={inputText}
          setInputText={setInputText}
          onMicClick={startListening}
          isListening={isListening}
        />
        <div className="footer-hint">Got questions? I’ve got (some) answers. Fire away! 🔥</div>
      </div>
    </div>
  );
}

export default App;
