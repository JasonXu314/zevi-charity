import { STRIPE_KEY } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_KEY);

export const POST: RequestHandler = async () => {
	const intent = await stripe.paymentIntents.create({
		amount: 200,
		currency: 'usd'
	});

	return new Response(
		JSON.stringify({
			secret: intent.client_secret
		})
	);
};
