import styled from 'styled-components';

const Frame = styled.div`
width: 600px;
height: 400px;
background: linear-gradient(90deg, rgba(255,12,12,1) 0%, rgba(252,87,255,1) 100%, rgba(0,212,255,1) 100%); 
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 10px;
overflow: hidden;
`;

const Top = styled.div`
width: 100%;
height: 35%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProfileImg = styled.img`
width: auto;
height: 70px;
margin-bottom: 20px;
`;

const Bottom = styled.div`
width: 100%;
height: 65%;
display: flex;
flex-direction: column;
`;

const Info = styled.div`
width: 100%;
height: 40%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

const FF = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

const BioFrame = styled.div`
width: 100%;
height: 60%;
display: flex;
justify-content: center;
`;

const Bio = styled.div`
height: 100%;
width: 60%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
overflow: auto;
`;

export {
    Frame,
    Top,
    ProfileImg,
    Bottom,
    Info,
    FF,
    BioFrame,
    Bio
};