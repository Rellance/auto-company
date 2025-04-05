<!-- src/lib/components/ui/Dropdown.svelte -->
<script lang="ts">
	import { fade } from 'svelte/transition';

	export let triggerText: string = 'Меню';
	export let position: string = 'bottom';
	export let disabled: boolean = false;
	export const variant: string = 'default';

	let isOpen: boolean = false;
	let timeout: number = NaN;

	function handleEnter() {
		if (!disabled) {
			clearTimeout(timeout);
			isOpen = true;
		}
	}

	function handleLeave() {
		if (!disabled) {
			timeout = setTimeout(() => {
				isOpen = false;
			}, 150);
		}
	}
</script>

<div class="dropdown" class:disabled>
	<button
		class="dropdown-trigger"
		class:{variant}
		{disabled}
		aria-haspopup="true"
		aria-expanded={isOpen}
		on:mouseenter={handleEnter}
	>
		<slot name="trigger">{triggerText}</slot>
		<svg
			class="arrow"
			class:rotated={isOpen}
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<path d="M6 9l6 6 6-6" />
		</svg>
	</button>

	{#if isOpen}
		<div
			on:mouseleave={handleLeave}
			class="dropdown-menu"
			class:bottom={position === 'bottom'}
			class:top={position === 'top'}
			class:left={position === 'left'}
			class:right={position === 'right'}
			role="menu"
			tabindex="-1"
			transition:fade={{ duration: 200 }}
		>
			<ul class="p-2">
				<slot></slot>
			</ul>
		</div>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		cursor: pointer;
	}

	.dropdown-trigger {
		padding: 5px;
		border: none;
		cursor: pointer;
		font-size: 14px;
		transition: all 0.2s ease;
		background: transparent;
		display: flex;
		align-items: center;
		text-transform: uppercase;
	}

	.dropdown-trigger:hover:not(:disabled) {
		opacity: 0.9;
	}

	.dropdown-trigger:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.dropdown-menu {
		position: absolute;
		background: #ffffff;

		min-width: 160px;
		padding: 5px;
		z-index: 1000;
	}

	.bottom {
		top: calc(100% + 10px);
		left: 0;
	}

	.top {
		bottom: calc(100% + 4px);
		left: 0;
	}

	.left {
		right: calc(100% + 4px);
		top: 0;
	}

	.right {
		left: calc(100% + 4px);
		top: 0;
	}

	.disabled {
		pointer-events: none;
	}

	.dropdown ul {
		color: rgba(35, 35, 35, 1);
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 14px;
		font-weight: 400;
	}
</style>
