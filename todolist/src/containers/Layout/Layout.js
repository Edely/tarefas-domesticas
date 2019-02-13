import React, { Component } from 'react';
import Tarefas from '../../components/Tarefas/Tarefas';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class Layout extends Component{

    render(){
        let tarefas =  null;

        if(this.props.tarefas){
            const tarefasConcluidas= this.props.tarefas.filter(tarefa => tarefa.feita);
            const tarefasAbertas = this.props.tarefas.filter(tarefa => !tarefa.feita);

            tarefas = (
                <Aux>     
                    <Tarefas tarefas={tarefasAbertas} concluida={false}/>
                    <Tarefas tarefas={tarefasConcluidas} concluida/>   
                </Aux>
            );
        };

        return tarefas;
    };
};


const mapStateToProps = state =>{
    return{
        tarefas : state.tarefas
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLoadTarefas : dispatch(actions.loadTarefas())
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Layout);