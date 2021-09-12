import { Button } from 'antd';
import { useState } from 'react';

import { HelloTemplate } from '@/components';

import './App.scss';
// use svg as ReactComponent
import { ReactComponent as Logo } from './assets/logo.svg';

const App = () => {
  const [count, setCount] = useState(0);
  // using env variable
  console.log('TEST_MODE', import.meta.env.TEST_MODE);
  return (
    <div className="App">
      <header className="App-header">
        <Logo height="240" width="240" />
        <HelloTemplate />
        <p>
          <Button type="primary" size="large" onClick={() => setCount((num) => num + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
