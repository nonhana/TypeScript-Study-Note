/**
 * 声明文件:以.d.ts结尾的文件,通常用来声明某些自定义的模块
 * 在我们安装第三方库的时候,如果要使用这个第三方库
 * 在使用的时候,我们必须要引入其声明文件之后才能够获得代码的补全.
 */

// axios自带声明文件;express比较老,还没有编写声明文件
import axios from "axios";

axios.get("http://localhost:9001/api").then((res) => {
  console.log(res.data);
});

import express from "express";

const app = express();

const router = express.Router();

app.use("/api", router);

router.get("/api", (req: any, res: any) => {
  res.json({
    code: 200,
  });
});

app.listen(9001, () => {
  console.log(9001);
});
