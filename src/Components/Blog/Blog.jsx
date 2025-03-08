import PropTypes from "prop-types";
import { BsBookmarkStarFill } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20  space-y-4">
      <img
        className="w-full mb-8 rounded-xl"
        src={cover}
        alt={`Cover of the title ${title}`}
      />

      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className=" text-xl mr-2">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-xl text-indigo-700"
          >
            <BsBookmarkStarFill />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <div className="mt-6">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-4">
            <a href="">#{hash}</a>
          </span>
        ))}
        {/* এখানে hashtag এর যেহেতু id নাই , কিন্তু map এর তিনটা element এর মধ্যে idx আছে , তাই idx কে key হিসেবে ব্যবহার করতে হবে*/}
      </div>
      <button 
      onClick={() => handleMarkAsRead(id, reading_time)}
      className="text-purple-800 font-bold underline">
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
