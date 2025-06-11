<template><div><h1 id="matlab-入门使用" tabindex="-1"><a class="header-anchor" href="#matlab-入门使用"><span>matlab 入门使用</span></a></h1>
<h1 id="一、matlab-更改打开时的默认路径" tabindex="-1"><a class="header-anchor" href="#一、matlab-更改打开时的默认路径"><span>一、matlab 更改打开时的默认路径</span></a></h1>
<p>参考网址：https://www.cnblogs.com/mat-wu/p/6135555.html</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301163759038-38877494.png" alt="img"></p>
<h1 id="二、matlab-预定义的特殊变量" tabindex="-1"><a class="header-anchor" href="#二、matlab-预定义的特殊变量"><span>二、matlab 预定义的特殊变量</span></a></h1>
<p>pi, i, j, clock, date都是matlab预定义的特殊变量，命名的时候注意不要重名。</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301163858786-184364844.png" alt="img"></p>
<h1 id="三、matlab-简单使用demo" tabindex="-1"><a class="header-anchor" href="#三、matlab-简单使用demo"><span>三、matlab 简单使用demo</span></a></h1>
<p>在Command Window 输入命令 clc 清空Command Window； clear 清空 Workspace； filename 直接运行 .m文件。</p>
<p>matlab 代码中 % 后是单行注释，添加注释快捷键是 Ctrl + R ；取消注释快捷键是 Ctrl + T 。</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301164430616-624318820.png" alt="img"><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301164529880-1780697012.png" alt="img"></p>
<p>demo1.m</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% C 语言中，变量类型和变量在使用之前必须强制声明。这种语言叫强类型语言。</span>
<span class="line">% MATLAB 是弱类型语言，直接赋值就可以创建变量，变量类型取决于创建时的类型。</span>
<span class="line"></span>
<span class="line">var = 40*2i; % matlab 中i、j用来表示虚数，用 2i 这种形式提高速度和鲁棒性</span>
<span class="line">var2 = var/5;</span>
<span class="line">array = [1,2,3,4]; % 数组中的元素可以用空格分隔，也可以用逗号分隔</span>
<span class="line">x = 5;</span>
<span class="line">y = 10;</span>
<span class="line"></span>
<span class="line">% first：incr：last  克隆运算符，incr=1时可省略</span>
<span class="line">arr1 = 1:2:10;</span>
<span class="line">arr2 = 1:1:10;</span>
<span class="line">arr3 = 1:10;</span>
<span class="line"></span>
<span class="line">% 转置运算符</span>
<span class="line">g = 1:4; </span>
<span class="line">h = [g' g'];</span>
<span class="line"></span>
<span class="line">% 用input初始化变量</span>
<span class="line">my_val = input('Enter an input value:');</span>
<span class="line">my_val2 = input('Enter an input value:','s'); %input('descript:','s')输入的数据就被当字符串</span>
<span class="line"></span>
<span class="line">% Conmmand Window 命令：输出显示格式 format short(默认)，format bank(无科学记数法)</span>
<span class="line">aa = 4565.13246;</span>
<span class="line">% fprintf()  和c语言中print用法一样。缺点：只能显示复数的实部,所以有虚数时要用disp()</span>
<span class="line">fprintf('The value of pi is %6.2f \n',pi);</span>
<span class="line">% disp()  num2ster()   int2str</span>
<span class="line">str = ['the value of pi='  num2str(pi)];</span>
<span class="line">disp(str);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、matlab-plot-的基础使用" tabindex="-1"><a class="header-anchor" href="#四、matlab-plot-的基础使用"><span>四、matlab plot()的基础使用</span></a></h1>
<p>有多个plot()时，后面的图像会覆盖前面的图像。</p>
<p>demo2.m</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% plot() 的使用方法</span>
<span class="line">x=0:1:10;</span>
<span class="line">y=x.^2-10*x+15;</span>
<span class="line">% plot(x,y);</span>
<span class="line">% 曲线为红色的虚线,重要的数值用蓝色的小圆圈表示</span>
<span class="line">% plot(x,y,'r--',x,y,'bo');</span>
<span class="line">title ('Plot of y=x.^2-10*x+15');</span>
<span class="line">xlabel ('x');</span>
<span class="line">ylabel ('y');</span>
<span class="line">grid on; % grid off 去除网格线</span>
<span class="line"></span>
<span class="line">% 联合绘图</span>
<span class="line">x1 = 0:pi/100:2*pi;</span>
<span class="line">y1 = sin(2*x1);</span>
<span class="line">y2 = 2*cos(2*x1);</span>
<span class="line">plot (x1,y1,x1,y2);</span>
<span class="line">title(' Plot of f(x)=sin(2x) and its derivative');</span>
<span class="line">xlabel('x');</span>
<span class="line">ylabel('y');</span>
<span class="line">% legend 制作图例</span>
<span class="line">legend('f(x)','d/dx f(x)');</span>
<span class="line">grid on;</span>
<span class="line">% 对数尺度</span>
<span class="line">semilogx(x1,y1)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四个图像分别是 plot(x,y); plot(x,y,'r--',x,y,'bo');  plot (x1,y1,x1,y2);  semilogx(x1,y1) 的图像。
<img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301165739189-230180197.png" alt="img"><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301165759684-1950179557.png" alt="img"></p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301165828982-826830288.png" alt="img"><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301165838212-1862022344.png" alt="img"></p>
<h1 id="五、matlab-应用的两个小例子" tabindex="-1"><a class="header-anchor" href="#五、matlab-应用的两个小例子"><span>五、matlab 应用的两个小例子</span></a></h1>
<p>example1:读取一个华氏温度的输入，输出为开尔文温度、example2:负载的最大输出功率。</p>
<p>demo3.m</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% example1:读取一个华氏温度的输入，输出为开尔文温度</span>
<span class="line">var = input('输入华氏温度:');</span>
<span class="line">f = 5/9 * (var -32) + 273.15;</span>
<span class="line">fprintf('转换后的开尔文温度为  %6.2f \n ',f);</span>
<span class="line"></span>
<span class="line">% example2:负载的最大输出功率</span>
<span class="line">% 注意在本例中，用的是数组运算符 .*   .^和   ./</span>
<span class="line">% 这些运算符将会使数组 amps 和 pl 按元素一一对应计算.</span>
<span class="line">V = 120;</span>
<span class="line">Rs = 50;</span>
<span class="line">Rl = 1:1:100;</span>
<span class="line">I = V ./ ( Rs + Rl); % ./ </span>
<span class="line">PL = I.^2 .* Rl; % .^  .* 都要带 .</span>
<span class="line">plot(Rl,PL);</span>
<span class="line">grid on;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301170325567-2086428594.png" alt="img"><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301170338068-324922808.png" alt="img"></p>
<h1 id="六、matlab常用语法-if、figure、hold-on、极坐标、while、for循环、全局变量" tabindex="-1"><a class="header-anchor" href="#六、matlab常用语法-if、figure、hold-on、极坐标、while、for循环、全局变量"><span>六、matlab常用语法（if、figure、hold on、极坐标、while、for循环、全局变量）</span></a></h1>
<p>demo4.m</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% *************************** if else *******************************</span>
<span class="line">% if  else之间是第一个block； else  end之间是第二个block</span>
<span class="line">% 或者if  end之间是一个block，和缩进无关，缩进只是为了方便阅读。</span>
<span class="line">% a = 2;</span>
<span class="line">% disp('I am if statement:')</span>
<span class="line">% if a==1 </span>
<span class="line">%     fprintf('a is 1 \n');</span>
<span class="line">%     fprintf('I am a. \n');</span>
<span class="line">% else</span>
<span class="line">%     fprintf('a is not 1 \n');</span>
<span class="line">%     fprintf('I am not a. \n');</span>
<span class="line">% end</span>
<span class="line"></span>
<span class="line">% ***************************** figure *****************************</span>
<span class="line">% x = 0:10;</span>
<span class="line">% y = x.^2 + 5*x + 6;</span>
<span class="line">% figure(1); % 创建多个图像</span>
<span class="line">% plot(x,y);</span>
<span class="line"></span>
<span class="line">% x1 = 0:pi/100:2*pi;</span>
<span class="line">% y1 = sin(2*x1);</span>
<span class="line">% figure(2);% 创建多个图像</span>
<span class="line">% plot(x1,y1);</span>
<span class="line"></span>
<span class="line">% **********************************************************</span>
<span class="line">% hold on 所有的新的图象都会叠加在原来存在的图象。</span>
<span class="line">% hold off 命令可恢复默认情况，用新的图象来替代原来的图象。</span>
<span class="line">% x1 = 0:pi/100:2*pi;</span>
<span class="line">% y1 = sin(x1);</span>
<span class="line">% y2 = cos(x1);</span>
<span class="line">% hold off;</span>
<span class="line">% plot(x1,y1,'r');</span>
<span class="line">% hold on;</span>
<span class="line">% plot(x1,y2,'k--');</span>
<span class="line">% hold off;</span>
<span class="line">% ******************************* 极坐标 ***************************</span>
<span class="line">% 极坐标</span>
<span class="line">g = 0.5;</span>
<span class="line">theta = 0:pi/20:2*pi;</span>
<span class="line">gain = 2*g*(1+cos(theta));</span>
<span class="line">polar (theta,gain,'r-');</span>
<span class="line">% ****************************** while ****************************</span>
<span class="line">% while   end 之间是block</span>
<span class="line">b = 1;</span>
<span class="line">while(b &lt;= 5)</span>
<span class="line">    disp(b);</span>
<span class="line">    b = b+1;</span>
<span class="line">end</span>
<span class="line">% **************************** for ******************************</span>
<span class="line">% for   end 之间是block</span>
<span class="line">%  for 循环算法比向量算法慢</span>
<span class="line">for c = 1:2:10  % for c = [1,5,7,9]</span>
<span class="line">   fprintf('c^2 is %d \n',c^2);</span>
<span class="line">end</span>
<span class="line">disp('************************向量化************************')</span>
<span class="line">% 用向量算法代替循环的算法的过程称之为向量化(vectorization)</span>
<span class="line">% 向量执行的速度快,缺点是需要很大的内存,但仍要比 for 循环好的多</span>
<span class="line">cc = 1:2:10;</span>
<span class="line">ccc = cc.^2;</span>
<span class="line">fprintf('ccc is %d \n',ccc);</span>
<span class="line">% **************************** 全局变量 ******************************</span>
<span class="line">% 可以用global声明全局变量。</span>
<span class="line">% 为了方便，应该在函数开头就声明全局变量。 </span>
<span class="line">% 全局变量适用大规模数据的传输</span>
<span class="line">global var1 var2 var3 ;</span>
<span class="line"> var1 = 1;</span>
<span class="line"> var2 = 2;</span>
<span class="line"> var3 = 3;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>if 语句输出结果：</strong></p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301172515340-266843444.png" alt="img"></p>
<p><strong>figure 语句输出结果：</strong></p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301170921234-1688438553.png" alt="img"> <img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301170932502-94642605.png" alt="img"></p>
<p><strong>hold on、hold off 语句输出结果：</strong></p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301171029401-1577798694.png" alt="img"></p>
<p><strong>极坐标 语句输出结果：</strong></p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301171102436-319757965.png" alt="img"></p>
<p><strong>while 语句输出结果：</strong></p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301171248721-1912648795.png" alt="img"></p>
<p><strong>for 循环语句输出结果：</strong></p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301171402135-1434360495.png" alt="img"></p>
<h1 id="七、matlab-自定义函数" tabindex="-1"><a class="header-anchor" href="#七、matlab-自定义函数"><span>七、matlab 自定义函数</span></a></h1>
<p>demo5_myFunction.m （自定义函数）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% 在这个文件里自定义函数，函数名必须和文件名一致</span>
<span class="line">% 函数脚本不需要运行，只要保存即可</span>
<span class="line">% function result = filename(params)  //这里的函数名字必须和文件名一致</span>
<span class="line">% function block</span>
<span class="line"></span>
<span class="line">function distance = demo5_myFunction (x1, y1, x2, y2)</span>
<span class="line">%DIST2 Calculate the distance between two point</span>
<span class="line">% Function DIST2 calculates the distance between</span>
<span class="line">% two points (x1, y1) and (x2,y2) in a cartesian</span>
<span class="line">% coordinate system.</span>
<span class="line">%</span>
<span class="line">% Calling sequence:</span>
<span class="line">% res = dist2(x1, y1, x2, y2)</span>
<span class="line">%</span>
<span class="line">% Define variables:</span>
<span class="line">% x1  --x-position of point 1</span>
<span class="line">% y1  --y-position of point 1</span>
<span class="line">% x2  --x-position of point 2</span>
<span class="line">% y2  --y-position of point 2</span>
<span class="line">% distance --Distance between points</span>
<span class="line">%</span>
<span class="line">% Record of revisions:</span>
<span class="line">%  Date Pragrammer  Description of change</span>
<span class="line">%  ========  ========== ================</span>
<span class="line">%  12/15/98 S.J.Chapman Original code</span>
<span class="line">%</span>
<span class="line">% Calculate distance.</span>
<span class="line"></span>
<span class="line">% 函数体内容</span>
<span class="line">distance = sqrt((x2-x1).^2 + (y2-y1).^2);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>demo5_myFunction_useFunction.m（调用自定义函数）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% 在这个文件调用自定义函数</span>
<span class="line">%  Script file: test_dist2.m</span>
<span class="line">%</span>
<span class="line">%  Purpose:</span>
<span class="line">%  This program test2 function dist2.</span>
<span class="line">%</span>
<span class="line">%  Record of revisions:</span>
<span class="line">%  Date Pragrammer  Description of change</span>
<span class="line">%  ========  ========== ================</span>
<span class="line">%  12/15/98 S.J.Chapman Original code</span>
<span class="line">%</span>
<span class="line">%  Define variables:</span>
<span class="line">%  ax  --x-position of point a</span>
<span class="line">%  ay  --y-position of point a</span>
<span class="line">%  bx --x-position of point b</span>
<span class="line">%  by --x-position of point b</span>
<span class="line">%</span>
<span class="line">%  Get input data.</span>
<span class="line">disp('Calculate the distance between two points:');</span>
<span class="line">ax = input ('Enter x value of point a:');</span>
<span class="line">ay = input ('Enter y value of point a:');</span>
<span class="line">bx = input ('Enter x value of point b:');</span>
<span class="line">by = input ('Enter y value of point b:');</span>
<span class="line"></span>
<span class="line">%  Evaluate function</span>
<span class="line">% 调用自定义函数  result = 自定义函数文件名(params)</span>
<span class="line">result = demo5_myFunction (ax, ay, bx, by); % 调用自定义只有这一句</span>
<span class="line">%  Write out result.</span>
<span class="line">fprintf('The distance between points a and b is %f \n', result);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301171855417-1919832974.png" alt="img"></p>
<p><strong>自定义函数2 ：</strong></p>
<p>demo5_calc2.m</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% 自定义函数 example2</span>
<span class="line">% 有多个输出，写在[]中；输出只有一个时[]可以省略</span>
<span class="line">% 函数结尾的result可以写，但没必要（运行到最后一行函数自然停止）</span>
<span class="line">% 自定义函数接受不固定个输入参数，请搜索 “选择性参数、inputParser”</span>
<span class="line">function [y1,y2] = demo5_calc2(x1,x2)</span>
<span class="line">y1 = x1^2;</span>
<span class="line">y2 = x2^2;</span>
<span class="line"></span>
<span class="line">disp(['max(x1,x2):',num2str(max(x1,x2))]);</span>
<span class="line"></span>
<span class="line">% ******************************************</span>
<span class="line">% max()只能被同一文件中的其它函数调用，是子函数</span>
<span class="line">% 私有函数有 private 声明的子函数，它们只能被父目录中的函数访问</span>
<span class="line">% 子函数和私有函数主要用于限制 MATLAB 函数的访问</span>
<span class="line">function a = max(m,n)</span>
<span class="line"></span>
<span class="line">if(m&lt;n)</span>
<span class="line">    a = n;</span>
<span class="line">else if(m > n)</span>
<span class="line">     a = m;</span>
<span class="line">    end;</span>
<span class="line">end;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>demo5_calc2_useFunction.m</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">% 使用自定义函数 example2</span>
<span class="line">x1 = input('input x1:');</span>
<span class="line">x2 = input('input x2:');</span>
<span class="line">% 调用自定义函数格式就是：</span>
<span class="line">%   自定义函数文件中第一行代码去掉 function 剩下的部分</span>
<span class="line">%       function [y1,y2] = demo5_calc2(x1,x2)</span>
<span class="line">[y1,y2] = demo5_calc2(x1,x2);</span>
<span class="line">disp(['y1 is ', num2str(y1)]);</span>
<span class="line">disp(['y2 is ', num2str(y2)]);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220301172053676-1188310577.png" alt="img"></p>
</div></template>


