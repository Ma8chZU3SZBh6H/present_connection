import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./components/pages/Posts";
import Post from "./components/pages/Post";
import PostAdd from "./components/pages/PostAdd";
import PostPreview from "./components/pages/PostPreview";

function App() {
  console.log(process.env.homepage);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/page/:page" component={Posts} />
          <Route exact path="/post/:user_id/:post_id" component={Post} />
          <Route exact path="/post/new" component={PostAdd} />
          <Route exact path="/post/new/preview" component={PostPreview} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
