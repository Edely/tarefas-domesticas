import React from 'react';
import Button from '../../UI/Button/Button';
//import { twoDigits } from '../../../shared/utilities';
import './Task.css';

const tarefa = (props) => {
    let date = null;
    if (props.prazo) {        
        let arrayDate = props.prazo.split('-');
        date = arrayDate[2].split('T')[0].split('Z')[0] + '/' + arrayDate[1] + '/' + arrayDate[0] + '  ' + arrayDate[2].split('T')[1].split('Z')[0];
    }
    let classesDate = ['tasks-list__item__info', 'tasks-list__item__info--date', 'card-text'];
    let itemClasses = ['card', 'tasks-list__item', 'text-white'];

    let buttonMessage = 'Arquivar';
    if (props.atrasada) {
        //console.log(props.atrasada);
        itemClasses.push('delayded-task');
    }
    return (
        <div className={itemClasses.join(' ')}>
            <div className={'tasks-list__item__info--header card-header'}>
                <h5 className={'tasks-list__item__info tasks-list__item__info--name card-title'}>{props.nome} </h5>
            </div>            
            <div className={'tasks-list__item__info tasks-list__item__info--description'}>{props.descricao}</div>
            <p className={'tasks-list__item__info tasks-list__item__info--owner card-text'}>{props.responsavel}</p>
            <div className={classesDate.join(' ')}>{date}</div>
            <div className={'tasks-list__item__info card-text'}>
            <Button classname={props.classButton} clicked={() => props.taskAdd()}>{buttonMessage}</Button></div>
        </div>
    );
};

export default tarefa;