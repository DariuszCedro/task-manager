import css from './Task.module.css';
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/tasks/actions';

export const Task = ({task}) => {

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));

    const handleToggle = () => dispatch(toggleCompleted(task.id));

    return (
        <div className={css.wrapper}>
            <input
                type="checkbox"
                onChange={handleToggle}
                className={css.checkbox}
                checked={task.completed}
        />
        <p className={css.text}>{task.text}</p>
        <button type="button" onClick={handleDelete} className={css.btn}>
            <MdClose size={24} />
        </button>
        </div>
    );
};