import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "wouter";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/post/:user_id/:post_id">
        {(params) => <Post {...params} />}
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </>
  );
}

export default App;
