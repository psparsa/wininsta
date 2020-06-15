import React, { useState, useEffect } from 'react';
import {
    Frame,
    Top,
    ProfileImg,
    Bottom,
    Info,
    FF,
    BioFrame,
    Bio
} from './WinInsta.style';

function WinInsta(props) {
    let [userdata, setUserData] = useState({
        username: null,
        profile: null,
        follower: null,
        following: null,
        bio: null,
        state: false
    });

    let SetData = (x) => {
        setUserData({
            username: x["graphql"]["user"]["username"],
            profile: x["graphql"]["user"]["profile_pic_url_hd"],
            follower: x["graphql"]["user"]["edge_followed_by"]["count"],
            following: x["graphql"]["user"]["edge_follow"]["count"],
            bio: x["graphql"]["user"]["biography"],
            state: true
        })
    };

    useEffect(() => {
        fetch(`https://www.instagram.com/${props.username}/?__a=1`)
            .then(response => response.json())
            .then(data => SetData(data));
    }, [props.username])

    let show = () => {
        if (userdata.state === true) {
            return (
                <>
                    <Top>
                        <ProfileImg src={userdata.profile} />
                        <h3>{userdata.username}</h3>
                    </Top>

                    <Bottom>
                        <Info>
                            <FF>
                                <h2>Follower:</h2>
                                <h3>{userdata.follower}</h3>
                            </FF>
                            <FF>
                                <h2>Following:</h2>
                                <h3>{userdata.following}</h3>
                            </FF>
                        </Info>

                        <BioFrame>
                            <Bio>
                                {userdata.bio}
                            </Bio>
                        </BioFrame>
                    </Bottom>
                </>
            )
        } else {
            return <h1>Loading...</h1>
        }
    }


    return (
        <Frame>{show()}</Frame>
    );
}

export default WinInsta;