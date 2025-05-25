import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import "../App.css";

console.log("ChatRespons loaded");

const ChatRespons = ({ respons }) => {
  const [feedback, setFeedback] = useState({});
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!respons) return null;

  const { candidates } = respons;

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="chat-respons-container">
      {candidates.map((candidate, index) => {
        const text = candidate.content.parts[0].text;

        return (
          <div className="candidate-card" key={index}>
            <ReactMarkdown
              children={text}
              components={{
                p: ({ node, ...props }) => <p className="markdown-paragraph" {...props} />,
                li: ({ node, ...props }) => <li className="markdown-list-item" {...props} />,
                strong: ({ node, ...props }) => <strong className="markdown-strong" {...props} />,
                em: ({ node, ...props }) => <em className="markdown-em" {...props} />,
                a: ({ node, ...props }) => (
                  <a className="markdown-link" target="_blank" rel="noopener noreferrer" {...props} />
                ),
              }}
            />

            {/* Action buttons */}
            <div className="response-actions">
              <button
                onClick={() => handleCopy(text, index)}
                className="action-btn"
                title="Copy"
              >
                {copiedIndex === index ? <Check size={18} color="#4caf50" /> : <Copy size={18} />}
              </button>

              <button
                onClick={() => setFeedback({ ...feedback, [index]: 'like' })}
                className={`action-btn ${feedback[index] === 'like' ? 'active' : ''}`}
                title="Like"
              >
                <ThumbsUp size={18} />
              </button>

              <button
                onClick={() => setFeedback({ ...feedback, [index]: 'dislike' })}
                className={`action-btn ${feedback[index] === 'dislike' ? 'active' : ''}`}
                title="Dislike"
              >
                <ThumbsDown size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatRespons;
