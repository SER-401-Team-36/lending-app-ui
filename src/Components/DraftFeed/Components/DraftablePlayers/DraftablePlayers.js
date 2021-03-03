import './DraftablePlayers.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export var players = [];

export function DraftablePlayer({ name, position, FFP }) {
  const [, setPlayer] = useState([]);
  function addPlayerToTeam(e) {
    const item = e.target.value;
    players.push(name);
    document.getElementsByClassName('updateDraft')[0].click();
    setPlayer((team) => [...team, item]);
  }

  return (
    <div className="draftablePlayers">
      <NavLink
        to="/Draft"
        className="updateDraft"
        activeClassName="updateDraft"
      ></NavLink>
      <h4 className="draftablePlayers__text">
        <strong>Name: </strong> {name}
        <strong>Pos: </strong> {position}
        <strong>FFP: </strong>
        {FFP}
      </h4>
      <button onClick={addPlayerToTeam}>+</button>
    </div>
  );
}