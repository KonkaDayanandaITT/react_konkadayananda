import {useState} from "react";

export default function SearchBar({setSearchText}) {
  const [value, setValue] = useState("");

  const handleChange = e => {
    const v = e.target.value;
    setValue(v);

    clearTimeout(window.searchTimer);
    window.searchTimer = setTimeout(() => {
      setSearchText(v);
    }, 300);
  };

  return(
    <input
      placeholder="Search.."
      value={value}
      onChange={handleChange}
    />
  );
}
