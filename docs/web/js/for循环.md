## continue

跳出单次循环

```js
for (let i = 1; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i); // 输出1 2 4 5
}
```

## break

跳出整次循环

```
for(let i = 1; i < 5; i++){
    if(i == 3){
    break;
    }
        console.log(i); // 输出1 2
}
```
