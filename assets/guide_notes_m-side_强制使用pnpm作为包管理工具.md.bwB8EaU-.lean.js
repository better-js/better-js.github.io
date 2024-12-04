import{_ as s,c as i,o as a,V as n}from"./chunks/framework.YnO4XY28.js";const g=JSON.parse('{"title":"强制使用 pnpm 作为包管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/m-side/强制使用pnpm作为包管理工具.md","filePath":"guide/notes/m-side/强制使用pnpm作为包管理工具.md","lastUpdated":1733155339000}'),p={name:"guide/notes/m-side/强制使用pnpm作为包管理工具.md"},e=n(`<h1 id="强制使用-pnpm-作为包管理工具" tabindex="-1">强制使用 pnpm 作为包管理工具 <a class="header-anchor" href="#强制使用-pnpm-作为包管理工具" aria-label="Permalink to &quot;强制使用 pnpm 作为包管理工具&quot;">​</a></h1><p>为了确保项目中依赖管理的一致性，我们将强制要求使用 <code>pnpm</code> 作为项目的包管理工具。以下是如何设置以确保所有用户在安装依赖时使用 <code>pnpm</code>。</p><hr><p><strong>步骤 1：创建预安装脚本</strong></p><p>在项目根目录下创建一个 <code>scripts</code> 文件夹，在 <code>scripts</code> 文件夹内创建一个名为 <code>preinstall.js</code> 的文件，并添加以下内容：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 检查 process.env.npm_execpath 是否包含 pnpm，如果不包含则输出警告并退出进程</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.npm_execpath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 输出警告信息，提示用户当前仓库必须使用 pnpm 作为包管理器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[33m This repository must using pnpm as the package manager for scripts to work properly.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[39m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 退出进程，并返回状态码 1，表示异常退出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>这段脚本检查当前环境中的包管理工具是否为 <code>pnpm</code>，如果不是，则输出警告信息并退出进程。</p><hr><p><strong>步骤 2：配置 npm 脚本</strong></p><p>在 <code>package.json</code> 文件中，添加一个 <code>preinstall</code> 脚本，该脚本将在安装依赖之前执行 <code>preinstall.js</code> 脚本：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line has-focus"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;preinstall&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node ./scripts/preinstall.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>通过这种方式，当用户尝试使用 <code>npm</code> 或 <code>yarn</code> 安装依赖时，<code>preinstall</code> 脚本将被触发，并提示错误信息，强制用户使用 <code>pnpm</code> 来安装依赖。</p>`,12),l=[e];function t(h,r,k,d,c,o){return a(),i("div",null,l)}const m=s(p,[["render",t]]);export{g as __pageData,m as default};
