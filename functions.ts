export interface User {
  name: string;
  age: number;
}

export function getUser(): User {
  return {
    name: "John",
    age: 30,
  };
}