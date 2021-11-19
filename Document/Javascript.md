## CÁC HÀM JAVASCRIPT

### Array function

#### Array map() trong Javascript

Giá trị trả về của hàm map trong js là một mảng mới, với số lượng phần tử bằng với mảng cũ, nhưng giá trị của các phần tử thì được quyết định bởi lệnh return của hàm map.

**Cú pháp**:

```js
let newArray = arr.map(function callback(currentValue, index, array) {
    // Trả về phần tử của mảng mới
}[, thisArg])
```

- currentValue: Phần tử đang lặp
- index: index của phần tử đang lặp
- array: mảng đang lặp
- thisArg - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị của this, nếu không được truyền vào thì giá trị this là "undefined".

Chúng ta sẽ bắt đầu bằng một ví dụ khá cơ bản, đó là lặp và in ra các phần tử trong mảng.

```js
const domain = ["freetuts.net", "techtuts.net", "simpletutorials.org"];

domain.map(function (item, index) {
  console.log(index, item);
});
```

Kết quả:

```js
0 freetuts.net;
1 techtuts.net;
2 simpletutorials.org;
```

Ví dụ gấp đôi giá trị của một mảng:

```js
var numbers = [5, 10, 20, 22, 60];
var new_number = numbers.map(function (item) {
  return item * 2; // nhân đôi giá trị
});

console.log(new_number);
// Kết quả: [10, 20, 40, 44, 120]
```

---

#### Array filter() trong Javascript

Filter trong Javascript là một phương thức thuộc đối tượng mảng. Nó có công dụng đúng ý nghĩa với tên gọi của nó, tức là sẽ lặp qua qua các phần tử, sau đó tùy vào từng bài toán mà sẽ quyết định chọn phần tử đó hay không. Cuối cùng hàm này sẽ trả về một mảng các phần tử đã chọn.

**Cú pháp**:

```js
let newArray = arr.filter(callback(element, index, array) {
  return true / false;
}, [thisArg])
```

- element: Phần tử đang xử lý
- index: index của phần tử
- array: mảng đang xử lý
- thisArg - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị của this, nếu không được truyền vào thì giá trị this là "undefined".

Nếu `return true` thì phẩn tử được chọn, ngược lại `return false` thì phần tử không được chọn. Còn `element` chính là giá trị của mỗi phần tử trong mỗi lần lặp.

Ví dụ: Tạo mảng mới từ mnagr numbers và bỏ đi phần tử 300.

```js
var numbers = [100, 200, 300, 400, 500];

var selected_number = numbers.filter(function (value) {
  if (value == 300) {
    return false;
  }
  return true;
});

console.log(selected_number); // [100, 200, 400, 500]
```

Ví dụ: Lấy các phần tử chẵn trong mảng cho trước.

```js
var numbers = [5, 10, 20, 22, 60, 75, 90];

var new_numbers = numbers.filter(function (item) {
  return item % 2 == 0;
});

console.log(new_numbers);
// Kết quả: [10, 20, 22, 60, 90]
```

---

#### Hàm Array.toString() - Chuyển mảng thành chuỗi trong javascript

**Cú pháp:**

`let string = ArrayObj.toString();`

Trong đó ArrayObj là mảng cần chuyển đổi thành chuỗi.

Ví dụ: Chuyển mảng words thành một chuỗi

```js
const words = ["Học", "Lập", "Trình", "Tại", "Freetuts.net"];
alert(words.toString()); // kết quả: Học,Lập,Trình,Tại,Freetuts.net
```

Công dụng của nó đơn giản chỉ là chuyển một mảng sang chuỗi và mỗi phần tử được cách nhau bởi dấu phẩy, vì vậy trong thực tế này hàm rất ít khi sử dụng trong mảng.

**Dùng Array.join để thay thế hàm Array.toString trong js**

Ngoài hàm `toString()` ra thì bạn cũng có thể sử dụng hàm join để chuyển đổi mảng thành chuỗi. Điểm khác biệt là hàm **toString** bạn không thể tùy chọn ký tư ngăn cách, còn hàm **join** thì được.

Ví dụ: Tạo chuỗi từ mảng bằng hàm join trong nhiều trường hợp.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
a.join(" "); // 'Wind Water Fire'
```

---

#### Hàm Array concat() trong Javascript

**Cú pháp:**

`const newArray = array1.concat(array2, array3, ..., arrayX)`

Trong đó:

array1,array2, array3, ..., arrayX là các mảng muốn nối lại với nhau.
Hàm sẽ trả về kết quả là một mảng mới bao gồm tất cả nội dụng của các mảng được truyền vào.

Ví dụ:

```js
var projec1 = ["PHP", "CSS"];
var projec2 = ["HTML", "Python", "JS"];
var children = projec1.concat(projec2);
console.log(children); // ['PHP', 'CSS', 'HTML', 'Python', 'JS']
```

---

#### Hàm Array copyWithin() trong Javascript

Đây là hàm dùng để sao chép các phần tử trong mảng với vị trí bắt đầu và kết thúc việc sao chép được xác định.

Thực chất, hàm copywithin không chỉ sao chép mà nó sẽ ghi đè các phần tử nó sao chép được lên các phần tử của mảng tính từ một vị trí xác định bởi người dùng.

**Cú pháp:**
`array.copyWithin(target, start, end)`

Trong đó:

- target là vị trí mà hàm sẽ bắt đầu ghi đè các phần tử sao chép được.
- start là vị trí bắt đầu sao chép, giá trị mặc định là 0.
- end là vị trí kết thúc sao chép, nếu không nhập vào thì mặc định là vị trí cuối cùng của mảng.
  Tất cả các chị mục trên nếu là số âm thì nó sẽ bắt đầu đếm từ cuối chuỗi trở về đầu chuỗi.

**Một vài ví dụ cho các trường hợp.**

```js
// Lặp lại phần tử từ vị trí thứ 2 cuối chuỗi.
// Lấy từ phần tử bắt đầu start là 0, end là 4
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

// Lặp từ vị trí đầu tiên (0)
// Lấy từ phần tử bắt đầu start là 3, end là 4
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

// Tương tự cho các trường hợp dưới đây.

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5])

i32a.copyWithin(0, 2)
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

---

#### Hàm array.every() trong Javascript

Every javascript là một phương thức dành cho đối tượng mảng trong javascript. Công dụng của hàm này là giúp kiểm tra tất cả các phần tử trong mảng có thõa mãn một điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa thì sẽ trả về **true**, ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về **false**.

**Cú pháp:**
`array.every(function(currentValue, index, arr), thisValue)`

Trong đó:

- currentValue - giá trị của phần tử hiện tại.
- index - chỉ số của phần tử hiện tại.
- arr - mảng mà phần tử hiện tại thuộc về.
- thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị của this, nếu không được truyền vào thì giá trị this là "undefined".

Mỗi phương thức xử lý trong hàm every sẽ thực hiện một lần với lần lượt tất cả các phẩn tử trong mảng,

Nếu có một phần tử của mảng không thỏa mãn phương thức của hàm every và trả về False, hàm every đó sẽ trả về False. Nếu không có lỗi xảy ra hàm every sẽ trả về True.

**Lưu ý**:

- Hàm every sẽ không thực hiện chức năng truyền vào đối với các phần tử không có giá trị.
- Hàm every không làm thay đổi mảng ban đầu.

Ví dụ: Kiểm tra xem trong mảng numbers đều là những con số hay không.

```js
var numbers = [1, 2, 3, "4"];

function checkNumber(number) {
  return typeof number == "number";
}

var check = numbers.every(checkNumber);
console.log(check); // false
```

---

#### Hàm array.fill() trong Javascript

Đây là hàm giúp thay đổi giá trị của tất cả các phần tử trong mảng thành một giá trị mới.

Ví dụ bạn có một mảng các trái cây, bạn muốn tất cả các phần tử của mảng này đều có giá trị là "Quả Nho" thì sử dụng hàm fill. Đương nhiên bạn cũng có thể sử dụng vòng lặp để xử lý cho tình huống này.

Bạn cũng có thể xác định vị trí bắt đầu và kết thúc của hàm fill() trong mảng. mặc định nó sẽ áp dụng cho tất cả các phần tử của mảng.

**Cú pháp:**
`array.fill(value, start, end)`

Trong đó:

- value - giá trị tĩnh sẽ được thay thế cho các phần tử trong mảng.
- start - vị trị bắt đầu thay thế trong mảng.
- end - vị trí kết thúc thay thế.

Hàm này sẽ tra về một mảng mới, có tổng số phần tử bằng với mảng cũ, và giá trị của các phần tử chính bằng giá trị mà bạn truyền vào. Điều này có nghĩa là mảng cũ sẽ không có sự thay đổi nào.

Ví dụ: Hãy thay đổi giá trị cho tất cả các phần tử trong mảng numbers thành giá trị 22.

```js
var numbers = [1, 2, 3, 4];

console.log(numbers.fill(22));
// Kết quả: [22, 22, 22, 22]
```

Ví dụ:

```js
var subject = ["CSS", "HTML", "PYTHON", "C"];
var newSubject = subject.fill("JS", 2, 3); // ['CSS', 'HTML', 'JS', 'C']
```

---

#### Hàm array.find() trong Javascript

Hàm find sẽ trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra (được truyền vào như một hàm).

Hàm find sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn và hàm kiểm tra trả về **true**. Khi đó hàm find sẽ trả về giá trị của phần tử thỏa mãn và bỏ qua không kiểm tra các phần tử còn lại.

**Cú pháp:**
`array.find(function(currentValue, index, arr),thisValue)`

Trong đó:

- currentValue - giá trị của phần tử hiện tại.
- index - chỉ số của phần tử hiện tại.
- arr - mảng mà phần tử hiện tại thuộc về.
- thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị "this:. Nếu không được truyền vào thì giá trị "this" là "undefined".

**Lưu ý:**

- Hàm find không thực hiện hàm kiểm tra với các phần tử không có giá trị.
- Hàm find sẽ không thay đổi mảng ban đầu.

Ví dụ: Lấy phần tử đầu tiên trong mảng có giá trị lớn hơn 20.

```js
const ages = [3, 10, 28, 20];

function checkAge(age) {
  return age > 20;
}

let age = ages.find(checkAge);
console.log(age); // 28
```

Trường hợp các phần tử trong mảng là các object thì ta có cách viết khác một chút.

Ví dụ: Cho mảng customers như sau:

```js
let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];
```

Hãy sử dụng hàm find để tìm phần tử đầu tiên có **credit** lớn hơn 100.
`console.log(customers.find(c => c.credit > 100));`

Kết quả:
`{ name: 'ACME Corp', credit: 200 }`

---

#### Hàm Array findIndex() trong Javascript

Hàm findIndex sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn và hàm kiểm tra trả về **true**. Khi đó, hàm find sẽ trả về **key** của phần tử thỏa mãn đó và bỏ qua không kiểm tra các phần tử còn lại.

**Cú pháp:**
`array.findIndex(function(currentValue, index, arr),thisValue)`

Trong đó:

- currentValue - giá trị của phần tử hiện tại.
- index - chỉ số của phần tử hiện tại.
- arr - mảng mà phần tử hiện tại thuộc về.
- thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị this, Nếu không được truyền vào thì giá trị "this" là "undefined".

**Lưu ý:**

- Hàm findIndex không thực hiện hàm kiểm tra với các phần tử không có giá trị.
- Hàm findIndex sẽ không thay đổi mảng ban đầu.

Ví dụ: Trả về chỉ mục của phần tử đầu tiên trong mảng có giá trị lớn hơn 20.

