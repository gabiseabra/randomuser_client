import React from "react"
import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem
} from "material-ui"

export default function Results({ name, ...props }) {
  return (
    <FormControl>
      <InputLabel htmlFor="search-results">Results</InputLabel>
      <Select
        {...props}
        input={<Input name={name} id="search-results" />}>
        <MenuItem value="15">15</MenuItem>
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="30">30</MenuItem>
        <MenuItem value="40">40</MenuItem>
        <MenuItem value="50">50</MenuItem>
      </Select>
    </FormControl>
  )
}
