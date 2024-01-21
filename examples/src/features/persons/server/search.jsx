import { useForm } from "react-hook-form"
import Field from "../../../components/form/field";

let count = 0;

const SearchPerson = ({ onSearch, defaultFilters }) => {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: defaultFilters
    });

    const onSubmit = values => {
        console.log('form values ', values);
        onSearch(values);
    }
    const onReset = () => {
        console.log('reset form values ');
        reset(defaultFilters);
        onSearch(defaultFilters);
    }
    console.log('rerender person search : ', ++count);

    return (
        <form className="space-y-12" onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <Field label="Nom" name="nom" control={control} />
                <Field type="email" label="Email" name="email" control={control} />
                <Field label="Nombre enfants" name="nbrEnfants_gte" control={control} />
                <Field name="nbrEnfants_lte" control={control} />
            </div>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Chercher
            </button>
            <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">Réinitialiser</button>
        </form>
    );
}

export default SearchPerson;
