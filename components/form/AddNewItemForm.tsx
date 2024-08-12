'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import ButtonRounded from '../buttons/ButtonRounded';
import UploadImageInput from './UploadImageInput';
import { PartialItem } from '@/types/supabaseTypes';

export default function AddNewItemForm({
  onSubmit,
  userId,
}: {
  onSubmit: (data: PartialItem) => void;
  userId: string | undefined;
}) {
  const [generalError, setGeneralError] = useState('');
  const [imageSource, setImageSource] = useState('');

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
      //ADDED BY ME
      image: '',
    },
  });

  const category = watch('item_type');
  const isWillingToPostChecked = watch('postable');
  const isPickUpChecked = watch('collectible');

  const shoeSizes = ['UK3', 'UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK10'];
  const allSizes = [
    'XXS',
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL',
    'UK4',
    'UK5',
    'UK6',
    'UK8',
    'UK10',
    'UK12',
    'UK14',
    'UK16',
    'UK18',
    'UK20',
    'UK22',
    'UK24',
    'UK26',
  ];

  const submitHandler = async (data: PartialItem) => {
    const itemData: PartialItem = {
      imageSrc: imageSource,
      donated_by: userId,
      ...data,
    };

    onSubmit(itemData);
    reset();
  };

  return (
    <div className='my-20 flex flex-col items-center gap-3'>
      <h2 className='mb-10 font-bold'>Add your item</h2>

      <form
        onSubmit={handleSubmit(submitHandler)}
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
        <p className='error-message'>{errors.item_name?.message}</p>
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
        <p className='error-message'>{errors.postcode?.message}</p>
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
            <p className='error-message'>{errors.condition?.message}</p>
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
            <p className='error-message'>{errors.item_type?.message}</p>
          </label>
        </div>
        {(category === 'clothing' || category === 'shoes') && (
          <div className='flex items-center justify-center gap-5'>
            <label
              htmlFor='size'
              className='flex flex-col items-center gap-2 font-light'
            >
              Size
              <select {...register('size')} className='input-text h-11 w-24'>
                <option value='' disabled hidden>
                  Select one
                </option>
                {category === 'clothing'
                  ? allSizes.map((size) => (
                      <option value={size} key={size}>
                        {size}
                      </option>
                    ))
                  : shoeSizes.map((size) => (
                      <option value={size} key={size}>
                        {size}
                      </option>
                    ))}
              </select>
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
          <p className='error-message'>Select at least one option </p>
        )}

        <UploadImageInput
          setImageSrc={setImageSource}
          setError={setGeneralError}
          isRequired={true}
          //ADDED BY ME
          register={register}
        />
        {generalError && <p className='error-message'>{generalError}</p>}

        <ButtonRounded type='submit'>ADD YOUR ITEM</ButtonRounded>
      </form>
    </div>
  );
}
