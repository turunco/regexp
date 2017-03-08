// regExp

// var reg = /hoge+a/;
// var reg = new RegExp('hoge+a');


/// matching
var array = [
    "abcdefg.",
    "abc efg.",
    "abc.abc.",
];

// '.' : dot - match a charactor
console.log('==1 /./ : match one charactor(include)');
array.forEach((reg, index) => {
    console.log(reg.match(/..../));
});
console.log('==2 /./ : match one charactor(include)');
array.forEach((reg, index) => {
    console.log(reg.match(/..e./));
});
console.log('==3 /./ : match one charactor(include)');
array.forEach((reg, index) => {
    console.log(reg.match(/.*ef/));
});


array = [
    "This is a pen.",
    "This is a P_3.",
    "This is a ???.",
];
console.log('== /\\w/ : match one charactor and number and under score');
array.forEach((reg, index) => {
    console.log(reg.match(/This is a \w\w\w/));
});
console.log('== /[a-zA-Z0-9_]/ : match one charactor and number and under score');
// \w == [a-zA-Z0-9_]
array.forEach((reg, index) => {
    console.log(reg.match(/[a-zA-Z0-9_]*/));
});

console.log('== /\\W/ : match WITHOUT one charactor and number and under score');
array.forEach((reg, index) => {
    console.log(reg.match(/This is a \W\W\W/));
});
console.log('== /[^a-zA-Z0-9_]/ : match WITHOUT one charactor and number and under score');
// \W == [^a-zA-Z0-9_]
array.forEach((reg, index) => {
    console.log(reg.match(/[^a-zA-Z0-9_]*/));
});


array = [
    "ABCD EFGH",
    "ABCDEFGH",
    "ABCD EF GH",
];
console.log('== /\\s/ : match space');
array.forEach((reg, index) => {
    console.log(reg.match(/ABCD\sEFGH/));
});
array.forEach((reg, index) => {
    console.log(reg.match(/ABCD[ \t\n\r\f]EFGH/));
});

console.log('== /\\S/ : match WITHOUT space');
array.forEach((reg, index) => {
    console.log(reg.match(/ABCD\SEFGH/));
});


array = [
    "2017/03/03",
    "2017/3/03",
    "2017/XX/03",
];
console.log('== /\\d/ : match number');
array.forEach((reg, index) => {
    console.log(reg.match(/\d\d\d\d\/\d\d\/\d\d/));
});

console.log('== /\\D/ : match WITHOUT number');
array.forEach((reg, index) => {
    console.log(reg.match(/\d\d\d\d\/\D\D\/\d\d/));
});


array = [
    "Yahooooooo!",
    "Y",
    "YAHOOOOOOO!",
    "here is Yahoo! Yahoo! Yahoo!",
];
console.log('== /*/ : match repetition charactor more than 0');
array.forEach((reg, index) => {
    console.log(reg.match(/Yaho*!/));
});
console.log('== /*?/ : match repetition more than 0 and small range');
array.forEach((reg, index) => {
    console.log(reg.match(/Yaho*?!/));
});
console.log('== /(XXX)/ : match repetition strings');
array.forEach((reg, index) => {
    console.log(reg.match(/(Yahoo!)/));
});
console.log('== /+/ : match repetition charactor more than 1');
array.forEach((reg, index) => {
    console.log(reg.match(/Yaho+!/));
});


array = [
    " ",
    "123",
];
console.log('== /\\d*/ : match repetition number more than 0');
array.forEach((reg, index) => {
    console.log(reg.match(/\d*/));
});
console.log('== /\\d+/ : match repetition number more than 1');
array.forEach((reg, index) => {
    console.log(reg.match(/\d+/));
});


array = [
    "Yahooooooo!",
    "Y",
    "YAHOOOOOOO!",
    "here is Yahoo! Yahoo! Yahoo!",
];
console.log('== /{num}/ : match repetition of n times charactors');
array.forEach((reg, index) => {
    console.log(reg.match(/Yaho{2}!/));
});

console.log('== /{num,}/ : match repetition more than n times charactors');
array.forEach((reg, index) => {
    console.log(reg.match(/Yaho{3,}!/));
});

console.log('== /{n,m}/ : match repetition more than n and less than m times charactors');
array.forEach((reg, index) => {
    console.log(reg.match(/Yaho{1,4}!/));
});


array = [
    "colour",
    "color",
];
console.log('== /{?}/ : match 0 or 1 time');
array.forEach((reg, index) => {
    console.log(reg.match(/colou?r/));
});

array = [
    "https://www.yahoo.co.jp",
    "http://www.yahoo.co.jp",
];
array.forEach((reg, index) => {
    console.log(reg.match(/https?:\/\/.*/));
});


array = [
    "book",
    "apple",
    "BOOK",
    "APPLE",
];
console.log('==1 /[charactors]/ : match either [charactors]');
array.forEach((reg, index) => {
    console.log(reg.match(/[abc]/));
});
console.log('==2 /[charactors]/ : match either [charactors]');
array.forEach((reg, index) => {
    console.log(reg.match(/[a-c]/));
});
console.log('==3 /[charactors]/ : match either [charactors]');
array.forEach((reg, index) => {
    console.log(reg.match(/[AC]/));
});
console.log('==4 /[charactors]/ : match either [charactors]');
array.forEach((reg, index) => {
    console.log(reg.match(/[A-C]/));
});
console.log('==5 /[charactors]/ : match either [charactors]');
array.forEach((reg, index) => {
    console.log(reg.match(/[aAbB]/));
});


array = [
    "Jack",
    "James",
    "John"
];
console.log('== /|/ : match partially');
array.forEach((reg, index) => {
    console.log(reg.match(/Ja(ck|mes)/));
});


array = [
    "you are happy",
    "happy new year"
];
console.log('== /^/ : match head charactor');
array.forEach((reg, index) => {
    console.log(reg.match(/^happy/));
});

console.log('== /$/ : match tail charactor');
array.forEach((reg, index) => {
    console.log(reg.match(/happy$/));
});

array = [
    "book",
    "bookshelf"
];
console.log('== /\b/ : separate the word');
array.forEach((reg, index) => {
    console.log(reg.match(/\bbook\b/));
});


array = [
    "mac",
    "emacs",
    "machintosh"
];
console.log('== /\B/');
array.forEach((reg, index) => {
    console.log(reg.match(/\Bmac\B/));
});


array = [
    "book is a book",
    "paperback is a book",
];
console.log('== /\1 \2 \3/');
array.forEach((reg, index) => {
    console.log(reg.match(/(\w+) is a \1/));
});


array = [
    "www.yahoo.com",
];
console.log('== /\\/');
array.forEach((reg, index) => {
    console.log(reg.match(/\./));
});


array = [
    "tokyo",
    "TOKYO",
    "ToKyO",
];
console.log('== /\i/');
array.forEach((reg, index) => {
    console.log(reg.match(/tokyo/i));
});


/// replace
var tel_number_str = '123-456-7890';
var tel_number = Number(tel_number_str.replace(/-/g, ''));
console.log(typeof(tel_number));
console.log(tel_number);