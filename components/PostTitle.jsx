import React from 'react';

const PostTitle = ({ title }) => {
  return (
    <h2 className='text-center text-2xl font-bold mb-5 lg:text-5xl lg:font-bold lg:mb-5 lg:leading-[4rem]'>
      {title}
    </h2>
  );
};

export default PostTitle;
