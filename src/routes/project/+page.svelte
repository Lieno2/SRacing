<script>
    import { t } from "$lib/i18n";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>{$t("footer.project.project")} – Pegaso Team</title>
</svelte:head>

<main class="min-h-screen flex flex-col bg-gray-950 text-white">
    <Navbar {t} />

    <!-- ══════════════ HERO ══════════════ -->
    <section class="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden">
        <div class="absolute inset-0 bg-linear-to-br from-blue-950/50 via-gray-950 to-gray-950"></div>
        <div class="absolute inset-0 opacity-[0.06]"
             style="background-image:radial-gradient(circle,#60a5fa 1px,transparent 1px);background-size:28px 28px"></div>
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>

        <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div class="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
                <div class="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span class="text-xs font-semibold tracking-widest uppercase text-blue-400">{$t("homepage.stem_racing")}</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-black leading-tight">
                {$t("footer.project.project")}
            </h1>
            <p class="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {$t("homepage.about_description")}
            </p>
        </div>
    </section>

    <!-- ══════════════ WHAT IS PEGASO ══════════════ -->
    <section class="py-20 px-6 md:px-10">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <div class="space-y-6">
                <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">{$t("homepage.what_is_pegaso")}</p>
                <h2 class="text-3xl md:text-4xl font-black leading-tight">
                    {$t("homepage.what_is_pegaso")}
                </h2>
                <p class="text-gray-400 leading-relaxed">{$t("homepage.about_description")}</p>
                <a href="mailto:pegasoteam2025@gmail.com"
                   class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5">
                    {$t("common.contact_us")}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>

            <!-- 📷 PHOTO PLACEHOLDER — project about photo
                 Suggested : Team working on the vehicle / sponsor event
                 How to add : Replace the div below with:
                              <img src="{base}/images/marketing.jpeg"
                                   class="w-full aspect-[4/3] rounded-3xl object-cover" alt="" /> -->
            <div class="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img src="{base}/images/marketing.jpeg"
                     alt="Pegaso Team at work"
                     class="w-full h-full object-cover brightness-75" />
            </div>
        </div>
    </section>

    <!-- ══════════════ PILLARS ══════════════ -->
    <section class="py-20 px-6 md:px-10 bg-gray-900/40">
        <div class="max-w-7xl mx-auto space-y-12">
            <div class="text-center space-y-3">
                <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">Fondamenti</p>
                <h2 class="text-3xl md:text-4xl font-black">{$t("homepage.stem_racing")}</h2>
            </div>

            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {#each [
                    { icon: '🎯', label: $t("homepage.focus"),    text: $t("footer.description"),            border: 'hover:border-blue-500/20'    },
                    { icon: '👥', label: $t("homepage.team"),     text: $t("homepage.team_collaboration"),   border: 'hover:border-violet-500/20'  },
                    { icon: '⚡', label: $t("homepage.goal"),     text: $t("homepage.learn_by_doing"),        border: 'hover:border-emerald-500/20' },
                    { icon: '📍', label: $t("homepage.location"), text: $t("homepage.italy_collaborations"), border: 'hover:border-rose-500/20'    }
                ] as pillar}
                    <div class="bg-gray-900 border border-white/5 {pillar.border} rounded-2xl p-6 space-y-3 transition-colors duration-200">
                        <p class="text-2xl">{pillar.icon}</p>
                        <p class="text-xs font-semibold uppercase tracking-widest text-gray-500">{pillar.label}</p>
                        <p class="text-sm text-gray-400 leading-relaxed">{pillar.text}</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- ══════════════ TEAMS OVERVIEW ══════════════ -->
    <section class="py-20 px-6 md:px-10">
        <div class="max-w-7xl mx-auto space-y-12">
            <div class="text-center space-y-3">
                <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">{$t("homepage.team")}</p>
                <h2 class="text-3xl md:text-4xl font-black">{$t("team.title")}</h2>
                <p class="text-gray-400 max-w-xl mx-auto">{$t("homepage.team_teaser")}</p>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
                {#each [
                    { key: 'marketing',         icon: '📣', color: 'text-rose-400',    border: 'hover:border-rose-500/25'    },
                    { key: 'engineering',        icon: '⚙️', color: 'text-blue-400',   border: 'hover:border-blue-500/25'   },
                    { key: 'comunication',       icon: '📡', color: 'text-emerald-400', border: 'hover:border-emerald-500/25' },
                    { key: 'project_management', icon: '🗂️', color: 'text-violet-400', border: 'hover:border-violet-500/25' }
                ] as item}
                    <div class="flex gap-4 p-6 rounded-2xl bg-gray-900 border border-white/5
                                {item.border} transition-all duration-200">
                        <span class="text-3xl shrink-0 mt-0.5">{item.icon}</span>
                        <div class="space-y-1.5">
                            <h3 class="font-bold text-white">{$t(`team.${item.key}`)}</h3>
                            <p class="text-xs font-semibold {item.color}">{$t(`team.${item.key}_headline`)}</p>
                            <p class="text-sm text-gray-400 leading-relaxed">{$t(`team.${item.key}_description`)}</p>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="text-center">
                <a href="{base}/team"
                   class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5">
                    {$t("team.title")}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- ══════════════ CTA ══════════════ -->
    <section class="py-20 px-6 md:px-10">
        <div class="max-w-7xl mx-auto">
            <div class="bg-gray-900 border border-white/5 rounded-3xl p-10 md:p-16 text-center space-y-6">
                <h2 class="text-3xl md:text-4xl font-black">{$t("homepage.support_collaborate")}</h2>
                <p class="text-gray-400 max-w-xl mx-auto leading-relaxed">{$t("homepage.support_description")}</p>
                <a href="mailto:pegasoteam2025@gmail.com"
                   class="inline-flex items-center gap-2 bg-white text-gray-950 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:-translate-y-0.5">
                    {$t("common.contact_us")}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <Footer />
</main>
