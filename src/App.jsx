import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/header/header";
import { useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data));
  },[])

  return (
    <>
    <Header></Header>
    <Blogs></Blogs>
    </>
  );
}

export default App;
