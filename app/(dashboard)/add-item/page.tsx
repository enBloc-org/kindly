'use client';
import ButtonRounded from '@/components/buttons/ButtonRounded';
import insertRow from '@/utils/supabase/insertRow';
import { useForm } from 'react-hook-form';
import { PartialItem } from '@/utils/supabase/types';
import UploadImageInput from '@/components/form/UploadImageInput';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AddItemPage = () => {
  const [userId, setUserId] = useState('');
  const [imgSrc, setImageSrc] = useState('');
  const [generalError, setGeneralError] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
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
      postable: false,
      collectible: false,
      postage_covered: false,
    },
  });

  useEffect(() => {
    const getUserId = async () => {
      const supabase = createClientComponentClient();
      const { data: userData } = await supabase.auth.getSession();
      const user = userData.session?.user.id;
      if (user) {
        setUserId(user);
      }
    };
    getUserId();
  }, []);

  const onSubmit = async (data: PartialItem) => {
    const dataItem: PartialItem = {
      imageSrc: imgSrc,
      donated_by: userId,
      ...data,
    };

    await insertRow('items', dataItem);
    reset();
    router.push('/add-item/success');
  };

  const category = watch('item_type');
  const isWillingToPostChecked = watch('postable');
  const isPickUpChecked = watch('collectible');

  return (
    <div className='my-20 flex flex-col items-center gap-3'>
      <h2 className='mb-10 font-bold'>Add your item</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-5'
      >
        <label
          htmlFor='item_name'
          className='flex flex-col items-center gap-2 font-light'
        >
          Item Name
          <input
            type='text'
            className='input-text'
            {...register('item_name', { required: 'This field is required' })}
          />
        </label>
        <p className='font-extralight italic text-primaryOrange'>
          {errors.item_name?.message}
        </p>
        <label
          htmlFor='item_description'
          className='flex flex-col items-center gap-1 font-light'
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
          className='flex flex-col items-center gap-1 font-light'
        >
          Postcode <span className='text-xs italic'>First half</span>
          <input
            type='text'
            maxLength={5}
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
        <p className='font-extralight italic text-primaryOrange'>
          {errors.postcode?.message}
        </p>
        <div className='mt-2 flex items-center justify-center gap-5'>
          <label
            htmlFor='condition'
            className='flex flex-col items-center gap-1 font-light'
          >
            Condition
            <select
              {...register('condition', { required: 'Required' })}
              className='input-text '
            >
              <option value='' disabled hidden>
                Select one
              </option>
              <option value={'Good'}>Good</option>
              <option value={'Fair'}>Fair</option>
              <option value={'Poor'}>Poor</option>
              <option value={'New'}>New</option>
            </select>
            <p className='font-extralight italic text-primaryOrange'>
              {errors.condition?.message}
            </p>
          </label>
          <label
            htmlFor='item_type'
            className='flex flex-col items-center gap-1 font-light'
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
              <option value={'household'}>Home</option>
            </select>
            <p className='font-extralight italic text-primaryOrange'>
              {errors.item_type?.message}
            </p>
          </label>
        </div>
        {(category === 'clothing' || category === 'shoes') && (
          <div className='flex items-center justify-center gap-5'>
            <label
              htmlFor='size'
              className='flex flex-col items-center gap-2 font-light'
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
              className='flex flex-col items-center gap-1 font-light'
            >
              Gender
              <select {...register('item_subtype')} className='input-text '>
                <option value='' disabled hidden>
                  Select one
                </option>
                <option value={'women'}>Women</option>
                <option value={'men'}>Men</option>
                <option value={'girls'}>Girls</option>
                <option value={'boys'}>Boys</option>
                <option value={'unisex'}>Unisex</option>
              </select>
            </label>{' '}
          </div>
        )}
        {category === 'books' && (
          <label
            htmlFor='item_type'
            className='flex flex-col items-center gap-1 font-light'
          >
            Age
            <select {...register('item_subtype')} className='input-text '>
              <option value={'adults'}>Adult</option>
              <option value={'children'}>Children</option>
            </select>
          </label>
        )}
        <div className='mt-5 flex flex-col gap-3'>
          <label className='flex items-center gap-2 font-light'>
            <input type='checkbox' {...register('postable')} className='mr-2' />
            Willing to Post
          </label>
          <label className='flex items-center gap-2 font-light'>
            <input
              type='checkbox'
              {...register('collectible')}
              className='mr-2'
            />
            Pick Up
          </label>
          <label className='flex items-center justify-center gap-2 font-light'>
            <input
              type='checkbox'
              {...register('postage_covered')}
              className='mr-2'
            />
            Postage Covered
          </label>
        </div>
        {!isPickUpChecked && !isWillingToPostChecked && (
          <p className='font-extralight italic text-primaryOrange'>
            Select at least one option{' '}
          </p>
        )}

        <UploadImageInput
          setImageSrc={setImageSrc}
          setError={setGeneralError}
        />
        {generalError && (
          <p className='font-extralight italic text-primaryOrange'>
            {generalError}
          </p>
        )}

        <ButtonRounded type='submit'>ADD YOUR ITEM</ButtonRounded>
      </form>
    </div>
  );
};
export default AddItemPage;
