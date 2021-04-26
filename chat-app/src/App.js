import React from "react"
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
        height="100vh"
        projectID="3f2377d9-5a92-4eae-a991-7a61fcf771c9"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // userName="picklejuice"
        // userSecret="123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App