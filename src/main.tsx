import { render } from 'preact';
import App from '~/component/App';
import '~/assets/style/root.css';
import 'windi.css';


render(<App />, document.getElementById('app')!);
