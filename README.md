# Facebook Clone

React TypeScript app that implements basic UI of facebook-like feed. A demo can be found [here](https://fb-clone-d26s.herokuapp.com/).
****
### Tools used
`HTML` `CSS` `TypeScript` `React` `Firebase Storage` `Firestore` `git` `Heroku` `dotenv`
****
### Notable Features

**Reactiveness:** Using media queries and adaptive `CSS` units, the app is also suitable for mobile screens resolution.

**Text Caching:** Using `React State` user can always resume post editing, and temporal text message is shown at the head of the page.   

**Images Attachment:** Using `Firebase API`, user can upload images from local machine, preview them and embed in final post. The images are cached on local `React State` and may retrieved in future usage from Firestore DB. 

**UX enhancement:** Using `flexbox` and `keyframes`, some nice features were added, for example: the way search bar (which is fully CSS made) is responding to screen resolution, or how buttons change color on hover. 
****
### What it does
Demonstrating feed comprises of previous posts and gives the option to create new ones. Each post is comprised of time stamp and text, and can include images. 