import type { RequestHandler } from '@sveltejs/kit';
import { donors } from '../../../dbutils';

export const GET: RequestHandler = async () => {
	return new Response(JSON.stringify(await donors.then((donors) => donors.find().toArray())));
};
