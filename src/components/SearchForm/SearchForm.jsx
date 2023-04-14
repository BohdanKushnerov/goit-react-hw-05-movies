import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchForm.styled';

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
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="text"
        value={state}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
      <Button type="submit" disabled={!state}>
        Search
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
