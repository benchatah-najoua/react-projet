import { useState } from "react";

function StudentProfile(){
    const [isVisible,setIsVisible]=useState(false);
    const info = {name: "Najoua",filiere: "Développement informatique"};

    return(
        <div>
            <button onClick={()=>setIsVisible(!isVisible) }>{isVisible ? "Masquer mon profil" : "Afficher mon profil"}</button>
            {isVisible && (
                <p>{info.name} -- {info.filiere}</p>
            )
            }
            {!isVisible && (
                <p>Les informations sont masquées</p>
                )}
        </div>
    )
}

export default StudentProfile;