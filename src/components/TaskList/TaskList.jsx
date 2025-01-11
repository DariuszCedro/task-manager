import css from './TaskList.module.css';
import {Task} from '../Task/Task.jsx';
import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/filters/constants.js';
import { getTasks} from '../../redux/tasks/selectors.js';
import { getStatusFilter} from '../../redux/filters/selectors.js'

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter)
    {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

export const TaskList = () => {
    const tasks = useSelector(getTasks);
    const statusFilter = useSelector(getStatusFilter);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ul className={css.list}>
            {visibleTasks.map(task => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};