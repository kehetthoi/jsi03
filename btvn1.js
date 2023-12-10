// let arr = [1, 3, 2, 5, 7, 4, 5, 9, 12, 18, 17];

       
//         let sum = arr.reduce((a, b) => a + b, 0);
//         console.log("Tổng của mảng là:", sum);

        
//         let max = Math.max(...arr);
//         let min = Math.min(...arr);
//         console.log("Phần tử lớn nhất là:", max);
//         console.log("Phần tử nhỏ nhất là:", min);

      
//         let reversedArr = arr.reverse();
//         console.log("Mảng sau khi đảo ngược là:", reversedArr);

        
//         let uniqueArr = [...new Set(arr)];
//         console.log("Mảng sau khi loại bỏ phần tử trùng nhau là:", uniqueArr);

       
//         let oddNumbers = arr.filter(num => num % 2 !== 0);
//         let evenNumbers = arr.filter(num => num % 2 === 0);
//         console.log("Các số lẻ trong mảng là:", oddNumbers);
//         console.log("Các số chẵn trong mảng là:", evenNumbers);
let person = {
    name: "Huy",
    age: 15 ,
    address: "nga 5 chuon cho"
};


function getPersonInfo(person) {
    return "Tên: " + person.name + ", Tuổi: " + person.age + ",Địa Chỉ: "+ person.address;
}


function addAttribute(obj, attribute, value) {
    obj[attribute] = value;
}


function removeAttribute(obj, attribute) {
    delete obj[attribute];
}


let country = {
    name: "Vietnam",
    population: 100000000,
    capital: {
        name: "Hanoi",
        population: 8000000
    }
};


function listAttributes(obj) {
    return Object.keys(obj);
}


console.log(getPersonInfo(person)); 
addAttribute(person, "email", "john@example.com");
console.log(person.email);
removeAttribute(person, "address");
 console.log(person.address); 
console.log(listAttributes(country)); 