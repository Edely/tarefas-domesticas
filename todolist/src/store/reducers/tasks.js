import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: null
};

const placeholderTarefas = [
  {
    nome: "Lavar os Pratos",
    descricao: "A melhor das tarefas. Quem não gosta?!!!",
    responsavel: "Edely",
    prazo: "657580199000",
    feita: false
  },
  {
    nome: "Alimentar os Gatos",
    descricao: "São uns monstros. Não demore!",
    responsavel: "Selina",
    prazo: "1551301799000",
    feita: true
  },
  {
    nome: "Cortar a grama",
    descricao: "Embora não tenhamos!",
    responsavel: "Edely",
    prazo: "657580179080",
    feita: false
  },
  {
    nome: "Dar banho nos jacarés",
    descricao: "Extremamente dóceis",
    responsavel: "Camila",
    prazo: "1555361489333",
    feita: false
  },
  {
    nome: "Cortar a grama",
    descricao: "Embora não tenhamos!",
    responsavel: "Edely",
    prazo: "657580179080",
    feita: false
  },
  {
    nome: "Dar banho nos jacarés",
    descricao: "Extremamente dóceis",
    responsavel: "Camila",
    prazo: "1555361489333",
    feita: true
  },
  {
    nome: "Cortar a grama",
    descricao: "Embora não tenhamos!",
    responsavel: "Edely",
    prazo: "657580179080",
    feita: false
  },
  {
    nome: "Dar banho nos jacarés",
    descricao: "Extremamente dóceis",
    responsavel: "Camila",
    prazo: "1555361489333",
    feita: false
  }
];

const addTask = state => {
  console.log(state);
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
      placeholderTarefas.map(tarefa => {
        tarefa.atrasada = tarefa.prazo <= new Date().getTime();
        return null;
      });
      console.log("action");
      console.log(action);
      return {
        ...state,
        tasks: action.tasks
      };
    //return { ...state, tasks: actionTypes.LOAD_TASKS };

    case actionTypes.ADD_TASK:
      console.log("foi, bagaça");
      return addTask(state);

    default:
      return state;
  }
};

export default reducer;
