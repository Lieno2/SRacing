<script>
    import { t, locale, locales } from "$lib/i18n.ts";
    import Footer from "$lib/components/Footer.svelte";
</script>

<main class="min-h-screen flex flex-col">

    <!-- NAV -->
    <nav class="flex items-center justify-between p-6 border-b border-black/10">
        <img src="" alt="logo" class="h-8 w-auto" />

        <h1 class="text-lg font-medium">
            {$t("homepage.team_name")}
        </h1>

        <select
                bind:value={$locale}
                class="border border-black/20 rounded px-2 py-1 text-sm"
        >
            {#each locales as l}
                <option value={l}>{l}</option>
            {/each}
        </select>
    </nav>

    <!-- PAGE CONTENT -->
    <section class="flex-1">
        <!-- Your page content goes here -->
    </section>

    <!-- FOOTER -->
    <Footer class="mt-auto" />

</main>
