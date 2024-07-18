import React from 'react';
import { Filters } from './Filters';
import cn from 'classnames';
import { Todo } from '../types/Todo';
import { fetchActiveTodos } from './ActiveTodos';

interface Props {
  filter: Filters;
  setFilter: (filterBy: Filters) => void;
  todos: Todo[];
}

export const TodoFilter: React.FC<Props> = ({ filter, setFilter, todos }) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {fetchActiveTodos(todos).length} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: filter === Filters.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilter(Filters.All)}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: filter === Filters.Active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilter(Filters.Active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: filter === Filters.Completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter(Filters.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};