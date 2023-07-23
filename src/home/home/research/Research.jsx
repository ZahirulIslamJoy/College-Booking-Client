import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Research = () => {
  return (
    <div className="bg-[#010313]  h-full text-[#D8E0FC]">
      <div>
        <div className="w-[85%] mx-auto pb-20 ">
          <h1 className="text-4xl text-center pt-32 mb-12 ">Research Paper</h1>
          <div>
            <Tabs className="react-tabs grid grid-cols-1  lg:grid-cols-2 gap-20">
              <div>
                <TabList className="react-tabs__tab-list flex flex-col ">
                  <Tab className="react-tabs__tab">Science</Tab>
                  <Tab className="react-tabs__tab">Commerce</Tab>
                  <Tab className="react-tabs__tab">Robtics</Tab>
                </TabList>
              </div>
              <div>
                <TabPanel className="react-tabs__tab-panel text-[#64ffda]">
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p099/physics/balloon-powered-car-challenge">
                      1. Balloon-Powered Car Challenge
                    </a>
                  </h1>
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p099/physics/balloon-powered-car-challenge">
                      2. Build a Floating Maglev Train
                    </a>
                  </h1>
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/ApMech_p052/mechanical-engineering/build-ball-launcher">
                      3. Ball Launcher Challenge
                    </a>
                  </h1>
                </TabPanel>
                <TabPanel className="react-tabs__tab-panel text-[#64ffda]">
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p099/physics/balloon-powered-car-challenge">
                      1. Reducing Unemployment Through Co-Operative Movement
                    </a>
                  </h1>
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p099/physics/balloon-powered-car-challenge">
                      2. Co-Operative Thrift And Credit Society
                    </a>
                  </h1>
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/ApMech_p052/mechanical-engineering/build-ball-launcher">
                      3. Outsourcing Human Resource Functions And Performance
                    </a>
                  </h1>
                </TabPanel>

                <TabPanel className="react-tabs__tab-panel text-[#64ffda]">
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p099/physics/balloon-powered-car-challenge">
                      1. Object Tracker & Follower Robot Using Raspberry Pi
                    </a>
                  </h1>
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p099/physics/balloon-powered-car-challenge">
                      2. Rough Terrain Beetle Robot
                    </a>
                  </h1>
                  <h1 className="text-xl mb-3">
                    <a href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/ApMech_p052/mechanical-engineering/build-ball-launcher">
                      3. Path Planner Robot for Indoor Positioning
                    </a>
                  </h1>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
