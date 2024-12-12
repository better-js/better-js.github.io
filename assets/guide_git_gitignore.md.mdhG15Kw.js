import{_ as s,c as a,o as n,V as i}from"./chunks/framework.__fMkWnK.js";const u=JSON.parse('{"title":".gitignore","description":"","frontmatter":{},"headers":[],"relativePath":"guide/git/gitignore.md","filePath":"guide/git/gitignore.md","lastUpdated":1731852837000}'),e={name:"guide/git/gitignore.md"},l=i(`<h1 id="gitignore" tabindex="-1">.gitignore <a class="header-anchor" href="#gitignore" aria-label="Permalink to &quot;.gitignore&quot;">​</a></h1><p><a href="https://git-scm.com/docs/gitignore/zh_HANS-CN" target="_blank" rel="noreferrer">.gitignore</a> 文件指定了 Git 追踪时应忽略的文件。</p><p>注意：已被 Git 追踪的文件不受影响。</p><blockquote><p>Git默认不会将空的文件夹添加到仓库里面的，注意文件夹的格式以斜线结尾的</p></blockquote><h2 id="匹配规则" tabindex="-1">匹配规则 <a class="header-anchor" href="#匹配规则" aria-label="Permalink to &quot;匹配规则&quot;">​</a></h2><ul><li>从上到下逐行匹配，每一行表示一个忽略模式。</li><li>空行或者以 <code>#</code> 开头的行会被Git忽略，一般空行用于可读性的分隔，<code>#</code> 一般用作注释。</li><li>使用标准的Blob模式匹配，例如： <ul><li>星号（<code>*</code>）通配任意个字符</li><li>问号（<code>?</code>）匹配单个字符</li><li>中括号（<code>[]</code>）表示匹配列表中的单个字符，比如 <code>[abc]</code> 表示 a 或 b 或 c</li></ul></li><li>两个星号（<code>**</code>）表示匹配任意的中间目录。</li><li>中括号可以使用短中线连接，比如： <ul><li><code>[0-9]</code> 表示任意一位数字，<code>[a-z]</code> 表示任意一位小写字母。</li></ul></li><li>感叹号（<code>!</code>）表示取反</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略所有的 .a 文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.a</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但跟踪所有的 lib.a，即便在前端忽略了 .a 文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lib.a</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/TODO</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略任何目录下名为 build 的文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略 doc/notes.txt，但不忽略 doc/serve/arch.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doc/*.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略 doc/ 目录及其所有子目录下的 .pdf 文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doc/**/*.pdf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="应该忽略的文件" tabindex="-1">应该忽略的文件 <a class="header-anchor" href="#应该忽略的文件" aria-label="Permalink to &quot;应该忽略的文件&quot;">​</a></h2><ul><li>系统或者软件自动生成的文件。比如一些工具或软件产生的临时文件</li><li>编译产生的中间文件和可执行文件。也就是如果一个文件是通过另一个文件自动生成的，那自动生成的这个文件就没有必要放到版本库里面</li><li>系统运行中生成的日志文件、缓存文件、临时文件</li><li>涉及身份、密码、口令、密钥等敏感信息文件</li></ul>`,9),p=[l];function t(r,c,o,d,h,b){return n(),a("div",null,p)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};