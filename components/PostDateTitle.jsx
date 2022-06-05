import React from 'react';

const PostDateTitle = ({ createdTitle, updatedTItle,  createdAt, updatedAt }) => {
  return (
    <>
      <p className='text-sm xl:text-base text-gray-500 font-mont tracking-[0.09em]'>
        <span>{createdTitle}</span>
        {new Date(createdAt).toLocaleString('ja-JP')}
      </p>
      <p className='text-sm xl:text-base text-gray-500 font-mont tracking-[0.09em]'>
        <span>{updatedTItle}</span>
        {new Date(updatedAt).toLocaleString('ja-JP')}
      </p>
    </>
  );
};

export default PostDateTitle;
