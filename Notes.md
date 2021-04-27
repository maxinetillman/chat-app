## Project Notes

1. Create React App

```npx create-react-app```

Had to re-download node.js in order to use node, npx, and npm. 

2. Delete SRC folder and start again
- Create new src folder
- Create new index.js 
- Import React, React DOM
- Render our App and root document with React DOM 
    - Every React app starts with simple div thats named root 
    - Check HTML page which shows div called root 
- Create App.js and import it in index.js

3. App.js 

Lots of installations here. 
- Dependancies:
    - npm i 
    - npm i @ant-design/icons axios react-chat-engine
    - Difficulting installing react-chat-engine but resolved with ```npm i react-chat-engine  --legacy-peer-deps```
- Import react-chat-engine and App.css

3. App.css
- Add styling 

4. Components 

<ChatEngine />
Props:
Height - want this chat app to be entire screen so 100vh
projectID -  string you get when you create chat application
userName - username, set as empty string
userSecret - password, set as empty string

5. [Chat Engine Set Up](https://chatengine.io/)
- Add new project, give name
- ChatEngine projectID prop = project id from new project 
- For simplicity we wont add it to .env, we will pass a prop instead
- on new project page, the right panel ask for new user
- create new user 
    - username: picklejuice
    - usersecret: 123 
    - enter these details in ChatEngine props 
- create new chat 

*** With just the above code, we have a working MVP ***

6. Adding More Users
- create another user same method as first time
- run application again
- check side panel input to view new user as should of auto added
- can now add new user to the chat 

7. Logging in as different Users
- Currently we are unable to change user as we have set first user details within the props of ChatEngine

8. Adding renderChatFeed 
- Adding our own component called renderChatFeed which render own component for entire chat feed
- renderChatFeed will have a value of a fat arrow function, argument is chatAppProps and it will render a component called ChatFeed
- Inside the ChatFeed component element, spread the propers ...chatAppProps

9. Creating ChatFeed component
- create component folder and create ChatFeed.jsx file inside 
- You dont need to import React if v 17 or older so leaving this 
- Created component which takes in props, will console.log props inside the function and will render a div with chat feed text 
- Looking at browser, can see text in main body and in console, can see object which shows all the info of the chat going on 

Customisation Documentation on ChatEngine.io 
- [ChatEngine Docs on Customisation](chatengine.io/docs/customize_ui)

Access to Functions and API Calls
- [Functions and API calls](chatengine.io/docs/functions)

Event Hooks
- [Event hooks](chatengine.io/docs/hooks)

13. Chat Functions 
- create My Message, Their Message, and Message Form components and import to Chat Feed

13. (b) Destructing Props in ChatFeed
- we hand in props and destructure on first line of component
- we take out chats, activeChat, userName, messages
- we need to use generic props even though we destrucrturing. 

13. (c) Finding current chat 
- Syntax Explaination: chat is equal to IF chats exist then find chats then active chat, so we look for specific active chat. 
```
const chat = chats && chats[activeChat]
```
- console log chats username and messages to view it is working


14. Render Message function inside ChatFeed
- We have imported MessageForm
- We have imported MyMessage
- We have imported TheirMessage
- We need to fetch all our messages using keys
    - first line we create keys = Object.keys(messages)
    - first line saves our messages into keys 
    - console log to understand keys, it shows message ids (keys are ids of specific messages)
    - call function and view the keys 
    - go back to function, render messages
    - we use keys.map and take in key and index, specific message will be saved with messages[key]
        - we need to know 2 things about the messages:
        1. const lastMessageKey = we check if index equal to 0, then return null or if there is, find the last message
        2. const isMyMessage = if username is equal to message.sender.username 
        - we need to stay within the map and create a return statement render 
        - create div within return that will act as our message
        - as we are mapping still, we add key to div with msg index 
        - inline styling width to 100
        - inside this div, add another div with classname message-block 
        - inside message-block, we will return the messages. 
            - dynamic block of code{
                if it is MyMessage, we will render new component <MyMessage />
                if it not MyMessage, we will render new component <TheirMessage />
            }
            - new div under message-block which will have classname of read-receipts
            - inline style will change depending on whos message is read 
15. Message Form component
    - need a form (className message-form)
        - onSubmit handler will call handle submit handler 
    - inside form, need an input  
        - classname of message-input
        - placeholder "send a message'
        - value will be equal to value
        - onChange will handle handleChange function
    - value comes from statue, imported useState fom react
        - value is state, setValue, and initialState is empty string
    - Handle Change logic 
        - takes in an event as argument
        - setValue = event.target.value to save value of input
        - Taking advantage of React Engine features
            - import sendMessage(), isTyping() from 'react-chat-engine'  
        - Call isTyping() inside
            - for the arguments, we need to pass props and chatId
    - Add props in Message Form parameters
    - Destructure props in Message Form { chatId, creds } 
    - Handle Submit logic
        - event.preventDefault() to stop page reload when form submitted
        - trim the text of message using trim()
        - if message is greater than 0, then.. 
        - sendMessage(creds, chatId, {text})

** Can now send new messages **

16. Message Form - Adding Ability to Send Images
    - Within the form, add a label under the input
        - htmlFor - upload-button
        - span with class image-button
        - import icons from @ant-design/icons 
        - call PictureOutlined as self closing with classname picture-icon 
    - Input 
        - type will be file
        - multiple will be false
        - id upload-button
        - style set to none as we have the label
        - onChange = handleUpload

    - handeUpload logic
        - takes in event
        - sendMessage(creds, chatId, { files: event.target.files, text: ''}) called
    
    - Add button 
        - type will be submit
        - className sendOutlined 
        - className send-icon

** Now user can click icon of image or attachment and send files **

17. Read receipts  
    - in Chat Feed component, function renderReadReceipts created
    - renderReadReceipts takes two parameters - messages, isMyMessage 
    - inside we will map over the people that read messages
        - chat.people.map paramets take in person and index
        - in map code block we want to render the people who read it
        - if person has read message then we will create empty div
            - key is read index
            - className is read-receipt
            - Styles added to appear 
            - Background image will be that of the sender as per their message code 
        - && () < means it will only render if person has read the message 
        - return this map 

    - Replace 'render receipts' in render to this function
    - icon will now show when message read

18. Changing Users Manual

    - Can manually change by inputting second user detail in App.js 

19. Log in Form 

    - New component, Log In Form 
    - useState for username
    - useState for password
    - import axios 

    - in Log In Form, in return, need to add a form with 
    input to add username and password
    