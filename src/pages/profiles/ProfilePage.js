import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Post from "../posts/Post";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Button, Image } from "react-bootstrap";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { ProfileEditDropdown } from "../../components/DropdownMenu";


/**
 * Renders the ProfilePage component - displays the users' profile
 * Shows list of the posts
 * Credits - CI's Moments Walkthrough
 */

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();
  const {setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const{ pageProfile }= useProfileData();
  const[profile]= pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  const [profilePosts, setProfilePosts] = useState({results: [] });

/**
 * Retrieves profile data from childhood-memories-drf-api
 */

  useEffect(() => {
    const fetchData = async()=>{
        try{
            const[{ data:pageProfile }, {data: profilePosts}] = await Promise.all([
                axiosReq.get(`/profiles/${id}/`),
                axiosReq.get(`/posts/?owner__profile=${id}`),
            ]);
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: { results: [pageProfile]},
            }));
            setProfilePosts(profilePosts);
            setHasLoaded(true);
        } catch(err){
            console.log(err);
        }
        }; fetchData();
    }, [id, setProfileData]);

  const mainProfile = (
    <>
    {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className={`${styles.Profile} px-3 text-center`}>
        <Col lg={3} className="text-lg-left">
     <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
        <h3 className="m-2">{profile?.owner}</h3>
        <p >Profession: {profile?.profession}</p>
        <p >Location:  {profile?.location}</p>
        <p>Joined on {profile?.created_on}</p>
            </Col>
            <Col lg={3} className="text-lg-right mt-2">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                Follow
              </Button>
            ))}
        </Col>
        </Row>
        <hr />
        <Row>
        <Col lg={12}>
          <Row className="justify-content-center no-gutters">
            <Col xs={4} className={`${styles.Border} my-2 text-center`}>
              <div >{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={4} className={`${styles.Border} my-2 text-center`}>
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={4} className= "my-2 text-center">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
    
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />      
      <h5 className="text-center">See what {profile?.owner} has posted so far! <i class="fa-regular fa-hand-point-down"></i></h5>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
        children={profilePosts.results.map((post) => (
          <Post key={post.id} {...post} setPosts={setProfilePosts} />
        ))}
        dataLength={profilePosts.results.length}
        loader={<Asset spinner />}
        hasMore={!!profilePosts.next}
        next={() => fetchMoreData(profilePosts, setProfilePosts)}
      />
      ) : (
        <Asset src={NoResults}
         message={`Ohh, No results found, ${profile?.owner} hasn't posted yet.`} />
    )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;