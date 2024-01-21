import { useEffect } from "react";
import { useForm } from "react-hook-form"
import Field from "../../../components/form/field";

let count = 0;

const EditPerson = ({ onValidate, entity }) => {
    const { control, handleSubmit, register, reset } = useForm({
        defaultValues: entity
    });
    useEffect(() => {
        reset(entity);
    }, [entity, reset]);

    const onSubmit = values => {
        console.log('form values ', values);
        // ajouter la personne a la liste
        onValidate(values);
    }
    const onReset = () => {
        console.log('reset form values ');
        reset(entity);
    }
    // const [prenom, nom] = watch(['prenom', 'nom']);
    // useEffect(() => {
    //     if (prenom && nom) {
    //         // calculer l'email et actualiser l input
    //         setValue('email', `${prenom?.toLowerCase()}.${nom.toLowerCase()}@usmba.ac.ma`);
    //     }
    // }, [prenom, nom, setValue]);

    console.log('rerender person edit : ', ++count);

    return (
        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
            <input type="hidden" {...register('id')} />
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <Field label="Prénom" name="prenom" control={control} />
                <Field label="Nom" name="nom" control={control} />
                <Field type="email" label="Email" name="email" control={control} />
                <Field type="date" label="Date naissance" name="naissance" control={control} />
            </div>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Valider
            </button>
            <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">Réinitialiser</button>
        </form>
    );
}

export default EditPerson;
