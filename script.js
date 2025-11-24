// const user = {
//   name: "SRK",
//   age: 25,
//   city: "Ambah",
// };
// const { name, age, city } = user;
// console.log(name);
// console.info(age);
// console.warn(city);

// const input = prompt("Enter your name");
// alert(`Welcome ${input}`);

// let age = prompt("Enter age:");
// console.log(age + 5);

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const part = arr.slice(2, 6);
// console.log(part);

// const emails = [
//   "alice.singh@example.com",
//   "bob_kumar+news@example.com",
//   "charlie1988@example.org",
//   "dev-team@subdomain.example.com",
//   "eva-jain@example.co",
//   "frank.o'neal@example.com",
//   "grace99@example.net",
//   "harpreet.s@example.com",
//   "info@example.com",
//   "jaya.patel+promo@example.com",
//   "k_serial007@example.com",
//   "leo.m@company-example.com",
//   "mona_rao@example.org",
//   "nora.walker@example.com",
//   "ops+alerts@example.com",
//   "priya-verma@example.co",
//   "qa.team@example.io",
//   "rajiv@example.com",
//   "support@example.com",
//   "zara.khan01@example.com",
// ];

// function getUsername(emailArray) {
//   emailArray.forEach((email) => {
//     const part = email.split("@")[0];
//     console.log(part);
//   });
// }
// getUsername(emails);

// const user = {
//   name: "SRK",
//   age: 35,
//   address: {
//     city: "Indore",
//   },
// };

// // Shallow copy
// const copy = { ...user };

// copy.age = 20;

// console.log(user.age);
// console.log(copy.address);

// const emails = [
//   "alice.singh@example.com",
//   "bob_kumar+news@example.com",
//   "charlie1988@example.org",
//   "dev-team@subdomain.example.com",
//   "eva-jain@example.co",
//   "frank.o'neal@example.com",
//   "grace99@example.net",
//   "harpreet.s@example.com",
//   "info@example.com",
//   "jaya.patel+promo@example.com",
//   "k_serial007@example.com",
//   "leo.m@company-example.com",
//   "mona_rao@example.org",
//   "nora.walker@example.com",
//   "ops+alerts@example.com",
//   "priya-verma@example.co",
//   "qa.team@example.io",
//   "rajiv@example.com",
//   "support@example.com",
//   "zara.khan01@example.com",
// ];

// for (const email of emails) {
//   let total = email.replace(/com|net|org|co|io/g, "mom");
//   console.log(total);
// }

// let name = "Shahrukh Khan";
// console.log(`Hey ${name}, welcome to the world of programming....`);

// console.log("HI"); console.log("helo");
// console.log("Heloo")
// console.log("Heloo")
// console.log("Heloo")
// let y = (5 + 10) * 2;
// console.log(y);

// console.log(5 + "helo");

// let a = 5;
// console.log(a--);
// console.log(a--);

// console.log(typeof undefined+1)

// const inputValue = prompt(
//   "Enter your age to check you are eligible or not for vote!"
// );
// function checker(age) {
//   if (age >= 18) alert("Adult");
//   else alert("Minor");
// }
// checker(inputValue);

// const Marks = 50;
// if (Marks >= 90) console.log("A Grade");
// else if (Marks >= 75) console.log("B Grade");
// else if (Marks >= 50) console.log("C Grade");
// else console.log("Failed");

// let city = "Agra";
// if (city === "bhopal") {
//   console.log("MP");
// } else if (city === "delhi") {
//   console.log("Capital of India");
// } else {
//   console.log(city);
// }

// let Marks = 50;
// Marks >= 90
//   ? console.log("A Grade")
//   : Marks >= 75
//   ? console.log("B Grade")
//   : Marks >= 50
//   ? console.log("C Grade")
//   : console.log("Failed");

// let temperature = 10;
// temperature > 30 ? console.log("Hot") : console.log("Pleasant");

// let day = +prompt("Enter number 1-7");

// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(5*i);
// }

// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     count++;
//   }
// }
// console.log(count);

// const input = 12345;
// const password = 12345;
// console.log(input === password ? "Access Granted" : "Not Granted");

// const userinput = +prompt("Enter Password");
// let attempts = 3;
// while (attempts === 0) {
//   const userinput = +prompt("Enter Password");
//   if (userinput === password) {
//     console.log("Access Granted");
//     break;
//   } else {
//     console.log("Not Granted");
//   }
//   attempts--;
// }

// let attempts = 3;
// const password = 12345;
// while (attempts > 0) {
//   let userinput = prompt("Enter Password");

//   if (userinput === null || userinput.trim() === "") {
//     console.log("Please enter something.");
//     continue;
//   }
//   userinput = Number(userinput);
//   if (isNaN(userinput)) {
//     console.log("Please enter a valid number.");
//     continue;
//   }
//   if (userinput === password) {
//     console.log("Access granted");
//     break;
//   } else {
//     attempts--;
//     console.log("wrong password");
//   }
//   if (attempts === 0) {
//     console.log("Your account has been locked.");
//   }
// }

// let countYes = 0;

// while (true) {
//   const word = prompt("Enter a word (type 'stop' to end)");

//   if (word === null) continue;

//   const trimmed = word.trim().toLowerCase();

//   if (trimmed === "stop") {
//     break;
//   }

//   if (trimmed === "yes") {
//     countYes++;
//     console.log(countYes);
//   }
// }

// console.log("Total 'yes' count:", countYes);
// const arr = [];
// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// while (true) {
//   let num = +prompt("Enter a number");
//   if (num % 2 === 0) {
//     console.log(num);
//     break;
//   } else {
//     console.log(num);
//   }
// }

// let start = +prompt("Enter Starting Number");
// let end = +prompt("Enter end Number");
// for (let i = start + 1; i < end; i++) {
//   console.log(i);
// }

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     count++;
//     if (count === 3) break;
//   }
// }

// let countPositive = 0;
// for (let i = 1; i <= 5; i++) {
//   let input = +prompt(`Enter number ${i}`);
//   if (input > 0) {
//     countPositive++;
//   }
// }
// console.log(countPositive);

let count = 3;
let flag = false;
let balance = 1000;

while (balance > 0 && count !== 0) {
  let withdrawal = +prompt(
    `Enter withdrawal amount 
    (Available balance: ${balance})
    (Transaction left: ${count})`
  );
  count--;
  if (withdrawal < 0) {
    console.log("Invalid input");
    alert("Invalid input");
    break;
  }
  if (withdrawal > balance) {
    console.log("Insufficient Balance");
    alert("Insufficient Balance");
    break;
  }
  balance -= withdrawal;
}
alert(`Available balance: ${balance}`);
console.log(`Available balance: ${balance}`);