/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const kV: KeyValuePair<string, string> = {
  key: "Name",
  value: "5",
};
const kV1: KeyValuePair<string, number> = {
  key: "price",
  value: 5,
};

export {};
