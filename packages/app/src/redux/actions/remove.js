const REMOVE = 'REMOVE';

export const REMOVE_FULFILLED = `${REMOVE}_FULFILLED`;
export const REMOVE_PENDING = `${REMOVE}_PENDING`;
export const REMOVE_REJECTED = `${REMOVE}_REJECTED`;

const remove = id => {
  return {
    type: 'REMOVE',
    meta: { id },
    payload: (async () => {
      const res = await fetch(`/api/item/${encodeURI(id)}`, {
        headers: { accept: 'application/json' },
        method: 'DELETE'
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status} while removing an item.`);
      }

      const { items } = await res.json();

      return { items };
    })()
  };
};

export default remove;
