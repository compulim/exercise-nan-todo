import { ActionType } from 'redux-promise-middleware';

const FETCH = 'FETCH';

export const FETCH_PENDING = `${FETCH}_${ActionType.Pending}`;
export const FETCH_REJECTED = `${FETCH}_${ActionType.Rejected}`;
export const FETCH_FULFILLED = `${FETCH}_${ActionType.Fulfilled}`;

const fetchItems = () => {
  return {
    type: FETCH,
    payload: (async () => {
      const res = await fetch('/api/item', {
        headers: { accept: 'application/json' }
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status} while fetching list of items.`);
      }

      const { items } = await res.json();

      return { items };
    })()
  };
};

export default fetchItems;
