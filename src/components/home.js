import React from 'react';
import style from './home.scss';
import * as NavAction from '../view-actions/nav';

export default React.createClass({

  join() {
    NavAction.navTo('/join');
  },

  newGame() {
    gamesStore.newGame();
  },

  render() {
    return (
      <div className={ style['home'] }>
        <button className={ style['home__button'] } onClick={ this.newGame }>New</button>
        <button className={ style['home__button'] } onClick={ this.join }>Join</button>
      </div>
    );
  },

});