```js
const ages = [3, 10, 28, 20];

function checkAge(age) {
  return age > 20;
}

let age = ages.find(checkAge);
console.log(age); // 2
```

Kết quả trả về là 2 tại vì điều kiện của hàm truyền vào là age > 20, tức là chỉ phần tử nào có giá trị lớn hơn 20 là thỏa. Như trong mảng **ages** thì vị trí của phần tử đầu tiên thỏa điều kiện đó là 28.

---

#### Hàm forEach() trong Javascript

forEach javascript là một phương thức thuộc đối tượng mảng trong javascript. Hàm này sẽ giúp lặp qua các phần tử của mảng, nó có một tham số truyền vào, và tham số này sẽ lưu trữ giá trị của phần tử trong mỗi lần lặp.

Hàm forEach sẽ không thực hiện đối với những phần tử không có giá trị.

**Cú pháp:**
`array.forEach(function(currentValue, index, arr), thisValue)`

Trong đó:

- currentValue - giá trị của phần tử hiện tại.
- index - chỉ số của phần tử hiện tại.
- arr - mảng mà phần tử hiện tại thuộc về.
- thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị this. Nếu không được truyền vào thì giá trị "this" là "undefined".

Ví dụ: Lặp qua và in giá trị của các phần tử trong mảng ranks.

```js
let ranks = ["A", "B", "C"];

ranks.forEach(function (e) {
  console.log(e); // A B C
});
```

Bây giờ mình muốn con trỏ this chính là biến ranks thì làm bằng cách nào? Rất đơn giản, hãy sử dụng tham số thisValue mà mình đã giới thiệu ở phần 1.

```js
let ranks = ["A", "B", "C"];

ranks.forEach(function (e) {
  console.log(this); // ranks
}, ranks);
```

Chạy ví dụ này lên thì **this chính là biến ranks.**

Tuy nhiên, nếu bạn sử dụng arrow function thì đối tượng this không tồn tại nhé các bạn.

```js
let ranks = ["A", "B", "C"];

ranks.forEach((e) => {
  console.log(this); // window object
}, ranks);
```

---

#### Hàm array.indexOf() trong javascript

Array indexOf trong javascript là một phương thức của đối tượng mảng, nó dùng để tìm kiếm một phần tử trong mảng dựa vào giá trị truyền vào tham số của hàm.

- Việc tìm kiếm sẽ bắt đầu từ vị trí xác định, nếu không truyền vào thì mặc định sẽ tìm từ đầu.
- Nếu có nhiều hơn một phần tử được tìm thấy, phần tử tìm thấy đầu tiên sẽ được trả về.
- Vị trí các phần tử của mảng bắt đầu từ: 0, 1, 2 ..vv.
- Nếu bạn muốn tìm từ cuối mảng, sử dụng hàm lastIndexOf.

**Cú pháp:**
`array.indexOf(item, start)`

Trong đó:

- item là giá trị của phần tử cần tìm.
- start là vị trí bắt đầu tìm kiếm.

Ví dụ: Cho mảng gồm 6 phần tử như sau.

```js
var scores = [10, 20, 30, 10, 40, 20];

console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1
```

Trong dòng code thứ 3 trả về -1 tại vì giá trị 50 không tìm thấy trong mảng.

Mặc định thì hàm này sẽ sử dụng thuật toán tìm kiếm tuyến tính, tức là nó sẽ dò từ đầu mảng đến cuối mảng, phần tử nào bằng với giá trị truyền vào thì sẽ được trả về.

Nếu bạn muốn bắt đầu tìm từ một vị trí nào đó thì hãy sử dụng tham số start nhé.

Như ví dụ trên, mình chắc chắn 3 phần tử đầu là không có giá trị 40, vì vậy mình sẽ yêu cầu hàm indexOf tìm từ phần tử thứ 4 (tức là chỉ mục 3) trở đi.

`console.log(scores.indexOf(40, 3)); // 4`

**Sử dụng hàm array indexOf với mảng chứa các object**

Nếu các phần tử trong mảng là các object thì lúc này bạn không thể sử dụng hàm indexOf được.

Ví dụ dưới đây mặc dù trong mảng guests và giá trị cần tìm truyền vào hàm có trùng nhau nhưng kết quả vẫn trả về -1. Lý do là javascript đã xem đây là hai đối tượng khác nhau.

```js
var guests = [
  { name: "John Doe", age: 30 },
  { name: "Lily Bush", age: 20 },
  { name: "William Gate", age: 25 },
];

console.log(
  guests.indexOf({
    name: "John Doe",
    age: 30,
  })
); // -1
```

Như bạn thấy, phần tử đầu tiên và giá trị mình truyền vào hàm indexOf hoàn toàn giống nhau nhưng kết quả trả về vẫn là -1.

Để khắc phục vấn đề này thì ta sẽ kết hợp một vài hàm khác nữa như sau:

- Sử dụng hàm map để duyệt qua từng phần tử của mảng, sau đó trả về một mảng mới và các phần tử là giá trị cần tìm.
- Sử dụng hàm indexOf để tìm trên mảng mới đó.

```js
var guests = [
  { name: "John Doe", age: 30 },
  { name: "Lily Bush", age: 20 },
  { name: "William Gate", age: 25 },
];

// Tìm theo key name
let flag = guests
  .map(function (e) {
    return e.name;
  })
  .indexOf("John Doe");

console.log(flag); // 0

// Tìm theo key age
let flag = guests
  .map(function (e) {
    return e.age;
  })
  .indexOf(30);

console.log(flag); // 0
```

---

#### isArray javascript - kiểm tra biến có phải là mảng hay không

Hàm này dùng để kiểm tra một biến có phải là mảng hay không.

Nói chính xác hơn thì **isArray javascript** sẽ kiểm tra một biến nào đó có phải thuộc đối tượng mảng hay không. Hàm **isArray** sẽ trả về `true` nếu biến cần kiểm tra là một mảng, ngược lại nếu biến không phải là một mảng hàm sẽ trả về `false`.

**Cú pháp:**
`Array.isArray(obj)`

Trong đó:

- obj là đối tượng cần kiểm tra.
- Hàm trả về là **true** nếu obj là một mảng, **false** nếu obj không phải là mảng.

Ví dụ: Kiểm tra xem biến fruits có phải là một mảng hay không.

```js
const fruits = ["Chuối", "Cam", "táo", "Nho"];
Array.isArray(fruits); // Returns true
```

**Dùng typeof thay cho isArray javascript được không?**

Theo lý thuyết, từ khóa typeof có công dụng là kiểm tra một biến thuộc kiểu dữ liệu gì. Tuy nhiên, thực tế thì typeof sẽ kiểm tra biến đó thuộc kiểu đối tượng nào, mà các đối tượng như `array, number..` đều là object nên kết quả của hàm `typeof` sẽ trả về object.

```js
console.log(typeof []); // object
console.log(typeof new Number(1)); // object
```

Vì vậy, bạn **không thể sử dụng từ khóa typeof để kiểm tra một biến có phải là mảng hay không** nhé.

---

#### Hàm array.join() trong Javascript

Đây là hàm dùng để nối các phần tử của mảng lại với nhau thành một chuỗi.

Hàm join sẽ nối các phần tử của mảng thành một chuỗi, các phần tử được ngăn cách nhau bởi kí tự do người dùng quy định. Nếu không truyền ký tự ngăn cách vào thì giá trị mặc định là dấu phẩy ",".

Nếu bạn chỉ đơn thuần muốn chuyển mảng thành chuỗi và ngăn cách bởi dấu phẩy thì hãy sử dụng hàm array.toString() nhé.

**Cú pháp:**
`array.join(separator)`

Trong đó:

- separator là kí tự sẽ ngăn cách các phần tử với nhau, mặc định mang giá trị là dấu ",".
- Hàm sẽ trả về một chuỗi, và mảng cũ không ảnh hưởng gì cả.

Hàm này rất ít khi sử dụng, bởi thao tác chuyển mảng thành chuỗi trong các ứng dụng thực tế rất hiếm gặp.

Ví dụ:

```js
var a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

**So sánh hàm join với array.toString**
Cả hai hàm đều là các phương thức của đối tượng mảng, và công dụng là chuyển đổi mảng thành chuỗi. Tuy nhiên, chúng sẽ có một chút khác biệt như sau:

- Hàm join có thể tùy biến ký tự ngăn cách giữa các phần tử.
- Hàm array.toString thì luôn sử dụng dấu phẩy để ngăn cách giữa các phần tử.

---

#### Hàm Array lastIndexOf() trong Javascript

Hàm lastIndexOf sẽ tìm kiếm một phần tử trong mảng dựa vào giá trị của tham số mà bạn truyền vào. Nó sẽ trả về vị trị của phần tử cuối cùng được tìm thấy, trả về -1 nếu không tìm thấy.

**Cú pháp:**
`array.lastIndexOf(item, start)`

Trong đó:

- item là giá trị của phần tử cần tìm.
- start là vị trí bắt đầu tìm kiếm. mặc định là vị trí 0.

Ví dụ bạn có mảng trái cây như sau:

`var fruits = ["Chanh", "Bưởi", "Chanh"];`

Khi sử dụng hàm lastIndexOf để tìm quả **chanh** trong mảng này thì kết quả sẽ trả về là vị trí thứ 3, tức chỉ mục nó là 2.

Việc tìm kiếm sẽ bắt đầu từ vị trí xác định, nếu không truyền vào thì mặc định sẽ tìm từ cuối mảng và kết thúc ở đầu mảng.

Nếu có nhiều hơn một phần tử được tìm thấy, phần tử tìm thấy đầu tiên tính từ cuối mảng sẽ được trả về.

Vị trí các phần tử của mảng bắt đầu từ 0 : 0, 1, 2..

---

#### Hàm array.reverse() trong Javascript

Đây là một hàm rất đơn giản, nó sẽ trả về một mảng gồm các phần tử đã bị đảo ngược. Mảng hiện tại cũng sẽ bị đảo ngược theo.

**Cú pháp:**
`array.reverse()`

Hàm này không có tham số truyền vào.

Ví dụ: Đảo ngược mảng numbers.

```js
var numbers = [1, 2, 3, 4, 5];
var rev_numbers = numbers.reverse();

console.log(numbers); // [5, 4, 3, 2, 1]
console.log(rev_numbers); // [5, 4, 3, 2, 1]
```

Như bạn thấy, cả mảng gốc và mảng mới đều bị đảo ngược các phần tử.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits); //["Mango", "Apple", "Orange", "Banana"]
```

---

#### Hàm array.pop() trong Javascript

Đây là hàm dùng để xóa phần tử cuối cùng ra khỏi mảng.

- Hàm array.pop() có chức năng xóa bỏ phần tử cuối cùng của mảng, hàm sẽ trả về phần tử bị xóa.
- Hàm array.pop() sẽ thay đổi chiều dài của mảng.
- Nếu bạn muốn loại bỏ phần tử đầu tiên của mảng, sử dụng hàm shift.

**Cú pháp:**
`array.pop()`

Hàm array.pop() không có tham số truyền vào.

Ví dụ 1: Xóa phần tử cuối cùng trong mảng numbers.

```js
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.pop()); // 6
console.log(numbers.pop()); // 5
console.log(numbers.pop()); // 4
console.log(numbers); // [1, 2, 3]
```

---

#### Hàm Array push() trong Javascript

Một vài lưu ý quan trọng:

- Hàm push() sẽ thêm mới một hoặc nhiều phần tử vào cuối mảng, hàm trả về chiều dài của mảng mới.
- Hàm push() sẽ làm thay đổi chiều dài của mảng.
- Nếu bạn muốn thêm phần tử vào đầu mảng, sử dụng hàm unshift().

