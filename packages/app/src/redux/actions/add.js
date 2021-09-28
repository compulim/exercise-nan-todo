const ADD = 'ADD';

export const ADD_PENDING = `${ADD}_PENDING`;
export const ADD_REJECTED = `${ADD}_REJECTED`;
export const ADD_FULFILLED = `${ADD}_FULFILLED`;

// let currentId = 10;

const add = content => {
  return {
    type: ADD,
    meta: { content },
    payload: (async () => {
      const res = await fetch('/api/item', {
        body: JSON.stringify({ content }),
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        method: 'POST'
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status} while adding a new item.`);
      }

      const { id, items } = await res.json();

      return { id, items };

      // id: (currentId++).toString(), content;
    })()
  };
};

export default add;
