import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Post from "./Post";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsListPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import PopularProfiles from "../profiles/PopularProfiles";
import NoResults from "../../assets/no-results.png";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

/**
 * Renders PostsList -
 * Shows all the posts if no filters are applied
 * "Liked" Page: Shows the posts which user has liked
 * "Feed" Page: Shows the lists of posts of the users that the logged in user follows
 * Credits (for variables, functions) : Moments walkthrough and is adapted according to design
 */

function PostsListPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();  
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);

     /**
    * Fetches posts from the API.
    * Returns result based on search keywords.
    */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
            `/posts/?${filter}search=${query}${category !== null ? `&category=${category}` : ""
            }`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    /**
     * Set timer of one second for API request after final keystroke
     * so that posts don’t flash with every keystroke
     */
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser, category]);

  return (
    <Container fluid>
      <Row className="h-100 mt-2">
        <Col className="px-2" sm={12} lg={3}>
            <Container className={`${appStyles.Content} mt-3 mb-3`}>
            <h5 className="text-center font-weight-bold mt-2"> Categories</h5>
            <hr />
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Books")}>Books</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Sport")}>Sport</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("School")}>School</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Person")}>Person</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Place")}>Place</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Event")}>Event</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Media")}>Media</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Art")}>Art</Badge>
            <Badge pill variant="info" className={`${styles.Badge} mb-2`} onClick={() => setCategory("Others")}>Others</Badge>
            </Container>
        </Col>
        <Col className="py-2 p-0 p-lg-2" lg={6} sm={12}>
          <PopularProfiles mobile />
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search posts based on author name, title and category!"
            />
          </Form>
          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <InfiniteScroll               
                  dataLength={posts.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                >
                {posts.results.map((post) =>(
                    < Post 
                    key={post.id}
                    {...post}
                    setPosts={setPosts}
                    />
                ))}
                </ InfiniteScroll>
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Col>
        <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
          <PopularProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default PostsListPage;
