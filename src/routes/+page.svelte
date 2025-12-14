
<script>
    import { t, locale, locales } from "$lib/i18n.ts";

</script>

<main>
    <p>
        <select bind:value={$locale}>
            {#each locales as l}
                <option value={l}>{l}</option>
            {/each}
        </select>
    </p>

    <h1>{$t("homepage.title")}!</h1>
</main>

<style>
    main {
        max-width: 24rem;
        margin: 3rem auto;
        padding: 0 1.5rem;
    }
</style>
