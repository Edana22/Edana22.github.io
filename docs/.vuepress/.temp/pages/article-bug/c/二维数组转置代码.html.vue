<template><div><h1 id="二维数组转置代码" tabindex="-1"><a class="header-anchor" href="#二维数组转置代码"><span>二维数组转置代码</span></a></h1>
<h2 id="【代码】" tabindex="-1"><a class="header-anchor" href="#【代码】"><span>【代码】</span></a></h2>
<!-- ```C
#include<stdio.h> 
#include<math.h>

int main(){
	//二行三列矩阵，第一行数据为1,2,3；第二行数据为4,5,6 
	int arr[2][3] = {{1,2,3},{4,5,6}};
	int arrTran[3][2]; //转置后的矩阵为 3*2
	int i,j;
	
	//按行输出arr 
	printf("arr is :\n");
	for(i = 0; i < 2; i++){
		for(j = 0; j < 3; j++){
			printf("	%d", arr[i][j]);
		}
		printf("\n");
	}
	
	//转置就是把i、j调换 
	printf("arrTran is : \n");
	for(j = 0; j < 3; j++){
		for(i = 0; i < 2; i++){
			arrTran[j][i] = arr[i][j];
			printf("	%d", arrTran[j][i]);
		}
		printf("\n");
	}
}
``` -->
<h2 id="【运行结果】" tabindex="-1"><a class="header-anchor" href="#【运行结果】"><span>【运行结果】</span></a></h2>
<!-- ```
arr is :
        1       2       3
        4       5       6
arrTran is :
        1       4
        2       5
        3       6

--------------------------------
Process exited after 0.06195 seconds with return value 0
请按任意键继续. . .

``` -->
</div></template>


