/** @type {import('./$types').LayoutLoad} */
export const prerender = true;
import { STRAPI_KEY } from '$env/static/private';

type Clip = {
	id: number;
	attributes: {
		title: string;
		description: string;
		source_creation: string;
		url: string;
	};
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const load = async (): Promise<{ clips: Clip[] }> => {
	const res = await fetch(
		'https://strapi.moodyrahman.com/api/d2-clips?sort=source_creation:desc&pagination[pageSize]=200',
		{
			headers: {
				Authorization: `Bearer ${STRAPI_KEY}`
			}
		}
	);

	const data = await res.json();
	console.log(data.meta);
	return {
		clips: data.data
	};
};

export { load };

export type { Clip };
