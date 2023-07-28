import { Dictionaries } from "../enum";

export type Key = string;
export type Expire = Dictionaries.permanent | number; // 可以传入时间戳，不传就是永久
// 我们自定义的本地存储的数据格式
export interface Data<T> {
  value: T;
  [Dictionaries.expire]: Expire;
}
export interface Result<T> {
  message: string;
  value: T | null;
}

export interface StrorageClass {
  get: <T>(key: Key) => Result<T | null>;
  set: <T>(key: Key, value: T, expire: Expire) => void;
  remove: (key: Key) => void;
  clear: () => void;
}
