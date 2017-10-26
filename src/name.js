import text from './name.json';
import styles from './name.css';
let el = document.createElement('h1');
el.className = styles.root;
el.textContent = text.name + '改动了';

export default el;