const thisIsAPromise = async () => {
  console.log("J'attend ma promesse");
  const result = await myPromise;
  console.log('Ma promesse est finie', result);
  console.log('toto');
  return "J'ai fini!"
}

const myPromise = new Promise((res, rej) => {
  setTimeout(() => res(1), 3000);
}).then(value => value * 3);

console.log("Je m'apprête à appeler ma promesse");
thisIsAPromise()
console.log("J'ai appelé ma promesse");
