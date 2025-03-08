import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/header/header";
import { useEffect } from "react";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);// যখন কোনো কিছু পড়া হয়নাই তখন default মান 0, তাই initial value 0 


  // useEffect(() => {
    
  // },[])

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) =>{ // 'id' parameter used to apply on bookmark removal on read  
    setReadingTime(readingTime + time);
    // console.log('remove bookmark', id); 
    
  const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id); 
  setBookmarks(remainingBookMarks);
  };

  // Remove the read blog from bookmark


  useEffect(() => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data));
  },[])

  return (
    <>
    <div className="md:flex-col mx-auto max-w-6xl">
    <Header></Header>
      <div className="flex justify-center mt-6">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
       </div>
    </div>
  
   
    </>
  );
}

export default App;
