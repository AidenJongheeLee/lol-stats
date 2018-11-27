import React, { Component } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import GameInfoContainer from './GameInfoContainer';
import ImageContainer from './ImagesContainer';
import KDAContainer from './KDAContainer';
import StatsContainer from './StatsContainer';
import ItemsContainer from './ItemsContainer';

class MatchCard extends Component {
  static propTypes = {
    match: object.isRequired,
    classes: object.isRequired,
  };

  state = {};

  render() {
    const { match, classes } = this.props;
    const { player, game } = match;

    return (
      <Card className={classNames(classes.card, {
        [classes.win]: game.win,
        [classes.defeat]: !game.win,
      })}
      >
        <Typography className={classes.text} variant="title" align="center">{player.summonerName}</Typography>
        <CardContent className={classes.content}>
          <GameInfoContainer game={game} />

          <ImageContainer player={player} />

          <KDAContainer player={player} />

          <StatsContainer player={player} />

          <ItemsContainer player={player} />
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  card: {
    margin: 20,
  },
  win: {
    backgroundColor: '#A4CFEB',
  },
  defeat: {
    backgroundColor: '#E1B6B4',
  },
  text: {
    marginTop: 15,
  },
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MatchCard),
);
