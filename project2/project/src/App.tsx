import { useAuth } from './hooks/useAuth';
import { Auth } from './components/Auth';
import { TodoList } from './components/TodoList';

function App() {
  const { user, loading, signIn, signUp, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Auth onSignIn={signIn} onSignUp={signUp} />;
  }

  return <TodoList userId={user.id} userEmail={user.email || ''} onSignOut={signOut} />;
}

export default App;
