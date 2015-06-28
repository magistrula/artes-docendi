## How to set up basic app

### Introduction
For those who are trying out programming for the first time, here are some words of clarification about the instructions below.
- These instructions assume you are using a Mac. I will try to add Windows instructions at some point.
- Whenever you see text written `like this`, that means it is a command to be typed into your computer's terminal.
  - To open the terminal, press Command + Space and type "terminal" then press ENTER.
  - Whenever you see {{something in braces}}, that means you should replace {{the thing in braces}} with some value that makes sense in the context. For example, if you see something like "Create a directory called {{YOUR_APP_NAME}}", you would want to create a directory called whatever you intend to call your app.
- [Useful terminal commands](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-))

### Install Software
1. Install [node](https://nodejs.org/) then run the command `sudo npm install npm -g`
2. Install [Sublime](http://www.sublimetext.com/3) to use as a text editor

### Set Up Your Workspace & App Folder
1. Create a folder to hold your programming projects: `mkdir ~/Workspace`
2. Navigate into your workspace folder: `cd ~/Workspace`
3. Create a folder for your app: `mkdir {{YOUR_APP_NAME}}`
4. Navigate into your new app folder: `cd {{YOUR_APP_NAME}}`
5. Create a file that will "serve" your website (more on this soon): `touch server.js`
6. Install express (this is a node module your server will use): `npm install express`
7. Create a folder to hold the files that will make up your web site: `mkdir app`
8. In the app folder, create your main html page: `cd app && touch index.html`

### Enter Some Code
1. Open your app folder in Sublime
  - Start Sublime then click File - Open, select your app folder, then press Open
2. Add the following code to server.js:

  ```javascript
  var express = require('express'),
      app = express();

  app.use(express.static('app'));

  var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;
    console.log('Server listening at ' + host + ':' + port);
  });
  ```
3. Add the following code to index.html:

  ```html
  <!doctype html>
  <html>
    <body>
      <h1>Hello, World</h1>
    </body>
  </html>
  ```

### Start the server
1. Navigate to the "root" directory of your app: 
  - If you are in the `~/Workspace` directory, you can type `cd {{YOUR_APP_NAME}}` to get into `~/Workspace/{{YOUR_APP_NAME}}`
  - If you are in the `~/Workspace/{{YOUR_APP_NAME}}/app` directory, you can type `cd ..` to go back one level to `~/Workspace/{{YOUR_APP_NAME}}`
  - If you are not sure where you are, simply type `cd ~/Workspace/{{YOUR_APP_NAME}}`
2. Type `node server.js` to start the server
3. In your web browser, navigate to `http://localhost:3000`, and you should see your Hello World message
4. When you're done, remember to stop the server. You can do this by pressing Ctrl + C (not Command + C).
