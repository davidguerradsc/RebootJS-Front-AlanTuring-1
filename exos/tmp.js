const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 3000)
});

function action(){ console.log("Coucou c'est moi"); }

promise.then(() => action());