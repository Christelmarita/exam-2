import React from "react";
import { FormSearch } from "../index.styles";
import Icons from "../../../images";

export default function SearchForm() {
  return (
    <FormSearch>
      <button type="submit"><Icons.Search/></button>
      <input type="text" placeholder="Search for venue" />
    </FormSearch>
  );
}
