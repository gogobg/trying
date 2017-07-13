let p1 = () => console.log('1');
let p2 = () => console.log('2');
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// }); 

Promise.all([p1, p2]).then(([m1, m2]) => {
    console.log(m1); // [3, 1337, "foo"] 
    console.log(m2); // [3, 1337, "foo"] 
});


