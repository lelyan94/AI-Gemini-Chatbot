# 🤖 Gemini AI Chatbot

**Gemini AI Chatbot** is a full-stack conversational AI application built with **React**, **Bootstrap**, and **Spring Boot**. It integrates with **Google’s Gemini API** to deliver intelligent, real-time chat responses through a sleek and responsive interface.

---

## 🚀 Technology Stack

### 🔹 Frontend
- **React.js (Vite)** – Fast and modern UI framework
- **Node.js** – JavaScript runtime for development tooling
- **Bootstrap** – Responsive UI components
- **Axios** – Promise-based HTTP client
- **CSS Modules** – Scoped component styles

### 🔹 Backend
- **Java 17** – Stable and performant language
- **Spring Boot** – RESTful API development
- **Maven** – Dependency and project management

### 🔹 AI Integration
- **Google Gemini API** – Smart conversational AI capabilities

---

## 📁 Project Structure

gemini-chat/
├── gemini-chat-frontend/         # React + Bootstrap frontend
│   ├── public/                   # Static HTML, icons, etc.
│   ├── src/
│   │   ├── assets/               # Images, logos
│   │   ├── components/           # UI components like ChatInput, ChatBox
│   │   ├── services/             # Axios HTTP client and API calls
│   │   ├── App.jsx               # Main React app entry point
│   │   ├── main.jsx              # React DOM entry point
│   │   ├── App.css               # Component-wide styles
│   │   └── index.css             # Global CSS
├── gemini-chat-backend/          # Spring Boot backend REST API
│   ├── src/
│   │   └── main/
│   │       ├── java/com/ai/gemini_chat/
│   │       │   ├── AIcontroller.java          # Handles chat REST endpoints
│   │       │   ├── GeminiChatApplication.java # Spring Boot main class
│   │       │   ├── QnAService.java            # Business logic and Q&A
│   │       │   ├── SecurityConfig.java        # Spring Security configuration
│   │       │   └── WebConfig.java             # CORS and MVC config
│   │       └── resources/
│   │           └── application.properties     # Spring Boot config file
└── .gitignore                         # Git ignored files list





---

## ✨ Key Features

- 🌓 Responsive chat interface with **light/dark mode**
- 🎤 **Speech-to-text** input for voice-based interaction
- 🤖 Real-time AI responses using **Google Gemini API**
- 🔐 Environment-based **secure API key management**
- 🔄 Clear separation of frontend and backend codebases
- ⚙️ Easily configurable with `.properties` and `.env` files

---

## 🔒 Security Best Practices

- Sensitive files like `application.properties` and `.env` are excluded via `.gitignore`
- API keys and secrets are securely stored using environment variables – **never hardcoded**

---

## 📌 Getting Started

Coming soon...

---

Let me know if you want to add:
- Deployment instructions (Docker, Vercel, etc.)
- Setup guide (prerequisites and steps)
- API usage samples (e.g. `/chat/send`)
