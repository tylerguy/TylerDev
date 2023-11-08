import React, { Component } from 'react';

class GameTable extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    // You can replace this URL with the actual API endpoint to fetch your data
    fetch('https://steam.tylerdev.space/')
      .then((response) => response.json())
      .then((data) => this.setState({ games: data }));
  }

  render() {
    const { games } = this.state;

    return (
      <div>
        <h2>Game Table</h2>
        <table>
          <thead>
            <tr>
              <th>App ID</th>
              <th>Name</th>
              <th>Playtime</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.appid}>
                <td>{game.appid}</td>
                <td>{game.name}</td>
                <td>{game.playtime_forever}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GameTable;
