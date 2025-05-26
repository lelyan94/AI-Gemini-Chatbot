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

## Project Overview

Gemini AI Chatbot provides an easy and natural way to interact with AI using either typing or voice. It uses speech-to-text technology so users can ask questions hands-free. The interface is clean, with both **light and dark modes** to suit user preferences. The backend processes requests and communicates with Google Gemini API to fetch real-time, context-aware responses.

---

## Key Features

* Responsive chat interface with **light and dark theme** options
* **Speech-to-text** input for convenient voice interaction
* Natural language question answering via **Google Gemini API**
* Real-time AI-generated conversational responses
* Clear separation between frontend and backend codebases
* Secure API key management with environment variables

---

## Project Structure

AI-GEMINI-CHATBOT/
├── gemini-chat/
│   ├── .idea/                     # IntelliJ project settings
│   ├── .mvn/                      # Maven wrapper files
│   ├── src/
│   │   └── main/
│   │       ├── java/com/ai/gemini_chat/
│   │       │   ├── AIcontroller.java        # Handles chat REST endpoints
│   │       │   ├── GeminiChatApplication.java # Spring Boot main class
│   │       │   ├── QnAService.java          # Service logic for question answering
│   │       │   ├── SecurityConfig.java      # Spring Security config
│   │       │   └── WebConfig.java           # CORS and MVC config
│   │       └── resources/
│   │           └── application.properties   # Spring Boot configuration
│
├── gemini-chat-frontend/
│   ├── public/                    # Static assets
│   ├── src/
│   │   ├── assets/                # Images, logos, etc.
│   │   ├── components/            # React components (ChatBox, ChatInput)
│   │   ├── services/              # Axios-based API calls
│   │   ├── App.jsx                # Main React component
│   │   ├── main.jsx               # React DOM entry point
│   │   ├── App.css                # App-wide styles
│   │   └── index.css              # Global CSS
│
└── .gitignore                     # Git ignored files list


---

## Security

* `.gitignore` excludes sensitive files such as `application.properties` and `.env`.
* Store API keys securely using environment variables — never hard-code or commit them.

---
