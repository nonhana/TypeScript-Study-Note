// expire过期时间key,permanent永不过期
import { StrorageClass, Key, Expire, Data, Result } from "./type";
import { Dictionaries } from "./enum";
export class Strorage implements StrorageClass {
  get = <T>(key: Key): Result<T | null> => {
    const value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      // 判断这个本地存储是否过期
      if (
        typeof data[Dictionaries.expire] === "number" &&
        data[Dictionaries.expire] < now
      ) {
        this.remove(key);
        return {
          message: `您的${key}本地存储关键字已经过期了`,
          value: null,
        };
      } else {
        return {
          message: "获取key成功！",
          value: data.value,
        };
      }
    } else {
      return {
        message: "您输入的key无效，本地找不到",
        value: null,
      };
    }
  };
  set = <T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) => {
    // 自定义存储在localStorage中的数据格式。
    const data = {
      value, // 用户想要存的value
      [Dictionaries.expire]: expire, // 存储过期的时间
    };
    localStorage.setItem(key, JSON.stringify(data));
  };
  remove = (key: Key) => {
    localStorage.removeItem(key);
  };
  clear = () => {
    localStorage.clear();
  };
}
