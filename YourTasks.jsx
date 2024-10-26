import React from "react";
import { useState, useEffect } from "react";

const YourTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  useEffect(() => {
    let mytodoString = localStorage.getItem("tasks");
    if (mytodoString) {
      let tasks = JSON.parse(mytodoString);
      setTasks(tasks);
    }
  }, []);

  return (
    <>
      <div className="mx-5 md:container  md:mx-auto xl:mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh] md:w-[35%] ">
        <div className="my-5 flex flex-col gap-4 ">
          <h2 className="text-2xl font-bold ">Your Todos</h2>

          <div className="flex"></div>
        </div>

        <div className="my-8 flex flex-col">
          <ol className="mx-2  ">
            {tasks.map((element, index) => (
              <li key={index}>
                <div className="flex my-2">
                  <div className="rounded-lg h-[5vh] items-center px-5 flex flex-row bg-white w-[80%] ">
                    {element}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default YourTasks;
