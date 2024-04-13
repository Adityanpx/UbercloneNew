import { Input } from 'postcss';
import React from 'react';
import tw from "tailwind-styled-components";

// Define the styled component for the Backbutton


function Search() {
  return (
    <Wrapper>
      <ButtonContainer>
        {/* Use the styled div as the back button container */}
        <BackbuttonContainer>
          <img 
          className='h-10'
          src='backbutton .png' alt='Back' />
        </BackbuttonContainer>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <img
          className='h-10'
          src='graycircle.jpeg'
          />

<img
          className='h-10'
          src='line.jpeg'
          />

<img
          className='h-8 px-1' 
          src='blackbox.avif'
          />



        </FromToIcons>
        <InputBoxes>

          <input 
          className=' h-10 bg-gray-200 my-2 rounded-lg p-4  outline-none border-none'
          placeholder='Enter Pickup Location'/>
          <input 
          className='h-10 bg-gray-200 rounded-lg p-4 outline-none border-none'
          placeholder='Where to...?'/>
        </InputBoxes>

        <PlusIcon>
          <img
          className='h-10 p-1 px-2'
          src='plus.png'/>
        </PlusIcon>
       
      </InputContainer>
      <StarOlace>
        <Star></Star>
        <Place> Saved places </Place>
      </StarOlace>
      <ConfirmButton>
        <button className='bg-black text-white p-2 rounded-lg  '> confirm Location</button>
      </ConfirmButton>


    </Wrapper>
  );
}

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen`;
const ButtonContainer = tw.div`
bg-white px-2`;
const BackbuttonContainer = tw.div`

`;
const InputContainer = tw.div` bg-white px-2 flex items-center`;
const FromToIcons = tw.div` flex flex-col mr-2 items-center`;
const InputBoxes = tw.div` flex flex-col flex-1 `;
const PlusIcon = tw.div``;
const StarOlace = tw.div`bg-white mx-4 rounded-sm flex items-center mt-2 p-4 h-10`;
const Star = tw.div``
const Place =tw.div``;
const ConfirmButton = tw.div`mt-3 flex justify-center h-10 rounded-lg `;
