import  {  useEffect, useState } from "react";
import "./App.css";
import Contacts from "./Contacts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import firebase from "firebase/app";
import 'firebase/firestore';
import { app } from "./firebase/firebase.utils.js";



function App() {



//post type
  type postData = {
    id: string;
    text: string;
    images: string[];
    date: Date
  }
  let initDocsData: postData =
    { id: '', text: 'Please Wait', images: [''], date: new Date()}

  let docs :{docsData: postData[];} =
  { docsData: [initDocsData] }

  const [posts, setPosts] = useState(docs);
  const getPostsFromDatabase = (dbQuery: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
    ) => {
      let initDocsData: postData = 
        { id: '', text: '', images: [''], date : new Date() }  // attention!
      let docs :{docsData: postData[];} =
        { docsData: [initDocsData] }
      docs.docsData.pop()
      dbQuery.forEach((doc) => {
        let id = doc.id;
        let text = doc.data().text;
        let images = doc.data().images;
        let date:Date = doc.data().date;
        let newDoc: postData = { id:id, text: text, images: images, date:date };
        docs.docsData = [newDoc, ...docs.docsData];
      });
      setPosts(docs)
    }

    useEffect(() => {
      const db = app.firestore();
    db.collection("PostData")
      .get()
      .then((querySnapshot) => {
        getPostsFromDatabase(querySnapshot)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    },[])
  const username = {
    fName : "Meir",
    lName :  "Friedmann"};
  
  return (
    <div className="App">
      <Header />
  
      <div className="Container">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Feed">
          <Feed 
          username={username}
          posts = {posts}
          />
        </div>
        <div className="Contacts">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
