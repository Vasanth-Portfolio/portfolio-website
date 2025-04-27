import Html from '../images/brands/html.png';
import Css from '../images/brands/css.png';
import Javascript from '../images/brands/javascript.png';
import ReactLogo from '../images/brands/react.png';
import TypeScriptLogo from '../images/brands/typescript.png';
import Github from '../images/logo/github.png';
import Ruby from '../images/logo/ruby.png';
import Mui from '../images/logo/mui.png';
import Tailwind from '../images/logo/tailwind.png';
import Redux from '../images/logo/redux.png';
import Vite from '../images/logo/vite.png';

export interface ClientData {
	id: number;
	title: string;
	img: string;
  }

export const clientsHeading = 'Some of the technologies I work with';

export const clientsData: ClientData[] = [
  { id: 1, title: 'Html', img: Html },
  { id: 2, title: 'Css', img: Css },
  { id: 3, title: 'Javascript', img: Javascript },
  { id: 4, title: 'React', img: ReactLogo },
  { id: 5, title: 'Typescript', img: TypeScriptLogo },
  { id: 6, title: 'Ruby', img: Ruby },
  { id: 7, title: 'Github', img: Github },
  { id: 8, title: 'Mui', img: Mui },
  { id: 9, title: 'Tailwind', img: Tailwind },
  { id: 10, title: 'Redux', img: Redux },
  { id: 11, title: 'Vite', img: Vite },
];
