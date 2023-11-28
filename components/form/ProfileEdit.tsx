export const ProfileEdit = () => {
  return (
    <div>
      <form className='flex flex-col items-center gap-5'>
        <label
          htmlFor='username'
          className='flex flex-col gap-2 items-center font-light'
        >
          Username
          <input type='text' className='input-text' />
        </label>
        <label
          htmlFor='username'
          className='flex flex-col gap-2 items-center font-light'
        >
          Avatar Photo
          <input type='file' />
        </label>
      </form>
    </div>
  );
};
