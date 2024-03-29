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
		tags0: string;
		tags1: string;
		player_class: string;
	};
	slug: string;
};

const load = async ({
	url
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	url: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Promise<{ clips: Clip[]; pathname: any; tags: Set<string> }> => {
	const clips = [];

	// making the first query to the CMS
	// also informs us how many more pages of data we have to make a request for
	// via `data.meta`
	const res = await fetch(
		'https://strapi.moodyrahman.com/api/d2-clips?sort=source_creation:desc&pagination[pageSize]=25',
		{
			headers: {
				Authorization: `Bearer ${STRAPI_KEY}`
			}
		}
	);

	const data = await res.json();
	const slugger = data.data.map((x: Clip) => ({
		...x,
		slug: x.attributes.url.slice(x.attributes.url.lastIndexOf('/'), x.attributes.url.length - 4)
	}));
	clips.push(...slugger);
	// if there are additional pages of data we need to query...
	if (data.meta.pagination.pageCount > 1) {
		const reqs = [...Array(data.meta.pagination.pageCount).keys()] // generate an array of length "remaining pages of data"
			.map((x) => x + 2) // transform it so it starts from the second page (strapi starts pages from 1)
			.map((x) => {
				// generate the fetch Promise for each page and return them
				return fetch(
					`https://strapi.moodyrahman.com/api/d2-clips?sort=source_creation:desc&pagination[pageSize]=25&pagination[page]=${x}`,
					{
						headers: {
							Authorization: `Bearer ${STRAPI_KEY}`
						}
					}
				);
			});

		const page_data = await Promise.all(reqs); // resolve all the promises
		const page_json = await Promise.all(page_data.map((x) => x.json()));
		page_json.forEach(async (x) => {
			clips.push(
				...x.data.map((x: Clip) => ({
					...x,
					slug: x.attributes.url.slice(
						x.attributes.url.lastIndexOf('/'),
						x.attributes.url.length - 4
					)
				}))
			);
		});
	}

	const alltags = new Set<string>();

	clips.forEach((x: Clip) => {
		x.attributes.tags0 ? alltags.add(x.attributes.tags0) : '';
		x.attributes.tags1 ? alltags.add(x.attributes.tags1) : '';
	});

	return {
		clips: clips,
		pathname: url.pathname,
		tags: alltags
	};
};

export { load };

export type { Clip };
