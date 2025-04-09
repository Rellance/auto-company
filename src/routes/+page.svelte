<script lang="ts">
	import Description from '$lib/components/Description.svelte';
	import { Calendar, Cog, Map, SwissFranc } from 'lucide-svelte';

	export let data;
	const { autos, autos_road } = data;
</script>

<div class="flex w-full flex-col items-center justify-start">
	<div class="relative flex h-full w-full flex-col items-center">
		<img
			class="absolute hidden h-full w-full object-cover brightness-80 md:block"
			src="/assets/auto_home.png"
			alt="auto_home"
		/>
		<img
			class="absolute block h-full w-full object-cover md:hidden"
			src="/assets/auto_home_mob.png"
			alt="auto_home"
		/>
		<div class="absolute mt-10 flex h-full w-full max-w-[1280px] flex-col items-start gap-6 p-5">
			<div class="flex w-full flex-col-reverse items-start justify-between md:flex-row">
				<h2 class="text-4xl font-extrabold leading-snug text-white md:text-5xl">
					Авто з <span class="text-[var(--primary-color)]">Європи</span>
					<br />
					з перевіреним пробігом
					<br />
					без пошкоджень
				</h2>
				<a
					href="#reviews"
					class="ml-auto flex items-center gap-4 rounded-2xl bg-white/70 px-6 py-3 shadow-lg hover:bg-white/80 transition-all"
				>
					<b class="text-3xl text-[var(--primary-color)]">2000+</b>
					<span class="text-lg text-gray-800 leading-tight">
						задоволених
						<br />
						клієнтів
					</span>
				</a>
			</div>
			<a href="/" class="text-2xl text-white hover:text-[var(--primary-color)]">
				Залиште заявку та отримайте безкоштовний
				<br />
				підбір авто з гарантією ціни під ключ
			</a>
		</div>
	</div>
	<div class="flex h-full w-full max-w-[1280px] flex-col items-center gap-4 py-5">
		<h2
			class="flex flex-col items-center py-3.5 text-center text-2xl after:h-[1px] after:w-[170px] after:bg-gray-400 after:content-['']"
		>
			Авто в наявності
		</h2>
		{#if autos && autos.length > 0}
			<div class="grid h-full grid-cols-1 gap-5 md:grid-cols-3">
				{#each autos as auto}
					<div class="relative max-w-sm rounded-md bg-[#d2d2d282]">
						<img class="rounded-lg" src={`/api/photos/${auto.photoUrl}`} alt="" />
						<span class="absolute top-0 right-0 rounded-lg bg-red-600 p-1 px-2 text-sm text-white">
							<b>В наявності</b>
						</span>
						<div class="flex w-full flex-col items-center gap-2 px-4">
							<div class="w-full border-b border-gray-400/50 py-2">
								<h2 class="text-center text-2xl font-light">{auto.title}</h2>
							</div>
							<div class="grid w-full grid-cols-2 gap-3">
								<div class="flex gap-2">
									<Calendar color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.yearManufacture} рік</p>
								</div>
								<div class="flex gap-2">
									<SwissFranc color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.carobTransfers}</p>
								</div>
								<div class="flex gap-2">
									<Map color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.mileage} тис. км</p>
								</div>
								<div class="flex gap-2">
									<Cog color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.engineType}</p>
								</div>
							</div>
							<div class="flex w-full justify-between py-3">
								<h3 class="text-2xl font-bold text-red-600">{auto.price.toLocaleString()} $</h3>
								<a class="rounded-xl bg-red-600 px-4 py-2 font-bold text-white" href="/">
									Детальніше
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		<h2
			class="flex flex-col items-center py-3.5 text-center text-2xl after:h-[1px] after:w-[170px] after:bg-gray-400 after:content-['']"
		>
			Авто у дорозі
		</h2>
		{#if autos_road && autos_road.length > 0}
			<div class="grid h-full grid-cols-1 gap-5 md:grid-cols-3">
				{#each autos_road as auto}
					<div class="relative max-w-sm rounded-md bg-[#d2d2d282]">
						<img class="rounded-lg" src={`/api/photos/${auto.photoUrl}`} alt="" />
						<span class="absolute top-0 right-0 rounded-lg bg-red-600 p-1 px-2 text-sm text-white">
							<b>В дорозі</b>
						</span>
						<div class="flex w-full flex-col items-center gap-2 px-4">
							<div class="w-full border-b border-gray-400/50 py-2">
								<h2 class="text-center text-2xl font-light">{auto.title}</h2>
							</div>
							<div class="grid w-full grid-cols-2 gap-3">
								<div class="flex gap-2">
									<Calendar color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.yearManufacture} рік</p>
								</div>
								<div class="flex gap-2">
									<SwissFranc color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.carobTransfers}</p>
								</div>
								<div class="flex gap-2">
									<Map color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.mileage} тис. км</p>
								</div>
								<div class="flex gap-2">
									<Cog color="rgba(0, 0, 0, 0.7)" />
									<p>{auto.engineType}</p>
								</div>
							</div>
							<div class="flex w-full justify-between py-3">
								<h3 class="text-2xl font-bold text-red-600">{auto.price.toLocaleString()} $</h3>
								<a class="rounded-xl bg-red-600 px-4 py-2 font-bold text-white" href="/">
									Детальніше
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div class="flex w-full justify-center bg-[#232323] py-5">
		<div class="grid w-full max-w-[1080px] grid-cols-1 gap-2 md:grid-cols-3">
			<div
				class="flex flex-col items-center gap-2 border-b border-white/50 md:border-r md:border-b-0"
			>
				<h2 class="text-5xl font-bold text-red-600">100+</h2>
				<p class="text-xl text-white">авто на майданчику</p>
			</div>
			<div
				class="flex flex-col items-center gap-2 border-b border-white/50 md:border-r md:border-b-0"
			>
				<h2 class="text-5xl font-bold text-red-600">2000+</h2>
				<p class="text-xl text-white">щасливих клієнтів</p>
			</div>
			<div class="flex flex-col items-center gap-2 border-white/50">
				<h2 class="text-5xl font-bold text-red-600">10+</h2>
				<p class="text-xl text-white">років роботи компанії</p>
			</div>
		</div>
	</div>
	<Description />
</div>
