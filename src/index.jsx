import { hydrate, prerender as ssr } from 'preact-iso';
import NavBar from './NavMenu/NavBar';
import './index.css'
import HomePage from './HomePage/HomePage';

export function App() {
	return (
		<>

		<div>
			<NavBar></NavBar>
			<HomePage></HomePage>
		</div>
		</>
	);
}



if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
