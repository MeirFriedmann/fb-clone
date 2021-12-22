import { useEffect, useState } from "react";
import "./css/App.css";
import Header from "./Header";
import Feed from "./Feed";
import firebase from "firebase/app";
import 'firebase/firestore';
import { app } from "./firebase/firebase.utils";



function App() {

  //post type
  type postData = {
    id: string;
    text: string;
    images: string[];
    date: Date
  }
  let initDocsData: postData =
    { id: '', text: 'Please Wait', images: [''], date: new Date() }

  let docs: { docsData: postData[]; } =
    { docsData: [initDocsData] }

  const [posts, setPosts] = useState(docs);
  const getPostsFromDatabase = (dbQuery: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  ) => {
    let initDocsData: postData =
      { id: '', text: '', images: [''], date: new Date() }  // attention!
    let docs: { docsData: postData[]; } =
      { docsData: [initDocsData] }
    docs.docsData.pop()
    dbQuery.forEach((doc) => {
      let id = doc.id;
      let text = doc.data().text;
      let images = doc.data().images;
      let date: Date = doc.data().date;
      let newDoc: postData = { id: id, text: text, images: images, date: date };
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
        // console.log("Error getting documents: ", error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const username = {
    fName: "Meir",
    lName: "Friedmann"
  };

  return (
    <div className="App">

      <Header />
      <div className="body-container">
        <Feed
          username={username}
          posts={posts}
        />
      </div>
    </div>
  );
}

export default App;
