import styles from "./App.module.css";
import Sidebar from './components/Sidebar';
import NavBar from "./components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./api/axiosDefaults";
import Footer from "./Footer";
import Header from "./Header";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostEditForm from "./pages/posts/PostEditForm";
import PostDetailPage from "./pages/posts/PostDetailPage";
import PostsListPage from "./pages/posts/PostsListPage";
import ProfilePage from "./pages/profiles/ProfilePage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";

    return (
        // <Router>
        //   <div className="App">
        // <Header />
        //     <Sidebar />
        //   </div>
        // </Router>
      
    <div className={styles.App}>
     <Header /> 
     {/* <NavBar />  */}
        <Sidebar />
    <Container fluid className={styles.Main}>
      <Switch>
          <Route exact 
          path="/" 
          render={() => <PostsListPage 
          message="No results found. Try using other search keywords." />} />
          <Route exact 
          path="/feed" 
          render={() => <PostsListPage 
          message="No results found. Try using other search keywords or follow a user."
          filter={`owner__followed__owner__profile=${profile_id}&`} />} />
          <Route exact 
          path="/liked" 
          render={() => <PostsListPage 
          message="No results found. Try using other search keywords or like a post."
          filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_on&`} />} /
          >
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/posts/:id" render={() => <PostDetailPage />} />  
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} /> 
          <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
          <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />        
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container> 
      <Footer /> 
    </div>
   
  );
}

export default App;