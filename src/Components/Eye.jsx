import React, { useEffect, useState } from "react";

const Eye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;


      let deltaX = clientX - window.innerWidth / 2;
      let deltaY = clientY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) *( 180 / Math.PI);
      setRotate(angle-180);
    });
  });

  return (
    <div className="eyes w-full h-screen bg-white">
      <div className=" inner relative h-full w-full bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className=" flex justify-center items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-1/2 w-1/2 gap-8">
          <div className="h-[13vw] w-[13vw] rounded-full bg-white flex justify-center items-center">
            <div className="relative  h-[10vw] w-[10vw] bg-black rounded-full">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="role absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-3">
                <div className="small  h-[1vw] w-[1vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="h-[13vw] w-[13vw] rounded-full bg-white flex justify-center items-center">
          <div className="relative  h-[10vw] w-[10vw] bg-black rounded-full">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="role absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-3">
                <div className="small  h-[1vw] w-[1vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
