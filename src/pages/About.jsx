import React from "react";

const About = () => {
  return (
    <div>
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex flex-col space-y-8 pb-10 pt-12 ">
          <div class="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p class="text-xs font-semibold leading-normal md:text-sm">
              About the company
            </p>
          </div>
          <p class="text-3xl font-bold text-[#E88100] md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p class=" text-base text-gray-600 md:text-xl">
          Established on <span className="font-semibold">February 3, 2024</span>, our company is dedicated to providing top-notch construction services across India. We pride ourselves on delivering high-quality, sustainable, and innovative building solutions tailored to meet the unique needs of each client. From residential projects to commercial developments, we bring a wealth of experience and a commitment to excellence in every project we undertake. Located in the heart of Lucknow, our headquarters serves as the hub for our operations, driving our mission to build a better future, one project at a time.
          </p>
        </div>
        <div class="w-full h-[60vh] space-y-4">
          <iframe
            class=" w-full rounded-xl md:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.874755196765!2d81.0168846!3d26.8643598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be28d35111a0d%3A0x7cfd59e4a18871fe!2sTower%2C%20C%2C%202nd%20Floor%2C%20SPA%2C%203%2F81%2C%20Vibhav%20Khand%20-3%2C%20Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1698328430705!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p class="w-full text-xl font-semibold text-gray-900">
              Head Office
            </p>
            <p class="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
            <p class="text-sm font-medium">
              KRIN TOWER, C-3/97, VIBHUTI KHAND, GOMTI NAGAR, LUCKNOW - 226010
            </p>
          </div>
          
        </div>
        <hr class="mt-20" />
        
      </div>
      <hr class="mt-6" />
    </div>
  );
};

export default About;
