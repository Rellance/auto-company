<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { MinusSquare, PlusSquare, X } from 'lucide-svelte';
	export let isOpen: boolean = false;

	let openSections = {
		catalog: false,
		services: false,
	};

	function closeDrawer() {
		isOpen = false;
	}

	function toggleSection(section: 'catalog' | 'services') {
		openSections[section] = !openSections[section];
	}
</script>

{#if isOpen}
	<div class="bg-opacity-50 fixed inset-0 z-40 bg-white/10" transition:fade={{ duration: 200 }}>
		<div
			class="fixed top-0 left-0 h-full w-3/4 max-w-[400px] bg-[#232323] text-white"
			transition:fly={{ x: -300, duration: 300, opacity: 1 }}
		>
			<div class="flex w-full items-center justify-between">
				<h2 class="px-2 py-3 text-start text-base font-bold">Меню</h2>
				<button class="px-4" on:click={closeDrawer} aria-label="close">
					<X />
				</button>
			</div>
			<nav>
				<ul>
					<li>
						<button
							class="flex w-full justify-between rounded-lg px-4 py-2 text-base transition-colors hover:bg-white/10"
							on:click={() => toggleSection('catalog')}
						>
							Каталог
							{#if openSections.catalog}
								<MinusSquare />
							{:else}
								<PlusSquare />
							{/if}
						</button>
					</li>
					{#if openSections.catalog}
						<div class="px-6 py-4" transition:fly={{ y: -10, duration: 200 }}>
							<ul class="flex flex-col gap-2">
								<li class="hover:text-[var(--primary-color)]">
									<a href="/products/1" class="text-base">Авто в наявності</a>
								</li>
								<li class="hover:text-[var(--primary-color)]">
									<a href="/products/2" class="text-base">Авто в дорозі</a>
								</li>
							</ul>
						</div>
					{/if}
				</ul>
				<ul>
					<li>
						<button
							class="flex w-full justify-between rounded-lg px-4 py-2 text-base transition-colors hover:bg-white/10"
							on:click={() => toggleSection('services')}
						>
							Послуги
							{#if openSections.services}
								<MinusSquare />
							{:else}
								<PlusSquare />
							{/if}
						</button>
					</li>
					{#if openSections.services}
						<div class="px-6 py-4" transition:fly={{ y: -10, duration: 200 }}>
							<ul class="flex flex-col gap-2">
								<li class="hover:text-[var(--primary-color)]">
									<a href="/products/1" class="text-base">Підбір авто</a>
								</li>
								<li class="hover:text-[var(--primary-color)]">
									<a href="/products/2" class="text-base">Доставка авто з Європи</a>
								</li>
								<li class="hover:text-[var(--primary-color)]">
									<a href="/products/2" class="text-base">TRADE-IN</a>
								</li>
							</ul>
						</div>
					{/if}
				</ul>

				<a href="/services" class="block rounded-lg px-4 py-2 transition-colors">Про нас</a>
				<a href="/contact" class="block rounded-lg px-4 py-2 transition-colors">Контакти</a>
			</nav>
		</div>
	</div>
{/if}
