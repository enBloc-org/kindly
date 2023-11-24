'use client';

import { useForm } from 'react-hook-form';

const AddItemPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className='flex flex-col items-center gap-3 my-5'>
      <h2 className='font-bold'>Add your item</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label
          htmlFor='item_name'
          className='flex flex-col gap-2 items-center font-light'
        >
          Item Name
          <input type='text' name='item_name' className='input-text' />
        </label>
        <label
          htmlFor='item_description'
          className='flex flex-col gap-1 mt-4 items-center font-light'
        >
          Description
          <textarea
            name='item_description'
            maxLength={200}
            className='input-text'
          />
        </label>
        <label
          htmlFor='postcode'
          className='flex flex-col gap-1 mt-4 items-center font-light'
        >
          Postcode <span className='text-xs italic'>First half</span>
          <input
            type='text'
            maxLength={5}
            name='postcode'
            className='input-text w-24 text-center'
          />
        </label>
        <div className='flex gap-5'>
          <label
            htmlFor='condition'
            className='flex flex-col gap-1 mt-4 items-center font-light'
          >
            Condition
            <select name='condition' className='input-text '>
              <option value={'new'}>New</option>
              <option value={'good'}>Good</option>
              <option value={'fair'}>Fair</option>
              <option value={'poor'}>Poor</option>
            </select>
          </label>
          <label
            htmlFor='condition'
            className='flex flex-col gap-1 mt-4 items-center font-light'
          >
            Categories
            <select name='condition' className='input-text '>
              <option value={'clothin'}>Clothing</option>
              <option value={'shoes'}>Shoes</option>
              <option value={'toys'}>Toys</option>
              <option value={'books'}>Books</option>
              <option value={'household'}>Household</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};
export default AddItemPage;
