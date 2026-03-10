import { filterGroups } from "../data/products";

interface FilterBarProps {
  activeFilters: string[];
  onToggleFilter: (filter: string) => void;
  onClearFilters: () => void;
}

const tagColorMap: Record<string, string> = {
  "Attack Type": "bg-attack/20 text-attack border-attack/30",
  "Defense Type": "bg-defense/20 text-defense border-defense/30",
  "Stamina Type": "bg-stamina/20 text-stamina border-stamina/30",
  "Balance Type": "bg-balance/20 text-balance border-balance/30",
};

const FilterBar = ({
  activeFilters,
  onToggleFilter,
  onClearFilters,
}: FilterBarProps) => {
  return (
    <div className="space-y-4">
      {filterGroups.map((group) => (
        <div key={group.label}>
          <h3 className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.options.map((option) => {
              const isActive = activeFilters.includes(option);
              const colorClass = tagColorMap[option];
              return (
                <button
                  key={option}
                  onClick={() => onToggleFilter(option)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    isActive
                      ? colorClass ||
                        "bg-primary/20 text-primary border-primary/30"
                      : "bg-muted/50 text-muted-foreground border-border hover:bg-muted"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {activeFilters.length > 0 && (
        <button
          onClick={onClearFilters}
          className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;
