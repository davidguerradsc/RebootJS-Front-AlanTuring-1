const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 3000)
});

// request = axios.get()
// request.then(actualiser la liste des users).catch(affiche composant erreur)

promise.then((value) => value * 2)
       .then((newValue) => newValue * 3)
       .then(
         (value) => console.log(value),
         (_err) => {return { firstname: 'Unknown', lastname: 'Unknown' }}
        )
       .catch((_err) => console.error("Il y a eu une erreur!"))

console.log(promise);
console.log("Thomas Falcone toto a!");

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(5), 4000)
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('abcd')), 3000)
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(2), 2000)
});

const promiseGlobale = Promise.race([promise1, promise2, promise3])
const promiseGlobale2 = Promise.all([promise1, promise2, promise3])

promiseGlobale.then(value => console.log(value));
promiseGlobale2.then(value => console.log(value));
