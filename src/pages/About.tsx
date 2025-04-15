import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About RISE Emotional Health
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            At RISE Emotional Health, we believe that emotional well-being is the foundation of a healthy, fulfilling life. 
            Founded with the purpose of addressing the growing mental health needs in our communities, RISE is dedicated to 
            supporting individuals on their journey toward emotional balance, healing, and growth.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our mission is to create a safe, inclusive, and supportive environment where people feel heard, understood, and 
            empowered. We provide accessible mental health services including therapy, emotional wellness programs, workshops, 
            and digital resources tailored to individuals, families, and organizations.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We are passionate about breaking the stigma surrounding mental health, especially in African communities, and 
            encouraging open, compassionate conversations. Our approach is holistic, combining professional care with 
            culturally sensitive practices that respect and uplift the uniqueness of every individual.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Whether you're facing anxiety, stress, depression, burnout, or simply seeking emotional clarity, RISE is here 
            to walk with you. Together, we rise above life's challenges — one step, one story, and one soul at a time.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Join us in redefining what it means to be emotionally strong. Because your story matters, your health matters, 
            and you deserve to rise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;