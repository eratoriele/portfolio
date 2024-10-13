<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import svelte from '$lib/svelte.svg';
	import ts from '$lib/ts.svg';
	import tailwind from '$lib/tailwind.svg';
	import dotnet from '$lib/dotnet.svg';
	import mysql from '$lib/mysql.svg';
	import mariadb from '$lib/mariadb.svg';
	import nginx from '$lib/nginx.svg';

	interface technology {
		icon: string;
		name: string;
	}


	const popupCvHover: PopupSettings = {
		event: 'hover',
		target: 'cvHover',
		placement: 'bottom'
	};
	const popupEmailHover: PopupSettings = {
		event: 'hover',
		target: 'emailHover',
		placement: 'bottom'
	};
	const frontEndTechs: technology[] = [
		{
			icon: '<div class="flex justify-center"><img src="' + ts + '" alt="" width="80" >',
			name: 'Typescript'
		},
		{
			icon: '<i class="fa-brands fa-square-js fa-5x text-yellow-400"></i>',
			name: 'Javascript'
		},
		{
			icon: '<div class="flex justify-center"><img src="' + svelte + '" alt="" width="80" >',
			name: 'Svelte'
		},
		{
			icon: '<i class="fa-brands fa-flutter fa-5x text-sky-400"></i>',
			name: 'Flutter'
		},
		{
			icon: '<i class="fa-brands fa-react fa-5x text-sky-600"></i>',
			name: 'React'
		},
		{
			icon: '<div class="flex justify-center"><img src="' + tailwind + '" alt="" width="80" >',
			name: 'TailwindCSS'
		},
		{
			icon: '<i class="fa-brands fa-sass fa-5x text-pink-600"></i>',
			name: 'Sass'
		},
	];
	const backendTechs: technology[] = [
		{
			icon: '<i class="fa-brands fa-python fa-5x text-yellow-500"></i>',
			name: 'Python'
		},
		{
			icon: '<i class="fa-brands fa-node fa-5x text-lime-600"></i>',
			name: 'NodeJs'
		},
		{
			icon: '<div class="flex justify-center"><img src="' + dotnet + '" alt="" width="80" >',
			name: '.NET'
		},
	];
	const databaseTechs: technology[] = [
		{
			icon: '<div class="flex justify-center"><img src="' + mysql + '" alt="" width="80" >',
			name: 'MySQL'
		},
		{
			icon: '<div class="flex justify-center"><img src="' + mariadb + '" alt="" width="80" >',
			name: 'MariaDB'
		},
	];
	const miscTechs: technology[] = [
		{
			icon: '<div class="flex justify-center"><img src="' + nginx + '" alt="" width="80" >',
			name: 'Nginx'
		},
		{
			icon: '<i class="fa-brands fa-docker fa-5x text-sky-500"></i>',
			name: 'Docker'
		},
		{
			icon: '<i class="fa-brands fa-git-alt fa-5x text-red-700"></i>',
			name: 'Git'
		},
	];
					
</script>


<div class="card p-4 variant-filled" data-popup="cvHover">
	<p>Everything you can see in this page downloaded in a file</p>
	<div class="arrow variant-filled" />
</div>
<div class="card p-4 variant-filled" data-popup="emailHover">
	<p>Best way to get into contact with me</p>
	<div class="arrow variant-filled" />
</div>

<div class="container mx-auto flex items-start fixed top-16 left-8 pointer-events-none">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="flex flex-col gap-2 self-start bg-gradient-to-br from-red-700 to-pink-300 bg-clip-text text-transparent box-decoration-clone">
			<h1 class="h1 pointer-events-auto">Bora Gulerman</h1>
			<h3 class="h3 text-left self-start pointer-events-auto">Full-Stack Developer</h3>
		</div>

		<div class="flex justify-center space-x-2">
			<a class="btn variant-filled-primary pointer-events-auto" href="/cv" target=”_blank” download use:popup={popupCvHover}>
				<span><i class="fa-solid fa-file-pdf"></i></span>
				<span>Download CV</span>
			</a>
			<a class="btn variant-filled-secondary pointer-events-auto" href="https://www.linkedin.com/in/bora-gulerman/" target=”_blank”>
				<span><i class="fa-brands fa-linkedin"></i></span>
				<span>LinkedIn</span>
			</a>
			<a class="btn variant-filled-tertiary pointer-events-auto" href="mailto:boragulerman@gmail.com" target=”_blank” use:popup={popupEmailHover}>
				<span><i class="fa-solid fa-envelope"></i></span>
				<span>Email me</span>
			</a>
		</div>
	</div>
