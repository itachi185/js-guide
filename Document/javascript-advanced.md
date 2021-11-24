## Javascript advanced

Nội dung:

1. IIFE
2. Closures
3. Hoisting
4. Strict mode
5. This keyword
6. Bind method
7. Call method
8. Apply method
9. Catching, throwing errors
10. Promise
11. Async function, await

---

### IIFE là gì

Viết tắt của Immediately Invoked Function Expression. Hiểu nó là một biểu thức tạo ra một hàm, và hàm đó được gọi ngay lập tức.

Ngoài ra có tên gọi khác: hàm tự gọi

> Self-Invoking Function

1. IIFE trông như nào

```js
// 1
(function () {
  console.log("NOW"); // NOW
})();

(function (msg) {
  console.log(msg); // Hello
})("Hello");
```

2. Dùng dấu ; trước IIFE

Sử dụng dấu ';' ở đầu một IIFE trong dự án không dùng ';' ở cuối

```
const name = "Tuan"

;(function () {
  console.log("NOW")
})()
```

3. IIFE là hàm "private"

```js
(function myFunc() {
  // Những gì trong là private
  console.log("NOW");
})();

myFunc(); // myFunc is not defined

// Gọi lại trong nó -> OK
let i = 0;

(function myFunc() {
  i++;
  console.log(i);

  if (i < 10) {
    myFunc();
  }
})();
```

4. Sử dụng IIFE khi nào?

Sử dụng khi muốn một đoạn mã chạy ngay, tuy nhiên đoạn mã trong đó không tạo ra phạm vi global.

5. Cách tạo ra IIFE

Dùng function thông thường là phổ biến nhất.

6. Ví dụ sử dụng IIFE

```js
const app = (function () {
  // Private
  const cars = []; // Không thể truy cập được từ phía ngoài nên dữ liệu được bảo toàn

  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      this.cars.push(car);
    },
    edit(car) {
      this.cars[index] = car;
    },
    delete(car) {
      this.cars.splice(index, 1);
    },
  };
})();
```

---

### Scope - Phạm vi

- Các loại phạm vi:
  - Global: toàn cầu
  - Code block: khối mã (let, const), {}
  - Local scope: Hàm (var, function), () => {}
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo

```js
// Hàm myFunc sẽ tạo ra 1 phạm vi global
function myFunc() {}
// Mỗi lần gọi sẽ tạo ra một phạm vi mới trong hàm
myFunc();
```

- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

```js
const age = 18;
function myFunc(name) {
  console.log(name, age); // Tuan, 18
}
myFunc("Tuan");
console.log(name); // error
```

- Cách thức một biến được truy cập

```js
// Truy cập đến biến trong scope gần nhất
const age = 18;
{
  const age = 16;
  {
    const age = 14;
    {
      const age = 12;
      console.log(age); // 12
    }
  }
}
```

- Khi nào một biến bị xóa khỏi bộ nhớ?

  - Biến toàn cầu?

    - Giá trị của nó sẽ bị xóa đi khi chương trình thoát (trang web: khi đóng tab, khi bấm F5). Hạn chế sử dụng biến global vì nó sẽ lãng phí bộ nhớ.

  - Biến trong code block & trong hàm?

    - Khi thoát khỏi code block thì nó sẽ tự xóa biến đó đi, giúp tiết kiệm bộ nhớ.
    - Khi hàm thực thi xong sẽ xóa biến khỏi bộ nhớ

  - Biến trong hàm được tham chiếu bởi 1 hàm?
    - Với hàm đóng(closure) thì lý thuyết trên sẽ không đúng. Ví dụ:

```js
//
function makeCounter() {
  let counter = 0;

  function increase() {
    return ++counter; // sử dụng biến counter bên trong nên nó sẽ tham chiếu đến biến counter và nó sẽ luôn giữ biến này trong bộ nhớ
  }

  return increase;
}

const increase1 = makeCounter(); // Luôn giữ lại hàm increase được tạo ra bởi phạm vi makeCounter
console.log(increase1()); // 1
console.log(increase1()); // 2
console.log(increase1()); // 3
```

---

### Closure

- Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó

- Ứng dụng:

  - Viết code ngắn gọn hơn
  - Biểu diễn, ứng dụng tính Private trong OPP

```js
function createCounter() {
  let counter = 0;

  function increase() {
    return ++counter; // nó luôn tham chiếu biến bên ngoài chứ không phải copy nó
  }

  return increase;
}

const counter1 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
```

