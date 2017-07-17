// // const q = {
// //     a: 1,
// //     b: 2,
// // };


// // let z = {
// //     pro: 1,
// //     pro2: 2,
// // };

// // let m = {
// //     item: 1,
// //     item1: 2,
// // };

// // z = m = q;

// // // let ob = {}
// // // m.b = 10;

// // // let c = { z: 2, v: 4 };
// // // m = c;

// // // qw;
// // // z.pro2 = 'asd';

// // console.log(z);
// // console.log(m);
// // console.log('m-------------');
// // const qaz = { t: 1, h: 2 };

// // m.b = qaz;

// // m = qaz;

// // console.log(z);
// // console.log(m);
// // console.log('m-------------');

// // const qazg = { t: 3, h: 4 };


// // m.b = qazg;

// // // m = qazg;

// // console.log(z);
// // console.log(m);
// // console.log('m-------------');

// // const zxc = { t: 5 };

// // m.b = zxc;


// // console.log(z);
// // console.log(m);
// // console.log('m-------------');
// // const zxcr = { t: 7 };

// // m.c = zxcr;
// // m = zxcr;


// // console.log(z);
// // console.log(m);

// // // {
// // //     value: 'edno', next: {
// // //         value: 'dve', next: 
// // //         {
// // //             value: 'tree', next: null
// // //         }
// // //     }
// // // }






// // // { value: 'edno', next: { value: 'dve', next: null } }


// // // {
// // //   value: 'edno', next: { value: 'dve', next: { value: 'tree', next: null } }
// // // }

// let obg = { 1: 2, 3: 4 };

// let m = obg;

// m[1]= 10;
// console.log(m);
// console.log(obg)


function LinkedList() {
    this.head = null;
}

LinkedList.prototype.push = function (val) {
    var node = {
        value: val,
        next: null
    }
    console.log(node);
    if (!this.head) {
        this.head = node;
        
    }
    else {
        current = this.head;
        console.log('current element -- > ', current);
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        console.log('current.next = node; -- > ', current.next);
    }
}

let qwe = new LinkedList;


let mass = [1, 2, 3];
mass.forEach(x => qwe.push(x));

console.log('qwe');
console.log(qwe);