# exercise-nan-todo

## What we did

- First week
   - To-do app with Redux data store
      - Nan: Redux data store and wiring
      - William: HTML and CSS
- Second week
   - Nan: Time-travelling with a custom UI
   - William: Add a server (REST using Express)

## What to try out next

- Switch roles (data layer vs. UI layer)
   - Upgrade to TypeScript scaffold
- Use some other packages
   - Redux -> Recoil
   - Redux -> useReducer
   - CSS-in-JS -> Emotion
- Add features
   - Undo via <kbd>CTRL</kbd> + <kbd>Z</kbd>
   - Add a Web Socket server for collab-edit
   - Upgrade to TypeScript scaffold
   - Add ESLint

```
export default function () {
}

module.exports = {
   default: function () {}
};g

import { default } from 'abc';
import { name as newName  } from 'abc';
```

## Conflict resolution

### Undoing an add

1. User A: Add "Buy eggs"
2. User B: Checked off "Buy eggs"
3. User A: Undo "Buy eggs"

#### Resolving conflicts

- User A should not be able to remove "Buy eggs" by undo-ing
- Show an error message
- User A can press "Remove" button to manually remove it
