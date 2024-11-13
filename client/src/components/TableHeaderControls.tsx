import SearchCriticalEvents from "./SearchCriticalEvents";
import SortCriticalEvents from "./SortCriticalEvents";
import ItemsPerPage from "./ItemsPerPage";

const TableHeaderControls = () => (
  <div className="flex gap-4">
    <SearchCriticalEvents />
    <SortCriticalEvents />
    <ItemsPerPage />
  </div>
);

export default TableHeaderControls;
