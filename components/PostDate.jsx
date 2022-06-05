import PostDateTitle from './PostDateTitle'

const PostDate = ({ createdAt, updatedAt }) => {
  return (
    <div className='flex justify-around items-center flex-col gap-2 lg:flex-row lg:my-8'>
      <PostDateTitle createdTitle="投稿日" updatedTItle="更新日" createdAt={createdAt} updatedAt={updatedAt} />
    </div>
  );
};

export default PostDate;
