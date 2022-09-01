# 步骤
## 创建项目
```
pnpm create @vuejs/app [project-name] --template
```
选择vue——vue-ts

## 约束代码风格
### Eslint支持
```
pnpm i eslint -D   //eslint安装
pnpm i eslint-plugin-vue -D   //eslint插件安装

pnpm i @typescript-eslint/eslint-plugin -D

pnpm i eslint-plugin-prettier -D

pnpm i @typescript-eslint/parser -D
```
项目根目录下新建`.eslintrc.js` `.eslintignore`
### prettier支持
```
pnpm i prettier -D
```
### 解决eslint和prettier冲突
```
pnpm i eslint-config-prettier -D
```
项目根目录下新建`.prettier.js` `.prettierignore`,配置`package.json`

检查格式化效果
```
pnpm lint:eslint  //eslint检查
pnpm lint:prettier  //eslint自动格式化
```

### 配置 husky + lint-staged
```
pnpm i mrm -D
npx mrm lint-staged
```
报错的话先运行`git init`，然后运行`npx husky-init`
文件夹中生成`.husky`，修改`pre-commit`
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:lint-staged
```




## 踩坑指南
格式化检查报错，删除`package.json`中的` "type": "module"`或者把配置改成.cjs后缀。

设置了"type": "module" 后你的所有js文件默认使用ESM模块规范，不支持commonjs规范，所以必须显式的声明成xxx.cjs才能标识这个用commonjs规范的


