import * as actionTypes from './actionTypes';

export const loadTasks = () => {
    return {
        type: actionTypes.LOAD_TASKS
    };
};

export const addTask = () =>{
    return{
        type: actionTypes.ADD_TASK
    };
};