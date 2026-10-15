import { useState } from "react";

function Pseudo(){
    const [pseudo,setPseudo]=useState("");

    function pseudoHandler(element){
        setPseudo(element.target.value)
    }

    return(
        <form>
            <input type='text' maxLength={20} value={pseudo} onChange={(e)=>pseudoHandler(e)}></input>
            <div>{pseudo}</div>
            <div style={{color:pseudo.length===20?"red":"black"}}>caractères {pseudo.length}/20</div>
            <div>Bonjour, {pseudo}!</div>
        </form>
    )
}

export default Pseudo;