import { redirect, type RequestHandler } from '@sveltejs/kit';
import { donors } from '../../../dbutils';
import { stripe } from '../../../stripeutils';

export const GET: RequestHandler = async (evt) => {
	const url = URL.parse(evt.request.url)!;

	const id = url.searchParams.get('payment_intent'),
		client_secret = url.searchParams.get('payment_intent_client_secret'),
		message = url.searchParams.get('message'),
		name = url.searchParams.get('name');

	if (id === null || client_secret === null || name === null) return redirect(303, '/');

	const intent = await stripe.paymentIntents.retrieve(id, { client_secret });

	await donors.then((donors) =>
		donors.insertOne({
			name,
			message,
			amount: intent.amount,
			email: intent.receipt_email
		})
	);

	return redirect(303, '/');
};
