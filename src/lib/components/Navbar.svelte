<script>
    import { onMount } from 'svelte';
    import LanguageSwapper from './LanguageSwapper.svelte';
    import { locale } from "$lib/i18n";
    import { base } from '$app/paths';
    export let t;

    let scrolled = false;
    onMount(() => {
        const fn = () => { scrolled = window.scrollY > 40; };
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500
            {scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30' : 'bg-transparent'}">
    <div class="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        <a href="{base}/" class="flex items-center shrink-0">
            <img src="{base}/logo.svg" alt="Pegaso Team" class="h-9 w-auto" />
        </a>

        <div class="hidden md:flex items-center gap-8">
            <a href="{base}/"        class="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200">Home</a>
            <a href="{base}/team"    class="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200">{$t("team.title")}</a>
            <a href="{base}/project" class="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200">{$t("footer.project.project")}</a>
        </div>

        <div class="flex items-center gap-3">
            <img src={`${base}/flag-${$locale}.svg`} alt="{$locale.toUpperCase()} flag" class="h-5 w-auto rounded-sm opacity-70" />
            <LanguageSwapper />
        </div>
    </div>
</nav>
