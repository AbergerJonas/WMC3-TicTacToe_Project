import { useState } from "react";

const Player = (props) => {

    let {initName,initSymbol,isActive} = props; //Assign Properties
    let editablePlayerName = <span className="player-name">{initName}</span>

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initName);
    

    const handleEditClick = () => {
        setIsEditing((isEditing) => !isEditing)
    }

    const handleTextChange = (e) => {
        setPlayerName(e.target.value);
    }

    
    if(isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleTextChange}/> //required => erforderliche Eingabe
    }
    else{
        editablePlayerName = <span className="player-name">{playerName}</span>
    }
  

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              <span className="player-name">{editablePlayerName}</span>
              <span className="player-symbol">{initSymbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
export default Player;