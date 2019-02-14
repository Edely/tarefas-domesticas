import React from 'react';
import Task from './Task/Task';

const tasks = (props) => {
    let tasks = null;
    const taskClasses = ['task-list'];

    props.concluida ? taskClasses.push('concluded-tasks') : taskClasses.push('open-tasks');
    //console.log(props)
    if (props.tasks) {

        tasks = props.tasks.map(task => {

            return (
                tasks = <Task
                    nome={task.nome}
                    descricao={task.descricao}
                    prazo={task.prazo}
                    responsavel={task.responsavel}
                    feita={task.feita}
                    atrasada={task.atrasada}
                    taskAdd={props.taskAdded}/>
            )
        });
    }

    return (
        <div className={taskClasses.join(' ')}>
            <div className={'task-list__header'}> {props.concluded ? 'Tarefas Concluídas/Arquivadas' : 'Tarefas Por Fazer'}</div>
            {tasks}
        </div>
    );
}

export default tasks;