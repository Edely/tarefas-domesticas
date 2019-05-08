import React from 'react';
import Button from '../../UI/Button/Button';
import { twoDigits } from '../../../shared/utilities';
import './Task.css';

const tarefa = (props) => {
    let date = null;
    if (props.prazo) {
        date = new Date(parseInt(props.prazo));
        date = twoDigits(date.getDate()) + '/' + twoDigits(date.getMonth()) + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + twoDigits(date.getMinutes());
    }
    let classesDate = ['tasks-list__item__info', 'tasks-list__item__info--date', 'card-text'];

    if (props.atrasada) {
        classesDate.push('closed-task');
    }

    return (
        <div className={'card tasks-list__item text-white'}>
            <div className={'tasks-list__item__info--header card-header'}>
                <h5 className={'tasks-list__item__info tasks-list__item__info--name card-title'}>{props.nome} </h5>
            </div>
            
            <div className={'tasks-list__item__info tasks-list__item__info--description'}>{props.descricao}</div>
            <p className={'tasks-list__item__info tasks-list__item__info--owner card-text'}>{props.responsavel}</p>
            <div className={classesDate.join(' ')}>{date}</div>
            <div className={'tasks-list__item__info card-text'}>
            <Button clicked={() => props.taskAdd()}>Eas</Button></div>
        </div>
    );
};

export default tarefa;