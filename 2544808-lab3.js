export function getBookTitlesByYear(books){
    let returning={};
    books.forEach(element => {
        if(returning.hasOwnProperty([element["year"]])){
            returning[element["year"]].push(element["title"]);
        }else{
            returning [element["year"]] = [element["title"]];
        }
    });
    return returning;

}
const books =[
{title: "The Great Gabsy", author: "F. Scott Fitz",year: 1927},
{title: "To Kill a Mockingbird",author:"Harper Lee", year: 1960},
{title: "1984",author:"george Orwell", year: 1949},
{title: "ye", author: "Me", year: 1927},
{title: "1ye", author: "Me", year: 1958}

];
console.log(getBookTitlesByYear(books));
