import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
          <Mail className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">hello@example.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
          <Phone className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
          <MapPin className="w-8 h-8 text-red-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">123 Main St, San Francisco, CA 94122</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
