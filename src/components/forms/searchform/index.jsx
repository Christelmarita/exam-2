import React from 'react';
import { FormSearch } from '../index.styles';
import Icons from '../../../images';

/**
 * SearchForm component handles the search input for venues.
 *
 * @component
 * @param {Object} props
 * @param {Function} props.setSearchQuery
 * @returns {JSX.Element}
 */
export default function SearchForm({ setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <FormSearch>
      <button type="button">
        <Icons.Search />
      </button>
      <input
        type="text"
        placeholder="Search for venue"
        onChange={handleInputChange}
      />
    </FormSearch>
  );
}
