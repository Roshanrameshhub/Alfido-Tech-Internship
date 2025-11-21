import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Counter App
        </h1>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="text-7xl font-bold text-white text-center">
            {count}
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={increment}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Plus size={24} />
            Increment
          </button>

          <button
            onClick={decrement}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Minus size={24} />
            Decrement
          </button>

          <button
            onClick={reset}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <RotateCcw size={24} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
