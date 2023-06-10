import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper} from "../utils/utils";
// import { useHistory } from "react-router";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

/**
 * To keep profile data to be in sync across all the components
 * To access profile data in several places around the application
 * Credit: CI's Moments Walkthrough
 */
export const ProfileDataProvider = ({children})=> {
    const[profileData, setProfileData] = useState({
        pageProfile: {results: []},
        popularProfiles: {results: []}
    });

    const currentUser = useCurrentUser();

    const handleFollow = async(clickedProfile)=> {
        try{
            const{ data }= await axiosRes.post("/followers/", {
                followed: clickedProfile.id,
            });
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                  results: prevState.pageProfile.results.map((profile) =>
                    followHelper(profile, clickedProfile, data.id)
                  ),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                      followHelper(profile, clickedProfile, data.id)
                    ),
                  },
            }));
        }catch (err) {
            console.log(err);
        };
    };
    const handleUnfollow = async(clickedProfile)=>{
        try{
            await axiosRes.delete(
                `/followers/${clickedProfile.following_id}/`
                );
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile:{
                    results: prevState.pageProfile.results.map((profile)=>
                    unfollowHelper(profile, clickedProfile)
                    ),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                      unfollowHelper(profile, clickedProfile)
                    ),
                  },
            }));
        }catch(err){
            console.log(err);
        };
    };

    useEffect(() => {
        const handleMount = async () => {
            try {
              const { data } = await axiosReq.get(
                "/profiles/?ordering=-followers_count"
              );
              setProfileData((prevState) => ({
                ...prevState,
                popularProfiles: data,
              }));
            } catch (err) {
              console.log(err);
            }
          };
      
          handleMount();
        }, [currentUser]);

        return(
            <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider value={{
                setProfileData, handleFollow, handleUnfollow }}>
            {children}
    
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
        )
}