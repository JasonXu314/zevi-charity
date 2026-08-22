import { DB_URL } from '$env/static/private';
import { MongoClient } from 'mongodb';

export type Donor = {
	name: string;
	email: string | null;
	message: string | null;
	amount: number | null;
};

export const donors = new MongoClient(DB_URL)
	.connect()
	.then((client) => client.db('donors'))
	.then((db) => db.collection<Donor>('donors'));
