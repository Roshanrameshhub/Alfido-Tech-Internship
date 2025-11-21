import { Info } from 'lucide-react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <Info className="w-20 h-20 text-green-600 mb-6" />
      <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl mb-4">
        We're passionate about building beautiful, functional web applications
        that provide exceptional user experiences.
      </p>
      <p className="text-lg text-gray-500 text-center max-w-2xl">
        This demo showcases React Router's powerful navigation capabilities,
        allowing seamless transitions between different pages of your application.
      </p>
    </div>
  );
}

export default About;
