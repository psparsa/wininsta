import React, { useState } from 'react';
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
    let [data, setData] = useState({
        username: null,
        profile: null,
        follower: null,
        following: null,
        bio: null,
        state: false
    });


    let show = () => {
        if (data.state === true) {
            return (
                <>
                    <Top>
                        <ProfileImg src={data.profile} />
                        <h3>{data.username}</h3>
                    </Top>

                    <Bottom>
                        <Info>
                            <FF>
                                <h2>Follower:</h2>
                                <h3>{data.follower}</h3>
                            </FF>
                            <FF>
                                <h2>Following:</h2>
                                <h3>{data.following}</h3>
                            </FF>
                        </Info>

                        <BioFrame>
                            <Bio>
                                {data.bio}
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