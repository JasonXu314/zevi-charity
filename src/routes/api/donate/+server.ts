import type { RequestHandler } from '@sveltejs/kit';
import { stripe } from '../../../stripeutils';

export const POST: RequestHandler = async (evt) => {
	const body: { amount: number } = await evt.request.json();

	const intent = await stripe.paymentIntents.create({
		amount: body.amount * 100,
		currency: 'usd'
	});

	return new Response(
		JSON.stringify({
			id: intent.id,
			clientSecret: intent.client_secret
		})
	);
};

export const DELETE: RequestHandler = async (evt) => {
	const url = URL.parse(evt.request.url)!;

	const id = url.searchParams.get('id');

	if (id !== null) {
		await stripe.paymentIntents.cancel(id).catch();
	}

	return new Response();
};
