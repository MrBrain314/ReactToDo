import { Trash, Check } from "lucide-react";

type Priority = 'Urgente' | 'Moyenne' | 'Basse';

type Todo = {
  id: number;
  text: string;
  priority: Priority;
  done: boolean;
};

type Props = {
  todo: Todo;
  onDelete: () => void;
  isSelected: boolean;
  onToggleSelected: (id: number) => void;
  onToggleDone: (id: number) => void;
};

const TodoItem = ({ todo, onDelete, isSelected, onToggleSelected, onToggleDone }: Props) => {
  return (
    <li className="p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={isSelected}
            onChange={() => onToggleSelected(todo.id)}
          />
          <span className={`text-md font-bold ${todo.done ? 'line-through opacity-50' : ''}`}>
            {todo.text}
          </span>
          <span className={`badge badge-sm badge-soft 
            ${todo.priority === 'Urgente' ? 'badge-error' : todo.priority === 'Moyenne' ? 'badge-warning' : 'badge-success'}`}>
            {todo.priority}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onToggleDone(todo.id)} 
            className={`btn btn-sm btn-soft ${todo.done ? 'btn-success' : 'btn-ghost'}`}>
            <Check className="w-4 h-4" />
          </button>
          <button onClick={onDelete} className="btn btn-sm btn-error btn-soft">
            <Trash className="w-4 h-4" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;