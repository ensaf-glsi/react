import useForm from './useForm'; // Assurez-vous d'ajuster le chemin d'importation si nécessaire
import { useEffect } from 'react';
// import { useForm } from 'react-hook-form';

const situations = ["Célibataire", "Marié(e)", "Divorcé(e)", "Veuf(veuve)"];

let count = 0;

const Form = () => {
    const form = useForm({
        defaultValues: {
            nom: '',
            prenom: '',
            email: '',
            mdp: '',
            genre: '',
            naissance: '',
            situation: 'Célibataire',
            nbrEnfants: '',
            loisirs: [],
            apropos: '',
        }
    });
    const { register, handleSubmit, watch } = form;
    const { setValue } = form;

    const onSubmit = (values) => {
        console.log('Form Values:', values);
    };

    // const values = watch();
    // console.log('all values ?', values)
    const situation = watch('situation');
    console.log('situation ? ', situation);
    const [prenom, nom] = watch(['prenom', 'nom']);
    console.log('name ? ', prenom, nom);
    console.log('render ', ++count);
    useEffect(() => {
        if (nom && prenom) {
            setValue('email', `${prenom}.${nom}@gmail.com`);
        }
    }, [nom, prenom, setValue])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="prenom">Prénom : </label>
                <input {...register("prenom")} />
            </div>
            <div>
                <label htmlFor="nom">Nom : </label>
                <input {...register("nom")} />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input {...register("email")} type="email" />
            </div>
            <div>
                <label htmlFor="mdp">Mot de passe : </label>
                <input {...register("mdp")} type="password" />
            </div>
            <div>
                <label>Genre : </label>
                <input {...register("genre")} type="radio" value="Homme" id="homme" />
                <label htmlFor="homme">Homme</label>
                <input {...register("genre")} type="radio" value="Femme" id="femme" />
                <label htmlFor="femme">Femme</label>
            </div>
            <div>
                <label htmlFor="naissance">Date de naissance : </label>
                <input {...register("naissance")} type="date" />
            </div>
            <div>
                <label htmlFor="situation">Situation familiale : </label>
                <select {...register("situation")}>
                    {situations.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
            {situation !== 'Célibataire' && (
                <div>
                    <label htmlFor="nbrEnfants">Nombre enfants : </label>
                    <input {...register("nbrEnfants", { defaultValue: 0 })} type="number" />
                </div>
            )}
            <div>
                <label>Loisirs : </label>
                <label>
                    <input {...register("loisirs")} type="checkbox" value="lecture" /> Lecture
                </label>
                <label>
                    <input {...register("loisirs")} type="checkbox" value="natation" /> Natation
                </label>
                <label>
                    <input {...register("loisirs")} type="checkbox" value="cinema" /> Cinéma
                </label>
            </div>
            <div>
                <label htmlFor="apropos">A propos : </label><br />
                <textarea {...register("apropos")} rows={4} />
            </div>
            <button type="submit">Soumettre</button>
        </form>
    );
};

export default Form;
