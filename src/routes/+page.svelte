<script>
    import { t } from "$lib/i18n.ts";
    import Navbar from "$lib/components/Navbar.svelte";
    import Sponsor from "$lib/components/Sponsor.svelte";
</script>

<svelte:head>
    <title>{$t("homepage.title")}</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
    <!-- NAVBAR -->
    <Navbar {t} />

    <!-- HERO SECTION -->
    <section class="relative overflow-hidden">
        <div class="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-24 grid gap-12 md:grid-cols-2 items-center">
            <div class="space-y-6">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    {$t("homepage.team_name")}
                </h1>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {$t("homepage.subtitle")}
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a
                            href="/team"
                            class="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200"
                    >
                        {$t("team.title")}
                        <span class="ml-2 text-lg">→</span>
                    </a>
                    <a
                            href="/project"
                            class="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white/60 px-8 py-3 text-base font-semibold text-blue-700 hover:bg-white hover:border-blue-300 transition-all duration-200"
                    >
                        {$t("footer.project.project")}
                    </a>
                </div>
            </div>

            <!-- Hero illustration -->
            <div class="relative">
                <div class="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]"></div>
                    <div class="relative text-center text-white px-6">
                        <p class="text-sm uppercase tracking-[0.2em] text-white/70 mb-3">
                            {$t("homepage.stem_racing")}
                        </p>
                        <h2 class="text-2xl md:text-3xl font-bold mb-3">
                            {$t("homepage.student_project")}
                        </h2>
                        <p class="text-sm md:text-base text-white/80 max-w-md mx-auto">
                            {$t("footer.description")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="py-16 px-6 md:px-12 bg-white">
        <div class="max-w-5xl mx-auto grid gap-10 md:grid-cols-[2fr,3fr] items-start">
            <div class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-bold">
                    {$t("homepage.what_is_pegaso")}
                </h2>
                <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                    {$t("homepage.about_description")}
                </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-5">
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                        {$t("homepage.focus")}
                    </p>
                    <p class="text-sm text-gray-800">
                        {$t("footer.description")}
                    </p>
                </div>
                <div class="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-5">
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                        {$t("homepage.team")}
                    </p>
                    <p class="text-sm text-gray-800">
                        {$t("homepage.team_collaboration")}
                    </p>
                </div>
                <div class="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-5">
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                        {$t("homepage.goal")}
                    </p>
                    <p class="text-sm text-gray-800">
                        {$t("homepage.learn_by_doing")}
                    </p>
                </div>
                <div class="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-5">
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                        {$t("homepage.location")}
                    </p>
                    <p class="text-sm text-gray-800">
                        {$t("homepage.italy_collaborations")}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- TEAM BUTTON -->
    <section class="py-16 px-6 md:px-12 bg-slate-50">
        <div class="max-w-4xl mx-auto text-center space-y-6">
            <h2 class="text-2xl md:text-3xl font-bold">
                {$t("team.title")}
            </h2>
            <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                {$t("homepage.team_teaser")}
            </p>
            <a
                    href="/team"
                    class="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-10 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200"
            >
                {$t("team.title")}
                <span class="ml-2 text-lg">→</span>
            </a>
        </div>
    </section>

    <!-- SPONSORS -->
    <Sponsor/>

    <!-- FINAL CTA -->
    <section class="py-16 px-6 md:px-12 bg-blue-600 text-white">
        <div class="max-w-4xl mx-auto text-center space-y-6">
            <h2 class="text-2xl md:text-3xl font-bold">
                {$t("homepage.support_collaborate")}
            </h2>
            <p class="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
                {$t("homepage.support_description")}
            </p>
            <a
                    href="mailto:pegasoteam2025@gmail.com"
                    class="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-3 text-base font-semibold text-blue-700 shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-200"
            >
                {$t("common.contact_us")}
            </a>
        </div>
    </section>
</main>
