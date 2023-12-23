// //bai1
// class Student {
//     constructor(name, id) {
//       this.name = name;
//       this.id = id;
//     }
  
  
//   }
  
//   class Course {
//     constructor(name, subject) {
//       this.name = name;
//       this.subject = subject;
      
//     }
  
   
//   }
  
//   class Grade {
//     constructor(lop, lophoc) {
//       this.lop = lop;
//       this.lophoc = lophoc;
//     }
//   }
  
// let student = new Student("Huy", 14);


// let course = new Course("JSI03", "lap trinh");


// let grade = new Grade(403, "A");

// let studentCourseGrade = {
//     student: student,
//     course: course,
//     grade: grade
//   };
//   console.log(studentCourseGrade)






//bai2
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    area() {
      return (Math.PI * this.radius ** 2).toFixed(1);
    }
  
    perimeter() {
      return (2 * Math.PI * this.radius).toFixed(1);
    }
  }
  
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
    area() {
     return  ((this.side1 * this.side2 * this.side3) / 2).toFixed(1);
     
    }
  
    perimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  
  const circle = new Circle(2);
  console.log("Diện tích hình tròn:", circle.area());
  console.log("Chu vi hình tròn:", circle.perimeter());
  
  const rectangle = new Rectangle(1, 2);
  console.log("Diện tích hình chữ nhật:", rectangle.area());
  console.log("Chu vi hình chữ nhật:", rectangle.perimeter());
  
  const triangle = new Triangle(10, 4, 7);
  console.log("Diện tích hình tam giác:", triangle.area());
  console.log("Chu vi hình tam giác:", triangle.perimeter());