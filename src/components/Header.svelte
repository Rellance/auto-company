<script lang="ts">
	import Drawer from '$lib/components/Drawer.svelte';
	import Dropdown from '../lib/components/Dropdown.svelte';

	let isOpenDrawer: boolean = $state(false);
</script>

<header
	class="z-10 flex h-[65px] w-full items-center justify-center bg-[#232323] text-white md:h-[80px]"
>
	<div class="mx-auto flex w-full max-w-[1280px] items-center justify-between">
		<a href="/" class="mx-4">
			<img class="max-h-[46px] lg:max-h-full" src="/logo.png" alt="logo" />
		</a>
		<nav class="mx-4 hidden items-center gap-3 lg:flex">
			<Dropdown triggerText="Каталог" position="bottom" variant="primary">
				<li class="hover:text-[var(--primary-color)]">
					<a href="/products/1" class="dropdown-item">Авто в наявності</a>
				</li>
				<li class="hover:text-[var(--primary-color)]">
					<a href="/products/2" class="dropdown-item">Авто в дорозі</a>
				</li>
			</Dropdown>
			<Dropdown triggerText="послуги" position="bottom" variant="primary">
				<li class="hover:text-[var(--primary-color)]">
					<a href="/products/1" class="dropdown-item">Підбір авто</a>
				</li>
				<li class="hover:text-[var(--primary-color)]">
					<a href="/products/2" class="dropdown-item">Доставка авто з Європи</a>
				</li>
				<li class="hover:text-[var(--primary-color)]">
					<a href="/products/2" class="dropdown-item">TRADE-IN</a>
				</li>
			</Dropdown>
			<a href="/pro-nas">Про нас</a>
			<a href="/about-us">Контакти</a>
			<a class="flex items-center gap-1" href="tel:067-652-71-53">
				<ion-icon name="call"></ion-icon>
				067-652-71-53
			</a>
			<a href="/" aria-label="facebook">
				<ion-icon name="logo-facebook"></ion-icon>
			</a>
			<a href="/" aria-label="youtube">
				<ion-icon name="logo-youtube"></ion-icon>
			</a>
		</nav>
		<nav class="flex gap-2 px-4 lg:hidden">
			<button
				onclick={() => {
					isOpenDrawer = !isOpenDrawer;
				}}
				class="flex flex-col items-center text-4xl leading-none"
			>
				<ion-icon name="menu"></ion-icon>
				<span class="text-base">Меню</span>
			</button>
			<a aria-label="phone" class="flex items-center text-4xl" href="tel:067-652-71-53">
				<ion-icon name="call"></ion-icon>
			</a>
		</nav>
	</div>
</header>
<Drawer isOpen={isOpenDrawer} />
