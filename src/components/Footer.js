import React from "react";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

const Footer = (props) => {

  const FILTER_TITLES = {
    [SHOW_ALL]: "All",
    [SHOW_ACTIVE]: "Active",
    [SHOW_COMPLETED]: "Completed"
  };

  const renderTodoCount = () => {
    const { activeCount } = props;
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <span>
        {activeCount || "No"} {itemWord} left
      </span>
    );
  }

  const renderFilterLink = (filter) => {
    const title = FILTER_TITLES[filter];
    const { filter: [], onShow } = props;

    return (
      <button type="button"
        onClick={() => onShow(filter)}
      >
        {title}
      </button>
    );
  }

  const renderClearButton = () => {
    const { completedCount, onClearCompleted } = props;
    if (completedCount > 0) {
      return (
        <button onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }
  }

  return (
    <div>
      {renderTodoCount()}
      <ul>
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter => (
          <li key={filter}>
            {renderFilterLink(filter)}
          </li>
        ))}
      </ul>
      {renderClearButton()}
    </div>
  );
  
}

export default Footer;