**Cú pháp:**
`array.push(item1, item2, ..., itemX)`

Trong đó:

- item1, item2, ..., itemX là các phần tử sẽ được thêm vào cuối mảng array.
- Hàm sẽ trả về tổng chiều dài của mảng mới sau khi thêm.

Ví dụ:

```js
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// output: 4
console.log(animals);
// output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

---

#### Hàm Array reduce() trong Javascript

Hàm reduce sẽ duyệt qua từng phần tử trong mảng, sau đó trả về một giá trị cuối cùng, giá trị này phụ thuộc vào chương trình của hàm mà bạn truyền vào reduce.

**Cú pháp:**

`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

Nếu viết theo arrow function thì sẽ như sau:

`array.reduce((total, currentValue, currentIndex, arr) => {...}, initialValue)`

Trong đó:

- total - giá trị trả lại trước đó của function, chính là giá trị của lệnh return cho mỗi lần lặp.
- currentValue - giá trị của phần tử hiện tại.
- currentIndex- chỉ số của phần tử hiện tại.
- arr - mảng mà phần tử hiện tại thuộc về.
- initialValue - tham số không bắt buộc. Nếu được truyền vào thì initialValue sẽ được sử dụng làm giá trị ban đầu, còn không thì nó sẽ lấy giá trị của phần tử đầu tiên. Nếu mảng cần reduce rỗng thì bạn phải truyền giá trị này, nếu không sẽ bị báo lỗi.

Chúng ta sẽ tìm hiểu biến total xem nó lưu trữ cái gì nhé.

- Biến total chính là giá trị return của hàm callback trong mỗi lần lặp.
- Total được gắn vào tham số đầu tiên của hàm callback cho những lần lặp tiếp theo.
- Giá trị mà hàm callback return ở lần lặp cuối cùng chính là giá trị return của hàm reduce.

Ví dụ: Thử in biến total ra xem có gì nhé. Trước tiên hãy chạy đoạn code dưới đây.

```js
const numbers = [10, 15, 20];

var result = numbers.reduce(function (total, currentValue, currentIndex, arr) {
  console.log(total);

  // Trả về biến total cộng với giá trị của phần tử đang lặp
  return total + currentValue;
}, 5);

console.log("----------------");
console.log(result);
```

Kết quả:

```js
5
15
30
----------------
50
```

Quy trình chạy như sau:

- Lần thứ 1: total chính là số 5 vì đó là giá trị khởi tạo cho lần chạy đầu tiên mà ta truyền vào, sau đó cộng dồn với phần tử thứ nhất là 5 + 10 = 15. Return về 15.
- Lần thứ 2: total bằng 15 nên in ra số 15, sau đó cộng dồn với phần tử thứ hai là 15 + 15 = 30. Return về 30
- Lần thứ 3: total bằng 30 nên in ra số 30, sau đó cộng dồn với phần tử thứ ba là 30 + 20 = 50. Return về 50
- Hết dữ liệu, giá trị return ở lần lặp cuối cùng chính là giá trị return của hàm reduce, tức là số 50.

**Một số ví dụ khác**

Ví dụ 1: Tính tổng các phần tử trong mảng numbers.

```js
const numbers = [10, 15, 20, 54, 60];

var total = numbers.reduce(function (total, currentValue) {
  return total + currentValue;
});

console.log(total); // 195
```

Ví dụ 2: Tính tổng các phần tử có giá trị chẵn trong mảng numbers.

```js
const numbers = [10, 15, 20, 54, 60];

var total = numbers.reduce(function (total, currentValue) {
  if (currentValue % 2 == 0) {
    return total + currentValue;
  } else {
    return total;
  }
});

console.log(total); // 144
```

---

#### Array reduceRight() trong Javascript

Hàm reduce và reduceRight trong js có công dụng tương tự nhau, chỉ khác một điều duy nhất là:

- Hàm reduce sẽ duyệt mảng từ trái sang phải.
- Hàm reduceRight sẽ duyệt mảng từ phải sang trái.

**Cú pháp hàm này cũng không khác gì hàm reduce.**

`array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)`

Trong đó:

- total - giá trị trả lại trước đó của function.
- currentValue - giá trị của phần tử hiện tại.
- currentIndex- chỉ số của phần tử hiện tại.
- arr - mảng mà phần tử hiện tại thuộc về.
- initialValue- tham số không bắt buộc. Nếu được truyền vào thì initialValue sẽ được sử dụng làm giá trị ban đầu của function. Trường hợp mảng rỗng thì bắt buộc phải nhập giá trị này.

Ví dụ: Hãy viết chương trình in ra giá trị của các phần tử trong quá trình lặp của hàm reduceRight.

```js
const numbers = [10, 15, 20, 54, 60];

numbers.reduceRight(function (total, currentValue) {
  console.log(currentValue);
  return currentValue;
});

// Kết quả
54;
20;
15;
10;
```

Như vậy hàm này đã duyệt từ cuối mảng trở về đầu mảng, ngược hoàn toàn với hàm reduce.

---

#### Hàm array.shift() trong Javascript

Hàm shift có chức năng loại bỏ phần tử đầu tiên của mảng. Hàm sẽ trả về phần tử đó.

Hàm shift sẽ thay đổi chiều dài của mảng.

Nếu muốn loại bỏ phần tử cuối cùng của mảng sử dụng hàm pop.

**Cú pháp:**
`array.shift()`

hàm array.shift() không có tham số truyền vào.

Ví dụ:

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

---

#### Hàm array.slice() trong Javascript

Hàm slice có chức năng trích xuất một số phần tử của mảng, vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số truyền vào hàm.

**Lưu ý** là hàm sẽ trích xuất không bao gồm phần tử end truyền vào. Ví dụ array.slice(1,4) thì các phần tử được trích xuất sẽ là 1, 2 và 3 (không bao gồm phần tử 4).

Hàm sẽ trả về kết quả là một mảng mới bao gồm các phần tử được trích xuất. **Hàm sẽ không làm thay đổi mảng gốc.**

**Cú pháp:**
`array.slice(start, end)`

Trong đó:

- start là vị trí bắt đầu trích xuất.
- end là vị trí kết thúc, kết quả sẽ không bao gồm phần tử end.
- Hàm sẽ return về một mảng mới.
- Nếu start và end là giá trị âm thì nó sẽ tính từ cuối mảng trở về đầu mảng.

Ví dụ: Lấy một vài phần tử trong mảng hiện có.

```js
let fruits = ['Chuối', 'Cam', 'Chanh', 'Táo', 'Xoài'];

// Lấy hai phần tử Cam và Chanh trong mảng fruits
// Ta phải nhập 1,3 vì phần tử cuối cùng không được tính.
let citrus = fruits.slice(1, 3);
​
// fruits chứa ['Chuối', 'Cam', 'Chanh', 'Táo', 'Xoài'];
// citrus chứa ['Cam','Chanh'];
```

Ví dụ khác trên mozilla:

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
```

---

#### Hàm array.some() trong Javascript

Hàm some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. Chỉ cần hàm callback `return true` là hàm some sẽ `return true`. Ngược lại, nếu duyệt hết mảng mà không có `return true` nào thì hàm some sẽ `return false`.

Nói đơn giản, nếu một phần tử nào đó thỏa với chương trình trong hàm callback thì hàm some sẽ `return true`. Ngược lại nếu tất cả các phần tử đều không thỏa thì nó sẽ `return false`.

**Cú pháp:**

```js
// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function callbackFn(element) { ... })
some(function callbackFn(element, index) { ... })
some(function callbackFn(element, index, array){ ... })
some(function callbackFn(element, index, array) { ... }, thisArg)
```

Trong đó:

- element là biến chứa giá trị của phần tử đang lặp.
- index là key của phần tử đang lặp.
- array là mảng gốc mà phần tử đang thuộc về.
- thisArg là tham số không bắt buộc. Nếu được truyền vào thì thisArg sẽ được sử dụng làm giá trị "this", nếu không được truyền vào thì giá trị "this" là "undefined".

Ví dụ: Kiểm tra xem trong mảng numbers có số nào lớn hơn 10 hay không.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

---

#### Hàm array.sort() trong Javascript

Hàm sort là một method thuộc đối tượng array trong javascript, được đùng dể sắp xếp các phần tử trong mảng tăng dần hoặc giảm dần theo số thứ tự trong [bảng mã ascii](https://freetuts.net/ma-ascii-la-gi-bang-ma-ascii-358.html), hoặc theo quy tắc trong callback function.

- Mặc định các phần tử sẽ được sắp xếp theo bảng chữ cái với thứ tự tăng dần, điều này khiến phương thức sort sẽ sắp xếp các chuỗi rất chính xác. Tuy nhiên, khi sắp xếp các số sẽ không được chính xác (ví dụ 20 và 100 thì 20 sẽ lớn hơn 100 vì 2 > 1).
- Bạn có thể khắc phục điều này bằng việc truyền tham số là một mảng so sánh.
- Hàm sort sẽ làm thay đổi mảng ban đầu.

**Cú pháp:**

```js
// Functionless
array.sort()

// Arrow function
array.sort((firstEl, secondEl) => { ... } )

// Compare function
array.sort(compareFn)

// Inline compare function
array.sort(function compareFn(firstEl, secondEl) { ... })
```

Trong đó: `compareFn` là tham số không bắt buộc. Đây là một callback function dùng để quyết định thứ tự sắp xếp của các phần tử trong mảng. Hai tham số `firstEl` và `secondEl` đại diện cho hai phần tử kề nhau trong mảng, và ta sẽ sử dụng nó để quyết định cách sắp xếp.

Nếu hàm callback trả về số lớn hơn 0 thì `secondEl` sẽ đứng trước `firstEl`.
Nếu hàm callback trả về số bé hơn hoặc bằng 0 thì thứ tự được giữ nguyên, tức là `firstEl` sẽ đứng trước `secondEl`.

Ví dụ 1: Trường hợp sắp xếp với chuỗi.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple,Banana,Mango,Orange
```

Ví dụ 2: Trường hợp sắp xếp với số.

```js
var score = [700, 8, 9, 10, 3];

console.log(score.sort());
// Kết quả: [10, 3, 700, 8, 9]
```

Như bạn thấy, kết quả trả về là sai, bởi hàm sort nó hiểu giữa hai số 3 và 10 thì 3 lớn hơn 1, vì vậy 3 sẽ đứng sau 10.

Để khắc phục thì ta sẽ sử dụng callback function như sau:

```js
var score = [700, 8, 9, 10, 3];

console.log(
  score.sort((firstEl, secondEl) => {
    if (secondEl > firstEl) {
      return -1;
    } else {
      return 0;
    }
  })
);

// Kết quả: [3, 8, 9, 10, 700]
```

Ví dụ khác:

```js
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // ASC, DESC: b - a
console.log(numbers);

// [1, 2, 3, 4, 5]
```

---

#### Hàm Array splice() trong Javascript

**Splice javascript** là hàm dùng để xóa các phần tử trong mảng, hoặc thay thế một phần tử trong mảng thành một hoặc nhiều phần tử khác. Nói cách khác:

- Bạn có thể dùng hàm array splice để xóa phần tử.
- Hoặc dùng để bổ sung phần tử vào một vị trí nào đó trong mảng.

**Cú pháp:**

```js
splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1);
splice(start, deleteCount, item1, item2, itemN);
```

Trong đó:

- start - là vị trí chỉ mục bắt đầu thay thế.
- deleteCount - là số phần tử sẽ bị lại bỏ, tính tử vị trí chỉ mục start, và bao gồm cả phần tử start. Nếu start mang giá trị 0 thì sẽ không có phần tử nào bị loại bỏ.
- item1,., itemN - các phần tử sẽ được thêm vào từ vị trí start. Sau khi thêm, phần tử thứ start của mảng sẽ là item1.

