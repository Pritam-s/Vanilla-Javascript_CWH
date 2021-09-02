const fs = require("fs");

// Reading a file using fs(File System)
console.log("Reading a file using fs(file-system");
let text = fs.readFileSync("dele.txt", "utf-8");
console.log(text);
text = text.replace("INSIDE", "IN");
console.log(text);

// Writing a file using fs(File System)
fs.writeFileSync("dele2.txt","This is the new file made using fs writefilesync");

console.log(`Writing a new file "2Dele.txt" using fs file-system.`);





