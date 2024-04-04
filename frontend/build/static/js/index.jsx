// import 'css/styles.css';
import { createRoot } from 'react-dom/client';
import { user } from 'js/login.js';

console.log('index')
const userNode = document.getElementById('user');
userRoot = createRoot(userNode)
userRoot.render(<user />);