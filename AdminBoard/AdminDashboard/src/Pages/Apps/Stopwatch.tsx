import { useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";

const formatTime = (timeInSecond: number) => {
  const hours = Math.floor(timeInSecond / 3600);
  const minutes = Math.floor((timeInSecond % 3600) / 60);
  const second = timeInSecond % 60;

  const hourSting = hours.toString().padStart(2, "0");
  const minuteString = minutes.toString().padStart(2, "0");
  const secondSting = second.toString().padStart(2, "0");

  return `${hourSting}: ${minuteString} : ${secondSting}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);

  const resetHandler = () => {
    setTime(0);
    setIsTimeRunning(false);
  };

  useEffect(() => {
    let timmer: number;
    if (isTimeRunning) {
      timmer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timmer);
    };
  }, [isTimeRunning]);

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h1>{formatTime(time)}</h1>
            <button onClick={() => setIsTimeRunning((prev) => !prev)}>
              {isTimeRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