**Giá trị trả về**: Là một mảng chứa tất cả những phần tử đã bị xóa. Nếu chỉ xóa một phần tử thì sẽ return về mảng có 1 phần tử. Nếu không có phần tử nào bị xóa thì sẽ return về mảng rỗng.

Ví dụ 1: Sử dụng splice javascript để bổ sung một phần tử vào vị trí chỉ mục 2, không xóa phần tử nào.

```js
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum");

console.log(myFish);
// Kết quả: ["angel", "clown", "drum", "mandarin", "sturgeon"]

console.log(removed);
// Kết quả []
```

Ví dụ 2: Xóa 1 phần tử tại chỉ mục 2, và thêm vào phần tử "trumpet"

```js
let myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
let removed = myFish.splice(2, 2);

console.log(myFish);
// Kết quả:["parrot", "anemone", "sturgeon"]

console.log(removed);
// Kết quả:["blue", "trumpet"]
```

---

#### Hàm array.unshift() trong Javascript

Unshift javascript là một [method] của đối tượng mảng, được dùng để thêm một hoặc nhiều phần tử vào vị trí đầu tiên của mảng. Nó sẽ đẩy các phần tử có sẵn lên phía trước và nhường vị trí đầu cho các phần tử được thêm mới.

- Hàm unshift sẽ trả về chiều dài của mảng sau khi thêm phần tử.
- Hàm này sẽ làm thay đổi chiều dài ban đầu của mảng.
- Nếu bạn muốn thêm phần tử vào cuối mảng, sử dụng phương thức push.

**Cú pháp:**

```js
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, ... , elementN)
```

Trong đó: element0,..., elementN là những phần tử sẽ được thêm vào đầu mảng, sau khi thêm xong phần tử element0 sẽ là phần tử đầu tiên của mảng.

Giá trị trả về: Là tổng số phần tử của mảng sau khi thêm.

Ví dụ: Một số trường hợp đơn giản.

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // Gán lại giá trị ban đầu

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

---

#### Hàm array.valueOf() trong Javascript

Đây là phương thức mặc định của đối tượng mảng, nó sẽ tương đương với việc chỉ gọi tên mảng. Ví dụ: subject.valueOf() sẽ tương đương với subject.

Chính vì là phương thức mặc định của đối tượng mảng, nên chúng ta sẽ ít khi sử dụng phương thức valueof mà thường gọi thẳng luôn tên mảng.

**Cú pháp:**
`array.valueOf()`

Lưu ý: không khuyến khích sử dụng array.valueOf(), thay vào đó sử dụng array.

Ví dụ: sử dụng phương thức valueof để gọi đối tượng mảng.

```js
var subject = ["php", "css", "html", "js"];

function myFunction() {
  document.getElementById("demo").innerHTML = subject.valueOf();
}
// ['php', 'css', 'html', 'js']
```

### Number function

#### Hàm Number.isFinite() trong Javascript

Phương thức isfinite có chức năng kiểm tra một giá trị có phải là số hữu hạn hay không.

Số hữu hạn là các số thực có giá trị hữu hạn.

Phương thức sẽ trả về **True** nếu giá trị truyền và là thuộc kiểu Number và tương đương với một số hữu hạn. Ngược lại phương thức sẽ trả về **False**.

Phương thức `Number.isFinite()` khác với hàm toàn cục isFinite, hàm isFinite sẽ chuyển giá trị cần kiểm tra sang kiểu Number rồi sau đó kiểm tra nó, còn phương thức `Number.isFinite()` sẽ không chuyển giá trị cần kiểm tra mà tiến hành kiểm tra luôn, phương thức `Number.isFinite()` sẽ trả về False với bất kì giá trị nào không thuộc kiểu Number.

**Cú pháp:**

```js
Number.isFinite(value);
```

Ví dụ:

```js
console.log(Number.isFinite(1 / 0));
// expected output: false

console.log(Number.isFinite(10 / 5));
// expected output: true

console.log(Number.isFinite(0 / 0));
// expected output: false

Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, would've been true with
// global isFinite('0')
Number.isFinite(null); // false, would've been true with
// global isFinite(null)

if (Number.isFinite === undefined)
  Number.isFinite = function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

---

#### Hàm Number.isInteger() trong Javascript

Phương thức `Number.isInteger()` sẽ kiểm tra một giá trị có thuộc kiểu số nguyên hay không.

Hàm sẽ trả về **True** nếu giá trị truyền vào thuộc kiểu số nguyên, ngược lại nếu giá trị truyền vào không thuộc kiểu số nguyên hàm sẽ trả về **False**.
**Cú pháp:**

```js
Number.isInteger(value);
```

Ví dụ:

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true

Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

---

#### Hàm Number.isNaN() trong Javascript

Phương thức `Number.isNaN()` sẽ kiểm tra giá trị truyền vào có phải là một giá trị NaN(NOT-A-NUMBER) hay không.

Giá trị NaN là gì? Thực chất NaN là một giá trị số mà không phải số :), nghe có vẻ ẩn ý nhưng thực chất là vậy, nếu không tin các bạn có thể sử dụng đoạn mã script sau để kiểm tra : `typeof(NaN)` kết quả sẽ trả về number, do đó NaN cũng thuộc kiểu number. Vậy còn vế thứ 2, ta cùng tìm hiểu một số cách để sinh ra giá trị NaN :

- Lấy số 0 chia cho số 0
- Lấy vô cùng (infinity) chia cho vô cùng (infinity)
- Nhân vô cùng (infinity) với số 0
- Bất kỳ phép tính toán nào trong đó NaN là một toán hạng
- Chuyển đổi một xâu non-numeric hoặc undefined về dạng number.

Vậy NaN là các giá trị số không xác định nhưng nó vẫn là số nên NaN thuộc kiểu number.

Trở lại với phương thức `Number.isNaN()`, nó khác với hàm toàn cục `isNaN()`, hàm `isNaN()` sẽ chuyển giá trị cần kiểm tra sang kiểu số rồi sau đó kiểm tra, phương thức `Number.isNaN()` thì khác, nó sẽ trả về False với bất kì giá trị nào không thuộc kiểu number mà không ép kiểu cho nó.

**Cú pháp:**

```js
Number.isNaN(value);
```

Ví dụ:

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// たとえば、以下の値を isNaN() グローバル関数に渡すと true が返される
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// 以下はすべて false を返す
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

---

#### Hàm Number.isSafeInteger() trong Javascript

Phương thức `Number.isSafeInteger()` có chức năng kiểm tra giá trị có là một safe number không.

Safe number là những số có thể được biểu diễn chính xác theo chuẩn EEE-754 ( tất cả các số nằm trong khảng từ 253-1 đến -(253-1)).

Phương thức sẽ trả về True nếu giá trị truyền vào thuộc kiểu number và là một safe number. Ngược lại, hàm sẽ trả về False.

**Cú pháp:**

```js
Number.isSafeInteger(value);
```

Ví dụ:

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

---

#### Hàm Number()

Hàm này có tác dụng chuyển tất cả các kiểu dữ liệu sang kiểu số, nếu như có trường hợp nào không chuyển được thì nó sẽ thành NaN.

**Cú pháp:**

```js
Number(x);
```

Trong đó: x là số mà chúng ta muốn chuyển đổi.

Ví dụ:

```js
var a = true;
Number(a); // 1
var b = false;
Number(b); // 0
var c = new Date();
Number(c); // 1491817008635
var d = "12";
Number(d); // 12
var e = "12 20";
Number(e); // NaN
```

---

#### Hàm number.parseInt()

Hàm này có tác dụng chuyển một chuỗi sang dạng số nguyên. Nhưng nếu chuỗi cần chuyển có ký tự đầu tiên là chuỗi thì nó sẽ không chuyển được, còn ký tự đầu tiên là số thì vẫn chuyển được.

**Cú pháp:**

```js
parseInt(x);
```

Trong đó x là thành phần mà các bạn muốn chuyển.

Ví dụ:

```js
parseInt(true); //NaN
parseInt(flase); //NaN
parseFloat("12.33"); //12
parseInt("15"); //15
parseInt("5 10 15 20"); //5
parseInt("23 năm"); //23
parseInt("năm 2017"); //NaN
```

---

#### Hàm number.parseFloat()

Hàm này có tác dụng chuyển đổi chuỗi về dạng số thực. Và nó cũng tương tự như parseInt() nếu chuỗi cần chuyển có ký tự đầu tiên là chuỗi thì nó sẽ không chuyển được, còn ký tự đầu tiên là số thì vẫn chuyển được.

**Cú pháp:**

```js
parseFloat(x);
```

Trong đó x là thành phần mà các bạn muốn chuyển.

Ví dụ:

```js
parseFloat(true); //NaN
parseFloat(flase); //NaN
parseFloat("12.33"); //12.33
parseFloat("15"); //15
parseFloat("5 10 15 20"); //5
parseFloat("23 năm"); //23
parseFloat("năm 2017"); //NaN
```

---

#### Hàm number.toFixed() trong Javascript

Phương thức `number.toFixed()` sẽ chuyển đổi một số thành kiểu chuỗi, giữ lại số chữ số thập phân do người dùng xác định.

Nếu số thập phân mong muốn lớn hơn số truyền vào, phương thức sẽ tự động thêm các giá trị null để tạo độ dài thập phân mong muốn.

**Cú pháp:**

```js
Number.toFixed(x);
```

Trong đó:

x là số chữ số thập phân mong muốn.

```js
let numObj = 12345.6789;

numObj.toFixed(); // '12346' を返す : 四捨五入され小数部がなくなる
numObj.toFixed(1); // '12345.7' を返す : 四捨五入
numObj
  .toFixed(6)(
    // '12345.678900'を返す : 0 を追加する
    1.23e20
  )
  .toFixed(2)(
    // '123000000000000000000.00' を返す
    1.23e-10
  )
  .toFixed(2); // '0.00' を返す
(2.34).toFixed(1); // '2.3' を返す
(2.35).toFixed(1); // '2.4' を返す。切り上げ。
(2.55).toFixed(1); // '2.5' を返す。切り捨て。上記警告を参照。
-(2.34).toFixed(1); // -2.3 を返す (演算子の優先順位上、マイナスの数値リテラルは文字列を返さない)
(-2.34).toFixed(1); // '-2.3'
```

---

#### Hàm number.toString() trong Javascript

Phương thức number.toString() sẽ chuyển đổi một số thành một chuỗi.

Chính xác hơn là phương thức number.toString() sẽ ép kiểu cho giá trị truyền vào thành một giá trị thuộc kiểu string.

**Cú pháp:**

```js
Number.toString(radix);
```

Trong đó:

- radix là tham số không bắt buộc là một giá trị nằm trong khoảng từ 2 đến 36:
- 2 - kết quả trả về sẽ là số được biểu diễn dưới dạng nhị phân.
- 8 - kết quả trả về sẽ là số được biểu diễn dưới dạng bát phân.
- 16 - kết quả trả về là số được biểu diễn dưới dạng thập lục phân.

Ví dụ:

```js
let count = 10;

console.log(count.toString()); // '10' を表示します。
console.log((17).toString()); // '17' を表示します。
console.log((17.2).toString()); // '17.2' を表示します。

let x = 6;

console.log(x.toString(2)); // '110' を表示します。
console.log((254).toString(16)); // 'fe' を表示します。

