import { Button } from '../Button/Button.jsx';
import { useSelector, useDispatch } from "react-redux";
import css from './StatusFilter.module.css';
import { statusFilters } from '../../redux/filters/constants.js';
import { getStatusFilter } from '../../redux/filters/selectors.js';
import { setStatusFilter } from '../../redux/filters/actions.js';

export const StatusFilter = () => {

    const dispatch = useDispatch();

    const filter = useSelector(getStatusFilter);

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <div className={css.wrapper}>
            <Button 
                selected={filter === statusFilters.all } 
                onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
            <Button 
                selected={filter === statusFilters.active}
                onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
            <Button 
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}>Completed</Button>
        </div>
    );
};