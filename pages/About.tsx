import React from 'react';
import { APP_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">About {APP_NAME}</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            Namaste! <strong>{APP_NAME}</strong> mein aapka swagat hai. Yeh ek educational platform hai jahan hum Indian students aur beginners ko Digital World se jodte hain.
          </p>
          <p className="mb-4">
            Hamara mission hai ki har bhartiya student ko <strong>Technology, AI, Blogging, aur Online Earning</strong> ki sahi aur saral jankari Hindi mein mile. Internet par bahut information hai, lekin English mein hone ke karan kai log seekh nahi paate. Hum us gap ko fill kar rahe hain.
          </p>
          
          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Hum Kya Sikhate Hain?</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>AI Tools:</strong> ChatGPT, Gemini aur naye tools ka use.</li>
            <li><strong>Blogging:</strong> Apni website banakar paise kamana.</li>
            <li><strong>Digital Skills:</strong> Graphic designing, Coding basics, etc.</li>
            <li><strong>Career Guidance:</strong> Free courses aur certificates.</li>
          </ul>

          <p>
            Agar aap bhi apni life mein digital skills ke zariye aage badhna chahte hain, toh aaj hi humare sath judeyn.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8 text-center border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">Join Our Community</h4>
            <p className="text-sm text-gray-500">Banein hissa {new Date().getFullYear()} ke digital revolution ka.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;