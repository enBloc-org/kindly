'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { useState, useEffect } from 'react';

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
  const [imageSource, setImageSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const methods = useForm({
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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitted },
  } = methods;

  const categoryValue = watch('item_type');
  const isWillingToPostChecked = watch('postable');
  const isPickUpChecked = watch('collectible');
  const isPostageCoveredChecked = watch('postage_covered');
  const postcodeValue = watch('postcode');
  const itemNameValue = watch('item_name');
  const itemDescriptionValue = watch('item_description');
  const conditionValue = watch('condition');

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
    if (isSubmitting) {
      console.log('Preventing duplicate submission');
      return;
    }

    setIsSubmitting(true);
    try {
      const itemData: PartialItem = {
        imageSrc: imageSource,
        donated_by: userId,
        ...data,
      };

      console.log('Submitting item data:', JSON.stringify(itemData, null, 2));
      await onSubmit(itemData);
      console.log('Item submitted successfully');
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting item:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitSuccess) {
      reset();
      setImageSource('');
      setSubmitSuccess(false);
    }
  }, [submitSuccess, reset]);

  return (
    <FormProvider {...methods}>
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
            <span className='flex items-center gap-1'>
              Item Name
              <span className=''>*</span>
            </span>
            <input
              type='text'
              className='input-text'
              {...register('item_name', { required: 'This field is required' })}
            />
          </label>
          {isSubmitted && !itemNameValue && (
            <p className='error-message'>This field is required</p>
          )}

          <label
            htmlFor='item_description'
            className='flex flex-col items-center gap-1 font-light'
          >
            <span className='flex items-center gap-1'>
              Description
              <span className=''>*</span>
            </span>
            <textarea
              {...register('item_description', {
                required: 'This field is required',
              })}
              maxLength={200}
              className='input-text'
            />
          </label>
          {isSubmitted && !itemDescriptionValue && (
            <p className='error-message'>This field is required</p>
          )}

          <label
            htmlFor='postcode'
            className='flex flex-col items-center gap-1 font-light'
          >
            <span className='flex items-center gap-1'>
              Postcode
              <span className=''>*</span>
            </span>
            <span className='text-xs italic'>First half</span>
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
          {isSubmitted && !postcodeValue && (
            <p className='error-message'>This field is required</p>
          )}

          <div className='mt-2 flex items-center justify-center gap-5'>
            <div className='flex flex-col items-center'>
              <label
                htmlFor='condition'
                className='flex flex-col items-center gap-1 font-light'
              >
                <span className='flex items-center gap-1'>
                  Condition
                  <span className=''>*</span>
                </span>
                <select
                  {...register('condition', { required: 'Required' })}
                  className='input-text'
                >
                  <option value='' disabled hidden>
                    Select one
                  </option>
                  <option value={'Good'}>Good</option>
                  <option value={'Fair'}>Fair</option>
                  <option value={'Poor'}>Poor</option>
                  <option value={'New'}>New</option>
                </select>
              </label>
              <div className='h-6'>
                {isSubmitted && !conditionValue && (
                  <p className='error-message'>This field is required</p>
                )}
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <label
                htmlFor='item_type'
                className='flex flex-col items-center gap-1 font-light'
              >
                <span className='flex items-center gap-1'>
                  Categories
                  <span className=''>*</span>
                </span>
                <select
                  {...register('item_type', { required: 'Required' })}
                  className='input-text'
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
              </label>
              <div className='h-6'>
                {isSubmitted && !categoryValue && (
                  <p className='error-message'>This field is required</p>
                )}
              </div>
            </div>
          </div>

          {(categoryValue === 'clothing' || categoryValue === 'shoes') && (
            <div className='flex items-center justify-center gap-5'>
              <div className='flex flex-col items-center'>
                <label
                  htmlFor='size'
                  className='flex flex-col items-center gap-2 font-light'
                >
                  Size
                  <select
                    {...register('size')}
                    className='input-text h-11 w-24'
                  >
                    <option value='' disabled hidden>
                      Select one
                    </option>
                    {categoryValue === 'clothing'
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
                <div className='h-6'></div>
              </div>
              <div className='flex flex-col items-center'>
                <label
                  htmlFor='item_type'
                  className='flex flex-col items-center gap-1 font-light'
                >
                  Gender
                  <select {...register('item_subtype')} className='input-text'>
                    <option value='' disabled hidden>
                      Select one
                    </option>
                    <option value={'women'}>Women</option>
                    <option value={'men'}>Men</option>
                    <option value={'girls'}>Girls</option>
                    <option value={'boys'}>Boys</option>
                    <option value={'unisex'}>Unisex</option>
                  </select>
                </label>
                <div className='h-6'></div>
              </div>
            </div>
          )}
          {categoryValue === 'books' && (
            <div className='flex flex-col items-center'>
              <label
                htmlFor='item_type'
                className='flex flex-col items-center gap-1 font-light'
              >
                Age
                <select {...register('item_subtype')} className='input-text'>
                  <option value={'adults'}>Adult</option>
                  <option value={'children'}>Children</option>
                </select>
              </label>
              <div className='h-6'></div>
            </div>
          )}

          <div className='mt-5 flex flex-col items-center gap-3'>
            <span className='flex items-center gap-1 font-light'>
              Delivery Options
              <span className=''>*</span>
            </span>
            <div className='flex flex-col gap-3'>
              <label className='flex items-center gap-2 font-light'>
                <input
                  type='checkbox'
                  {...register('postable')}
                  className='mr-2'
                />
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
              <label className='flex items-center gap-2 font-light'>
                <input
                  type='checkbox'
                  {...register('postage_covered')}
                  className='mr-2'
                />
                Postage Covered
              </label>
            </div>
          </div>
          <div className='h-6'>
            {isSubmitted &&
              !isPickUpChecked &&
              !isWillingToPostChecked &&
              !isPostageCoveredChecked && (
                <p className='error-message'>Select at least one option</p>
              )}
          </div>

          <UploadImageInput
            isRequired={true}
            imageType='item'
            setImageSrc={setImageSource}
          />

          <ButtonRounded type='submit'>ADD YOUR ITEM</ButtonRounded>
        </form>
      </div>
    </FormProvider>
  );
}
