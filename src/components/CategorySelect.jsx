import { formatCategories } from "../utils/formattingFunctions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";

export default function CategorySelect() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  return (
    <form
      className="filter__category-list"
      onSubmit={(event) => {
        event.preventDefault();
        if (category === "all") {
          navigate(`/reviews`);
          setCategory("");
        } else if (category) {
          navigate(`/reviews/category/${category}`);
          setCategory("");
        }
      }}
    >
      <select
        onChange={(event) => {
          setCategory(event.target.value);
        }}
        className="category-filter__select"
        value={category}
      >
        <option value="" disabled>
          Category filter
        </option>
        <option value="all">All</option>
        {categories.map((category) => {
          return (
            <option value={category.slug} key={category.slug}>
              {formatCategories(category.slug)}
            </option>
          );
        })}
      </select>
      <button className="category-filter__btn">Filter!</button>
    </form>
  );
}
