import React from 'react';

const PlanningPhase = () => {
  return (
    <section id="planning" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Planning Phase</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-full rounded-lg" src="/images/planning.jpg" alt="Planning Phase" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add more detailed steps or phases of the planning process here */}
        </div>
      </div>
    </section>
  );
};

export default PlanningPhase;
