import { useEffect } from "react";
import { useForm } from "react-hook-form"
import Field from "./Field";

const CELIBATAIRE = "Célibataire";
const situations = [CELIBATAIRE, "Marié(e)", "Divorcé(e)", "Veuf(veuve)"];
// const situations = [
//     { value: CELIBATAIRE, label: CELIBATAIRE },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]
let count = 0;

const defaultValues = {
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    genre: '',
    naissance: '',
    situation: CELIBATAIRE,
    nbrEnfants: '',
    loisirs: [],
    apropos: '',
};

const Form = () => {
    const { register, control, handleSubmit, watch, setValue } = useForm({ defaultValues });
    const onSubmit = values => {
        console.log('form values ', values);
    }
    // const formValues = watch();
    // console.log(formValues);

    // const prenom = watch('prenom');
    // console.log(prenom);
    // const nom = watch('nom');
    // console.log(nom);
    const [prenom, nom] = watch(['prenom', 'nom']);
    useEffect(() => {
        if (prenom && nom) {
            // calculer l'email et actualiser l input
            setValue('email', `${prenom}.${nom}@usmba.ac.ma`);
        }
    }, [prenom, nom, setValue]);
    const situation = watch('situation');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {++count}
            <Field label="Prénom" name="prenom" control={control} />
            <Field label="Nom" name="nom" control={control} />
            <Field type="email" label="Email" name="email" control={control} />
            <Field type="password" label="Mot de passe" name="mdp" control={control} />
            <div>
                <label>Genre : </label>
                <label>
                    <input {...register("genre")} type="radio" value="F" /> Femme
                </label>
                <input id="homme" {...register("genre")} type="radio" value="H" />
                <label htmlFor="homme">Homme </label>
            </div>
            <Field type="date" label="Date naissance" name="naissance" control={control} />
            <Field type="select" 
                label="Situation familiale" name="situation" 
                options={situations}
                // getOptionLabel={(option) => {
                //     console.log(option);
                //     return option;
                // }}
                // getOptionValue={(option) => option}
                control={control} />
            {situation !== CELIBATAIRE && (
                <Field type="number" label="Nombre enfants" name="nbrEnfants" control={control} />
            )}
            <div>
                <label>Loisirs : </label>
                <label>
                    <input {...register("loisirs")} type="checkbox" value="lecture" /> Lecture
                </label>
                <input id="natation" {...register("loisirs")} type="checkbox" value="natation" />
                <label htmlFor="natation">Natation</label>
                <input id="cinema" {...register("loisirs")} type="checkbox" value="cinema" />
                <label htmlFor="cinema">Cinéma</label>
            </div>
            <Field type="file" label="Image" name="image" control={control} />
            <Field type="textarea" label="A propos" name="apropos" control={control} rows={3} />

            <button type="submit">Afficher les valeurs</button>
        </form>
    );
}

export default Form;
