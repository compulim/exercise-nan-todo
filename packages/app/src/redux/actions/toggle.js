const TOGGLE = 'TOGGLE';

export const TOGGLE_FULFILLED = `${TOGGLE}_FULFILLED`;
export const TOGGLE_PENDING = `${TOGGLE}_PENDING`;
export const TOGGLE_REJECTED = `${TOGGLE}_REJECTED`;

const toggle = (id, toggled) => {
  return {
    type: 'TOGGLE',
    meta: { id, toggled },
    payload: (async () => {
      const res = await fetch(`/api/item/${encodeURI(id)}/completed`, {
        body: JSON.stringify({ toggled }),
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        method: 'PUT'
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status} while toggling completion for item ${id}.`);
      }

      const { items } = await res.json();

      return { items };
    })()
  };
};

export default toggle;
