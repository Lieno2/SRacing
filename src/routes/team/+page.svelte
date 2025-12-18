<script>
    import { t } from "$lib/i18n.ts";
    import Footer from "$lib/components/Footer.svelte";
    import LanguageSwapper from "$lib/components/LanguageSwapper.svelte";
</script>

<main class="min-h-screen flex flex-col bg-slate-50">
    <!-- NAV -->
    <nav class="flex items-center justify-between px-8 py-4 border-b border-black/10 mt-4">
        <img src="" alt="logo" class="h-8 w-auto" />

        <h1 class="text-lg font-semibold tracking-tight">
            {$t("homepage.team_name")}
        </h1>

        <LanguageSwapper class="w-[220px]" />
    </nav>

    <!-- MAIN SECTION -->
    <section class="flex-1">
        <div
                class="mx-6 md:mx-12 my-12 flex flex-col md:flex-row gap-6 md:h-[70dvh]"
        >
            <!-- Marketing card -->
            <article
                    class="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 w-full md:h-full flex flex-col"
            >
                <div class="relative h-60 md:h-80">
                    <img
                            src="/images/marketing.jpeg"
                            alt="Team marketing"
                            class="w-full h-full object-cover"
                    />
                    <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    ></div>

                    <div class="absolute bottom-4 left-4 right-4 text-left">
                        <p class="text-xs font-medium uppercase tracking-wide text-white/70">
                            {$t("team.marketing")}
                        </p>
                        <h2 class="text-xl font-semibold text-white">
                            {$t("team.marketing_headline")}
                        </h2>
                    </div>
                </div>

                <div class="p-6 flex flex-col gap-4 flex-1">
                    <p class="text-sm text-gray-600">
                        {$t("team.marketing_description")}
                    </p>

                    <button
                            class="mt-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        {$t("common.contact_us")}
                    </button>
                </div>
            </article>

            <!-- Engineering card -->
            <article
                    class="bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 w-full md:h-full flex flex-col overflow-hidden"
            >
                <div class="h-40 md:h-56 bg-slate-100">
                    <img
                            src=""
                            alt="team engineering"
                            class="w-full h-full object-cover"
                    />
                </div>

                <div class="p-6 flex flex-col gap-3 flex-1">
                    <h2 class="text-lg font-semibold text-gray-900">
                        {$t("team.engineering")}
                    </h2>
                    <p class="text-sm text-gray-600">
                        {$t("team.engineering_description")}
                    </p>
                </div>
            </article>

            <!-- Communication card -->
            <article
                    class="bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 w-full md:h-full flex flex-col overflow-hidden"
            >
                <div class="h-40 md:h-56 bg-slate-100">
                    <img
                            src=""
                            alt="team communication"
                            class="w-full h-full object-cover"
                    />
                </div>

                <div class="p-6 flex flex-col gap-3 flex-1">
                    <h2 class="text-lg font-semibold text-gray-900">
                        {$t("team.comunication")}
                    </h2>
                    <p class="text-sm text-gray-600">
                        {$t("team.comunication_description")}
                    </p>
                </div>
            </article>

            <!-- Project management card -->
            <article
                    class="bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 w-full md:h-full flex flex-col overflow-hidden"
            >
                <div class="h-40 md:h-56 bg-slate-100">
                    <img
                            src=""
                            alt="team project management"
                            class="w-full h-full object-cover"
                    />
                </div>

                <div class="p-6 flex flex-col gap-3 flex-1">
                    <h2 class="text-lg font-semibold text-gray-900">
                        {$t("team.project_management")}
                    </h2>
                    <p class="text-sm text-gray-600">
                        {$t("team.project_management_description")}
                    </p>
                </div>
            </article>
        </div>
    </section>

    <Footer class="mt-auto" />
</main>
