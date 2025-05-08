import { SearchParamsType } from '@/types/searchPageTypes';
import { Dispatch, SetStateAction } from 'react';

type SearchBarPropType = {
  searchParams: SearchParamsType;
  setSearchParams: Dispatch<SetStateAction<SearchParamsType>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchBar: React.FC<SearchBarPropType> = ({
  setSearchParams,
  searchParams,
  handleSubmit,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevState) => ({
      ...prevState,
      query: e.target.value,
    }));
  };

  const clearSearchBar = () => {
    if (searchParams.query.length > 0) {
      setSearchParams((prevState) => ({
        ...prevState,
        query: '',
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-center focus-within:opacity-90'
    >
      <div className='relative flex items-center rounded-lg shadow-custom'>
        <input
          value={searchParams.query}
          className='max-h-10 w-[350px] rounded-lg bg-primaryWhite p-3 font-body outline-none sm:min-w-[600px] md:min-w-[712px] xl:w-[1080px]'
          type='text'
          placeholder='Search...'
          required
          onChange={handleInputChange}
        />

        {searchParams.query.length > 0 && (
          <button
            className='absolute right-10 pr-3 font-body text-xs'
            onClick={clearSearchBar}
          >
            Clear
          </button>
        )}

        <button
          className='absolute right-0 h-full w-[40px] flex-shrink-0 flex-grow-0 rounded-lg bg-brand-80 px-3 py-2 '
          type='submit'
          aria-label='Search for item'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.7803 16.2803C15.4874 16.5732 15.0126 16.5732 14.7197 16.2803L10.2197 11.7803C9.92677 11.4874 9.92677 11.0126 10.2197 10.7197C10.5126 10.4268 10.9874 10.4268 11.2803 10.7197L15.7803 15.2197C16.0732 15.5126 16.0732 15.9874 15.7803 16.2803Z'
              fill='#FF8D3C'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.03017 2.68744C7.98585 2.07475 6.75468 1.86181 5.56524 2.08817C4.3758 2.31453 3.30891 2.9648 2.56264 3.91827C1.81637 4.87173 1.44143 6.06359 1.50744 7.27258C1.57344 8.48157 2.07591 9.62553 2.92154 10.4921C3.76717 11.3586 4.89852 11.8889 6.10553 11.9844C7.31254 12.0799 8.51321 11.7342 9.48462 11.0115C10.456 10.2887 11.1322 9.23805 11.3875 8.0545C11.6429 6.87095 11.4601 5.63494 10.8731 4.57596C10.6723 4.21369 10.8032 3.75721 11.1655 3.55639C11.5277 3.35558 11.9842 3.48647 12.185 3.84875C12.9481 5.22542 13.1858 6.83223 12.8538 8.37085C12.5218 9.90947 11.6428 11.2754 10.38 12.2149C9.11718 13.1545 7.5563 13.6039 5.98719 13.4797C4.41807 13.3556 2.94732 12.6662 1.848 11.5397C0.74868 10.4132 0.0954785 8.92603 0.00967169 7.35435C-0.0761351 5.78267 0.411283 4.23324 1.38143 2.99374C2.35158 1.75424 3.73854 0.908884 5.28481 0.614617C6.83108 0.320349 8.4316 0.597167 9.78922 1.39368C10.1465 1.60328 10.2662 2.06282 10.0566 2.42009C9.84697 2.77735 9.38743 2.89705 9.03017 2.68744Z'
              fill='#FF8D3C'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
