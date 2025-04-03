/*const Reassingned*/
const post = {},
      ids = [1, 2, 3],
      id = 1;

post = "Hello World!"; // Error
post.title = "Hello World!"; // Allowed
ids.push(4); // Allowed
ids = [7, 8, 9]; // Error
id++; // Error