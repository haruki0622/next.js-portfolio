import React from 'react';

const PostTitle = ({ title }) => {
  return (
    <h2 className='text-center text-3xl font-bold mb-5 xl:text-5xl xl:font-bold xl:mb-5'>
      {title}
    </h2>
  );
};

export default PostTitle;
