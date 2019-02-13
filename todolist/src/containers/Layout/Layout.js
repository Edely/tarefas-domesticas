import React, { Component } from 'react';
import Tasks from '../../components/Tasks/Tasks';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class Layout extends Component {

    render() {
        let tasks = null;

        console.log(tasks)

        if (this.props.tasks) {
            const concludedTasks = this.props.tasks.filter(task => task.feita);
            const openTasks = this.props.tasks.filter(task => !task.feita);

            tasks = (
                <Aux>
                    <Tasks tasks={openTasks} concluded={false} />
                    <Tasks tasks={concludedTasks} concluded />
                </Aux>
            );
        };

        return tasks;
    };
};


const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadTasks: dispatch(actions.loadTasks())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);