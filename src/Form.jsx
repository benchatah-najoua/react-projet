import { useState } from "react";

function Form(){
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    function nameHandler(element){
        setName(element.target.value);
    }

    function address2Handler(element){
        setAddress2(element.target.value);
    }

    function lastnameHandler(element){
        setLastname(element.target.value);
    }

    function address1Handler(element){
        setAddress1(element.target.value);
    }

    function cityHandler(element){
        setCity(element.target.value);
    }

    function stateHandler(element){
        setState(element.target.value);
    }

    return(
        <form>
            <label>First Name</label>
            <input typr='text' value={name} onChange={(e)=>nameHandler(e)}></input>
            <div>{name}</div>
            <label>Last Name</label>
            <input typr='text' value={lastname} onChange={(e)=>lastnameHandler(e)}></input>
            <div>{lastname}</div>
            <label>Street Address</label>
            <input typr='text' value={address1} onChange={(e)=>address1Handler(e)}></input>
            <div>{address1}</div>
            <label>Address Line 2</label>
            <input typr='text' value={address2} onChange={(e)=>address2Handler(e)}></input>
            <div>{address2}</div>
            <label>City</label>
            <input typr='text' value={city} onChange={(e)=>cityHandler(e)}></input>
            <div>{city}</div>
            <label>State</label>
            <select name="region" value={state} onChange={(e)=>stateHandler(e)}>
                <option value="tanger">Tanger-Tétouan-Al Hoceïma</option>
                <option value="oriental">L'Oriental</option>
                <option value="fes">Fès-Meknès</option>
                <option value="rabat">Rabat-Salé-Kénitra</option>
                <option value="beni-mellal">Béni Mellal-Khénifra</option>
                <option value="casablanca">Casablanca-Settat</option>
                <option value="marrakech">Marrakech-Safi</option>
                <option value="draa-tafilalet">Drâa-Tafilalet</option>
                <option value="souss">Souss-Massa</option>
                <option value="guelmim">Guelmim-Oued Noun</option>
                <option value="laayoune">Laâyoune-Sakia El Hamra</option>
                <option value="dakhla">Dakhla-Oued Ed-Dahab</option>
            </select>
        </form>
    )
}
export default Form;