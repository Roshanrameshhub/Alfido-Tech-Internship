import { Home as HomeIcon } from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <HomeIcon className="w-20 h-20 text-blue-600 mb-6" />
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome Home</h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl">
        This is a multi-page React application built with React Router.
        Navigate through the pages using the navigation bar above.
      </p>
    </div>
  );
}

export default Home;
