import React from "react";
import Icons from "../../../images";
import {FormFilter, FormSearch} from "../index.styles";

export default function FilterForm() {
  return (
    <FormFilter>
      <FormSearch>
        <input type="text" id="location" placeholder="Location" />
        <Icons.Location />
      </FormSearch>
      <FormSearch>
        <input type="date" id="date" placeholder="Date" />
      </FormSearch>
      <FormSearch>
        <input type="number" id="guests" placeholder="Guests" />
      </FormSearch>
      </FormFilter>
  );
}