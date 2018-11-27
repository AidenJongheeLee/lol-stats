import React, { Component } from 'react';
import { object, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { matchActions } from 'actions';
import MatchesContainer from './MatchesContainer';

import './MainContainer.css';

class MainContainer extends Component {
  static propTypes = {
    classes: object.isRequired,
    getMatches: func.isRequired,
    isLoading: bool.isRequired,
  };

  state = {
    name: '',
    error: '',
  };

  handleSubmit = () => {
    const { getMatches } = this.props;
    const { name } = this.state;
    // test valid input
    const regex = new RegExp('^[0-9\\p{L} _\\.]+$');
    if (regex.test(name)) {
      this.setState({ error: 'Not a valid summoner name' });
    }

    getMatches(name);
  };

  render() {
    const { name, error } = this.state;
    const { classes, isLoading } = this.props;
    return (
      <div className="main-container">
        <div className="flex-container">
          <TextField
            error={Boolean(error)}
            helperText={error}
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            variant="outlined"
            placeholder="Summoner name"
          />
          <Button
            disabled={isLoading}
            className={classes.button}
            color="primary"
            variant="contained"
            onClick={() => this.handleSubmit()}
          >
            Submit
          </Button>
        </div>

        <MatchesContainer />
      </div>
    );
  }
}

const styles = {
  button: {
    marginLeft: 10,
  },
};

const mapStateToProps = ({ matches }) => ({
  isLoading: matches.isLoading,
});

const mapDispatchToProps = {
  getMatches: matchActions.getMatches,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MainContainer),
);
