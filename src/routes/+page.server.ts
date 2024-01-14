import type { PageServerLoad } from './$types';
import type { CohostPost } from './types';
import cohost from '../../static/feed/cohost.json';

export const load: PageServerLoad = async () => {
	return {
		posts: (cohost.items as CohostPost[])
			.filter(
				(x) =>
					(x.tags.includes('crosspost:jmsfbs.com')) &&
					x.author.name === '@jmsfbs'
			)
			.slice(0, 10)
	};
};
