import React from 'react';
import Tarefa from './Tarefa/Tarefa';

const tarefas = (props) =>{
        let tarefas = null;
        const classesTarefas = ['lista-tarefas'];

        props.concluida ? classesTarefas.push('tarefas-concluidas') : classesTarefas.push('tarefas-abertas');

        if(props.tarefas){                 

            tarefas = props.tarefas.map(tarefa =>{
                
                return (
                    tarefas = <Tarefa
                                nome={tarefa.nome}
                                descricao={tarefa.descricao}
                                prazo={tarefa.prazo}
                                responsavel={tarefa.responsavel}
                                feita={tarefa.feita}
                                atrasada={tarefa.atrasada}/>
                    )
                });
        }
       
        return (
                <div className={classesTarefas.join(' ')}>
                    <div className={'lista-tarefas__header'}> {props.concluida ? 'Tarefas Concluídas': 'Tarefas Por Fazer'}</div>
                    {tarefas}
                </div>
            );
    }


export default tarefas;