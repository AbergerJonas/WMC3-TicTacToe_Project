const Log = (props) => {
    let {turns} = props;

    return (
        <ol id="log">
            {turns.map((turn) => {
                <li key={`$(turn.square.row)$(turn.square.col)`}>
                    {turn.player} selected {turn.square.row},{turn.square.col}
                    <div>HONS</div>
                </li>
            })}
        </ol>
    )
    
}
export default Log;