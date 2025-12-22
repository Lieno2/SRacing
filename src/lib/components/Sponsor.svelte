<script>
    import { t } from "$lib/i18n.ts"
    import sponsors from "$lib/data/sponsors.json"

    $: sponsorCount = sponsors.length
</script>

<main>
    <section class="py-20 px-6 md:px-12 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <div class="inline-flex items-center gap-3 bg-blue-100/80 px-4 py-2 rounded-full mb-6">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                    {$t("homepage.partners_sponsors")}
                </h2>
            </div>
            <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {$t("homepage.sponsors_description")}
            </p>
        </div>

        <!-- Centered row, responsive wrap -->
        <div
                class="max-w-5xl mx-auto flex flex-wrap justify-center gap-8"
        >
            {#each sponsors as sponsor}
                <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
                    <div
                            class="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 p-4 sm:p-6 flex items-center justify-center"
                    >
                        <img
                                src={sponsor.logo_href}
                                alt={sponsor.name || "Sponsor logo"}
                                class="max-h-20 max-w-24 sm:max-h-24 sm:max-w-28 object-contain"
                                loading="lazy"
                        />
                    </div>
                </a>
            {/each}
        </div>
    </section>

</main>
