// utilisation des callbacks
function makeRequestWithCallback(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, xhr.responseText);
        } else {
            callback(new Error(xhr.statusText));
        }
    };
    xhr.onerror = function () {
        callback(new Error("Erreur réseau"));
    };
    xhr.send();
}
makeRequestWithCallback('https://api.example.com/data1', function (error1, response1) {
    if (error1) {
        console.error("Erreur lors de la première requête:", error1);
    } else {
        // Traitement de la première réponse
        makeRequestWithCallback('https://api.example.com/data2?param=' + response1, function (error2, response2) {
            if (error2) {
                console.error("Erreur lors de la seconde requête:", error2);
            } else {
                // Traitement de la seconde réponse
                makeRequestWithCallback('https://api.example.com/data3?param=' + response2, function (error3, response3) {
                    if (error3) {
                        console.error("Erreur lors de la troisième requête:", error3);
                    } else {
                        // Traitement de la troisième réponse
                        console.log("reponse 3 : ", response3);
                    }
                });
            }
        });
    }
});

// utilisations des promises
function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(new Error("Erreur réseau"));
        };
        xhr.send();
    })
}

makeRequest('https://api.example.com/data1')
    .then(response1 => makeRequest('https://api.example.com/data2?param=' + response1),
        error1 => console.error("Erreur lors de la première requête:", error1)
    ).then(
        response2 => makeRequest('https://api.example.com/data3?param=' + response2),
        error2 => console.error("Erreur lors de la seconde requête:", error2)
    ).then(response3 => {
        // Traitement de la troisième réponse
        console.log("reponse 3 : ", response3);
    }, error3 => console.error("Erreur lors de la troisième requête:", error3)
    );

// un seul catch a la fin
makeRequest('https://api.example.com/data1')
    .then(response1 => makeRequest('https://api.example.com/data2?param=' + response1))
    .then(response2 => makeRequest('https://api.example.com/data3?param=' + response2))
    .then(response3 => {
        // Traitement de la troisième réponse
        console.log("reponse 3 : ", response3);
    })
    .catch(error => console.error("Erreur :", error));


// utilisation async / await
async function traitement() {
    try {
        const response1 = await makeRequest('https://api.example.com/data1');
        const response2 = await makeRequest('https://api.example.com/data2?param=' + response1);
        const response3 = await makeRequest('https://api.example.com/data3?param=' + response2);
        // Traitement de la troisième réponse
        console.log("reponse 3 : ", response3);
        return response3;
    } catch (error) {
        console.error("Erreur :", error)
    }
}

