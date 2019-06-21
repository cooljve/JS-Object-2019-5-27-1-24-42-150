//1
var user={};
user.name='John';
console.log(user.name);
user.surname='Mike';
console.log(user.surname);
user.name='Peter';
console.log(user.name);
delete user.name;
console.log(user);
//2
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var sum=fruit.apple+fruit.pear+fruit.peach;
console.log(sum);