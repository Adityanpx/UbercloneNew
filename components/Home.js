import React from 'react';
import tw from "tailwind-styled-components";
import Link from 'next/link';

// Define the styled component using tw.div
const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`;

const Map = tw.div`
  flex-1
`;

const ActionItems = tw.div`
  flex-1 bg-white p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const ImageContainer = tw.div`
  // Add any additional styling for the image container here
`;

const Profile = tw.div`
  flex 
`;

const UserName = tw.div`
  mr-2 w-40 mt-3
`;

const UserImage = tw.img`
  // Add any additional styling for the user image here
  mr-4
`;

const Actionbuttons = tw.div`
  flex  
`;

const Button = tw.div`
  flex bg-gray-200 flex-1 m-2 items-center flex-col justify-center 
  rounded-xl transform hover:scale-105 transition text-xl flex-shrink-0
`;

const Actionimage = tw.div`
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;

const Home = () => {
  return (
    <Wrapper>
      <Map>map</Map>
      <ActionItems>
        <Header>
          <ImageContainer>
            <img
              className='h-28'
              src="Uber.png"
              alt="Uber logo"
            />
          </ImageContainer>
          <Profile>
            <UserName>Aditya Gavali</UserName>
            <UserImage
              className='h-12 rounded-full '
              src="userx.avif"
              alt="User"
            />
          </Profile>
        </Header>
        <Actionbuttons>
          
            <Button>
              <img
                className=''
                src="Ubercar1.webp"
                alt="Uber logo"
              />
              Car
            </Button>
          
          <Button>
            <img
              className=''
              src="Ubercar1.webp"
              alt="Uber logo"
            />
            Ride
          </Button>
          <Button>
            <img
              className=''
              src="Ubercar1.webp"
              alt="Uber logo"
            />
            Reserved
          </Button>
        </Actionbuttons>
        <InputButton>Where to go </InputButton>
      </ActionItems>
    </Wrapper>
  );
};

export default Home;
