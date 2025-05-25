import axios from "axios";
console.log("ChatResponse loaded");

const API_URL = "http://localhost:8081/api/qna/ask";

export const fetchChatResponse = async (question) => {
    try {
        const response = await axios.post(API_URL, { question }, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Axios error:", error);
        throw error;
    }
};
