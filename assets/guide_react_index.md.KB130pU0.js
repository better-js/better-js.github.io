import{_ as e,c as a,o as t,V as r}from"./chunks/framework.YnO4XY28.js";const _=JSON.parse('{"title":"React","description":"","frontmatter":{},"headers":[],"relativePath":"guide/react/index.md","filePath":"guide/react/index.md","lastUpdated":1732283740000}'),l={name:"guide/react/index.md"},i=r('<h1 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h1><h2 id="react是什么" tabindex="-1">React是什么 <a class="header-anchor" href="#react是什么" aria-label="Permalink to &quot;React是什么&quot;">​</a></h2><p>React由Meta公司研发，是一个用于 <strong>构建Web和原生交互界面的库</strong>。</p><p>也就是说它既可以写基于浏览器的应用，也可以写IOS、Andriod原生应用（React Native）。</p><h2 id="react框架对前端开发的意义" tabindex="-1">React框架对前端开发的意义 <a class="header-anchor" href="#react框架对前端开发的意义" aria-label="Permalink to &quot;React框架对前端开发的意义&quot;">​</a></h2><p>现代化开发中，前端有两点是比较重要，就是页面组件化和数据驱动视图。</p><ul><li><p>页面组件化</p><ul><li>传统方式：样式、结构、逻辑三者分离，所有样式都在一个style标签内，所有结构都在body标签内，所有逻辑都在script标签内，这种分隔代码的方式，尤其随着项目越来越复杂，导致后期维护有很高的成本。</li><li>现代方式：页面组件化的方式，组件的特点封装性特别好，一个组件会把这个组件相关的结构、样式还有逻辑放到一起，使用时直接调组件就可以了，后期维护起来也是非常方便的，且易于复用。</li></ul></li><li><p>数据驱动视图</p></li></ul><h2 id="react库与react框架的区别是什么" tabindex="-1">React库与React框架的区别是什么 <a class="header-anchor" href="#react库与react框架的区别是什么" aria-label="Permalink to &quot;React库与React框架的区别是什么&quot;">​</a></h2><ul><li>react库（也称为React.js或ReactJS）是一个自由及开发源代码的前端JavaScript工具库，用于基于UI组件构建用户界面，实现了MVC架构中的V层。</li><li>react框架则是通过脚手架工具构建的一套完善前端环境，包括：路由、状态管理、数据获取、第三方的UI组件库和第三方Hooks库等的完整应用程序。 <ul><li>脚手架工具：create-vite、create-react-app、Next.js、Remix</li><li>路由：react-router-dom</li><li>状态管理：Redux、Mobx、Zustand</li><li>UI组件库：Ant Design、Material UI</li><li>Hooks库：ahooks、react-use</li></ul></li></ul><blockquote><p>react库就是用来处理视图的，如果想做更大型的项目则需要使用框架</p></blockquote><h1 id="react-1" tabindex="-1">React <a class="header-anchor" href="#react-1" aria-label="Permalink to &quot;React&quot;">​</a></h1><p><a href="https://zh-hans.react.dev/" target="_blank" rel="noreferrer">React官网</a></p><h2 id="react框架对前端开发的意义-1" tabindex="-1">React框架对前端开发的意义 <a class="header-anchor" href="#react框架对前端开发的意义-1" aria-label="Permalink to &quot;React框架对前端开发的意义&quot;">​</a></h2><ul><li>页面组件化 <ul><li>把页面划分成各种组件，一个组件会把组件相关的结构样式逻辑放到一起，便于维护和复用。</li></ul></li><li>数据驱动视图 <ul><li>在前端减少DOM操作，开发就会简单很多</li><li>DOM操作由React完成</li></ul></li></ul><h2 id="react库与react框架的区别是什么-1" tabindex="-1">React库与React框架的区别是什么 <a class="header-anchor" href="#react库与react框架的区别是什么-1" aria-label="Permalink to &quot;React库与React框架的区别是什么&quot;">​</a></h2><ul><li>React（也称为React.js或ReactJS）是一个自由及开放源代码的前端JavaScript工具库，用于基于UI组件构建用户界面，主要实现MVC架构的V层</li><li>React框架则是通过脚手架工具搭建的一套完善前端环境，包括：路由、状态管理、数据获取、第三方的UI组件库和第三方Hooks库等的完整应用程序 <ul><li>脚手架工具：用于搭建前端环境 <ul><li>create-vite</li><li>create-react-app</li><li>Next.js</li><li>Remix</li></ul></li><li>路由 <ul><li>react-router-dom</li></ul></li><li>状态管理 <ul><li><a href="https://cn.redux.js.org/" target="_blank" rel="noreferrer">Redux</a></li><li><a href="https://zh.mobx.js.org/README.html" target="_blank" rel="noreferrer">Mobx</a></li><li>Zustand</li></ul></li><li>UI组件库 <ul><li><a href="https://ant-design.antgroup.com/index-cn" target="_blank" rel="noreferrer">Ant Design</a></li><li><a href="https://mui.com/" target="_blank" rel="noreferrer">Material UI</a></li></ul></li><li>Hooks库 <ul><li><a href="https://ahooks.js.org" target="_blank" rel="noreferrer">ahooks</a></li><li>react-use</li></ul></li></ul></li></ul><h2 id="react模块与react-dom模块分别起什么作用" tabindex="-1">react模块与react-dom模块分别起什么作用 <a class="header-anchor" href="#react模块与react-dom模块分别起什么作用" aria-label="Permalink to &quot;react模块与react-dom模块分别起什么作用&quot;">​</a></h2>',17),c=[i];function o(n,s,h,u,d,p){return t(),a("div",null,c)}const m=e(l,[["render",o]]);export{_ as __pageData,m as default};