console.log((-10).toString(2)); // '-1010' を表示します。
console.log((-0xff).toString(2)); // '-11111111' を表示します。
```

---

#### Hàm number.valueOf() trong Javascript

Phương thức number.valueOf() sẽ trả về giá trị gốc của số truyền vào.

Phương thức này không hay được sử dụng vì ta thường gọi trực tiếp number thay vì number.valueOf(), chúng sẽ trả về cùng một kết quả.

**Cú pháp:**

```js
Number.valueOf();
```

Phương thức number.valueOf() không có giá trị truyền vào.

Ví dụ:

```js
let numObj = new Number(10);
console.log(typeof numObj); // object

let num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

---

#### Hàm number.toPrecision() trong Javascript

Phương thức number.toPrecision() sẽ chuyển đổi một số thành một số khác với chiều dài định trước.

Một dấu chấm thập phần và các giá trị null sẽ được thêm vào số( nếu cần thiết) để số trả về đạt được chiều dài mong muốn.

**Cú pháp:**

```js
Number.toPrecision(x);
```

Trong đó:

x là số chữ số thập phân mong muốn của số sau khi chuyển đổi.

Ví dụ:

```js
let numObj = 5.123456;

console.log(numObj.toPrecision()); // logs '5.123456'
console.log(numObj.toPrecision(5)); // logs '5.1235'
console.log(numObj.toPrecision(2)); // logs '5.1'
console.log(numObj.toPrecision(1)); // logs '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // logs '0.000123'
console.log(numObj.toPrecision(5)); // logs '0.00012300'
console.log(numObj.toPrecision(2)); // logs '0.00012'
console.log(numObj.toPrecision(1)); // logs '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'
```

---

#### Hàm number.toExponential() trong Javascript

Phương thức `number.toExponential()` sẽ chuyển đổi một giá trị số thành một số mũ với cơ số là 10. Ví dụ số 156 sau ghi gọi phương thức `number.toExponential()` sẽ trở thành 1.56e+2, e+2 tương đương với 102.

**Cú pháp:**

```js
Number.toExponential(x);
```

Trong đó:

x là tham số không bắt buộc, có giá trị từ 1 đến 20, nó sẽ quy định số chữ thập phân, nếu không được truyền thì nó sẽ được thiết lập với số chữ số tối đa có thể để biểu diễn cho giá trị chuyển đổi.

```js
var numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1 を表示
console.log(numObj.toExponential(4)); // 7.7123e+1 を表示
console.log(numObj.toExponential(2)); // 7.71e+1 を表示
console.log((77.1234).toExponential()); // 7.71234e+1 を表示
console.log((77).toExponential()); // 7.7e+1 を表示
```

---

### String function

---

#### Hàm string.endsWith() trong Javascript

Phương thức string.endsWith() có chức năng xác định liệu một chuỗi có kết thúc bằng một kí tự hoặc một chuỗi được người dùng cung cấp hay không.

Nếu chuỗi kết thúc bằng kí tự hoặc chuỗi cung cấp hàm sẽ trả về **True**, ngược lại hàm trả về **False**.

Lưu ý rằng phương thức `string.endsWith(`) sẽ phân biệt chữ hoa chữ thường.

**Cú pháp:**

```js
string.endsWith(searchValue, length);
```

Trong đó:

- searchvalue là kí tự hoặc một chuỗi, phương thức sẽ kiểm tra xem chuỗi string có kết thúc bằng searchvalue hay không.
- length chiều dài chuỗi string sẽ được kiểm tra( xem thêm ở ví dụ).

Ví dụ:

```js
let str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
```

---

#### Hàm String.fromCharCode() trong Javascript

Phương thức `String.fromCharCode()` có chức năng chuyển đổi các giá trị Unicode thành các kí tự.

Lưu ý đây là một phương thức tĩnh và cú pháp luôn là `String.fromCharCode()`.

Để có thể tham khảo các giá trị Unicode, bạn nên tham khảo tại [đây](https://www.w3schools.com/charsets/ref_html_utf8.asp).

**Cú pháp:**

```js
string.fromCharCode(n1, n2, ..., nX)
```

Trong đó:

n1,n2,...,nX là các giá trị Unicode cần chuyển đổi.

Ví dụ:

```js
String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014
```

---

#### Hàm string.includes() trong Javascript

Phương thức `string.includes()` sẽ kiểm tra xem một chuỗi con được người dúng cung cấp có nằm trong chuỗi hay không. Phương thức sẽ trả về True nếu chuỗi chứa chuỗi con mà người dùng cung cấp, ngược lại sẽ trả về False.

Lưu ý rằng phương thức có phân biệt chữ hoa chữ thường.

**Cú pháp:**

```js
String.includes(searchValue, start);
```

Trong đó:

searchvalue là chuỗi con cần kiểm tra trong chuỗi string.
start laf vị trí bắt đầu kiểm tra ở chuỗi string, mặc định mang giá trị 0 tức là phương thức sẽ kiểm tra từ đầu chuỗi.

Ví dụ:

```js
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
```

---

#### Hàm string.indexOf() trong Javascript

Phương thức string.indexOf() sẽ kiểm tra và tra về vị trí xuất hiện đầu tiên trong chuỗi gốc của chuỗi con do người dùng cung cấp. Nếu không tìm thấy chuỗi con trong chuỗi gốc, phương thức sẽ trả về -1.

Lưu ý rằng phương thức string.indexOf() sẽ phân biệt chữ hoa chữ thường.

Để tìm vị trí xuất hiện cuối cùng của chuỗi con trong chuỗi, sử dụng phương thức lastIndexOf().

**Cú pháp:**

```js
String.indexOf(searchValue, start);
```

Trong đó:

- searchvalue là chuỗi con cần tìm kiếm vị trí trong chuỗi string.
- start là vị trí bắt đầu tìm kiếm trong chuỗi string.

Ví dụ:

```js
const str = "Brave new world";

console.log("Index of first w from start is " + str.indexOf("w")); // 8 を表示
console.log('Index of "new" from start is ' + str.indexOf("new")); // 6 を表示
```

---

#### Hàm string.lastIndexOf() trong Javascript

Phương thức string.lastIndexOf() sẽ kiểm tra và tra về vị trí xuất hiện cuối cùng trong chuỗi gốc của chuỗi con do người dùng cung cấp. Nếu không tìm thấy chuỗi con trong chuỗi gốc, phương thức sẽ trả về -1.

Lưu ý rằng phương thức string.lastIndexOf() sẽ phân biệt chữ hoa chữ thường.

Để tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi, sử dụng phương thức indexOf().

**Cú pháp:**

```js
String.lastIndexOf(searchValue, end);
```

Trong đó:

- searchvalue là chuỗi con cần tìm kiếm vị trí trong chuỗi string.
- end là vị trí kết thúc tìm kiếm trong chuỗi string. phương thức sẽ chỉ tìm kiếm đến vị trị end trong chuỗi string và dừng lại.

Ví dụ:

```js
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";

console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
    searchTerm
  )}`
);
// expected output: "The index of the first "dog" from the end is 52"
```

---

#### Hàm string.localeCompare() trong Javascript

Phương thức string.localeCompare() có chức năng so sánh hai chuỗi với nhau trong locale hiện tại của hệ thống.

Locale được được dựa trên trên ngôn ngữ được cài đặt của trình duyệt.

Phương thức sẽ trả về 1 nếu chuỗi string lớn hơn chuỗi truyền vào, trả về 0 nếu hai chuỗi bằng nhau và trả về -1 nếu chuỗi truyền vào lớn hơn chuỗi string gọi phương thức.

**Cú pháp:**

```js
String.localeCompare(compareString);
```

Trong đó:

- string là chuỗi thứ nhất.
- compareString là chuỗi thứ 2.

Ví dụ:

```js
const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// expected output: 0
```

---

#### Hàm string.match() trong Javascript

Phương thức string.match() sẽ tìm kiếm các chuỗi con phù hợp với biểu thức chính quy được cung cấp. Phương thức sẽ trả về các chuỗi tìm được dưới dạng một mảng.

Để hiểu rõ về biểu thức chính quy, bạn nên tham khảo tại [đây](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions).

Lưu ý:

- nếu biểu thức chính quy không bao gồm modifier g ( ví dụ /img/g) thì phương thức string.match() sẽ chỉ trả về kết quả đầu tiên tìm được.
- để tìm kiếm mà không phần biệt chữ hoa thường sử dụng modifier i( ví dụ /ain/i).
  phương thức sẽ trả về NULL nếu không tìm thấy kết quả phù hợp.

**Cú pháp:**

```js
String.match(regexp);
```

Trong đó:

regexp là biểu thức chính quy đại diện cho chuỗi cần tìm.

Ví dụ:

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
```

---

#### Hàm string.repeat() trong Javascript

Phương thức `string.repeat()` sẽ lặp lại chuỗi string với số lần nhất định được cung cấp khi gọi phương thức. Phương thức sẽ trả về một chuỗi chính là n chuỗi string nối với nhau( n là số lần lặp được xác định khi gọi phương thức).

**Cú pháp:**

```js
string.repeat(count);
```

Trong đó:

count là số lần lặp chuỗi string.

Ví dụ:

```js
const chorus = "Because I'm happy. ";

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(5)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
```

---

#### Hàm string.replace() trong Javascript

Phương thức `string.replace()` có chức năng tìm kiếm một chuỗi con hoặc một biểu thức chính quy nào đó trong chuỗi sau đó thay thế nó bằng một giá trị được cung cấp bởi người dùng. Phương thức sẽ trả về chuỗi **đã được thay thế mà không hề thay đổi chuỗi gốc.**

Lưu ý rằng nếu bạn tìm kiếm một chuỗi con( không phải một biểu thức chính quy) và chuỗi con đó xuất hiện nhiều lần trong chuỗi gốc, phương thức `string.replace()` sẽ chỉ thay thế chuỗi con đầu tiên được tìm thấy, để thay thế tất cả các chuỗi con tìm thấy hãy sử dụng modified toàn cục g( xem ở mục ví dụ).

**Cú pháp:**

```js
string.replace(searchValue, newvalue);
```

Trong đó:

- searchvalue giá trị sẽ được tìm kiếm trong chuỗi string.
- newvalue là giá trị sẽ được thay thế cho searchvalue trong chuỗi mới mà phương thức trả về.

Ví dụ:

```js
const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replace("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
```

---

#### Hàm string.search() trong Javascript

Phương thức string.search() tìm kiếm một chuỗi con nào đó trong chuỗi gốc, phương thức sẽ trả về vị trị xuất hiện của chuỗi con đó trong chuỗi gốc.

Giá trị được tìm kiếm có thể là một chuỗi đơn giản hoặc một biểu thức chính quy.

Nếu chuỗi con hoặc biểu thức chính quy không được tìm thấy trong chuỗi gốc, phương thức sẽ trả về -1.

**Cú pháp:**

```js
string.search(searchValue);
```

Trong đó:

- searchvalue là giá trị tìm kiếm, có thể là một chuỗi hoặc một biểu thức chính quy.

Ví dụ:

```js
let str = "hey JudE";
let re = /[A-Z]/g;
let reDot = /[.]/g;
console.log(str.search(re)); // 最初の大文字 "J" の位置である 4 を返します
console.log(str.search(reDot)); // '.' ドット記号が見つからないので -1 を返します
```

---

#### Hàm string.slice() trong Javascript

Phương thức string.slice() có chức năng trích xuất một phần của chuỗi. **Phương thức sẽ trả về một chuỗi mới chính là phần được trích dẫn từ chuỗi gốc ban đầu.**

Sử dụng tham số start và end để xác định phần được trích xuất từ chuỗi gốc. Lưu ý rằng vị trí đầu tiên của chuỗi là 0, tiếp đến là 1 .vv..

