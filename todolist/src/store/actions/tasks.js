import * as actionTypes from "./actionTypes";
import axios from "../../axios-config";

export const loadTasksFinished = tasks => {
  console.log("tasks");
  console.log(tasks[0]);
  return {
    type: actionTypes.LOAD_TASKS,
    tasks: tasks
  };
};

export const loadTasks = () => {
  console.log("aquuiii");
  return dispatch => {
    axios
      .get("tasks.json")
      .then(res => {
        dispatch(loadTasksFinished(res.data));
      })
      .catch(err => {
        console.error("Error loding tasks: ", err);
      });
  };
};

export const addTask = () => {
  return {
    type: actionTypes.ADD_TASK
  };
};
