import {} from "./interface.js";
let books = [
    {
        id: 1,
        title: "First Book",
    },
];
function read() {
    console.log(books);
}
// read()
function post(data) {
    books.push(data);
    console.log(books);
}
post({ id: 2, title: "second" });
function update(data) {
    const target = books.filter((i) => i.id !== data.id);
    books = target;
    books.push(data);
    console.log(books);
}
// update({ id: 2, title: "second updated" });
function remove(id) {
    const target = books.filter((i) => i.id !== id);
    books = target;
    console.log(books);
}
remove(1);
//# sourceMappingURL=index.js.map