const Player = (props) => {

    const {playerName,playerSymbol} = props;

    return (
        <li>
            <span className="player">
              <span className="player-name">{playerName}</span>
              <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button>Edit</button>
        </li>
    )
}
export default Player;