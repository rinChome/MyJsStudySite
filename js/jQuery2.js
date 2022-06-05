var s = 'a,2,333';
console.log(s);
const fnNumberize = (s)=> Number((s).replaceAll(/,/g,'')) ||'error';//errorが返却されるっぽい
console.log(fnNumberize(s));//errorを表示
s = '1,2,333';
console.log(s);
console.log(fnNumberize(s));//12333を表示
s = 'a,2,333';
const fnNumberize2 = (s)=> Number((s).replaceAll(/,/g,""));
console.log(s);
console.log(fnNumberize2(s));//NaNを表示
s = '1,2,333';
console.log(s);
console.log(fnNumberize2(s));//カンマが全部削除されて、123333444
