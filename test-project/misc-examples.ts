
/* forEach Method */

let projects = ["Dashboard", "ECommerce", "ERP-Commerce", "Admin Portal"];

/* Iterations using for loop */
// for (let i = 0; i < projects.length; i++) {
//     console.log(projects[i]);
// }

console.log("------------------------------");

/* Iterations using for-of loop */
// for (let project of projects) {
//     console.log(project);
// }

console.log("------------------------------");

/* Iterations using forEach Method */
// projects.forEach(project => { console.log(project) });

console.log("-------------------------------");


function getFullName(fname: string, lname: string): string {
    return `${fname} ${lname}`;
}

console.log(getFullName('King', 'Kochhar'));
// console.log(getFullName(100, 200)); // TypeError

console.log("-------------------------------");

function display<T>(value: T): T {
    return value;
}

console.log(display<string>("Hi"));
console.log(display<number>(100));