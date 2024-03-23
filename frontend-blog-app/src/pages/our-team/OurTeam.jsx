import React from "react";
import MainLayout from "../../components/MainLayout";
import images from "../../constants/images";

const OurTeam = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <div className=" flex-2">
          <img className="rounded-xl" src={images.AboutUs} alt="arccd" />
          <div className="mt-4 flex flex-col gap-2">
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              Who Is Arccd
            </h1>
            <p className=" font-medium p-2 ">
              The Academic Research Center for Consulting and Development, an
              initiative launched by a group of Syrian academics to fill the
              current gap in northwest Syria, which is the absence of academic
              research centers focusing on the region, conducting scientific
              research, and providing consultancy support to the local community
              in various developmental fields. Believing in the importance of
              scientific research for the development of this region and
              contributing to solving problems and facing challenges that hinder
              its development, the founding academics of this initiative agreed
              to establish the initiative and register it in Turkey under the
              name of the Academic Research Center for Consulting and
              Development. The center is an independent, non-governmental,
              non-profit research organization with a pluralistic nature not
              affiliated with any governmental, political, religious,
              commercial, or individual entity, enjoying legal personality, and
              has the right to own, buy, and dispose of movable and immovable
              funds necessary to achieve its objectives and purposes in
              accordance with the applicable laws and regulations.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              Vision
            </h1>
            <p className=" font-medium p-2 ">
              For the center becomes a recognized source and destination for
              conducting scientific research and providing consultancy and
              training services in various sectors.
            </p>

            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              Mission
            </h1>
            <p className=" font-medium p-2 w-full ">
              Supporting and conducting scientific research, and providing
              consultancy and training services in various sectors.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <h3 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              Objectives of the Center{" "}
            </h3>

            <ul className="w-full text-sm font-medium text-gray-900">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                * Conducting scientific research in various fields.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Networking and building partnerships with similar research
                bodies to serve scientific research and achieve mutual goals.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Networking and building partnerships with universities to
                serve scientific research and achieve mutual goals.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Collaborating with researchers whose goals are compatible with
                the center’s goals.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Networking and coordinating with civil society organizations
                and contributing to providing research to help them implement
                their projects.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Providing consultancy and audit services in various fields.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Collaboration with consultancy service providers in various
                fields.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Providing training services in various fields.
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                * Holding seminars and dialogues that contribute to the
                development of scientific research.
              </li>
            </ul>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              Center Values
            </h1>

            <ul className="w-full text-sm font-medium text-gray-900">
              <li className="w-full px-4 py-2">• Institutional work</li>
              <li className="w-full px-4 py-2">• Institutional work</li>
              <li className="w-full px-4 py-2">• Integrity </li>
              <li className="w-full px-4 py-2">• Honesty and transparency</li>
              <li className="w-full px-4 py-2">• Objectivity </li>
              <li className="w-full px-4 py-2">• Neutrality </li>
              <li className="w-full px-4 py-2">• Quality and excellence </li>
              <li className="w-full px-4 py-2">• Commitment </li>
              <li className="w-full px-4 py-2">
                • Collaboration and coordination{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default OurTeam;
