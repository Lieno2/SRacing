<script>
    // @ts-ignore
    import { t } from "$lib/i18n";
    import { base } from '$app/paths'
    import sponsors from "$lib/data/sponsors.json" with { type: "json" }
</script>

<section class="py-20 px-6 md:px-10 bg-gray-900/60 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14 space-y-3">
            <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">Partners</p>
            <h2 class="text-3xl md:text-4xl font-black text-white">{$t("homepage.partners_sponsors")}</h2>
            <p class="text-gray-400 max-w-xl mx-auto">{$t("homepage.sponsors_description")}</p>
        </div>

        <div class="flex flex-wrap justify-center gap-5">
            {#each sponsors as sponsor}
                <a href={sponsor.href} target="_blank" rel="noopener noreferrer" class="group">
                    <!-- Dark outer card -->
                    <div class="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gray-800/60
                                border border-white/8 group-hover:border-white/15
                                group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-black/30
                                transition-all duration-300 p-3 flex items-center justify-center">
                        <!-- White inner area for logo clarity -->
                        <div class="w-full h-full bg-white rounded-xl flex items-center justify-center p-3">
                            {#if sponsor.logo_href_secondary}
                                <div class="flex flex-col items-center gap-1.5 w-full">
                                    <img src={`${base}/${sponsor.logo_href}`}           alt={sponsor.name} class="max-h-9 max-w-full object-contain" loading="lazy" />
                                    <div class="w-3/4 h-px bg-gray-200"></div>
                                    <img src={`${base}/${sponsor.logo_href_secondary}`} alt={sponsor.name} class="max-h-9 max-w-full object-contain" loading="lazy" />
                                </div>
                            {:else}
                                <img src={`${base}/${sponsor.logo_href}`}
                                     alt={sponsor.name || "Sponsor"}
                                     class="max-h-16 max-w-full object-contain" loading="lazy" />
                            {/if}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
