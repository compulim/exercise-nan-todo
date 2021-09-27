
let currentId = 10;

export const add = content => {
  return {
    type: 'ADD',
    id: (currentId++).toString(),
    content
  }
}