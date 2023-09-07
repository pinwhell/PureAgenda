import { Dispatch, SetStateAction } from 'react';

export enum FilterType {
  All = 0,
  Completed,
  Pending,
}

interface FilterButtonsProps {
  filterType: FilterType;
  setFilterType: Dispatch<SetStateAction<FilterType>>;
  enabledColor: string;
  disabledColor: string;
}

function FilterButtons({
  filterType,
  setFilterType,
  enabledColor,
  disabledColor,
}: FilterButtonsProps) {
  const selectedMap = {
    All: filterType === FilterType.All ? enabledColor : disabledColor,
    Completed:
      filterType === FilterType.Completed ? enabledColor : disabledColor,
    Pending: filterType === FilterType.Pending ? enabledColor : disabledColor,
  };

  return (
    <div
      className="responsive-form"
      style={{ paddingTop: 10, paddingBottom: 10 }}
    >
      <h3>Filter: </h3>
      <button
        onClick={() => setFilterType(FilterType.All)}
        style={{ marginRight: 5, backgroundColor: selectedMap.All }}
      >
        All
      </button>
      <button
        onClick={() => setFilterType(FilterType.Completed)}
        style={{ marginRight: 5, backgroundColor: selectedMap.Completed }}
      >
        Completed
      </button>
      <button
        onClick={() => setFilterType(FilterType.Pending)}
        style={{ marginRight: 5, backgroundColor: selectedMap.Pending }}
      >
        Pending
      </button>
    </div>
  );
}

export default FilterButtons;
