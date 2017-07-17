// // let p1 = () => console.log('1');
// // let p2 = () => console.log('2');
// // // var p3 = new Promise((resolve, reject) => {
// // //   setTimeout(resolve, 100, 'foo');
// // // }); 

// // Promise.all([p1, p2]).then(([m1, m2]) => {
// //     console.log(m1); // [3, 1337, "foo"] 
// //     console.log(m2); // [3, 1337, "foo"] 
// // });


// // let m = [1, 2, 3, 4];
// // let q = [5, 6, 7, 8];

// // let f = [];
// // f.push(...q, ...m);

// // console.log(f);


// // function q() {
// //     return function r() {
// //         return function i() {
// //             console.log(3);
// //         };
// //     };
// // };


// // console.log(q());
// // // fun[0]();

// // // fun.forEach((x) => console.log(x()));
// // let massiv = [1, 2, 3, 4, 5];

// // let qrt = massiv.map(x => {
// //     return 6;
// // });

// // console.log(qrt)

// // function qoqqo() {
// //     console.log('asdasd');
// // }

// // function q() {
// //     return qoqqo();

// // };

// // q();

// const mas = [1, 2, 3, 4, 5];
// const ttt = [];
// // mas.forEach((x, y) => mas[y] = 1);
// // console.log(mas);

// function qqz(mas) {
//     mas.forEach((v) => {
//         // console.log('-------------------edno');
//         // console.log(this);
//         this.push(v);
//         // console.log('-------------------dve');
//         console.log(this);
//     });
// }

// qqz(mas);

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(...values) {
        values.forEach((value) => {
            const item = {
                value,
                next: null,
                // kara: 0,
            };

            if (this.tail === null) {
                this.head = this.tail = item;
            } else {
                console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ');
                console.log('---- PREDI this.tail.next = item; -----------');
                console.log('head ---------->', this.head);
                console.log('tail ---------->', this.tail);
                this.head.tail = item;
                console.log('---- SLED  this.tail.next = item; -----------');
                console.log('head ---------->', this.head);
                console.log('tail ---------->', this.tail);
                this.tail = item;
                console.log('---- SLED   this.tail = item;-----------');
                console.log('head ---------->', this.head);
                console.log('tail ---------->', this.tail);
                console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ');
            }

            this.length += 1;
        });

        return this;
    }

    pop() {
        if (this.head === null) {
            return this;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length -= 1;
        return value;
    }

    peek() {
        return this.head
            ? this.head.value
            : null;
    }

    isEmpty() {
        return !this.head;
    }
}


const arr = ['edno', 'dve', 'tree'];

const m = new Queue();

m.push(...arr);

// console.log(m);

// console.log('0 pop');
// console.log(m);

// m.pop();

// console.log('1 pop');
// console.log(m);

// m.pop();

// console.log('2 pop');
// console.log(m);

// m.pop();

// console.log('3 pop');
// console.log(m);


// m.pop();
// console.log('4 pop');
// console.log(m.head);

