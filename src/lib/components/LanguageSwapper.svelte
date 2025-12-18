<script>
    import { locale, locales } from "$lib/i18n.ts";
</script>
<main>
    <select
            bind:value={$locale}
            class="border border-black px-2 py-1 text-sm w-[60px]"
    >
        {#each locales as l}
            <option value={l}>
                {l}
            </option>
        {/each}

    </select>

</main>