import { type Book } from "./interface.js";

let books: Book[] = [
  {
    id: 1,
    title: "First Book",
  },
];

function read() {
  console.log(books);
}
// read()

function post(data: Book) {
  books.push(data);
  console.log(books);
}
post({ id: 2, title: "second" });

function update(data: Book) {
  const target = books.filter((i) => i.id !== data.id);
  books = target;
  books.push(data);
  console.log(books);
}
// update({ id: 2, title: "second updated" });

function remove(id:number){
    const target = books.filter((i)=> i.id !== id)
    books = target
    console.log(books);
}
// remove(1)