</div>

<div class="flex">
	<div class="min-w-[33%] basis-1/3"><div class="w-full"></div></div>
	<div class="basis-2/3 flex flex-col gap-16">
		<div class="flex flex-col gap-1">
			<h3 class="h3 ml-4 bg-gradient-to-br from-blue-700 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Technologies</h3>

			<div class="flex gap-4">
				<div>
					<h4 class="h4 ml-4 bg-gradient-to-br from-orange-700 to-lime-300 bg-clip-text text-transparent box-decoration-clone">Front-End</h4>
					<div class="snap-x scroll-py-4 snap-mandatory scroll-smooth flex flex-col gap-4 overflow-y-auto px-4 py-5 max-h-96">
						{#each frontEndTechs as t, i}
							<div class="snap-start shrink-0 card py-10 w-40 text-center ">
								<div class="flex flex-col gap-1">
									{@html t.icon}
									{t.name}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<h4 class="h4 ml-4 bg-gradient-to-br from-orange-700 to-lime-300 bg-clip-text text-transparent box-decoration-clone">Back-End</h4>
					<div class="snap-x scroll-py-4 snap-mandatory scroll-smooth flex flex-col gap-4 overflow-y-auto px-4 py-5 max-h-96">
						{#each backendTechs as t, i}
							<div class="snap-start shrink-0 card py-10 w-40 text-center ">
								<div class="flex flex-col gap-1">
									{@html t.icon}
									{t.name}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<h4 class="h4 ml-4 bg-gradient-to-br from-orange-700 to-lime-300 bg-clip-text text-transparent box-decoration-clone">Database</h4>
					<div class="snap-x scroll-py-4 snap-mandatory scroll-smooth flex flex-col gap-4 overflow-y-auto px-4 py-5 max-h-96">
						{#each databaseTechs as t, i}
							<div class="snap-start shrink-0 card py-10 w-40 text-center ">
								<div class="flex flex-col gap-1">
									{@html t.icon}
									{t.name}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<h4 class="h4 ml-4 bg-gradient-to-br from-orange-700 to-lime-300 bg-clip-text text-transparent box-decoration-clone">Misc</h4>
					<div class="snap-x scroll-py-4 snap-mandatory scroll-smooth flex flex-col gap-4 overflow-y-auto px-4 py-5 max-h-96">
						{#each miscTechs as t, i}
							<div class="snap-start shrink-0 card py-10 w-40 text-center ">
								<div class="flex flex-col gap-1">
									{@html t.icon}
									{t.name}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<h3 class="h3 ml-4 bg-gradient-to-br from-blue-700 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Experience</h3>
			<div class="flex flex-col">
				<!-- Dashed part of the timeline -->
				<div class="h-4 border-l border-dashed border-primary-500"></div> 

				<div class="flex flex-col gap-4 border-l px-4 border-primary-500">
					{#each {length: 100} as _, i}
						<div>
							<div class="timeline-arrow variant-filled-primary" />
							<p>{i}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.timeline-arrow {
		height: 0.5rem;
		width: 0.5rem;
		--tw-rotate: 45deg;
		--tw-translate-x: -1.3rem;
		--tw-translate-y: 1rem;
		transform: translate(
			var(--tw-translate-x), 
			var(--tw-translate-y)) 
			rotate(var(--tw-rotate)) 
			skewX(var(--tw-skew-x)) 
			skewY(var(--tw-skew-y)) 
			scaleX(var(--tw-scale-x)) 
			scaleY(var(--tw-scale-y));
	}
	/* figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	} */
</style>
