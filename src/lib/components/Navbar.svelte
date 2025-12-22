<script>
    import LanguageSwapper from './LanguageSwapper.svelte';
    import { locale } from "$lib/i18n.ts"; // Import locale store
    export let t;
</script>

<main>
    <nav class="flex items-center justify-between px-8 py-4 border-b border-black/10 mt-4">
        <img src="logo.svg" alt="logo" class="h-12 w-auto" />
        <h1 class="text-lg font-semibold tracking-tight">{$t("team.title")}</h1>

        <!-- Flag + LanguageSwapper container -->
        <div class="flex items-center gap-3">
            <!-- Dynamic flag from locale store -->
            <img
                    src={`/flag-${$locale}.svg`}
                    alt="{$locale.toUpperCase()} flag"
                    class="w-[50px] h-[40px] "
            />

            <!-- LanguageSwapper stays exactly the same -->
            <LanguageSwapper class="w-[10px]" />
        </div>
    </nav>
</main>
