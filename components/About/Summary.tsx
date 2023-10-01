import React from "react";
import Title from "../Title";

const Summary = () => {
  return (
    <div className="flex flex-col w-6/12 justify-center items-start pl-56">
      <Title title="Summary" />
      <section className="flex flex-col justify-center items-center text-xl gap-y-6 w-10/12">
        <p className="">
          I'm a recent graduate from The University of Queensland with a strong
          passion for programming. I am a person who always strives to do things
          well. I realized that what I learned in school was just the tip of the
          iceberg, so I've taken it upon myself to self-learn through various
          online resources.
        </p>

        <p className="">
          I also understand that the Australian IT industry demands high-quality
          code, which is <b className="text-purple-700">readable</b>,{" "}
          <b className="text-purple-700">reusable</b>, and{" "}
          <b className="text-purple-700">maintainable</b>. Therefore, I've been
          learning with these principles in mind, striving to cultivate the
          habit of deliverying <b className="text-orange-500">SOLID</b> code.
        </p>

        <p className="">
          Currently, I work as a freelancer, helping individual businesses
          develop websites. Additionally, I'm part of a small team working in an
          Agile development environment on a project similar to Meetup, set to
          launch in December 2023.
        </p>
      </section>
    </div>
  );
};

export default Summary;
