import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
            <p> how are you</p>
            <div className="content">
               
                {props.timeAgo}
            </div>

            <div className="page">
               
                {props.spoo}

            </div>

            <div className="page">
        
                {props.content}

            </div>
        </div>
   
            
                

        )

};
      
        export default CommentDetail;