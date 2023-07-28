// // 自己手写express的声明文件
// declare module "express" {
//   interface Router {
//     get(path: string, cb: (req: any, res: any) => void): void;
//   }
//   interface App {
//     use(path: string, router: any): void;
//     listen(port: number, cb?: () => void);
//   }
//   interface Express {
//     (): App;
//     Router(): Router;
//   }
//   const express: Express;
//   export default express;
// }
