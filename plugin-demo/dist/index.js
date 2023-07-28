// 字典：Dictionaries
var Dictionaries;
(function (Dictionaries) {
  Dictionaries["permanent"] = "permanent";
  Dictionaries["expire"] = "__expire__";
})(Dictionaries || (Dictionaries = {}));

class Storage {
  constructor() {
    this.get = (key) => {
      const value = localStorage.getItem(key);
      if (value) {
        const data = JSON.parse(value);
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
    this.set = (key, value, expire = Dictionaries.permanent) => {
      // 自定义存储在localStorage中的数据格式。
      const data = {
        value,
        [Dictionaries.expire]: expire, // 存储过期的时间
      };
      localStorage.setItem(key, JSON.stringify(data));
    };
    this.remove = (key) => {
      localStorage.removeItem(key);
    };
    this.clear = () => {
      localStorage.clear();
    };
  }
}

export { Storage };
