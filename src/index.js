import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {


    return <div className="ui continer comments"> 

        <ApprovalCard>
            <div>
                <h1>warning</h1>



                <p>are you sure you want to conitnue this?</p>

            </div>


        </ApprovalCard>

        <ApprovalCard>

            <CommentDetail author="sam"
                timeAgo="tima at 11:45am"
                content="nice to blog this"
            />

        </ApprovalCard>

  
        <ApprovalCard>
           
        <CommentDetail author="pk"
            timeAgo="tima at 1:145pm"
            content="i love my subject"
        />
        </ApprovalCard>


        <ApprovalCard>
        <CommentDetail author="spoo"
            timeAgo="tima at 2:50pm"
            content="iam ur softwareengg"
        />
      </ApprovalCard>

       </div>
       
};
ReactDOM.render(<App />, document.querySelector('#root'))
