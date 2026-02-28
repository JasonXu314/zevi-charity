<script lang="ts">
	import { Heart, Mail, MapPin } from '@lucide/svelte';
</script>

<footer class="bg-navy text-secondary-foreground">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<a href="/" class="flex items-center gap-2 mb-4">
					<div class="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
						<Heart class="w-5 h-5 text-primary-foreground" />
					</div>
					<div>
						<h3 class="font-serif text-lg font-semibold">Tsfat Families</h3>
						<p class="text-xs text-secondary-foreground/70">Together We Give</p>
					</div>
				</a>
				<p class="text-sm text-secondary-foreground/80 leading-relaxed">
					Supporting families in Tsfat with food, vouchers, and community care during challenging times.
				</p>
			</div>

			<div>
				<h4 class="font-serif text-lg font-semibold mb-4">Quick Links</h4>
				<nav class="flex flex-col gap-2">
					<a href="/" class="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"> Home </a>
					<a href="#donors" class="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"> Our Donors </a>
					<a
						href="https://donate.stripe.com/8x2aEW3QL2Z2eOz2o00ZW00"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
					>
						Donate
					</a>
				</nav>
			</div>

			<div>
				<h4 class="font-serif text-lg font-semibold mb-4">Contact Us</h4>
				<div class="flex flex-col gap-3">
					<div class="flex items-center gap-2 text-sm text-secondary-foreground/80">
						<MapPin class="w-4 h-4 text-gold" />
						<span>Tsfat, Israel</span>
					</div>
					<div class="flex items-center gap-2 text-sm text-secondary-foreground/80">
						<Mail class="w-4 h-4 text-gold" />
						<span>GeulahNow@Proton.Me</span>
					</div>
				</div>
			</div>
		</div>

		<div class="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
			<p class="text-sm text-secondary-foreground/60">
				<!-- © {new Date().getFullYear()} Tsfat Families Fund. All rights reserved. -->
			</p>
		</div>
	</div>
</footer>
