import React from 'react';
import Task from './Task/Task';

const tasks = (props) => {
    let tasks = null;
    const classesTarefas = ['task-list'];

    props.concluida ? classesTarefas.push('concluded-tasks') : classesTarefas.push('open-tasks');

    if (props.tasks) {

        tasks = props.tasks.map(task => {

            return (
                tasks = <Task
                    nome={task.nome}
                    descricao={task.descricao}
                    prazo={task.prazo}
                    responsavel={task.responsavel}
                    feita={task.feita}
                    atrasada={task.atrasada} />
            )
        });
    }

    return (
        <div className={classesTarefas.join(' ')}>
            <div className={'task-list__header'}> {props.concluded ? 'Tarefas Concluídas/Arquivadas' : 'Tarefas Por Fazer'}</div>
            {tasks}
        </div>
    );
}


export default tasks;