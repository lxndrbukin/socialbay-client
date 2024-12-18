import { ChangeEvent, FormEvent, useState } from 'react';

export default function HeaderSearchBar(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(inputValue);
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
