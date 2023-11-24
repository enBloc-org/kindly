'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// const terms = ['Apple', "Banana", "Books"];
type Items = string[];

export const SearchBar: React.FC<{ terms: Items }> = ({ terms }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 0) {
      setSearchTerm(value);

      const matchingTerms = terms.filter((term) =>
        term.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matchingTerms);
    } else {
      setSuggestions([]);
      setSearchTerm('');
    }
  };

  const handleSuggestionClick = (term: string) => {
    setSearchTerm(term);
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className='flex justify-center searchmargintop'>
      <form
        onSubmit={handleSubmit}
        className='flex opacity-70 transition-opacity duration-200 focus-within:opacity-90'
      >
        <div>
          <input
            value={searchTerm}
            className='bg-primaryLight p-2 rounded-l-md shadow-sm mh-10 outline-none'
            type='text'
            placeholder='Find an item...'
            required
            onChange={handleInputChange}
          />
          <div className=' bg-white text-primaryLight bg-opacity-10 rounded '>
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((term, index) => (
                  <li
                    className='cursor-pointer pl-2 hover:bg-black'
                    key={index}
                    onClick={() => handleSuggestionClick(term)}
                  >
                    {term}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          className='flex-shrink-0 flex-grow-0 max-h-10 bg-primaryLight py-2 px-3 rounded-r-md '
          type='submit'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            viewBox='0 0 16 16'
          >
            <path
              fill='currentColor'
              d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0'
            />
          </svg>{' '}
        </button>
      </form>
    </div>
  );
};
