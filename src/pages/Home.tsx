import React from 'react';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Your Journey to{' '}
            <span className="text-purple-600 dark:text-purple-400">Emotional Wellness</span>{' '}
            Starts Here
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Join RISE Emotional Health and discover a supportive community dedicated to your mental well-being. 
            Professional care with a personal touch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="px-8 py-4 text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Individual Therapy
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              One-on-one sessions tailored to your unique needs and goals.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Group Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with others in a safe, supportive environment.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Digital Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access tools and resources for your emotional wellness journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;