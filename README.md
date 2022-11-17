# Facebook Clone

React TypeScript app that implements basic UI of facebook-like feed. A demo can be found [here](https://meirfriedmann.github.io/fb-clone/) (works best with Firefox).
****
### Tools used
`HTML` `CSS` `TypeScript` `React.js` `Firebase Storage` `Firestore` `git` `Heroku` `dotenv`
****
### What it does
Demonstrating feed comprises of previous posts and giving the option to create new ones. Each post is comprised of timestamp and text and can include images. 
****
### Notable Features

**Reactiveness:** Using media queries and adaptive `CSS` units, the app is also suitable for mobile screens resolution.

**Text Caching:** Using `React State` user can always resume post editing, and a temporal text message is shown at the head of the page.   

**Images Attachment:** Using `Firebase API`, user can upload images from a local machine, preview them and embed them in final post. The images are cached on local `React State` and may be retrieved in future usage from Firestore DB. 

**UX Enhancement:** Using `flexbox` and `keyframes`, some nice features were added, for example: the way search bar (which is fully CSS made) is responding to screen resolution, or how buttons change color on hover. 

### Installation
In `.env`, fill in your API keys (`firestore` and `firebase-storage`). Run `npm install` and then `npm start` to build.
