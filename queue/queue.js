// enque deque peek() isEMpty()
const queue = {

    init() {
        this.head = null;
        this.tail = null;
        return this;
    },

    pushMany(...values) {
        values.forEach((v) => this.pushh(v));
        return this;
    },

    pushh(value) {
        // console.log('----valllllll------');
        // console.log(value);
        // console.log('----valllllll------');
        const item = {
            value,
            next: null,
        };

        if (this.tail === null) {
            this.head = this.tail = item;
            // console.log(this.head);
            return this;
        }
        this.tail.next = item;
        this.tail = item;
        return this;
    },

    pop() {
        if (this.head === null) {
            return this;
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    },

    peek() {
        return this.head
            ? this.head.value
            : null;
    },

    isEmpty() {
        return !this.head;
    },
};

// const mq = Object.create(queue).init();
// const mas = ['edno', 'dve', 'tree', '4etri'];
// mq.pushMany(mas);
// console.log(mq);

module.exports = {
    getQueue() {
        return Object.create(queue)
            .init();
    },
};
