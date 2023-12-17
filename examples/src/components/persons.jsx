import { useState } from "react";

const defaultData = [
    {
        nom: 'Martin',
        prenom: 'Jean',
        email: 'jean.martin@example.com',
        mdp: 'password123',
        genre: 'Homme',
        naissance: '1990-05-01',
        situation: 'CELIBATAIRE',
        nbrEnfants: 0,
        loisirs: ['natation', 'lecture'],
        apropos: 'Je suis développeur web.',
    },
    {
        nom: 'Dupont',
        prenom: 'Marie',
        email: 'marie.dupont@example.com',
        mdp: 'marieSecure',
        genre: 'Femme',
        naissance: '1988-10-15',
        situation: 'CELIBATAIRE',
        nbrEnfants: 1,
        loisirs: ['peinture', 'course'],
        apropos: 'Artiste freelance.',
    },
    {
        nom: 'Leclerc',
        prenom: 'Paul',
        email: 'paul.leclerc@example.com',
        mdp: 'paulPass',
        genre: 'Homme',
        naissance: '1992-02-28',
        situation: 'CELIBATAIRE',
        nbrEnfants: 0,
        loisirs: ['cinéma', 'musique'],
        apropos: 'Musicien professionnel.',
    },
    {
        nom: 'Bernard',
        prenom: 'Claire',
        email: 'claire.bernard@example.com',
        mdp: 'claireB123',
        genre: 'Femme',
        naissance: '1993-03-20',
        situation: 'CELIBATAIRE',
        nbrEnfants: 2,
        loisirs: ['jardinage', 'randonnée'],
        apropos: 'Infirmière.',
    },
    {
        nom: 'Gauthier',
        prenom: 'Lucas',
        email: 'lucas.gauthier@example.com',
        mdp: 'lucasG456',
        genre: 'Homme',
        naissance: '1995-07-15',
        situation: 'CELIBATAIRE',
        nbrEnfants: 1,
        loisirs: ['football', 'jeux vidéo'],
        apropos: 'Étudiant en sciences.',
    },
    {
        nom: 'Leroux',
        prenom: 'Sophie',
        email: 'sophie.leroux@example.com',
        mdp: 'sophieL789',
        genre: 'Femme',
        naissance: '1987-06-12',
        situation: 'CELIBATAIRE',
        nbrEnfants: 0,
        loisirs: ['cuisine', 'yoga'],
        apropos: 'Chef cuisinière.',
    },
    {
        nom: 'Petit',
        prenom: 'Olivier',
        email: 'olivier.petit@example.com',
        mdp: 'olivierP101',
        genre: 'Homme',
        naissance: '1985-09-05',
        situation: 'CELIBATAIRE',
        nbrEnfants: 3,
        loisirs: ['bricolage', 'pêche'],
        apropos: 'Ingénieur mécanique.',
    },
    {
        nom: 'Moreau',
        prenom: 'Valérie',
        email: 'valerie.moreau@example.com',
        mdp: 'valerieM202',
        genre: 'Femme',
        naissance: '1994-12-22',
        situation: 'CELIBATAIRE',
        nbrEnfants: 0,
        loisirs: ['danse', 'lecture'],
        apropos: 'Professeure de danse.',
    },
    {
        nom: 'Girard',
        prenom: 'Philippe',
        email: 'philippe.girard@example.com',
        mdp: 'philippeG303',
        genre: 'Homme',
        naissance: '1991-04-18',
        situation: 'CELIBATAIRE',
        nbrEnfants: 1,
        loisirs: ['échecs', 'course'],
        apropos: 'Consultant financier.',
    },
    {
        nom: 'Lambert',
        prenom: 'Isabelle',
        email: 'isabelle.lambert@example.com',
        mdp: 'isabelleL404',
        genre: 'Femme',
        naissance: '1989-01-10',
        situation: 'CELIBATAIRE',
        nbrEnfants: 2,
        loisirs: ['poterie', 'natation'],
        apropos: 'Architecte d\'intérieur.',
    }
];

const PersonList = () => {
    const [data, setData] = useState(defaultData);
    const remove = email => {
        if (confirm(`Etes vous sur de vouloir supprimer la personne avec l'email : ${email} ?`)) {
            setData(draft => draft.filter(p => p.email !== email));
        }
    };

    return (
        <table>
            <caption>
                La liste des personnes 
                <button>Ajouter</button>
            </caption>
            <thead>
                <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Date naissance</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((person) => (
                    <tr key={`${person.email}`}>
                        <td>{person.prenom}</td>
                        <td>{person.nom}</td>
                        <td>{person.email}</td>
                        <td>{person.naissance}</td>
                        <td>
                            <button onClick={()=>{alert(JSON.stringify(person))}}>Modifier</button>{' '}
                            <button onClick={() => remove(person.email) }>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PersonList;