import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import "./api/axiosDefaults";
import Footer from "./Footer";
import LandingPage from "./pages/landingPage/LandingPage";
import About from "./pages/about/About";
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
import PageNotFound from "./components/PageNotFound";
import Asset from "./components/Asset";
import appStyles from "./App.module.css";

function App() {
  const [currentUser, loading] = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  let component = null;
  if (loading) {
    component = <Container className={appStyles.Content}>
    <Asset spinner />
  </Container>;
  } else if (currentUser) {
    component = (
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          exact
          path="/home"
          render={() => (
            <PostsListPage message="No results found. Try using other search keywords." />
          )}
        />
        <Route
          exact
          path="/feed"
          render={() => (
            <PostsListPage
              message="No results found. Try using other search keywords or follow a user."
              filter={`owner__followed__owner__profile=${profile_id}&`}
            />
          )}
        />
        <Route
          exact
          path="/liked"
          render={() => (
            <PostsListPage
              message="No results found. Try using other search keywords or like a post."
              filter={`post_likes__owner__profile=${profile_id}&ordering=-likes__created_on&`}
            />
          )}
        />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/posts/create" render={() => <PostCreateForm />} />
        <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
        <Route exact path="/posts/:id" render={() => <PostDetailPage />} />

        <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
        <Route
          exact
          path="/profiles/:id/edit/username"
          render={() => <UsernameForm />}
        />
        <Route
          exact
          path="/profiles/:id/edit/password"
          render={() => <UserPasswordForm />}
        />
        <Route
          exact
          path="/profiles/:id/edit"
          render={() => <ProfileEditForm />}
        />

        <Route render={() => <PageNotFound />} />
      </Switch>
    );
  } else {
    component = (
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/signin" render={() => <SignInForm />} />
        <Route render={() => <LandingPage />} />
      </Switch>
    );
  }
  return (
    <div className={styles.App}>
      <>
        <NavBar />
        <Container fluid className={styles.Main}>
          {component}
        </Container>
        <Footer />
      </>
    </div>
  );
}

export default App;
