import React, { Component } from "react";
import Tasks from "../../components/Tasks/Tasks";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

class Layout extends Component {
  componentWillMount() {
    this.props.onLoadTasks();
  }

  render() {
    let tasks = null;

    if (this.props.tasks) {
      const concludedTasks = this.props.tasks.filter(task => task.done);
      const openTasks = this.props.tasks.filter(task => !task.done);
      tasks = (
        <Aux>
          <Tasks
            tasks={openTasks}
            concluded={false}
            taskAdded={() => this.props.onAddTask()}
          />
          <Tasks tasks={concludedTasks} concluded />
        </Aux>
      );
    }

    return tasks;
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTasks: () => dispatch(actions.loadTasks()),
    onAddTask: () => dispatch(actions.addTask())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
