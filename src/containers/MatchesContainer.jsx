import React, { Component } from 'react';
import {
  array, bool, object, number, func, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { matchActions } from 'actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Card from './Card';

class MatchesContainer extends Component {
  static propTypes = {
    matches: array.isRequired,
    isLoading: bool.isRequired,
    classes: object.isRequired,
    error: object,
    totalGames: number.isRequired,
    page: number.isRequired,
    loadMore: func.isRequired,
    summonerName: string.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  handleLoadMore = () => {
    const { page, summonerName, loadMore } = this.props;

    loadMore(summonerName, page);
  };

  render() {
    const {
      matches, isLoading, classes, error, page, totalGames,
    } = this.props;

    if (error) {
      return <div className="error-container">Failed to get matches information</div>;
    }

    return (
      <div className="cards-container">
        {matches.length > 0 && matches.map(match => <Card key={match.game.id} match={match} />)}

        {isLoading && (
          <div className="loading-container">
            <CircularProgress className={classes.progress} />
          </div>
        )}

        {page > 0 && matches.length < totalGames && (
          <Button
            fullWidth
            variant="contained"
            onClick={() => this.handleLoadMore()}
            color="primary"
          >
            Load More
          </Button>
        )}
      </div>
    );
  }
}

const styles = {
  progress: {
    marginTop: '50pt',
  },
};

const mapStateToProps = ({ matches }) => ({
  matches: matches.matches,
  isLoading: matches.isLoading,
  error: matches.error,
  page: matches.page,
  totalGames: matches.totalGames,
  summonerName: matches.summonerName,
});

const mapDispatchToProps = {
  loadMore: matchActions.loadMore,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MatchesContainer),
);
