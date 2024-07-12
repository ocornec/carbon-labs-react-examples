## Carbon Labs React example

To try the example, run:

### `npm start`

Create a React Object from LIT web-component:

### ChatComponent.js

```js
import { createComponent } from '@lit/react';
import React from 'react';
import CLABSChat from '@carbon-labs/ai-chat/es/components/chat/chat.js';

export const Chat = createComponent({
  tagName: 'clabs-chat',

  elementClass: CLABSChat,

  react: React,

  events: {},
});
```

Then import it with:

### App.js

```js
import './App.css';
import { Chat } from './ChatComponent';
import conversationExample from './sampleConversation.json';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Chat conversation={conversationExample}></Chat>
      </div>
    </div>
  );
}

export default App;
```
