import React, { Component } from 'react';
import LampListItem from '../lamp-list-item';
import './lamp-list.css';
class LampList extends Component {
  render() {
    const { lamps } = this.props;
    return (
      <ul>
        {lamps.map((lamp) => {
          return (
            <li key={lamp.id}>
              <LampListItem lamp={lamp} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LampList;