Ứng dụng viết code ngắn hơn:

```js
function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespae}] ${message}`);
  }

  return logger;
}

// Register.js
const infoLogger = createLogger("Info");
infoLogger("Bắt đầu gửi mail");
infoLogger("Gửi mail lỗi lần 1, thử gửi lại...");
infoLogger("Gửi mail thành công cho user xxx");

// ForgotPassword.js
const infoLogger = createLogger("Error");
infoLogger("Email không tồn tại trong DB");
infoLogger("Gửi mail lỗi lần 1, thử gửi lại...");
infoLogger("Gửi mail thành công cho user xxx");
```

```js
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
    },
  };
  return storage;
}

// Profile.js
const profileSetting = createStorage("profile_setting");

profileSetting.set("fullname", "Anh Tuan");
profileSetting.set("age", 18);
profileSetting.set("address", "Ha Noi");

console.log(profileSetting.get("fullname"));
```

Biểu diễn, ứng dụng tính Private trong OPP:

- Ở ví dụ trên thì biến store không thể truy cập và thay đổi từ bên ngoài function createStorage. Bên ngoài chỉ có thể truy cập đến các method get, set, remove.

- Lưu ý
  - Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
  - Các khái niệm Javascript nâng cao rất dễ gây nhầm lẫn

---

### Hoisting là gì

- Là khái niệm đưa phần khai báo biến lên đầu phạm vi

Ví dụ với var:

```js
// var age = 16;
var age;

console.log(age); // undefined
age = 16;
```

Ví dụ với function declaration:

```js
console.log(sum(6, 9)); // 15

// Đưa cả phần khai báo hàm lên trên đầu nên vẫn sử dụng bình thường
function sum(a, b) {
  return a + b;
}
```

- Lưu ý: Khai báo biến với **let**, **const** khi được hoisted không được tạo giá trị và được đưa vào "Temporal Dead Zone" (Vùng tạm thời không truy cập được). Vì vậy chúng ta không thể sử dụng nó được

- Hoisting để làm gì:

```js
let fullName = "Nguyen Van A";
{
  let fullName = "Nguyen Van B";

  {
    // let fullName; hoisted
    // Hoisted để nó không truy cập biến fullName bên ngoài scope. ở đây biến fullName sẽ được đưa và Temporal Dead Zone.
    console.log(fullName); // error

    let fullName = "Nguyen Van C";
  }
}
```

---

### Strict mode

- Là chế độ nghiêm ngặt, giúp code javascript an toàn hơn tránh những lỗi sơ ý có thể xảy ra. Là một tính năng của ES6

Cách khai báo:

```js
"use strict";
```

- Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false

```js
"use strict";

const student = {};

Object.defineProperty(student, "fullName", {
  value: "Nguyen Van A",
  writable: false,
});

student.fullName = "Nguyen Van B"; // Báo lỗi (Uncaught TypeError: Cannot assign to read only property 'fullName'), Không cho phép sửa

console.log(student);
```

- Báo lỗi khi hàm có tham số trùng tên

```js
"use strict";

function sum(a, a) {
  return a + a; // Uncaught SyntaxError: Duplicate parameter name not allowed in this context"
}

console.log(sum(6, 9));
```

- Khai báo hàm trong **code block** thì hàm sẽ thuộc phạm vi **code block**

```js
"use strict";

{
  function sum(a, b) {
    return a + b; // Uncaught ReferenceError: sum is not defined
  }
}

console.log(sum(6, 9));
```

- Không đặt tên biến, tên hàm bằng một số từ khóa "nhạy cảm" của ngôn ngữ

```js
"use strict";

const private = 123;

console.log(private); // Uncaught SyntaxError: Unexpected strict mode reserved word
```

- Công dụng của strict-mode:

1. Tránh "quên" từ khóa khai báo biến
2. Tránh trùng tên biến dẫn tới lỗi logic
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global

---

### Value types & Reference types

1. Value types (Primitive data types - Kiểu dữ liệu nguyên thủy(đơn giản))

   - String
   - Number
   - Boolean
   - BigInt
   - Symbol
   - undefined
   - null

```js
let a = 1;

let b = a;

a = 2;

console.log(b); // 1
```

2. Reference types (Non-primitive data types - Kiểu dữ liệu không nguyên thủy(phức tạp))
   - Object
   - Array
   - Function

Mỗi khi một object, array, function được tạo ra sẽ có một vùng nhớ được tạo ra.

```js
let x = {
  name: "Honda", // #001: Địa chỉ vùng nhớ
};

