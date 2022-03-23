# arguments

- arguments 是一个类数组对象(伪数组),类数组对象和数组的操作方式基本一致,只是不能调用数组的方法

- 在函数执行时,所有的实参都会存储在 arguments 对象中,通过 arguments,即使不定义形参也可以使用实参

- ```js
  fuction sum(){
      let result = 0;
      for(let i =1;i<arguments.length;i++){
          result += arguments[i]
      }
      return result
  }
  ```
