import "../styles/Categories.css";
import Collapsible from "react-collapsible";
import CategorySelect from "./CategorySelect";
import Order from "./Order";

export default function SortAndFilter({ setSearchParams }) {
  return (
    <section className="filter">
      <Collapsible trigger="Category">
        <CategorySelect />
      </Collapsible>
      <Collapsible trigger="Order">
        <Order setSearchParams={setSearchParams} />
      </Collapsible>
    </section>
  );
}