let y = x;
let z = x;

y.name = "Mazda"; // #001: Địa chỉ vùng nhớ
z.name = "Range Rover"; // #001: Địa chỉ vùng nhớ
console.log(x.name); // Range Rover

// ----------------------------------------
// Chỉ tạo ra vùng nhớ mới nếu gán lại giá trị
let a = {
  name: "Mercedes",
};

// Giá trị vẫn chỉ bằng #001
a = {
  name: "BMW", //#001: địa chỉ vùng nhớ 1
  model: "i8", //#002: địa chỉ vùng nhớ 2
};
```

```js
const student = {
  name: "Oanh Ha",
  profile: {
    fistName: "Oanh",
    lastName: "Ha",
    introduction: "Girl",
  },
};

const studentProfile = student.profile;

student.profile.introduction = "Good girl";

console.log(studentProfile.introduction); // Good girl
```

- Data types with functions

  - Value types

```js
function sum(a, b) {
  // tham số truyền vào thì nó sẽ ngầm tạo ra giá trị
  // kiểu tham trị sẽ sao chép giá trị vào ô nhớ mới nên nó sẽ không liên quan đến nhau
  // let a = c
  // let b = d
  a = 0;
  b = 0;
  console.log(a, b); // 0, 0
}

const c = 1;
const d = 2;

sum(c, d);

console.log(c, d); // 1, 2
```

- Reference types

```js
function createCar(obj) {
  // let obj = car; sẽ được thực hiện ngầm
  obj.name = "Mercedes";
  return obj;
}

const car = {
  name: "BMW",
};

const newCar = createCar(car);

console.log(car); // { name: 'Mercedes' }
console.log(newCar); // { name: 'Mercedes' }

// Thuật ngữ side effect(tác dụng phụ, điều xảy ra không mong muốn)
```

Cách xử lý:

```js
function createCar(obj) {
  //obj = JSON.parse(JSON.stringify(obj)); // Tạo ra obj mới trong vùng nhớ mới, tuy nhiên cách này sẽ ảnh hưởng tới performance nếu dữ liệu lớn.
  obj = {..obj}; // cách này tối ưu hơn tuy nhiên chưa triệt để vì nó sẽ chỉ kéo 1 cấp obj.
  obj.name = "Mercedes";
  return obj;
}

const car = {
  name: "BMW",
};

const newCar = createCar(car);

console.log(car); // { name: 'BMW' }
console.log(newCar); // { name: 'Mercedes' }
```

```js
const a = {
  name: "BMW",
};

const b = {
  name: "BMW",
};

const c = a;

console.log(a === b); // false, Vì nó trỏ đến hai vùng nhớ khác nhau
console.log(a === c); // true, Vì nó cùng trỏ đến một vùng nhớ

a.name = "Mercedes";

console.log(a); // Mercedes, a là hằng nhưng không lỗi vì a trỏ vào địa chỉ vùng nhớ đang lưu trữ obj tạo ra và sửa cái value của key thành Mercedes, chứ không phải sửa địa chỉ nhớ của biến a nên không bị lỗi

// Làm như sau sẽ bị lỗi
a = {
  name: "Mercedes",
};
console.log(a);
```

---

### Từ khóa this

- Từ khóa this trong javascript đề cập đến đối tượng mà nó thuộc về
- Đặc tính:

  1. Trong một phương thức, **this** tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu.)
  2. Đứng ngoài phương thức, **this** tham chiếu tới đối tượng global

- Lưu ý:

  - **this** trong hàm tạo là đại diện cho đối tượng sẽ được tạo
  - **this** trong một hàm là **undefined** khi ở strict mode
  - Các phương thức **bind()**, **call()**, **apply()** có thể tham chiếu **this** tới đối tượng khác

Các ví dụ:

- Trong một method, “this” sẽ trỏ tới object sở hữu method đó.
  - Ví dụ: ta có object tên là person, trong object person có phương thức là fullName, lúc này thì this sẽ trỏ tới object sỡ hữu method fullName chính là person.

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
person.fullName(); // "John Doe"
```

- Khi sử dụng this ở Global, this sẽ trỏ tới Global object là Window object.

```js
let x = this;
console.log(x); // Window {parent: Window, opener: null, top: Window, length: 0,
// frames: Window, …}
```

