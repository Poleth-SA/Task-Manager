interface FilterBarProps {
    filter: "all" | "active" | "completed";
    onFilterChange: (filter: "all" | "active" | "completed") => void;
  }
  
  const FilterBar = ({ filter, onFilterChange }: FilterBarProps) => {
    return (
      <div className="flex gap-2">
        <button
          className={`filter-button ${filter === "all" ? "active" : ""}`}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === "active" ? "active" : ""}`}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`filter-button ${filter === "completed" ? "active" : ""}`}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    );
  };
  
  export default FilterBar;