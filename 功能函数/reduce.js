const arr = [
    {name:"chiko",age:"25"},
    {name:"angle",age:"26"},
    {name:"yunzhi",age:"118"},
];

// 我需要拿到所有的名字 放到一个新数组中

const nameArr = arr.reduce((pre,next,i)=>{
   pre[i] = next.name;
   return pre; 
})

console.log(nameArr);
