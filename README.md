<!--
 * @Description: 调试
 * @Author: lijin
 * @Date: 2023-08-08 13:40:41
 * @LastEditTime: 2023-08-08 14:15:00
 * @LastEditors:  
-->

# patch-package 源码调试

## 操作步骤

- 构建：构建 -- 可看到文件末尾有 sourcemap，因为 tsconfig.json 中
  "inlineSourceMap": true,
- 添加生成 patches 文件的调试配置 -- 断点(可以打在命令的输出信息上) -- 调试

  ```json
  {
    "name": "调试 patch-package",
    "request": "launch",
    "program": "${workspaceFolder}/dist/index.js",
    // "runtimeArgs": [
    //   "run-script",
    //   "debug"
    // ],
    "console": "integratedTerminal",
    // 修改的包名
    "args": ["acorn"],
    // "runtimeExecutable": "npm",
    "skipFiles": ["<node_internals>/**"],
    "type": "node"
  }
  ```

- 添加由 paches 文件修改 node_modules 中包代码的调试配置 -- 断点 -- 调试
  ```json
  {
    "name": "调试 patch-package apply",
    "program": "${workspaceFolder}/dist/index.js",
    "request": "launch",
    "skipFiles": ["<node_internals>/**"],
    "console": "integratedTerminal",
    "type": "node"
  }
  ```
