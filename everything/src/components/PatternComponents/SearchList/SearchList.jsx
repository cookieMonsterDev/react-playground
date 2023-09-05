import { useMemo, useState } from 'react';

const SearchList = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const value = e.target['input'].value;

    if (value === '') return;

    setList((prev) => {
      return [...prev, value];
    });
    e.target['input'].value = '';
  };

  const filtredList = useMemo(
    () =>
      list.filter((item) =>
        item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      ),
    [query, list]
  );

  return (
    <>
      Search
      <input
        type="text"
        placeholder="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      <form onSubmit={HandleSubmit}>
        Add item
        <input type="text" name="input" />
        <button type="submit">Add</button>
      </form>
      <br />
      {filtredList.map((i, j) => (
        <div key={j}>{i}</div>
      ))}
    </>
  );
};

export default SearchList;
