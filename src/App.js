import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Posts from "./components/pages/Posts";
import Post from "./components/pages/Post";
import PostAdd from "./components/pages/PostAdd";
import PostPreview from "./components/pages/PostPreview";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <Posts />
        </Route>
        <Route path="/post/:user_id/:post_id">
          {(params) => <Post {...params} />}
        </Route>
        <Route path="/post/new">
          <PostAdd/>
        </Route>
        <Route path="/post/new/preview">
          <PostPreview/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
