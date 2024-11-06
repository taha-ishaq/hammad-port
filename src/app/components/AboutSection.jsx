"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter </li>
        <li>Node js</li>
        <li>Firebase</li>
        <li>Rest APIs</li>
        <li>Provider And Getx</li>
        <li>UI Designing</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bs.Cs From Comsats</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter developer at GDSC Attock</li>
        <li>Flutter developer internship at Ezitech</li>
        <li>Full time Flutter developer at AxthTech</li>
        <li>Flutter developer internship at Developers Hub</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a skilled Flutter developer with expertise in building dynamic, responsive, and user-centered mobile applications. With a strong foundation in Flutter, Node.js, and Firebase, I create efficient, scalable solutions backed by RESTful APIs. My experience with state management tools like Provider and GetX ensures smooth, seamless user experiences, and I prioritize clean, modern UI designs that elevate app engagement. I’m passionate about leveraging these technologies to build impactful digital experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
