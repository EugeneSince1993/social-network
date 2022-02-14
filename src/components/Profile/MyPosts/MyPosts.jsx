import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[ required, maxLength10 ]}
          placeholder={"Post message"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

class MyPosts extends React.Component {
  postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  onAddPost = (values) => {
    this.props.addPost(values.newPostText);
  }

  render() {
    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={this.onAddPost.bind(this)} />
        <div className={s.posts}>
          {this.postsElements}
        </div>
      </div>
    );
  }
}
// 11.30
export default MyPosts;
