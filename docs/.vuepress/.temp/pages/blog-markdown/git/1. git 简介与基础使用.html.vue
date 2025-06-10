<template><div><h1 id="git-简介与基础使用" tabindex="-1"><a class="header-anchor" href="#git-简介与基础使用"><span>git 简介与基础使用</span></a></h1>
<p>[参考网址]</p>
<p>[1] https://www.liaoxuefeng.com/wiki/896043488029600</p>
<p>[2] https://www.bootcss.com/p/git-guide/</p>
<p><strong>Git是目前世界上最先进的分布式版本控制系统（没有之一）。</strong></p>
<h2 id="_1、windows安装git" tabindex="-1"><a class="header-anchor" href="#_1、windows安装git"><span>1、windows安装git</span></a></h2>
<p>Git官网直接下载安装程序，然后按默认选项安装即可。 安装完成后，在开始菜单里找到“Git”-&gt;“Git Bash”，弹出一个类似命令行窗口的东西，就说明Git安装成功。</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230135348115-749689274.png" alt="img"><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230135407915-505355176.png" alt="img"></p>
<h3 id="_2、-配置本地账户信息" tabindex="-1"><a class="header-anchor" href="#_2、-配置本地账户信息"><span>2、 配置本地账户信息</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">$ git config --global user.name "Your Name"</span>
<span class="line">$ git config --global user.email "email@example.com"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建新仓库-版本库-git-init" tabindex="-1"><a class="header-anchor" href="#_3、创建新仓库-版本库-git-init"><span>3、创建新仓库/版本库： git init</span></a></h3>
<p>版本库又名仓库，英文名<strong>repository</strong>，可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。</p>
<p>新建一个空文件夹 gitDemo，路径不能有中文。打开这个空文件夹，右键，点击 Git Bash Here 。输入git命令 git init 初始化仓库。</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230135834801-173772644.png" alt="img"><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230135923964-1374933443.png" alt="img"><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230140502774-452046590.png" alt="img"></p>
<h3 id="_4、向仓库中添加文件-git-add-git-commit-m-first-commit" tabindex="-1"><a class="header-anchor" href="#_4、向仓库中添加文件-git-add-git-commit-m-first-commit"><span>4、向仓库中添加文件： git add .  git commit -m &quot;first commit&quot;</span></a></h3>
<p>计算机文件分为文本文件和二级制文件，文本文件是只包含纯文字的文件，并且文字是都没有样式和格式的。</p>
<p>版本控制系统其实只能跟踪【文本文件】的改动，比如TXT文件，网页，所有的程序代码等等。而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从100KB改成了120KB，但到底改了啥，版本控制系统不知道，也没法知道。</p>
<p>我们在 gitDemo 文件夹中新建一个 readme.txt 文件。</p>
<ol>
<li>用命令<code v-pre>git add readme.txt </code>告诉Git，把文件添加到仓库（ git add . 添加当前文件夹下所有的文件）；
<img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230152748791-1587776429.png" alt="img"><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230152822984-1198598301.png" alt="img"></li>
<li>用命令 git commit -m &quot;修改描述&quot; 告诉Git，把文件提交到仓库：
<img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230153230661-1908466213.png" alt="img"></li>
</ol>
<h3 id="_5、-修改文件并重新添加、提交-git-add-git-commit-m-second-commit" tabindex="-1"><a class="header-anchor" href="#_5、-修改文件并重新添加、提交-git-add-git-commit-m-second-commit"><span>5、 修改文件并重新添加、提交： git add .  git commit -m &quot;second commit&quot;</span></a></h3>
<p>在readme.txt中增加一行内容，并重新向仓库添加文件： git add readme.txt 和提交： git commit -m &quot;add 1 line contact&quot;</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230153536625-612183353.png" alt="img"></p>
<h3 id="_6、查看版本-git-log" tabindex="-1"><a class="header-anchor" href="#_6、查看版本-git-log"><span>6、查看版本：git log</span></a></h3>
<h3 id="版本回退请看-https-www-liaoxuefeng-com-wiki-896043488029600-897013573512192-http-www-cnblogs-com-https-www-liaoxuefeng-com-wiki-896043488029600-897013573512192" tabindex="-1"><a class="header-anchor" href="#版本回退请看-https-www-liaoxuefeng-com-wiki-896043488029600-897013573512192-http-www-cnblogs-com-https-www-liaoxuefeng-com-wiki-896043488029600-897013573512192"><span>版本回退请看[ https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192](http://www.cnblogs.com/ https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)</span></a></h3>
<p><code v-pre>git log</code>命令显示从最近到最远的提交日志。用 HEAD 表示当前版本。</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211230154746478-1045830537.png" alt="img"></p>
<hr>
<p>查看git配置命令：</p>
<ul>
<li><strong>git config --lsit</strong> 查看已经设置的信息</li>
<li><strong>git config --global --list</strong> 查看全局设置信息</li>
<li><strong>git config --local --list</strong> 查看当前项目设置信息</li>
<li><strong>git config --system unset credential.helper</strong> 清除已经设置的配置</li>
</ul>
<p>如果clone或者push的时候要求输入账号密码，应该输入 gitee/github 登录的的账号密码。</p>
<p>如果电脑上只有一个gitee的用户凭证，输入一次密码后不需要再次输入。但如果有2个，则每次clone/push都需要输入对应的gitee账号、密码。</p>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202301/2194212-20230129130444141-1024930262.png" alt="img"></p>
</div></template>


