import { createRoot } from 'react-dom';
import App from './App.jsx';

console.log('process.env-->', process.env);

if (process.env.mock) {
  require('./mock');
}

const root = createRoot(document.getElementById('app'));

root.render(<App />);
