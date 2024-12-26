import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, setSearchValue, search } from '../../store';

export default function HeaderSearchBar(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setSearchValue(inputValue));
    dispatch(search(inputValue));
  };

  return (
    <form onSubmit={handleSubmit} className='header_search'>
      <input
        defaultValue={inputValue}
        onChange={handleChange}
        name='search'
        placeholder='Search'
      />
      <button>OK</button>
    </form>
  );
}
