import { useState } from 'react';
import { Plus, CheckCircle2, LogOut } from 'lucide-react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  userId: string;
  userEmail: string;
  onSignOut: () => void;
}

export function TodoList({ userId, userEmail, onSignOut }: TodoListProps) {
  const [newTodo, setNewTodo] = useState('');
  const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodos(userId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    await addTodo(newTodo);
    setNewTodo('');
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">My Tasks</h1>
                  <p className="text-blue-100 text-sm">{userEmail}</p>
                </div>
              </div>
              <button
                onClick={onSignOut}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>

            {todos.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <p className="text-white text-sm">
                  <span className="font-semibold">{completedCount}</span> of{' '}
                  <span className="font-semibold">{todos.length}</span> tasks completed
                </p>
              </div>
            )}
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="What needs to be done?"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <Plus className="w-5 h-5" />
                  Add Task
                </button>
              </div>
            </form>

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 mt-4">Loading tasks...</p>
              </div>
            ) : todos.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg font-medium">No tasks yet</p>
                <p className="text-gray-400 text-sm mt-1">Add your first task to get started</p>
              </div>
            ) : (
              <div className="space-y-2">
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
