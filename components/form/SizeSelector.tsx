import React, { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { PartialItem } from '@/types/supabaseTypes';

interface SizeSelectorProps {
  category: string;
  register: UseFormRegister<PartialItem>;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ category, register }) => {
  const clothingSizes = [
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

  const shoeSizes = [
    'UK4',
    'UK5',
    'UK5.5',
    'UK6',
    'UK6.5',
    'UK7',
    'UK7.5',
    'UK8',
    'UK8.5',
    'UK9',
    'UK9.5',
    'UK10',
    'UK10.5',
    'UK11',
    'UK12',
    'UK13',
    'UK14',
    'UK15',
    'UK16',
  ];

  const euShoeSizes = ['EU36', 'EU37', 'EU38', 'EU39', 'EU40', 'EU41', 'EU42'];

  const [sizeOptions, setSizeOptions] = useState<string[]>([]);

  useEffect(() => {
    if (category === 'clothing') {
      setSizeOptions(clothingSizes);
    } else if (category === 'shoes') {
      setSizeOptions([...shoeSizes, ...euShoeSizes]);
    } else {
      setSizeOptions([]);
    }
  }, [category]);

  return (
    <label
      htmlFor='size'
      className='flex flex-col items-center gap-2 font-light'
    >
      Size
      <select {...register('size')} className='input-text h-11 w-24'>
        <option value='' disabled hidden>
          {' '}
          Select one
        </option>
        {sizeOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SizeSelector;
