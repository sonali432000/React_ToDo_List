import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YourTasks from "./component/YourTasks";


function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  useEffect(() => {
    let mytodoString = localStorage.getItem("tasks");
    if (mytodoString) {
      let tasks = JSON.parse(mytodoString);
      setTasks(tasks);
    }
  }, []);

  const saveLocal = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newtask.trim() !== "") {
      setTasks((t) => {
        let updatedTasks = [...t, newtask];
        saveLocal(updatedTasks);
        return updatedTasks;
      });
      setNewTask("");
    }
  }
  function deleteTask(index) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      saveLocal(updatedTasks); // Save after updating tasks
      return updatedTasks;
    });
  }

 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/YourTasks" element={<YourTasks />} />
        </Routes>
      </Router>


      <div className="mx-5 md:container  md:mx-auto xl:mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh] md:w-[35%] ">
        <h1 className="font-bold text-center text-3xl">Your Task Planner</h1>

        <div className="my-5 flex flex-col gap-4 ">
          <h2 className="text-2xl font-bold ">Hey... Add Your Todo</h2>

          <div className="flex">
            <input
              className="w-full rounded-full px-5 py-2"
              type="text"
              placeholder="Enter your task..."
              value={newtask}
              onChange={handleInputChange}
            />

            <button
              className="bg-violet-900 mx-2 px-6 py-2 rounded-full font-bold text-white hover:bg-violet-700 text-sm"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>

        <div className="my-8 flex flex-col">
          <ol className="mx-2  ">
            {tasks.map((element, index) => (
              <li key={index}>
                <div className="flex my-2">
                  <div className="rounded-lg h-[5vh] items-center px-5 flex flex-row bg-white w-[80%] ">
                    {element}
                  </div>
                  <button
                    className=" bg-red-600 text-white mx-2 px-4 font-bold rounded-lg "
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
