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