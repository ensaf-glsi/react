import { useState } from "react";

const CELIBATAIRE = "Célibataire";
const situations = [CELIBATAIRE, "Marié(e)", "Divorcé(e)", "Veuf(veuve)"];

let count = 0;

const Form = () => {
    // const [situation, setSituation] = useState(CELIBATAIRE);
    const [showChildren, setShowChildren] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
    console.log('render form ', ++count)
    const handleChangeFirstName = (e) => {
        const {target: {value}} = e;
        setFirstName(value);
        setEmail(`${value}.${lastName}@gmail.com`)
    }
    const handleChangeLastName = (e) => {
        const {target: {value}} = e;
        setLastName(value);
        setEmail(`${firstName}.${value}@gmail.com`)
    }
    const handleChangeSituation = (e) => {
        setShowChildren(e.target.value == CELIBATAIRE ? false : true);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <form>
            <div>
                <label htmlFor="nom">Nom : </label>
                <input id="nom" name="nom" onChange={handleChangeLastName} />
            </div>
            <div>
                <label htmlFor="prenom">Prénom : </label>
                <input id="prenom" name="prenom" onChange={handleChangeFirstName} />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input id="email" name="email" type="email" value={email} onChange={handleChangeEmail} />
            </div>
            <div>
                <label htmlFor="mdp">Mot de passe : </label>
                <input id="mdp" name="mdp" type="password" />
            </div>
            <div>
                <label>Genre : </label>
                <label>
                    <input name="genre" type="radio" value="F" /> Femme
                </label>
                <input id="homme" name="genre" type="radio" value="H" />
                <label htmlFor="homme">Homme </label>
            </div>
            <div>
                <label htmlFor="naissance">Date naissance : </label>
                <input id="naissance" name="naissance" type="date" />
            </div>
            <div>
                <label htmlFor="situation">Situation familiale : </label>
                <select id="situation" name="situation" onChange={handleChangeSituation}>
                    {situations.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
            {showChildren && (
                <div>
                    <label htmlFor="nbrEnfants">Nombre enfants : </label>
                    <input id="nbrEnfants" name="nbrEnfants" type="number" />
                </div>
            )}
            <div>
                <label>Loisirs : </label>
                <label>
                    <input name="loisirs" type="checkbox" value="lecture" /> Lecture
                </label>
                <input id="natation" name="loisirs" type="checkbox" value="natation" />
                <label htmlFor="natation">Natation</label>
                <input id="cinema" name="loisirs" type="checkbox" value="cinema" />
                <label htmlFor="cinema">Cinéma</label>
            </div>
            <div>
                <label htmlFor="image">Image : </label>
                <input id="image" name="image" type="file" />
            </div>
            <div>
                <label>A propos : </label><br />
                <textarea rows={4} name="apropos" />
            </div>

            <button type="button">Afficher les valeurs</button>
        </form>
    );
}

export default Form;
