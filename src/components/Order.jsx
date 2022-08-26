import { useState } from "react";

export default function Order({ setSearchParams }) {
  const sortByArray = [
    { name: "Date", slug: "created_at" },
    { name: "Votes", slug: "votes" },
    { name: "Comments", slug: "comment_count" },
  ];

  const [sort_by, setSort_by] = useState("");
  const [order, setOrder] = useState("desc");

  return (
    <form
      className="filter__order-list"
      onSubmit={(event) => {
        setSearchParams({ sort_by, order });
        event.preventDefault();
      }}
    >
      <select
        className="category-filter__select"
        name="sort_by"
        onChange={(event) => {
          setSort_by(event.target.value);
        }}
      >
        <option value="" disabled>
          Order by
        </option>
        {sortByArray.map((filter) => {
          return (
            <option value={filter.slug} key={filter.slug}>
              {filter.name}
            </option>
          );
        })}
      </select>
      <select
        className="category-filter__select"
        name="order"
        onChange={(event) => {
          setOrder(event.target.value);
        }}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <button className="category-filter__btn">Sort!</button>
    </form>
  );
}
