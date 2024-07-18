import React from 'react';

const DesignPhase = () => {
  return (
    <section id="design" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Design Phase</h2>
            <p className="text-lg text-gray-700">
              Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-full rounded-lg" src="/images/design.jpg" alt="Design Phase" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add more details about the architectural and interior design aspects */}
        </div>
      </div>
    </section>
  );
};

export default DesignPhase;