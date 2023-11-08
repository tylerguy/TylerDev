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
              <th>Icon</th>
              <th>Name</th>
              <th>Playtime</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.appid}>
                <td><img src="http://media.steampowered.com/steamcommunity/public/images/apps/{game.appid}/{game.img_icon_url}.jpg" alt="{game.name}"></img></td>
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
