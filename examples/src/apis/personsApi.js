import { pause } from "../libs/utils";
import { mockApi } from "./api";

export const findPersons = async (params) => {
    await pause(600);
    return mockApi.get('/persons', {
        params
    });
}

export const findPersons2 = () => pause(2000).then(() => mockApi.get('/persons'));


export const createPerson = data => mockApi.post('/persons', {
    data
});

export const updatePerson = ({ id, ...data }) => mockApi.put(`/persons/${id}`, {
    data
});

export const deletePerson = id => mockApi.delete(`/persons/${id}`);


/*
// récuperer une liste des personnes avec la possiblité de la recherche et de la pagination
GET    /persons 

// récupérer une seule personne avec son id
GET    /persons/:id

// créer une nouvelle personne
POST   /persons

// mettre à jour une personne
PUT    /persons/:id

// mettre à jour partiellement une personne 
PATCH  /persons/:id

// supprimer une personne par son id
DELETE /persons/:id


// mettre à jour partiellement une personne 
PATCH  /persons/:id/archive


GET    /persons-by-name

*/