- Trong một function, như đã nói thì this sẽ trỏ tới object sở hữu function đó. Khi ta có một function được khai báo ở Global thì theo mặc định this sẽ trỏ tới Global object là Window

```js
function myFunction() {
  return this;
}
myFunction(); // Window {parent: Window, opener: null, top: Window, length: 0,
// frames: Window, …}
```

- Tuy nhiên nếu đang ở trong strict mode thì không cho phép điều trên. **this** sẽ trả về undefined

```js
"use strict";
function myFunction() {
  return this;
}
myFunction(); // undefined
```

- Khi ở trong Event Handlers, this sẽ trỏ tới đối tượng HTML mà nó nhận event.
  Ví dụ: this ở đây sẽ trỏ tới button.

```js
<button onclick="this.style.display='none'">Click to Remove Me!</button>
// this hiện đang trỏ vào button vì vậy nếu click vào button này thì nó thay đổi css của button và làm nó biến mất
```

- Đôi lúc từ khóa this sẽ gây nhầm lẫn cho chúng ta trong việc xác định giá trị của nó, ví dụ như việc truyền hàm vào như một callback như đoạn code phía dưới:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
person.fullName(); // "John Doe"

$("#button").click(person.fullName); // this không còn trỏ vào person nữa mà lần này nó trỏ vào button.
```

---

### Fn.bind() method

Xét ví dụ sau:

```js
this.fistName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thảo",
  getFullName() {
    return `${this.firstName} ${this.lastName}`; // this ở đây chỉ là key word chứ không mang giá trị, tùy thuộc vào đối tượng gọi mà nó sẽ trỏ đến nơi khác nhau
  },
};

// Case 1:
console.log(teacher.getFullName()); // Minh Thảo

// Case 2:
const getTeacherName = teacher.getFullName;

console.log(getTeacherName()); // Minh Thu, vì gọi hàm không thông qua một đối tượng nào (dấu '.' ở trước) nên this ở đây sẽ trỏ ra global (window)
```

- Để giải quyết vấn đề này ta sẽ dùng hàm bind() đã được giới thiệu trong ECMAScript 5, hàm bind() này dùng để xác định tham số this cho hàm được gọi.
- bind() nhận đối số đầu tiên là object ràng buộc nó với từ khóa this

Đặc tính:

- Phương thức bind() sẽ trả về một hàm mới (vùng nhớ mới)
- Có thể nhận các đối số như hàm ban đầu

```js
this.fistName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thảo",
  getFullName(data1, data2) {
    console.log(data1, data2);
    return `${this.firstName} ${this.lastName}`; // this ở đây chỉ là key word chứ không mang giá trị, tùy thuộc vào đối tượng gọi mà nó sẽ trỏ đến nơi khác nhau
  },
};

const student = {
  firstName: "Anh",
  lastName: "Tuan",
};

// Case 1:
console.log(teacher.getFullName()); // Minh Thảo

// Case 2:
// const getTeacherName = teacher.getFullName.bind(student);
const getTeacherName = teacher.getFullName.bind(student, "data1", "data2"); // Tham số thứ 2 trở đi có thể nhận các đối số như hàm ban đầu

console.log(getTeacherName === teacher.getFullName); // false, vì bind() sẽ tạo ra vùng nhớ mới

console.log(getTeacherName("data1", "data2")); // data1, data2, Anh Tuan, Nó sẽ lấy đối số truyền từ bind, vì vậy khi dùng tham số động thường xuyên thay đổi thì hãy truyền như trên chứ không truyền qua bind
```

Ứng dụng:

- Ví dụ DOM listen events:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

$("#button").click(person.fullName.bind(person)); // Lúc này hàm bind() sẽ xác định this là person.
```

- Ví dụ kết hợp object methods + DOM listen events

