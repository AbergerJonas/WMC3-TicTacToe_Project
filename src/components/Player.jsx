import { useState } from "react";

const Player = (props) => {

    let {playerName,playerSymbol} = props; //Assign Properties
    const [isEditing, setIsEditing] = useState(false);



    const handleEditClick = () => {
        setIsEditing(true);
    }
    if(isEditing) {
        playerName = <input type="text" required/> //required => erforderliche Eingabe
    }

    return (
        <li>
            <span className="player">
              <span className="player-name">{playerName}</span>
              <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )
}
export default Player;