**Phương thức sẽ không làm thay đổi chuỗi gốc ban đầu.**

**Cú pháp:**

```js
string.slice(start, end);
```

Trong đó:

- start là vị trí bắt đầu trích xuất.
- end là vị trí kết thúc trích xuất, nội dung được trích xuất sẽ không bao gồm kí tự ở vị trí end. Nếu không cung cấp tham số end, phương thức sẽ trích xuất từ vị trí start đến hết chuỗi.

Ví dụ:

```js
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
```

---

#### Hàm string.split() trong Javascript

Phương thức string.split() sẽ phân tách một chuỗi thành một mảng dữ liệu dựa vào các kí tự phân cách trong chuỗi. **Phương thức sẽ trả về một mảng mới.**

Nếu kí tự phân cách là một chuỗi rỗng, mỗi kí tự trong chuỗi sẽ được phân tách thành một phần tử của mảng.

Phương thức `string.split()` sẽ không làm thay đổi chuỗi gốc ban đầu.

**Cú pháp:**

```js
string.split(separator, limit);
```

Trong đó:

- separator là kí tự phân cách trong chuỗi, phương thức sẽ dựa vào kí tự này để phân tách chuỗi. Nếu không truyền vào, mảng trả về sẽ có một phần tử duy nhất có giá trị bằng chuỗi ban đầu. Nếu truyền vào một chuỗi rỗng, mỗi kí tự trong chuỗi sẽ là một phần tử của mảng trả về.
- limit là tham số quy định số phần tử tối đa của mảng trả về. Nếu không được truyền vào thì phương thức sẽ lấy tất cả các phần tử có thể.

Ví dụ:

```js
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

const arr = str.split(" ");
console.log(arr);

// expected output: Array ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
```

---

#### Hàm string.startsWith() trong Javascript

Phương thức `string.startsWith()` sẽ kiểm tra xem chuỗi có được bắt đầu bằng một chuỗi con được cung cấp hay không.

Phương thức sẽ trả về **True** nếu chuỗi được bắt đầu bằng chuỗi con được cung cấp, ngược lại phương thức sẽ trả về **False**.

Lưu ý rằng phương thức `string.startsWith()` có phân biệt chữ hoa chữ thường.

**Cú pháp:**

```js
string.startsWith(searchValue, start);
```

Trong đó:

- searchvalue là chuỗi con. Phương thức sẽ kiểm tra string có bắt đầu bằng searchvalue hay không.
- start là vị trí trong chuỗi string mà phương thức bắt đầu kiếm tra. Nếu không truyền thì phương thức sẽ kiểm tra từ đầu chuỗi string.

Ví dụ:

```js
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// expected output: true

console.log(str1.startsWith("Sat", 3));
// expected output: false
```

---

#### Hàm string.substr() trong Javascript

Phương thức string.substr() có chức năng trích xuất một chuỗi, chuỗi được trích xuất sẽ được xác định bởi các tham số được cung cấp. Phương thức sẽ trả về chuỗi được trích xuất.

Để trích xuất nội dung từ cuối chuỗi sử dụng tham số start là một số âm.

Phương thức string.substr() sẽ **không làm thay đổi chuỗi gốc ban đầu.**

**Cú pháp:**

```js
string.substr(start, length);
```

Trong đó:

- start là vị trí bắt đầu trích xuất trong chuỗi.
  - Nếu start dương và lớn hơn hoặc bằng với chiều dài của chuỗi phương thức substr() sẽ trả về một chuỗi rỗng.
  - Nếu start âm và nhỏ hơn chiều dài của chuỗi, phương thức sẽ xác định vị trí từ cuối chuỗi.
  - Nếu start âm và giá trị tuyệt đối của nó lớn hơn chiều dài chuỗi, start sẽ được đặt về 0.
- length là số kí tự sẽ được trích xuất, nếu không được truyền vào, phương thức sẽ trích xuất từ start đến hết chuỗi.

Ví dụ:

```js
const str = "Mozilla";

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
```

---

#### Hàm string.substring() trong Javascript

Phương thức string.substring() sẽ trích xuất nội dung của một chuỗi, nội dung trích xuất sẽ được xác định bằng hai tham số start và end. Phương thức sẽ trả về nội dung được trích xuất từ chuỗi gốc ban đầu.

Nội dung được trích xuất sẽ là chuỗi kéo dài từ start đến end và không bao gồm phần tử end.

**Nếu start > end, phương thức sẽ hoán đổi vị trị 2 tham số này.** Ví dụ string.substring(4, 2) sẽ trở thành string.substring(2, 4).

Nếu start hoặc end nhỏ hơn 0, phương thức sẽ đặt giá trị cho nó thành 0.

Phương thức string.substring() sẽ **không làm thay đổi chuỗi nguồn ban đầu.**

**Cú pháp:**

```js
string.substring(start, end);
```

Trong đó:

- start là vị trị bắt đầu trích xuất.
- end là vị trí kết thúc, trích xuất sẽ không bao gồm phần tử end.

Ví dụ:

```js
const str = "Mozilla";

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

console.log(str.substring(4, 2));
// expected output: "zi"
```

---

#### Hàm string.toLowerCase() trong Javascript

Phương thức string.toLowerCase() sẽ chuyển đổi một chuỗi có chứ kí tự in hoa thành một chuỗi in thường. Hàm trả về chuỗi với tất cả các kí tự là kí tự in thường.

Phương thức string.toLowerCase() sẽ **không làm thay đổi chuỗi gốc ban đầu.**

Nếu muốn chuyển chuỗi thành chuỗi in hoa, sử dụng hàm toUpperCase().

**Cú pháp:**

```js
string.toLowerCase();
```

Phương thức không có tham số truyền vào.

Ví dụ:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."
```

---

#### Hàm string.toString() trong Javascript

Phương thức string.toString() sẽ trả về một đối tượng kiểu chuỗi. Ta có thể sử dụng phương thức này để chuyển một mảng, một số thành kiểu chuỗi.

**Cú pháp:**

```js
string.toString();
```

Phương thức không có tham số truyền vào.

Ví dụ:

```js
const stringObj = new String("foo");

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.toString());
// expected output: "foo"
```

---

#### Hàm string.toUpperCase() trong Javascript

Phương thức string.toUpperCase() sẽ chuyển đổi một chuỗi có chứa các kí tự in thường thành một chuỗi in hoa. Phương thức sẽ trả về chuỗi in hoa.

Phương thức này sẽ không làm thay đổi chuỗi gốc ban đầu.

Nếu bạn muốn chuyển chuỗi thành chuỗi in thường, dụng hàm toLowerCase().

**Cú pháp:**

```js
string.toUpperCase();
```

Phương thức không có tham số truyền vào.

Ví dụ:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

---

#### Hàm string.trim() trong Javascript

Phương thức string.trim() sẽ loại bỏ các khoảng trắng ở đầu và cuối chuỗi. Phương thức sẽ trả về chuỗi với các khoảng trắng ở đầu và cuối chuỗi đã bị loại bỏ.

Phương thức sẽ không làm thay đổi chuỗi gốc ban đầu.

**Cú pháp:**

```js
string.trim();
```

Phương thức không có tham số truyền vào.

Ví dụ:

```js
const greeting = "   Hello world!   ";

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
```

---

#### Hàm string.charAt() trong Javascript

Phương thức string.charAt() có chức năng tìm kiếm kí tự ở một vị trí nào đó trong chuỗi, vị trí tìm kiếm đó sẽ do người dùng xác định.

Lưu ý rằng vị trí của một chuỗi sẽ bắt đầu từ vị trí 0, vị trí thứ 2 có chỉ số là 1 .... vị trí cuối cùng là string.length -1.

**Cú pháp:**

```js
string.charAt(index);
```

Trong đó:

- index là vị trí muốn tìm kiếm trong chuỗi.

Ví dụ:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"
```

---

#### Hàm string.charCodeAt() trong Javascript

Hàm string.charCodeAt() sẽ trả về mã unicode của kí tự tại vị trí nào đó trong chuỗi, vị trí đó được xác định bởi người dùng khi gọi phương thức.

Lưu ý rằng chuỗi sẽ bắt đầu bằng vị trí 0, tiếp đến vị trí 1....

Bạn có thể sử dụng kết hợp với phương thức string.length để tìm kiếm từ cuối chuỗi. Vị trí cuối cùng của chuỗi sẽ là string.length - 1, kế cuối là string.length - 2.

Để tìm hiểu thông tin về bộ kí tự Unicode, tham khảo tại [HTML Character Sets reference](https://www.w3schools.com/charsets/ref_html_utf8.asp).

**Cú pháp:**

```js
string.charCodeAt(index);
```

Trong đó:

- index là vị trí xuất hiện của kí tự cần tìm kiếm trong chuỗi.

Ví dụ:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);
// expected output: "The character code 113 is equal to q"
```

---

#### Hàm string.concat() trong Javascript

Phương thức string.concat() có chức năng nối hai hay nhiều chuỗi lại với nhau thành một chuỗi.

Phương thức string.concat() sẽ không làm thay đổi các chuỗi truyền vào và sẽ trả về một chuỗi mới là kết quả của việc nối các chuỗi con truyền vào.

**Cú pháp:**

```js
string.concat(string1, string2, ..., stringX)
```

Trong đó:

- string1, string2, ..., stringX là các chuỗi con sẽ được nối với chuỗi string.

Ví dụ:

```js
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// expected output: "Hello World"

console.log(str2.concat(", ", str1));
// expected output: "World, Hello"
```

---

## Math object trong JavaScript

- Math.PI
- Math.round() 1.3=>1, 1.8=>2
- Math.abs() -4=>4, 4=>4 gia tri tuyet doi
- Math.ceil() Lam tron tren 4.1=>5
- Math.floor() Lam tron duoi 4.9=>4
- Math.random() So thap phan < 1, Math.floor(Math.random() \* 10)
- Math.min() So nho nhat
- Math.max() So lon nhat

####

**Cú pháp:**

```js

```

Ví dụ:

```js

```

---

#### Callback trong JS

- Là hàm (func) được truyền qua đối số
- Khi gọi hàm khác
- Được gọi lại (trong hàm nhận đối số)

Ví dụ:

```js
function myFunction(param) {
  console.log(typeof param); // function

  if (typeof param === "function") {
    param("Học lập trình");
  }
}

function myCallback(value) {
  console.log("Value:", value); // Học lập trình
}

myFunction(myCallback);
```

Ví dụ tạo một Array map:

```js
Array.prototype.map2 = function (callback) {
  let output = [];
  let arrayLength = this.length;

  for (let i = 0; i < arrayLength; i++) {
    let result = callback(this[i], i, this);
    output.push(result);
  }

  return output;
};

const courses = ["JavaScript", "PHP", "Ruby"];

const htmls = courses.map2((course) => `<h2>${course}</h2>`);

console.log(htmls.join("")); // <h2>JavaScript</h2><h2>PHP</h2><h2>Ruby</h2>
```

Ví dụ tạo một forEach():

1. Object prototype: tạo một phương thức cho Array contructor, đối tượng được khởi tạo từ nó sẽ được thừa hưởng phương thức này
2. For in: Lặp ra từng key
3. hasOwnProperty: KHÔNG lấy những phương thức nằm trong **proto**

```js
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

const courses = ["JavaScript", "PHP", "Ruby"];

courses.forEach2((course) => console.log(course)); // JavaScript, PHP, Ruby
```

Ví dụ tạo một filter()

```js
const courses = [
  {
    name: "PHP",
    coin: 860,
  },
  {
    name: "Ruby",
    coin: 980,
  },
  {
    name: "Javascript",
    coin: 600,
  },
];

