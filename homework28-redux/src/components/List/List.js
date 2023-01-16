import './List.css';

import ListItem from '../ListItem/ListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectList } from '../../store/selectors/todos';


function List() {
  const todos = useSelector(selectList)

    return (
        <div className="task-list u-full-width">
            {todos.map((item) => (
                <ListItem key={item.id} todo={item}  />
            ))}
        </div>
    );
}

export default List;