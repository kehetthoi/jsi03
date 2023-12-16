// let arr = [1, 3, 2, 5, 7, 4, 5, 9, 12, 18, 17];

// let tong=0;     
// for (var i=0;i < arr.length;i++){
//    tong +=arr[i]
// }
// console.log(tong)

        
//         let max =arr[0]
//         for(i =1;i < arr.length;i++){
//             if(arr[i]>max)
//             max=arr[i]
//         }
//         let min = arr[0];
//         for(i=1;i<arr.length;i++){
//         if(arr[i]<min)
//         min=arr[i]
//         }
//         console.log(max)
//         console.log(min)
      
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





console.log(getPersonInfo(person)); 
addAttribute(person, "email", "huy.com");
console.log(person.email);
removeAttribute(person, "address");
 
console.log(country); 