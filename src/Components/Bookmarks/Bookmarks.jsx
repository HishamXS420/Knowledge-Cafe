import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3 rounded-xl ml-6">
             <div className="rounded-xl border-2">
                <h3 className=" p-4 text-3xl bg-indigo-200 text-indigo-800 font-bold border-xl rounded-xl text-center">Spent time on read : {readingTime}</h3>
            </div>
            <div className="rounded-xl bg-gray-300 pb-3">
            <h2 className="text-3xl text-center mt-4 mb-6 pt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>) // যেহেতু একই bookmark বারবার add করলে same idএর multiple bookmark হয়ে যাবে, তাই এক্ষেত্রে map এর index element ব্যবহার করা better
            }
            </div>
           
           
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array ,
    readingTime: PropTypes.number
}

export default Bookmarks;