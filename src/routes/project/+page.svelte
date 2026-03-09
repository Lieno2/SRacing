<script>
    import { t } from "$lib/i18n";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>{$t("footer.project.project")} – Pegaso Team</title>
</svelte:head>

<main class="min-h-screen flex flex-col bg-slate-50 text-gray-900">
    <Navbar {t} />

    <!-- HERO -->
    <section class="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20 px-6 md:px-12">
        <div class="max-w-4xl mx-auto text-center space-y-5">
            <span class="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {$t("homepage.stem_racing")}
            </span>
            <h1 class="text-4xl md:text-5xl font-black leading-tight">
                {$t("footer.project.project")}
            </h1>
            <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                {$t("homepage.about_description")}
            </p>
        </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="py-16 px-6 md:px-12 bg-white">
        <div class="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-center">
            <div class="space-y-5">
                <h2 class="text-2xl md:text-3xl font-bold">
                    {$t("homepage.what_is_pegaso")}
                </h2>
                <p class="text-base text-gray-600 leading-relaxed">
                    {$t("homepage.about_description")}
                </p>
                <a
                    href="mailto:pegasoteam2025@gmail.com"
                    class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    {$t("common.contact_us")} →
                </a>
            </div>

            <div class="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                    src="{base}/images/marketing.jpeg"
                    alt="Pegaso Team at work"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>
    </section>

    <!-- PILLARS -->
    <section class="py-16 px-6 md:px-12 bg-slate-50">
        <div class="max-w-5xl mx-auto space-y-10">
            <h2 class="text-2xl md:text-3xl font-bold text-center">
                {$t("homepage.stem_racing")}
            </h2>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
                    <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                    </div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">{$t("homepage.focus")}</p>
                    <p class="text-sm text-gray-700 leading-relaxed">{$t("footer.description")}</p>
                </div>

                <div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
                    <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">{$t("homepage.team")}</p>
                    <p class="text-sm text-gray-700 leading-relaxed">{$t("homepage.team_collaboration")}</p>
                </div>

                <div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
                    <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">{$t("homepage.goal")}</p>
                    <p class="text-sm text-gray-700 leading-relaxed">{$t("homepage.learn_by_doing")}</p>
                </div>

                <div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
                    <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">{$t("homepage.location")}</p>
                    <p class="text-sm text-gray-700 leading-relaxed">{$t("homepage.italy_collaborations")}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- TEAMS OVERVIEW -->
    <section class="py-16 px-6 md:px-12 bg-white">
        <div class="max-w-5xl mx-auto space-y-10">
            <div class="text-center space-y-3">
                <h2 class="text-2xl md:text-3xl font-bold">{$t("team.title")}</h2>
                <p class="text-gray-600 max-w-xl mx-auto">{$t("homepage.team_teaser")}</p>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
                {#each [
                    { key: 'marketing', icon: '📣' },
                    { key: 'engineering', icon: '⚙️' },
                    { key: 'comunication', icon: '📡' },
                    { key: 'project_management', icon: '🗂️' }
                ] as item}
                    <div class="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-200">
                        <span class="text-3xl">{item.icon}</span>
                        <div class="space-y-1">
                            <h3 class="font-bold text-gray-900">{$t(`team.${item.key}`)}</h3>
                            <p class="text-xs font-medium text-blue-600">{$t(`team.${item.key}_headline`)}</p>
                            <p class="text-sm text-gray-600 leading-relaxed">{$t(`team.${item.key}_description`)}</p>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="text-center">
                <a
                    href="{base}/team"
                    class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-200 shadow-md"
                >
                    {$t("team.title")} →
                </a>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-6 md:px-12 bg-blue-600 text-white">
        <div class="max-w-3xl mx-auto text-center space-y-5">
            <h2 class="text-2xl md:text-3xl font-bold">{$t("homepage.support_collaborate")}</h2>
            <p class="text-blue-100 text-base md:text-lg max-w-xl mx-auto">{$t("homepage.support_description")}</p>
            <a
                href="mailto:pegasoteam2025@gmail.com"
                class="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-all duration-200 shadow-md"
            >
                {$t("common.contact_us")}
            </a>
        </div>
    </section>

    <Footer />
</main>
