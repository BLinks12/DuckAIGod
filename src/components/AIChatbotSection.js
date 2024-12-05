// AIChatbotSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

export const AIChatbotSection = () => {
  const [messages, setMessages] = useState([
    { sender: 'DuckAI', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { sender: 'You', text: input }]);

    // For security, you should implement the OpenAI API call on a backend server.
    // Below is a placeholder for the AI response.

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = "I'm here to help with any questions about $DUCKY!";
      setMessages((prevMessages) => [...prevMessages, { sender: 'DuckAI', text: aiResponse }]);
    }, 1000);

    setInput('');
  };

  return (
    <ChatbotContainer id="ai-chatbot">
      <h2>DuckAI Chatbot</h2>
      <ChatWindow>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            <strong>{msg.sender}:</strong> {msg.text}
          </Message>
        ))}
      </ChatWindow>
      <InputContainer>
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputContainer>
    </ChatbotContainer>
  );
};

const ChatbotContainer = styled.section`
  padding: 100px 20px;
  background-color: #151515;
  text-align: center;
  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #ffcc00;
  }
`;

const ChatWindow = styled.div`
  max-width: 800px;
  max-height: 400px;
  margin: 0 auto 20px auto;
  padding: 20px;
  background-color: #1f1f1f;
  border-radius: 10px;
  overflow-y: auto;
  text-align: left;
`;

const Message = styled.div`
  margin-bottom: 10px;
  color: ${(props) => (props.sender === 'DuckAI' ? '#ffcc00' : '#ffffff')};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChatInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ffcc00;
  border-radius: 5px;
  background-color: #1f1f1f;
  color: #ffffff;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #ffcc00;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #e6b800;
  }
`;
