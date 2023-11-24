'use client';
import ButtonRounded from '@/components/ButtonRounded';
import AddRowToSupabase from '@/utils/supabase/AddRowToSupabase';
import { useForm } from 'react-hook-form';
import { PartialItem } from '@/utils/supabase/types';

const AddItemPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      item_name: '',
      item_description: '',
      postcode: '',
      condition: '',
      item_type: '',
      size: '',
      item_subtype: '',
      image: null,
    },
  });

  const onSubmit = async (data: PartialItem) => {
    try {
      console.log(data);

      await AddRowToSupabase('items', data);
    } catch (error) {
      console.error('Error adding item to Supabase:', error);
    }
  };

  const category = watch('item_type');

  return (
    <div className='flex flex-col items-center gap-3 my-5'>
      <h2 className='font-bold'>Add your item</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-5'
      >
        <label
          htmlFor='item_name'
          className='flex flex-col gap-2 items-center font-light'
        >
          Item Name
          <input
            type='text'
            className='input-text'
            {...register('item_name', { required: 'This field is required' })}
          />
        </label>
        <p className='italic font-extralight text-primaryOrange'>
          {errors.item_name?.message}
        </p>
        <label
          htmlFor='item_description'
          className='flex flex-col gap-1 items-center font-light'
        >
          Description
          <textarea
            {...register('item_description')}
            maxLength={200}
            className='input-text'
          />
        </label>
        <label
          htmlFor='postcode'
          className='flex flex-col gap-1 items-center font-light'
        >
          Postcode <span className='text-xs italic'>First half</span>
          <input
            type='text'
            {...register('postcode', {
              required: 'This field is required',
              maxLength: {
                value: 5,
                message: 'Max length 5 characters',
              },
            })}
            className='input-text w-24 text-center'
          />
        </label>
        <p className='italic font-extralight text-primaryOrange'>
          {errors.postcode?.message}
        </p>
        <div className='flex items-center justify-center gap-5 mt-2'>
          <label
            htmlFor='condition'
            className='flex flex-col gap-1 items-center font-light'
          >
            Condition
            <select
              {...register('condition', { required: 'Required' })}
              className='input-text '
            >
              <option value='' disabled hidden>
                Select one
              </option>
              <option value={'good'}>Good</option>
              <option value={'fair'}>Fair</option>
              <option value={'poor'}>Poor</option>
              <option value={'new'}>New</option>
            </select>
            <p className='italic font-extralight text-primaryOrange'>
              {errors.condition?.message}
            </p>
          </label>
          <label
            htmlFor='item_type'
            className='flex flex-col gap-1 items-center font-light'
          >
            Categories
            <select
              {...register('item_type', { required: 'Required' })}
              className='input-text '
            >
              <option value='' disabled hidden>
                Select one
              </option>
              <option value={'clothing'}>Clothing</option>
              <option value={'shoes'}>Shoes</option>
              <option value={'toys'}>Toys</option>
              <option value={'books'}>Books</option>
              <option value={'household'}>Household</option>
            </select>
            <p className='italic font-extralight text-primaryOrange'>
              {errors.item_type?.message}
            </p>
          </label>
        </div>
        {(category === 'clothing' || category === 'shoes') && (
          <div className='flex items-center justify-center gap-5'>
            <label
              htmlFor='size'
              className='flex flex-col gap-2 items-center font-light'
            >
              Size
              <input
                type='text'
                {...register('size')}
                maxLength={30}
                className='input-text h-11 w-24'
              />
            </label>
            <label
              htmlFor='item_type'
              className='flex flex-col gap-1 items-center font-light'
            >
              Gender
              <select {...register('item_subtype')} className='input-text '>
                <option value='' disabled hidden>
                  Select one
                </option>
                <option value={'women'}>Women</option>
                <option value={'men'}>Men</option>
                <option value={'girl'}>Girl</option>
                <option value={'boy'}>Boy</option>
                <option value={'unisex'}>Unisex</option>
              </select>
            </label>{' '}
          </div>
        )}
        {category === 'books' && (
          <label
            htmlFor='item_type'
            className='flex flex-col gap-1 items-center font-light'
          >
            Age
            <select {...register('item_subtype')} className='input-text '>
              <option value={'adult'}>Adult</option>
              <option value={'children'}>Children</option>
            </select>
          </label>
        )}
        <div className='flex flex-col items-center mt-10 font-light gap-5'>
          <label htmlFor='image'>Upload an image:</label>
          <input
            type='file'
            {...register('image')}
            accept='image/*'
            className='ml-5'
          />
        </div>
        <ButtonRounded type='submit'>ADD YOUR ITEM</ButtonRounded>
      </form>
    </div>
  );
};
export default AddItemPage;