Array.prototype.filter2 = function (callback) {
  let output;

  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      let result = callback(this[index], index, this);
      output.push(result);
    }
  }

  return output;
};

const filterCourses = courses.filter2((course) => course.coin > 700);

console.log(filterCourses); // {name: "PHP",coin: 860} {name:"Ruby",coin: 980}
```

Ví dụ tạo một hàm some():

```js
const courses = [
  {
    name: "PHP",
    coin: 860,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
  {
    name: "Javascript",
    coin: 600,
    isFinish: true,
  },
];

Array.prototype.some2 = function (callback) {
  let ouput = false;

  for (let index in this) {
    if (this.hasOwnProperty(this)) {
      if (callback(this[index], index, this)) {
        output = true;
        break;
      }
    }
  }

  return ouput;
};

const result = courses.some2((course) => course.isFinish);
console.log(result); // true
```

Ví dụ tạo một hàm every():

```js
const courses = [
  {
    name: "PHP",
    coin: 860,
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
  {
    name: "Javascript",
    coin: 600,
    isFinish: true,
  },
];

Array.prototype.every2 = function (callback) {
  let output = true;

  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      if (!callback(this[index], index, this)) {
        output = false;
        break;
      }
    }
  }

  return output;
};

const result = courses.every2((course) => course.isFinish);
console.log(result); // false
```

---

## HTML DOM

#### HTML DOM là gì

Viết tắt của Document object modal.

Có 3 thành phần:

1. Element
2. Attribute
3. Text

#### HTML DOM vs DOM API

1. HTML DOM
   Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.

2. DOM API
   Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt. DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM.

Javascript: Browser | Server (NodeJS)

Browser: HTML => DOM => WEB API

#### Document object

1. Document chính là đại diện cho cả website
2. Truy cập vào Element, attribute, text thì luôn phải đi qua Document

**Get element methods:**

- Element: ID, class, tag, CSS selector, HTML collection

1. document.getElementById('heading') -> Trả về thẻ html được chọn
2. document.getElementsByClassName('heading') -> Trả về Html collection
3. document.getElementsByTagName('h1') -> Trả về Html collection
4. document.querySelector('.css-selector') -> Trả về thẻ html được chọn
5. document.querySelectorAll('.css-selector') -> Trả về Node list
6. document.forms['form-id'] -> Trả về Html collection

Ví dụ HTML collection:
Các thẻ quy thành html collection: form, a, img...

```js
// HTML
<a href="#" name="youtube">
  My Youtube
</a>;

// JS
console.log(document.anchors);
```

**Attribute node & Text node**

- Attribute

```js
// Thêm attribute
var headingElement = document.querySelector("h1");

// Nếu attribute hợp lệ với thẻ thì dùng '.' để thêm
headingElement.title = "Hello";
headingElement.className = "heading";

// Nếu attribute không cần hợp lệ với thẻ thì dùng 'setAttribute(attrName, attrValue)' để thêm
headingElement.setAttribute("class", "heading");
headingElement.setAttribute("data-heading", "something");

// Lấy attribute
headingElement.getAttribute("class");
headingElement.getAttribute("data-heading");
```

- Text node

Là văn bản được bao bọc bởi element node.

geter

```js
const heading = document.querySelector(".heading").innerText;
const heading2 = document.querySelector(".heading").textContent;
```

seter

```js
document.querySelector(".heading").innerText = "New Heading";
document.querySelector(".heading").textContent = "New Heading";
```

1. innerText

Giống như những gì nhìn thấy

```js
// HTML
<h1 class="heading">
  <span style="display:none">Heading</span>
  <span>text</span>
</h1>;

// JS
console.log(document.querySelector(".heading").innerText); // text

// Khi dùng innerText thêm vào khoảng trắng thì nó sẽ hiểu và tự động thêm thẻ <br/>
document.querySelector(".heading").innerText = `
  
  New Heading

`; // <br/>New Heading<br/>
```

2. textContent

Chính là những gì thực sự nằm trong text node, bỏ qua html tag

```js
// HTML
<h1 class="heading">
  <span style="display:none">Heading</span>
  <span>text</span>
</h1>;

// JS
console.log(document.querySelector(".heading").textContent); // Heading text (bao gồm cả khoảng text node trắng)
```

**InnerHTML vs OuterHTML Property:**

1. innerHTML
   Thêm một element node bên trong

```js
var boxElement = document.querySelector(".box");

boxElement.innerHTML = "<h1 title='heading'>Heading</h1>";
console.log(boxElement.innerHTML); // <h1 title='heading'>Heading</h1>
```

2. outerHTML
   Thêm một element node bên ngoài

```js
var boxElement = document.querySelector(".box");

boxElement.outerHTML = "<h1 title='heading'>Heading</h1>"; // Ghi đè lên chính thẻ box
```

**DOM CSS:**

```js
var boxElement = document.querySelector(".box");

Object.assign(boxElement.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "green",
}); // Set inline css cho thẻ box

console.log(boxElement.style.width);
```

**ClassList Property:**

Các phương thức hay dùng:

1. add
2. contains
3. remove
4. toggle

```js
var boxElement = document.querySelector(".box");

// add
boxElement.classList.add("class-1", "class-2", "class-3");

// remove
boxElement.classList.remove("class-1", "class-2", "class-3");

// contains
boxElement.classList.contains("class-1"); // true

// toggle
boxElement.classList.toggle("class-1");
```

**DOM events:**

```js
var h1Elements = document.querySelectorAll("h1");

for (var i = 0; i < h1Elements.length; ++i) {
  h1Elements[i].onclick = (e) => console.log(e.target);
}
```

- Input / select

Input: e.target.value
onchange: Lấy value sau khi blur
oninput: Lấy value ngay sau khi nhập

Checkbox: e.target.checked

- Key up / down

onkeyup: khi nhấn vào và thả ra
onkeydown: khi nhấn vào
onkeypress: Khi nhấn hoặc giữ

- preventDefault

Ngăn chặn sự kiện mặc định.

```js
// HTML
<a href="https://google.com">Google</a>;

// JS
document.querySelector("a").onclick = (e) => {
  if (!e.target.href.startsWith("https://google.com")) {
    e.preventDefault(); // Nếu không phải trang google thì dừng sự kiện chuyển trang
  }
};
```

- stopPropagation

Ngăn chặn tính nổi bọt của sự kiện

```js
// HTML
<div>
  DIV
  <button>Click me!</button>
</div>;

// JS
document.querySelector("div").onclick = () => {
  console.log("DIV");
};

document.querySelector("button").onclick = (e) => {
  e.stopPropagation(); // Ngăn sự kiện click của thẻ div trên
  console.log("Click me!");
};
```

**Event listener:**

Xử lý nhiều việc khi 1 event xảy ra
Lắng nghe / Hủy bỏ lắng nghe

- addEventListener('event', callback)

```js
var btn = document.querySelector(".btn");

function viec1() {
  console.log("viec1");
}
function viec1() {
  console.log("viec2");
}

btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);
```

- removeEventListener('event', callback)

```js
setTimeout({
  btn.removeEventListener('click', viec1);
}, 3000)
```

---

## Kiến thức cốt lõi 2

#### JSON là gì

1. Là một định dạng dữ liệu (chuỗi)
2. Viết tắt của JavaScript Object Notation
3. Có thể chuyển đổi qua lại (stringify / parse) JSON từ các kiểu dữ liệu: Number, String, Boolean, Null, Array, Object

- stringify: Từ javascript types => JSON

Thường dùng khi gửi dữ liệu lên backend

```js
var numberJson = 18;
console.log(typeof JSON.stringify(numberJson), JSON.stringify(numberJson)); // string 18

var name = "Tuan";
console.log(typeof JSON.stringify(name), JSON.stringify(name)); // string "Tuan"

var a = true;
console.log(typeof JSON.stringify(a), JSON.stringify(a)); // string true

var course = ["javascript", "PHP", "Ruby"];
console.log(typeof JSON.stringify(course), JSON.stringify(course)); // string ["javascript","PHP","Ruby"]

var profile = { name: "Tuan", age: 18 };
console.log(typeof JSON.stringify(profile), JSON.stringify(profile)); // string {"name":"Tuan","age":18}
```

- parse: Từ JSON => javascript types

Thường dùng khi nhận api từ backend sau đó chuyển đổi về javascript types

```js
var numberJson = "18";
console.log(typeof JSON.parse(numberJson), JSON.parse(numberJson)); // number 18

var name = '"Tuan"';
console.log(typeof JSON.parse(name), JSON.parse(name)); // string Tuan

var a = "true";
console.log(typeof JSON.parse(a), JSON.parse(a)); // boolean: true

var course = '["javascript", "PHP", "Ruby"]';
console.log(typeof JSON.parse(course), JSON.parse(course)); // array ['javascript', 'PHP', 'Ruby']

var profile = '{"name": "Tuan","age": 18}';
console.log(typeof JSON.parse(profile), JSON.parse(profile)); // object {name: 'Tuan', age: 18}
```

#### Promise

**(sync, async)**
sync / async: JS là ngôn ngữ đồng bộ (sync) chạy theo 1 luồng từ trên xuống dưới. Tuy nhiên, để xử lý các tác vụ cần nhiều thời gian thì cần sử dụng phương pháp bất đồng bộ (async).

Một số phương thức sử dụng bất đồng bộ (async):

- setTimeout
- setInterval
- fetch
- XMLHttpRequest
- file reading
- request animation frame

- callback

**Promise (pain)**

**Promise sinh ra để giải quyết callback hell.**

Promise là một khái niệm giúp chúng ta có thể xử lý các thao tác bất đồng bộ, và trước khi có Promise chúng ta sẽ thường sử dụng callback, và callback sẽ xảy ra một vấn đề gọi là “callback hell” nó sẽ bị xâu vào nhìn rất khó nhìn, code bị rối rắm, khó hiểu. Thế nên Promise được được sinh ra từ phiên bản Javascript mới hơn trong phiên bản ES6 và chúng ta có thể sử dụng nó để khắc phục tình trạng “callback hell”, để giúp chúng ta viết code không bị xâu vào, dễ đọc dễ hiểu hơn.

Để tạo ra được một Promise chúng ta sẽ sử dụng từ khóa new với Promise và trong contructor của nó, chúng ta sẽ truyền vào một excutor function. Khi mà excutor được thực thi thì chúng ta sẽ nhận hai tham số dạng hàm, 1 là resolve(), 2 là reject(). resolve chúng ta sẽ gọi nó khi mà thao tác xử lý logic của chúng ta thành công, reject chúng ta sẽ gọi khi thao tác xử lý của chúng ta thất bại.

Khi sử dụng Promise thì đối tượng Promise được tạo ra chúng ta sẽ sử dụng qua những phương thức là .then() hoặc .catch(). Then và catch đều nhận những call back function, nó sẽ thực thi vào then khi Promise của chúng ta được resolve() và sẽ lọt vào catch khi mà Promise của chúng ta được reject()

**Promise (concept)**

Cách tạo 1 promise

1. new Promise
2. Excutor function

- Trạng thái của promise

1. Pending (Đang chờ thành công hay thất bại)
2. Fulfilled (Trạng thái thành công)
3. Rejected (Trạng thái thất bại)

```js
var promise = new Promise(
  // Executor (Hằng)
  function (resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()
  }
);
// Ngay khi gọi Promise thì func sẽ được thực thi trước cả khi biến promise nhận được.

promise
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done!");
  });
```

**Promise (chain)**

Ví dụ:

```js
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(2);
    return sleep(1000);
  })
  .then(() => {
    console.log(3);
    return sleep(1000);
  });