[Codesandbox](https://codesandbox.io/s/friendly-austin-bx7x0?file=/src/index.js)

Tóm tắt:

- Phương thức bind() cho phép ràng buộc this cho một phương thức (function)
- Phương thức bind() sẽ trả về một hàm mới với context được bind
- Hàm được trả về từ bind() vẫn có thể nhận các đối số của hàm gốc

---

### Fn.call() method

- Là phương thức trong prototype của Function constructor, phương thức này được dùng để gọi hàm và cũng có thể bind this cho hàm.

- Fn.call() giúp gọi hàm và bind this tới đối tượng khác, mặc định this là window object
- Fn.call() không trả ra hàm mới, nó gọi luôn hàm sau khi bind this (Fn.bind() thì chỉ bind this nhưng không gọi hàm)
- Fn.call() dùng để mượn hàm - function borrowing
- Fn.call() có thể dùng để kế thừa properties & method từ 1 Constructor khác

Ví dụ:

- Gọi hàm với call method

```js
const teacher = {
  name: "Minh Thu",
};

const me = {
  name: "Anh Tuan",
  showName() {
    console.log(`${this.name}`);
  },
};

me.showName.call(teacher); // Minh Thu
```

- Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind

```js
("use strict");

this.firstName = "Tuan";

function showName() {
  console.log(`${this.firstName}`); // this = window
}

showName.call(this); // Tuan
```

- Thể hiện tính kế thừa (extends) trong OOP

```js
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  Animal.call(this, name, weight); // Gọi func Animal và bind this (this = ga) vào func Animal và thêm name, weight vào this trong đó.
  this.legs = legs;
}

const ga = new Chicken("ga", 3, 2);

console.log(ga);
/**
{
  legs: 2,
  name: "ga",
  weight: 3
}
 * /
```

- Mượn hàm (function borrowing), thêm ví dụ với arguments

```js
function logger() {
  Array.prototype.forEach.call(arguments, (item) => console.log(item));
  // arguments là this của forEach

  // Học để hiểu sâu chứ không nên lạm dụng cách trên, nên dùng ES6:
  const arr = [...arguments];
  const arr2 = Array.from(arguments);
}

logger(1, 2, 3, 4, 5);
```

---

### Fn.apply() method

- Phương thức này cho phép gọi một hàm với một this (bind) và truyền đối số cho hàm gốc dưới dạng mảng.

Ví dụ:

- Gọi hàm với apply method

```js
const teacher = {
  firstName: "Minh",
  lastName: "Thu",
};

function greet(greeting, message) {
  return `${greeting} ${this.firstName} ${this.lastName} ${message}`;
}

let result = greet.apply(teacher, ["Hi cô", "cô dạy gì thế ạ!"]);

console.log(result);

// So sánh với call

result = greet.call(teacher, "Hi cô", "cô dạy gì thế ạ!");

console.log(result);
```

- Mượn hàm (function borrowing)

```js
const teacher = {
  firstName: "Minh",
  lastName: "Thu",
  isOnline: false,
  goOnline() {
    this.isOnline = true;
    console.log(`${this.firstName} ${this.lastName} is Online`);
  },
  goOffline() {
    this.isOnline = false;
    console.log(`${this.firstName} ${this.lastName} is Offline`);
  },
};

const me = {
  firstName: "Anh",
  lastName: "Tuan",
  isOnline: false,
};

console.log("Teacher: ", teacher.isOnline); // "Teacher: ", false
teacher.goOnline(); // "Minh Thu is Online"
console.log("Teacher: ", teacher.isOnline); // "Teacher: ", true
console.log("-----");
console.log("Me: ", me.isOnline); // "Me: ", false
teacher.goOnline.apply(me); // "Anh Tuan is Online"
console.log("Me: ", me.isOnline); // "Me: ", true
```

- Thể hiện tính kế thừa (extends) trong OOP

```js
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Parrot() {
  Animal.apply(this, arguments); // arguments tính chất của nó như mảng, và apply truyền mảng làm đối số
}

const conVet = new Parrot("Vet", 300);

console.log(conVet);
```

---

### So sánh fn.bind(), fn.call(), fn.apply()

1. Giống nhau

- Cú pháp truy cập

```js
function fn() {}

fn.bind();

fn.call();

fn.apply();
```

- Là các methods được thừa kế từ Function.prototype

```js
function fn() {}

fn.bind === Function.prototype.bind; // true
fn.call === Function.prototype.call; // true
fn.apply === Function.prototype.apply; // true
```

2. Khác nhau

- Các đối số & cách hoạt động

Bind method:

- Trả ra hàm mới với `this` tham chiếu tới `thisArg`
- Không thực hiện gọi hàm
- Nếu được bind kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn

```js
function fn() {}
const newFn = fn.bind(thisArg, arg1, arg2, ...)
newFn(arg1, arg2, ...)
```

Call method:

- Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
- Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`

```js
fn.call(thisArg, arg1, arg2, ...)
```

Apply method:

- Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
- Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`

```js
fn.apply(thisArg, [arg1, arg2, ...])
```
