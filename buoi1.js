// let student = [
//     {
//       name: "NVA",
//       age: 16,
//       course: ["mindX 01", "mindX 02", "mindX 03"]
//     },
//     {
//       name: "NVB",
//       age: 18,
//       course: ["mindX 01", "mindX 02", "mindX 04"]
//     },
//     {
//       name: "NVC",
//       age: 17,
//       course: ["mindX 01", "mindX 03", "mindX 04"]
//     },
//     {
//       name: "NVD",
//       age: 15,
//       course: ["mindX 01", "mindX 02", "mindX 03"]
//     }
//   ];
  
//   let ageInput = prompt("mày nhiêu tuổi?");
//   let courseInput = prompt("học lớp nào?");
  
//   let foundAge = false;
//   let foundCourse = false;
  
//   for (let person of student) {
//     if (person.age == parseInt(ageInput)) {
//       console.log(person.name);
//       foundAge = true;
//     }
//     if (person.course.includes(courseInput)) {
//       console.log(person.name);
//       foundCourse = true;
//     }
//   }
  
//   if (!foundAge) {
//     alert("mày là ai!");
//   }
  
//   if (!foundCourse) {
//     alert("đ có lớp này!");
//   }

//bai2
// let arr1 = [0, 2, 4, 6, 8];
// let arr2 = [1, 3, 5, 7];
// arr1.forEach(function (element) {
//   if (element > 3) {
//     alert(element);
//   }
// });

// arr2.forEach(function (element) {
//   if (element > 3) {
//     alert(element);
//   }
// });
// let mergedArray1 = arr1.concat(arr2);
// alert(mergedArray1); 

// let mergedArray2 = arr1.concat(arr2).sort((a, b) => a - b);
// alert(mergedArray2); 

//bai3
// let album=[
//     {
//         "albumId": 1,
//         "id": 1,
//         "title": "accusamus beatae ad facilis cum similique qui sunt",
//         "url": "https://via.placeholder.com/600/92c952",
//         "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },
//     {
//         "albumId": 1,
//         "id": 2,
//         "title": "reprehenderit est deserunt velit ipsam",
//         "url": "https://via.placeholder.com/600/771796",
//         "thumbnailUrl": "https://via.placeholder.com/150/771796"
//     },
//     {
//         "albumId": 1,
//         "id": 3,
//         "title": "officia porro iure quia iusto qui ipsa ut modi",
//         "url": "https://via.placeholder.com/600/24f355",
//         "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//     },
//     {
//         "albumId": 1,
//         "id": 4,
//         "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//         "url": "https://via.placeholder.com/600/d32776",
//         "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//     },
//     {
//         "albumId": 1,
//         "id": 5,
//         "title": "natus nisi omnis corporis facere molestiae rerum in",
//         "url": "https://via.placeholder.com/600/f66b97",
//         "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//     }];
//     for (let i = 0; i < 5; i++) {
//         console.log(album[i].url);
//       }
//       album.slice(0, 5).forEach(function(item) {
//         console.log(item.url);
//       });
     
//       let anh = [
//         {
//           albumId: 1,
//           id: 1,
//           title: "accusamus beatae ad facilis cum similique qui sunt",
//           url: "https://via.placeholder.com/600/92c952",
//           thumbnailUrl: "https://via.placeholder.com/150/92c952",
//         },
//         // ... (các phần tử khác trong mảng album)
//       ];

//       // Hiển thị hình ảnh từ các URL trong mảng album
//       album.slice(0, 5).forEach(function (item) {
//         let img = document.createElement("img");
//         img.src = item.url;
//         document.getElementById("imageContainer").appendChild(img);
//       });




// const concatarr = [...arr,0,...arr2]
// console.log(concatarr)
//  const arr = [1,2,3]
// const arr2 = arr.map((item) =>{
//     return item *2;
// }) ;
// console.log(arr2)
// console.log(arr)
const arr = [1,2,3]
const arr2 = arr.filter((item) =>{
    return item % 2 === 0;
})
console.log(arr2)
console.log(arr)


 


   