```

**Promise methods(resolve, reject, all)**

Khi khởi tạo một Promise với từ khóa new thì thường sẽ xử lý logic bên trong rồi mới trả về kết quả.
Nếu biết chắc kết quả sẽ trả về resolve hoặc reject thì có thể dùng cách sau.

1. Promise.resolve()

```js
var promise = Promise.resolve("Success!");
```

2. Promise.reject()

```js
var promise = Promise.reject("failed!");
```

3. Promise.all([]) (Chạy song song các promise)

```js
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([1, 2]);
  }, 2000);
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([3, 4, 5]);
  }, 3000);
});

var promise3 = Promise.reject("Co loi xay ra!");

// Nếu như 1 promise có lỗi thì sẽ dừng luôn và trả về lỗi đó.
Promise.all([promise1, promise2, promise3])
  .then(function ([result1, result2]) {
    console.log(result1.concat(result2));
  })
  .catch(function (err) {
    console.log(err);
  });
```

**Fetch:**

Trả về một promise

1. Front-end: Xây dựng giao diện người dùng
2. Back-end: Xây dựng logic xử lý + cơ sở dữ liệu

- API: Application programing interface
- Cổng giao tiếp giữa các phần mềm

Ví dụ fetch api và render html:

```js
const postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
  .then(function (response) {
    return response.json(); // resolve data và JSON.parse(data) -> chuyển data từ json sang javascript types
  })
  .then(function (posts) {
    console.log(posts);

    const postsElement = document.getElementById("posts");

    const postsItem = posts.map(
      (post) => `
    	<li>
    		<h2>${post.title}</h2>
        <p>${post.body}</p>
      </li>`
    );

    postsElement.innerHTML = postsItem.join("");
  })
  .catch(function (error) {
    console.log(error);
  });
```

**JSON-SERVER:**

API server (fake) / Mock API

[Github: json-server](https://github.com/typicode/json-server)

```js
// JSON
{
  "courses": [
    {
      "id": 1,
      "name": "[Vlog] Review tất cả đồ mình sử dụng cho F8",
      "description": "Chào các bạn, mình mới ra video giới thiệu về các đồ đạc mình có sử dụng phục cho việc làm video trên F8. "
    },
    {
      "id": 2,
      "name": "Xử lý bất đồng bộ trong Javascript - Phần 2 ",
      "description": "Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng bộ nhưng thực ra lại là chạy bất đồng bộ, giúp chúng ta dễ hình dung hơn."
    }
  ]
}

// JS
const courseApi = "http://localhost:3000/courses";

fetch(courseApi)
  .then((response) => response.json())
  .then((courses) => {
    console.log(courses);
  });
```

**Sử dụng postman làm việc với REST API**

**Hầu hết các trang web đều tư duy theo CRUD.**

- CRUD:
  - Create: Tạo mới -> POST
  - Read: Lấy dữ liệu -> GET
  - Update: Chỉnh sửa -> PUT (Cần truyền vào toàn bộ data) / PATCH (Sửa chỗ nào thì thêm chỗ đó)
  - Delete: Xóa -> DELETE

---

## ECMAScript 6+

1. Let, const
2. Template literals
3. Multi-line string
4. Arrow function
5. Classes
6. Default parameter values
7. Destructuring
8. Rest parameters
9. Spread
10. Enhanced object literals
11. Tagged template literal
12. Modules
13. Optional chaining (?.)

#### EMCAScript 6 là gì?

- ES6 là phiên bản ECMAScript ra đời lần đầu năm 2015
- ES6 được tiêu chuẩn hóa bởi ECMA international, được tạo ra để tiêu chuẩn hóa Javascript

#### Let & Const

1. Var / Let, Const: Scope, Hosting
2. Const / Var, Let: Assignment

Note:

- Code thuần: Var (vì một số trình duyệt cũ vẫn chưa hỗ trợ hết ES6)
- Babel: Const, Let
- Khi định nghĩa biến và không gán lại biến đó: Const
- Khi cần gán lại giá trị cho biến: Let

#### Template literals & Multi-line string

- Template literals: `${}`
- Multi-line string: 'Line1\nLine2\nLine3'

#### Arrow function

```js
const sum = (a, b) => a + b;
const obj = (a, b) => ({ a: a, b: b });
```

#### Classes

```js
// Function constructor
function Course(name, price) {
  this.name = name;
  this.price = price;

  this.getName = function () {
    return this.name;
  };

  const isSuccess = false;
}

const phpCourse = new Course("PHP", 1000);
const phpCourse = new Course("Javascript", 1200);

// Classes
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  run() {
    let isSuccess = false;

    if (...) {
      isSuccess = true;
    }
  }
}
```

#### Default parameter values

```js
function logger(message, type = "log") {
  console[type](message);
}

logger("Failed!", "error");
```

#### Enhanced object literal

1. Định nghĩa key: value cho object
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến

```js
// Định nghĩa key: value cho object
var name = "javascript";
var price = 1000;

const course = {
  name,
  price,
};

// Định nghĩa method cho object
const course2 = {
  name,
  price,
  getName() {
    return name;
  },
};

// Định nghĩa key cho object dưới dạng biến
var fieldName = "new-name";
var fieldPrice = "price";

const course = {
  [fieldName]: "javascript",
  [fieldPrice]: 1000,
};

console.log(course);
```

#### Destructuring(Phân rã) & Rest parameters

- Destructuring dùng với array và object
- Khi sử dụng kết hợp với destructuring, và khi sử dụng trong việc định nghĩa tham số thì nó là toán tử rest
- Rest có nghĩa là lấy ra những phần còn lại

```js
// array
const courses = ["Javascript", "PHP", "Ruby"];
const [courses1, ...rest] = courses;
console.log(courses1); // "Javascript"
console.log(rest); // ["PHP", "Ruby"]

// object
const courses2 = {
  name: "Javascript",
  price: 1200,
  children: {
    name: "Ruby",
  },
  /* defaultValue: 'abc' */
};

const {
  name,
  price,
  children: { name: childrenName },
  defaultValue = "default",
} = courses2;
console.log(name, price, childrenName, defaultValue); // "Javascript", 1200, "Ruby", "default"

// rest parameters
function logger(a, ...param) {
  console.log(param);
}

logger(1, 232, 3, 2, 3, 23, 2, 5, 32); // [232, 3, 2, 3, 23, 2, 5, 32]

// rest obj
function logger({ name, price }) {
  console.log(name); // "javascript"
  console.log(price); // 1000
}

logger({
  name: "javascript",
  price: 1000,
});

// rest array
function logger([a, b, ...rest]) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
}

logger([1, 2, 3, 4, 5]);
```

#### Spread(dải ra)

- Khi truyền đối số cho function và khi sử dụng dải nó trong một array hay một object khác thì gọi là toán tử spread

```js
// array
const arr1 = ["Javascript", "PHP", "Ruby"];
const arr2 = ["Java", "Dart"];
const newArr = [...arr1, ...arr2];
console.log(newArr); // ["Javascript", "PHP", "Ruby", "Java", "Dart"]

// object
const defaultConfig = {
  api: "https://domain-trang-khoa-hoc",
  apiVersion: "v1",
  other: "other",
};

const exerciseConfig = {
  ...defaultConfig,
  api: "https://domain-trang-bai-tap",
};

console.log(exerciseConfig);
/* 
{
  api: "https://domain-trang-bai-tap",
  apiVersion: "v1",
  other: "other"
}
*/

// param
const array = ["Javascript", "PHP", "Ruby"];

function logger(...array) {
  console.log(array);
}

logger(...array); // ["Javascript", "PHP", "Ruby"]
```

#### Tagged template literal (ít người biết)

- Là khái niệm sử dụng function mà có thể gọi đến function đó qua cú pháp template literal

Ví dụ:

```js
const brand = "F8";
const course = "Javascript";

const hightlight = ([first, ...strings], ...values) => {
  console.log(first, strings, values); // "Học lập trình ", [" tại ", ""], ["Javascript", "F8"]

  return values
    .reduce(
      (acc, cur, i) => {
        console.log(`lan ${i}:`, acc);
        return [...acc, `<span>${cur}</span>`, strings.shift()];
      },
      [first]
    )
    .join("");
};

const html = hightlight`Học lập trình ${course} tại ${brand}!`;

console.log(html); // "Học lập trình <span>Javascrip</span> tại <span>F8</span>!"
```

#### Modules

- Import / Export

Để sử dụng module thì khi add file js vào html phải thêm type="module"

`<script type="module" src="./app.js"></script>`

Ví dụ về sử dụng module:

```js
// /constants.js
export const TYPE_LOG = "log";
export const TYPE_WARN = "warn";
export const TYPE_ERROR = "error";

// /logger/logger.js
import * as constants from "../constants.js";

function logger(msg, log = constants.TYPE_LOG) {
  console[log](msg);
}

export default logger;

// /logger/index.js
export { default as logger2 } from "./logger.js";

// /app.js
import { logger2 } from "./logger/index.js";
import * as constants from "./constants.js";

logger2("Hello", constants.TYPE_WARN); // ⚠Hello
```

#### Optional chaining (?.)

- (?.) Dùng để kiểm tra xem nó có tồn tại hay không mà không gây ra error
  Có thể dùng với: object, array, function

**Cú pháp**

```js
obj.val?.prop;
obj.val?.[expr];
obj.arr?.[index];
obj.func?.(args);
```

Ví dụ:

```js
const obj = {
  name: "Alice",
  cat: {
    name: "Tom",
    /* cat2: {
      name: 'Tom2',
      cat3: {
        name: 'Tom3'
      }
    } */
  },
};

if (obj.cat.cat2?.cat3.name) {
  console.log(obj.cat.cat2?.cat3.name); // Nếu không chắc chắn có cat2
}

const arr = [1, 2];
console.log(arr?.[2]); // undefined, Nếu không chắc chắn có index 2

const obj2 = {
  /* getName(value) {
	    console.log(value)
	  } */
};

obj2.getName?.(123); // undefined, Nếu không chắc chắn có hàm getName
```

#### Đệ quy là gì

- Đệ quy là một hàm hoặc phương thức gọi lại chính nó!
- Khi dùng đệ quy cần chú ý:
  - Phải xác định được điểm dừng
  - Phải xác định được logic xử lý và tạo ra điểm dừng

ví dụ

```js
// Tính giai thừa của một số input: 3 - Output: 6
function factorial(number) {
  if (number > 0) {
    let total = number * factorial(number - 1);
    console.log(total); // 1, 2, 6
    return total;
  }
  return 1;
}
factorial(3); // 6

// Viết hàm đệ quy trả lại mảng gồm các giá trị số nằm trong khoảng cho trước. Input: 1, 5. Output: [2, 3, 4]
function run(x, y) {
  x++;
  if (x < y) {
    let arr = [x, ...run(x, y)];
    console.log(arr); // [99], [98, 99], [97, 98, 99], [96, 97, 98, 99]
    return arr;
  }
  return [];
}

console.log(run(95, 100)); // [96, 97, 98, 99]
```

#### Polyfill là gì? Khi nào cần sử dụng?

- Là cách tự tạo ra function để đáp ứng các trình duyệt cũ không hỗ trợ ES6
- Giúp cho các trình duyệt cũ có thể chạy được các function mà trình duyệt mới hỗ trợ

```js
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";

    if (search instanceof RegExp) {
      throw TypeError("first argument must not be a RegExp");
    }
    if (start === undefined) {
      start = 0;
    }
    return this.indexOf(search, start) !== -1;
  };
}

"Javascript course".includes("Javascript", 0);
```
