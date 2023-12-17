import { useRef } from 'react';

const situations = ["Célibataire", "Marié(e)", "Divorcé(e)", "Veuf(veuve)"];

const Form = () => {
    const valuesRef = useRef({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            handleCheckboxChange(e);
        } else if (type === "radio") {
            valuesRef.current[name] = checked ? value : '';
        } else {
            valuesRef.current[name] = value;
        }
    };
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        let values = valuesRef.current[name] ?? [];
        if (checked && !values.includes(value)) {
            values.push(value);
        } else if (!checked && values.includes(value)) {
            values = values.filter(val => val !== value);
        }
        valuesRef.current[name] = values;
    };
    return (
        <form>
            <div>
                <label htmlFor="nom">Nom : </label>
                <input id="nom" name="nom" onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="prenom">Prénom : </label>
                <input id="prenom" name="prenom" onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input id="email" name="email" type="email" onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="mdp">Mot de passe : </label>
                <input id="mdp" name="mdp" type="password" onChange={handleInputChange} />
            </div>
            <div>
                <label>Genre : </label>
                <label>
                    <input name="genre" type="radio" value="F" onChange={handleInputChange} /> Femme
                </label>
                <input id="homme" name="genre" type="radio" value="H" onChange={handleInputChange} />
                <label htmlFor="homme">Homme </label>
            </div>
            <div>
                <label htmlFor="naissance">Date naissance : </label>
                <input id="naissance" name="naissance" type="date" onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="situation">Situation familiale : </label>
                <select id="situation" name="situation" onChange={handleInputChange}>
                    {situations.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="nbrEnfants">Nombre enfants : </label>
                <input id="nbrEnfants" name="nbrEnfants" type="number" onChange={handleInputChange} />
            </div>
            <div>
                <label>Loisirs : </label>
                <label>
                    <input name="loisirs" type="checkbox" value="lecture" onChange={handleInputChange} /> Lecture
                </label>
                <input id="natation" name="loisirs" type="checkbox" value="natation" onChange={handleInputChange} />
                <label htmlFor="natation">Natation</label>
                <input id="cinema" name="loisirs" type="checkbox" value="cinema" onChange={handleInputChange} />
                <label htmlFor="cinema">Cinéma</label>
            </div>
            <div>
                <label htmlFor="image">Image : </label>
                <input id="image" name="image" type="file" onChange={handleInputChange} />
            </div>
            <div>
                <label>A propos : </label><br />
                <textarea rows={4} name="apropos" onChange={handleInputChange} />
            </div>

            <button type="button" onClick={() => console.log(valuesRef.current)}>Afficher les valeurs</button>
        </form>
    );
}

export default Form;
