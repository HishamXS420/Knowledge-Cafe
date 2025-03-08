import PropTypes from "prop-types"; // snippet: rafcp

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-50 p-4 m-4 rounded-xl">
            <h3 className="text-2xl ">{title}</h3>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired 
}

export default Bookmark;

// import React from 'react';
// import PropTypes from 'prop-types';

// Bookmark.propTypes = {
    
// };

// function Bookmark(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Bookmark;