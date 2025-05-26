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

AI-GEMINI-CHATBOT/
├── gemini-chat/
│ ├── .idea/ # IntelliJ project settings
│ ├── .mvn/ # Maven wrapper files
│ ├── src/
│ │ └── main/
│ │ ├── java/com/ai/gemini_chat/
│ │ │ ├── AIcontroller.java # Handles chat REST endpoints
│ │ │ ├── GeminiChatApplication.java # Spring Boot main class
│ │ │ ├── QnAService.java # Business logic for Q&A
│ │ │ ├── SecurityConfig.java # Spring Security config
│ │ │ └── WebConfig.java # CORS and MVC config
│ │ └── resources/
│ │ └── application.properties # App configuration
├── gemini-chat-frontend/
│ ├── public/ # Static assets (HTML, icons)
│ ├── src/
│ │ ├── assets/            # Images, logos, etc.
│ │ ├── components/        # React components (ChatBox, ChatInput)
│ │ ├── services/          # Axios-based API calls
│ │ ├── App.jsx            # Main React component
│ │ ├── main.jsx           # React DOM entry point
│ │ ├── App.css            # Component-level styles
│ │ └── index.css          # Global CSS
└── .gitignore             # Git ignored files list


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
