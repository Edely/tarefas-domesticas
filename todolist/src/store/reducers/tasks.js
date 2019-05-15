import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: null
};

const addTask = state => {
  return {
    nome: "Jogar Bola",
    descricao: "Ou amarelinha",
    responsavel: "Fernanda",
    prazo: "1555361449333",
    feita: false
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      action.tasks.map(tarefa => {
        tarefa.atrasada = new Date(tarefa.deadline) <= new Date();
        return null;
      });
      return {
        ...state,
        tasks: action.tasks
      };

    case actionTypes.ADD_TASK:
      return addTask(state);

    default:
      return state;
  }
};

export default reducer;
