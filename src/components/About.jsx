import React from 'react';
import aboutImg from '../images/about-img.jpg';

const About = () => {
  return (
    <section className="about bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="section-title text-center mb-12">
          <h2 className="text-4xl font-bold">About</h2>
        </div>

        <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="about-img">
            <img src={aboutImg} alt="" className="rounded-md shadow-md" />
          </div>
          <div className="about-text">
            <h2 className="about-title text-3xl font-semibold tracking-wide mb-4">About BookHub</h2>
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.
            </p>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
