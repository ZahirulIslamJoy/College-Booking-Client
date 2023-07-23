import { Carousel } from "flowbite-react";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[#010313]  h-full text-[#D8E0FC]">
      <div>
        <div className="w-[85%] mx-auto pb-20 ">
          <h1 className="text-4xl text-center pt-32 ">Photo Gallery</h1>
          <div className="grid gap-6  mt-12 grid-cols-1  lg:grid-cols-2">
            <div className="h-96">
              <Carousel>
                <img
                  className="h-full w-full"
                  src="https://img.freepik.com/free-photo/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma_496169-1363.jpg?size=626&ext=jpg&ga=GA1.2.1436202133.1673093708&semt=ais"
                  alt="..."
                />
                <img
                  className="h-full w-full"
                  src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?size=626&ext=jpg&ga=GA1.2.1436202133.1673093708&semt=ais"
                  alt="..."
                />
                <img
                  className="h-full w-full"
                  src="https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?size=626&ext=jpg&ga=GA1.2.1436202133.1673093708&semt=ais"
                  alt="..."
                />
              </Carousel>
            </div>
            <div className="h-96">
              <Carousel>
                <img
                  className="h-full w-full"
                  src="https://img.freepik.com/premium-photo/group-students-mantles-are-standing-corridor_85574-913.jpg?w=740"
                  alt="..."
                />
                <img
                  className="h-full w-full"
                  src="https://img.freepik.com/free-photo/three-happy-international-graduate-friends-greeting-university-campus-graduation-robes-with-diploma_496169-1360.jpg?w=740&t=st=1690125506~exp=1690126106~hmac=84d3b8683e8be97dfe821cbb4169b64028b3170e447f506fdfdd6f5be27cd755"
                  alt="..."
                />
                <img
                  className="h-full w-full"
                  src="https://img.freepik.com/premium-photo/portrait-group-students-celebrating-their-graduation_23-2148201817.jpg?size=626&ext=jpg&ga=GA1.2.1436202133.1673093708&semt=ais"
                  alt=""
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
