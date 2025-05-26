
# 🤖 Gemini AI Chatbot

**Gemini AI Chatbot** is a full-stack conversational AI application built with **React**, **Node.js**, **Bootstrap**, and **Spring Boot**. It connects to **Google’s Gemini API** to provide smart, real-time chat responses through a sleek and responsive interface.

---

## 🚀 Technology Stack

### Frontend

* React.js (Vite) — fast and modern UI framework
* Node.js — JavaScript runtime for development tools
* Bootstrap — responsive design and layout
* Axios — for API requests
* CSS Modules — scoped component styles

### Backend

* Java 17 — powerful, stable language
* Spring Boot — RESTful API framework
* Maven — project build and dependency management

### AI Integration

* Google Gemini API — intelligent conversational AI

---

## 📁 Project Structure

```
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
```

---

## 🔑 Key Features

* Responsive chat interface with **light and dark theme** options
* **Speech-to-text** input for convenient voice interaction
* Natural language question answering via **Google Gemini API**
* Real-time AI-generated conversational responses
* Clear separation between frontend and backend codebases
* Secure API key management with environment variables

---

## 🔒 Security

* `.gitignore` excludes sensitive files such as `application.properties` and `.env`.
* Store API keys securely using environment variables — never hard-code or commit them.
