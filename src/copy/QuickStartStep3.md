ts
```tsx
import { withStore } from './MyStore'

// Update the component when the store updates
const MyComponent = withStore(({ store }) =>
  <div>
    You've clicked the button {store.get('clickCount')} times.
    <button onClick={() =>
      store.set('clickCount')(store.get('clickCount') + 1)
    }>{store.get('buttonText')}</button>
  </div>
)
```

flow
```jsx
import { StoreProps, withStore } from './MyStore'

// Update the component when the store updates
const MyComponent = withStore(({ store }: StoreProps) =>
  <div>
    You've clicked the button {store.get('clickCount')} times.
    <button onClick={() =>
      store.set('clickCount')(store.get('clickCount') + 1)
    }>{store.get('buttonText')}</button>
  </div>
)
```

es6
```jsx
import { withStore } from './MyStore'

// Update the component when the store updates
const MyComponent = withStore(({ store }) =>
  <div>
    You've clicked the button {store.get('clickCount')} times.
    <button onClick={() =>
      store.set('clickCount')(store.get('clickCount') + 1)
    }>{store.get('buttonText')}</button>
  </div>
)
```

es5
```js
var store = require('./MyStore')

// Update the component when the store updates
var MyComponent = store.withStore(function(props) {
  return <div>
    You've clicked the button {store.get('clickCount')} times.
    <button onClick={function() {
      store.set('clickCount')(store.get('clickCount') + 1)
    }}>{store.get('buttonText')}</button>
  </div>
})
```