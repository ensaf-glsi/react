import { useEffect, useState } from "react";

const CELIBATAIRE = "Célibataire";
const situations = [CELIBATAIRE, "Marié(e)", "Divorcé(e)", "Veuf(veuve)"];

let count = 0;

// hook personnalisé
const useField = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const handleChange = e => {
        const { target: { name, value } } = e;
        console.log(name + ' : ', value)
        setValue(value);
    }
    return [value, handleChange, setValue];
}

const Form = () => {
    // const [situation, setSituation] = useState(CELIBATAIRE);
    const [showChildren, setShowChildren] = useState(false);
    const [email, handleChangeEmail, setEmail] = useField('');
    // const emailField = useField('');
    // const email = emailField[0];
    // const handleChangeEmail = emailField[1]
    // const setEmail = emailField[2]
    // const [email, setEmail] = useState('');
    // const handleChangeEmail = e => {
    //     console.log('email : ', e.target.value);
    //     setEmail(e.target.value);
    // }
    const [password, handleChangePassword] = useField('');
    const [firstName, handleChangeFirstName] = useField('');
    const [lastName, handleChangeLastName] = useField('');
    // const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
    console.log('render form ', ++count);
    useEffect(() => {
        if (firstName && lastName) {
            setEmail(`${firstName}.${lastName}@gmail.com`);
        }
    }, [firstName, lastName]);
    

    const handleChangeSituation = (e) => {
        setShowChildren(e.target.value == CELIBATAIRE ? false : true);
    }

    return (
        <form>
            <div>
                <label htmlFor="prenom">Prénom : </label>
                <input id="prenom" name="prenom" onChange={handleChangeFirstName} />
            </div>
            <div>
                <label htmlFor="nom">Nom : </label>
                <input id="nom" name="nom" onChange={handleChangeLastName} />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input id="email" name="email" type="email" value={email} onChange={handleChangeEmail} />
            </div>
            <div>
                <label htmlFor="mdp">Mot de passe : </label>
                <input id="mdp" name="mdp" type="password" onChange={handleChangePassword}/>
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
