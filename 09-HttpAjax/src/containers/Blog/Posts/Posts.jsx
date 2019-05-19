import React, { Component } from "react";
// import axios from "axios";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Anand Dev"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  postSelectedhandler = id => {
    // Both will work.
    // this.props.history.push("/" + id);
    this.props.history.push({
      pathname: "/" + id
    });
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>
        Oops! Something went wrong!
      </p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            clicked={() => this.postSelectedhandler(post.id)}
            title={post.title}
            author={post.author}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
