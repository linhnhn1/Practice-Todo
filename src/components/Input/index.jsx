import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }


  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };


  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.title, this.state.content);
  };

  render() {
    return (
      <Grid item xs={12} className="form">
        <form onSubmit={this.handleSubmit}>
        <p>Họ và tên : </p>
          <TextField
            onChange={this.handleChange}
            value={this.state.title}
            type="text"
            placeholder="Họ và tên"
            name="title"
            required
          />
          <br />
        <p>Chức vụ : </p>
          <TextField
            onChange={this.handleChange}
            value={this.state.content}
            type="text"
            placeholder="Chức vụ"
            name="content"
            required
          />
          <Button type="submit">Thêm</Button>
        </form>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, content) => {
      dispatch(actions.addPost(title, content));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Input);
