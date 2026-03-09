<script>
    import LanguageSwapper from './LanguageSwapper.svelte';
    import { locale } from "$lib/i18n";
    import { base } from '$app/paths';
    export let t;
</script>

<main>
    <nav class="flex items-center justify-between px-8 py-4 border-b border-black/10">
        <img src="{base}/logo.svg" alt="logo" class="h-12 w-auto" />
        <h1 class="text-lg font-semibold tracking-tight">{$t("team.title")}</h1>

        <!-- Flag + LanguageSwapper container -->
        <div class="flex items-center gap-3">
            <img
                    src={`${base}/flag-${$locale}.svg`}
                    alt="{$locale.toUpperCase()} flag"
                    class="w-12.5 h-10 "
            />

            <LanguageSwapper/>
        </div>
    </nav>
</main>