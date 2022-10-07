const promiseprac = new Promise((resolve, reject) => {
  resolve(console.log('test'));
});
promiseprac.then(() => {
  console.log('test2')});
promiseprac.catch(() => {
  console.log('err');
});


