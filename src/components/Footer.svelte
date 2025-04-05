<script>
	import { Facebook, Instagram, Mail, MessageCircle, Phone, Send, Youtube } from 'lucide-svelte';
</script>

<footer class="flex w-full mt-auto justify-center bg-[#232323]">
	<div class="flex w-full max-w-[1280px] flex-col gap-4">
		<div>
			<a href="/" class="mx-4">
				<img class="max-h-[46px] lg:max-h-full" src="/logo.png" alt="logo" />
			</a>
		</div>
		<a class="text-md flex items-center gap-1 text-white" href="tel:067-652-71-53">
			<Phone color="var(--primary-color)" />
			067-652-71-53
		</a>
		<a class="text-md flex items-center gap-1 text-white" href="mailto:autocompany2@gmail.com">
			<Mail color="var(--primary-color)" />
			autocompany2@gmail.com
		</a>
		<div class="flex gap-4 text-white">
			<Instagram />
			<Youtube />
			<Facebook />
			<MessageCircle />
			<Send />
		</div>
		<a class="text-center text-white" href="/">ТОВ авто і компанія © 2025 всі права захищені.</a>
	</div>
</footer>
