import React from 'react'

const About = () => {
  return (
    <div name="about " className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
          </div>
          <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus maiores corrupti, eos architecto mollitia nisi possimus eaque ratione nemo rem consectetur ad error doloremque adipisci consequatur reprehenderit ex vitae!</p>
       <br/>
       <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas sed, magnam, fugiat aliquam saepe rerum mollitia eaque delectus eligendi expedita veniam exercitationem dolorem hic maxime quis ipsum esse excepturi.</p>
        </div>
    </div>
  )
}

export default About
