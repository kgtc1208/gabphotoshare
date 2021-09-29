import React, {useState} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from './components/CreatePost'
import PostPage from './components/PostPage'
import UserPage from './components/UserPage'
import EditProfile from './components/EditProfile'
import AppBar from './components/Home/AppBar/MyAppBar'
import MyCommentsPage from './components/MyCommentsPage'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [rerenderer, setRerenderer] = useState('')
  return (
    <Router>
      <div className='App'>
      <AppBar rerenderer = {rerenderer} />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/postSomething" exact>
            <CreatePost />
          </Route>
          <Route path="/post/:id" render={(props) => <PostPage {...props} />} />
          <Route path="/user/:username" render={(props) => <UserPage {...props} />} />
          <Route path="/:user/posts" render={(props) => <Home {...props} />} />
          <Route path="/:user/liked_posts" render={(props) => <Home {...props} />} />
          <Route path="/editProfile" exact>
            <EditProfile setRerenderer = {setRerenderer} />
          </Route>
          <Route path="/:user/comments" render={(props) => <MyCommentsPage {...props} />}/>
          <Route path='/search' exact>
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
