import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;

    setState(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state);
    setState('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={state} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
