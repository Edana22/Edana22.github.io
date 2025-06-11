# printf 输出最前端字符不显示

 ## 【错误代码】

```c
#include<stdio.h>
#include<math.h>

int main(){
	int array[3] = {1,2,3};
	printf("array length is %d"+sizeof(array) / sizeof(int));
}
```

错误结果：

```c
ay length is 3
--------------------------------
Process exited after 0.07507 seconds with return value 0
请按任意键继续. . .
```

`ay length is 3`  的 `array` 没有显示全。

## 【错误原因】

**语法错误，和其它语言语法混用，逗号写成了加号。**

## 【正确代码】

```c
#include<stdio.h>
#include<math.h>

int main(){
	int array[3] = {1,2,3};
	printf("array length is %d",sizeof(array) / sizeof(int));
}
```

正确运行结果：

```c
array length is 3
--------------------------------
Process exited after 0.05841 seconds with return value 0
请按任意键继续. . .
```

