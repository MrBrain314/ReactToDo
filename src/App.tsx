import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { Construction } from 'lucide-react';

type Priority = 'Urgente' | 'Moyenne' | 'Basse';
type FilterType = Priority | 'Tous' | 'Terminées';

type Todo = {
  id: number;
  text: string;
  priority: Priority;
  done: boolean;
};

function App() {
  const [input, setInput] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('Moyenne');
  const savedTodos = localStorage.getItem('todos');
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>('Tous');
  const [selectedTodo, setSelectedTodo] = useState<Set<number>>(new Set());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (input.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      priority: priority,
      done: false
    };
    setTodos([newTodo, ...todos]);
    setInput('');
    setPriority('Moyenne');
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleDone(id: number) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  function toggleSelectedTodo(id: number) {
    const newSelectedTodo = new Set(selectedTodo);
    if (newSelectedTodo.has(id)) {
      newSelectedTodo.delete(id);
    } else {
      newSelectedTodo.add(id);
    }
    setSelectedTodo(newSelectedTodo);
  }

  let filteredTodos: Todo[] = [];
  if (filter === 'Tous') {
    filteredTodos = todos.filter(todo => !todo.done);
  } else if (filter === 'Terminées') {
    filteredTodos = todos.filter(todo => todo.done);
  } else {
    filteredTodos = todos.filter(todo => todo.priority === filter && !todo.done);
  }

  const urgenteCount = todos.filter(todo => todo.priority === 'Urgente' && !todo.done).length;
  const moyenneCount = todos.filter(todo => todo.priority === 'Moyenne' && !todo.done).length;
  const basseCount = todos.filter(todo => todo.priority === 'Basse' && !todo.done).length;
  const totalCount = todos.filter(todo => !todo.done).length;
  const doneCount = todos.filter(todo => todo.done).length;

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <div className="flex gap-4">
          <input type="text" className="input w-full"
            placeholder="Ajouter une tache ..."
            value={input} onChange={(e) => setInput(e.target.value)} />
          <select className="w-full select" value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
            <option value="Urgente">Urgente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
          <button onClick={addTodo} className="btn btn-primary">Ajouter</button>
        </div>

        <div className="space-y-2 flex-1 h-fit">
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <button className={`btn btn-soft ${filter === 'Tous' ? 'btn-primary' : ''}`} onClick={() => setFilter('Tous')}>
                Tous({totalCount})
              </button>
              <button className={`btn btn-soft ${filter === 'Urgente' ? 'btn-primary' : ''}`} onClick={() => setFilter('Urgente')}>
                Urgente({urgenteCount})
              </button>
              <button className={`btn btn-soft ${filter === 'Moyenne' ? 'btn-primary' : ''}`} onClick={() => setFilter('Moyenne')}>
                Moyenne({moyenneCount})
              </button>
              <button className={`btn btn-soft ${filter === 'Basse' ? 'btn-primary' : ''}`} onClick={() => setFilter('Basse')}>
                Basse({basseCount})
              </button>
              <button className={`btn btn-soft ${filter === 'Terminées' ? 'btn-success' : ''}`} onClick={() => setFilter('Terminées')}>
                Terminées({doneCount})
              </button>
            </div>

            <button
              className="btn btn-error btn-soft"
              disabled={selectedTodo.size === 0}
              onClick={() => {
                const newTodos = todos.filter(todo => !selectedTodo.has(todo.id));
                setTodos(newTodos);
                setSelectedTodo(new Set());
              }}>
              Supprimer ({selectedTodo.size})
            </button>
          </div>

          {filteredTodos.length > 0 ? (
            <ul className="divide-y divide-primary/10">
              {filteredTodos.map(todo => (
                <li key={todo.id}>
                  <TodoItem
                    isSelected={selectedTodo.has(todo.id)}
                    todo={todo}
                    onDelete={() => deleteTodo(todo.id)}
                    onToggleSelected={toggleSelectedTodo}
                    onToggleDone={toggleDone}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center flex-col p-5">
              <div>
                <Construction strokeWidth={1} className="w-40 h-40 text-primary" />
                <p className="text-sm">Aucune tache pour ce filtre</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;