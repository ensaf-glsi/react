import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import EditPerson from "./edit";
import { deletePerson, findPersons } from "../../../apis/personsApi";
import SearchPerson from "./search";

let count = 0;

const defaultValues = {
    nom: '',
    prenom: '',
    email: '',
    naissance: '',
};

const defaultFilters = {
    nom: '',
    email: '',
    nbrEnfants_gte: '',
    // nbrEnfants_lte: '',
}

const PersonList = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [filters, setFilters] = useState(defaultFilters);
    const [data, setData] = useState([]);
    const [entity, setEntity] = useState(null);
    const editing = entity !== null;
    
    useEffect(() => {
        searchPersons(defaultFilters);
    }, []);
/*
    const searchPersons = filters => {
        setIsFetching(true);
        findPersons(filters).then(response => {
            console.log('find person : ', response);
            setData(response.data);
        }).finally(() => {
            setIsFetching(false);
        });
    }
*/
    const searchPersons = async filters => {
        setFilters(filters);
        setIsFetching(true);
        try {
            const response = await findPersons(filters);
            console.log('find person : ', response);
            setData(response.data);
        } finally {
            setIsFetching(false);
        }
    }

    const remove = async person => {  
        if (confirm(`Etes vous sur de vouloir supprimer la personne avec le nom : ${person.nom} ${person.prenom} ?`)) {
            try {
                // enregistrer les anciens données
                //  supprimer ici en front
                await deletePerson(person.id);
                searchPersons(filters);
                // mettre a jour manuellement la liste
                // setData(draft => {
                //     const newData = draft.filter(p => p.id !== person.id);
                //     console.log('new data : ', newData);
                //     return newData;
                // });
            } catch (error) {
                // remettre les anciens données
            }
        }
    };
    const create = person => {
        setData(draft => draft.concat({...person, id: uuidv4()}));
    }
    const update = person => {
        setData(draft => draft.map(p => p.id === person.id ? person : p));
    }
    const onValidate = values => {
        if (entity === defaultValues) {
            create(values);
        } else {
            update(values);
        }
        setEntity(null);
    }
    const edit = (person) => {
        console.log('edit ? ', person);
        setEntity(person);
    }
    const newEnity = () => {
        console.log('new person');
        setEntity(defaultValues);
    }
    console.log('rerender person list : ', ++count);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            {editing && <EditPerson onValidate={onValidate} entity={entity} />}
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Persons</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        La liste des personnes
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        onClick={newEnity}
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">

                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <SearchPerson defaultFilters={filters} onSearch={searchPersons} />
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Prénom
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Nom
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Date naissance
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Nbr Enfants
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {data.map((person) => (
                                    <tr key={person.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {person.prenom}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.nom}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.naissance}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.nbrEnfants}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <button onClick={() => edit(person)}
                                                    className="text-indigo-600 hover:text-indigo-900">
                                                Modifier<span className="sr-only">, {person.name}</span>
                                            </button>
                                            <button className="ml-1 text-red-600 hover:text-red-900" onClick={() => remove(person)}>Supprimer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {isFetching && (
                            <div>Chargement ...</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonList;