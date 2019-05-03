import * as actionTypes from "./actionTypes";
import axios from "../../axios-config";

export const loadTasksFinished = tasks => {
  return {
    type: actionTypes.LOAD_TASKS,
    tasks: tasks
  };
};

export const loadTasks = () => {
  console.log("aqyyuu");
  return dispatch => {
    axios
      .get("tasks.json")
      .then(res => {
        console.log(res);
        dispatch(loadTasksFinished(res));
      })
      .catch(err => {
        console.log("Errou, filhão!!");
        console.error(err);
      });
  };
};

export const addTask = () => {
  return {
    type: actionTypes.ADD_TASK
  };
};
