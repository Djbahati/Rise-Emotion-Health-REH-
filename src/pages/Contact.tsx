import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact Us
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          We're here to listen, support, and guide you on your journey to emotional wellness. Whether you have a question, 
          need help booking a session, or want to collaborate — don't hesitate to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Norrsken Kigali House, Kigali, Rwanda</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+250 780455033</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@riseemotionalhealth.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Website</h3>
                  <p className="text-gray-600 dark:text-gray-300">www.riseemotionalhealth.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Working Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;