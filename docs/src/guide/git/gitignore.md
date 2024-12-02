# .gitignore

[.gitignore](https://git-scm.com/docs/gitignore/zh_HANS-CN) 文件指定了 Git 追踪时应忽略的文件。 

注意：已被 Git 追踪的文件不受影响。

> Git默认不会将空的文件夹添加到仓库里面的，注意文件夹的格式以斜线结尾的
>
> 

## 匹配规则

- 从上到下逐行匹配，每一行表示一个忽略模式。
- 空行或者以 `#` 开头的行会被Git忽略，一般空行用于可读性的分隔，`#` 一般用作注释。
- 使用标准的Blob模式匹配，例如：
  - 星号（`*`）通配任意个字符
  - 问号（`?`）匹配单个字符
  - 中括号（`[]`）表示匹配列表中的单个字符，比如 `[abc]` 表示 a 或 b 或 c
- 两个星号（`**`）表示匹配任意的中间目录。
- 中括号可以使用短中线连接，比如：
  - `[0-9]` 表示任意一位数字，`[a-z]` 表示任意一位小写字母。
- 感叹号（`!`）表示取反

```sh
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便在前端忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/serve/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```



## 应该忽略的文件

- 系统或者软件自动生成的文件。比如一些工具或软件产生的临时文件
- 编译产生的中间文件和可执行文件。也就是如果一个文件是通过另一个文件自动生成的，那自动生成的这个文件就没有必要放到版本库里面
- 系统运行中生成的日志文件、缓存文件、临时文件
- 涉及身份、密码、口令、密钥等敏感信息文件
