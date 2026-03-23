<script>
    // @ts-ignore
    import { t } from "$lib/i18n";
    import Navbar  from "$lib/components/Navbar.svelte";
    import Sponsor from "$lib/components/Sponsor.svelte";
    import Footer  from "$lib/components/Footer.svelte";
    import { base } from '$app/paths';
</script>

<svelte:head><title>Pegaso Team – STEM Racing</title></svelte:head>

<main class="bg-gray-950 text-white">
    <Navbar {t} />

    <!-- ══════════════════════════════════════════════════════════
         HERO
    ══════════════════════════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center overflow-hidden">

        <!-- ░░ BACKGROUND ░░
             📷 PHOTO PLACEHOLDER — hero background
             Suggested : Wide group shot or race-day photo (landscape)
             How to add : 1) Put the file at  static/images/hero.jpg
                          2) Uncomment the <img> line below
                          3) Delete (or keep) the gradient div below it -->
        <!-- <img src="{base}/images/hero.jpg" class="absolute inset-0 w-full h-full object-cover opacity-25" alt="" /> -->
        <div class="absolute inset-0 bg-linear-to-br from-blue-950 via-gray-950 to-gray-950"></div>
        <div class="absolute inset-0 opacity-[0.07]"
             style="background-image:radial-gradient(circle,#60a5fa 1px,transparent 1px);background-size:28px 28px"></div>
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-3xl  translate-y-1/4 -translate-x-1/4"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center w-full">

            <!-- LEFT — text -->
            <div class="space-y-8">
                <div class="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                    <span class="text-xs font-semibold tracking-widest uppercase text-blue-400">STEM Racing 2025</span>
                </div>

                <h1 class="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                    PEGASO<br />
                    <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">TEAM</span>
                </h1>

                <p class="text-base md:text-lg text-gray-400 leading-relaxed max-w-md">
                    {$t("homepage.subtitle")}
                </p>

                <div class="flex flex-wrap gap-3">
                    <a href="{base}/team"
                       class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5">
                        {$t("team.title")}
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                    <a href="{base}/project"
                       class="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5">
                        {$t("footer.project.project")}
                    </a>
                </div>
            </div>

            <!-- RIGHT — photo placeholder -->
            <div class="hidden md:block">
                <!-- 📷 PHOTO PLACEHOLDER — hero side card
                     Suggested : Team at work, presentation, or competition
                     How to add : 1) Put file at  static/images/hero-card.jpg
                                  2) Replace the whole <div class="w-full aspect-[4/3]…"> block below with:
                                     <img src="{base}/images/hero-card.jpg"
                                          class="w-full aspect-[4/3] rounded-3xl object-cover shadow-2xl shadow-black/50"
                                          alt="Pegaso Team" /> -->
                <div class="w-full aspect-[4/3] rounded-3xl bg-linear-to-br from-blue-900/40 to-gray-900/80 border border-white/5 shadow-2xl shadow-black/50 flex items-center justify-center overflow-hidden relative">
                    <div class="absolute inset-0 opacity-20"
                         style="background-image:linear-gradient(45deg,#1e3a8a 25%,transparent 25%),linear-gradient(-45deg,#1e3a8a 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#1e3a8a 75%),linear-gradient(-45deg,transparent 75%,#1e3a8a 75%);background-size:20px 20px;background-position:0 0,0 10px,10px -10px,-10px 0"></div>
                    <div class="relative text-center space-y-3">
                        <div class="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto">
                            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <p class="text-xs text-white/30 uppercase tracking-widest">Add hero photo here</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span class="text-[10px] uppercase tracking-[0.3em] text-white">scroll</span>
            <svg class="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
        </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         STATS BAR
    ══════════════════════════════════════════════════════════ -->
    <section class="border-y border-white/5 bg-gray-900/50">
        <div class="max-w-7xl mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {#each [
                { value: '20+',  label: 'Team Members'       },
                { value: '4',    label: 'Departments'         },
                { value: '7',    label: 'Sponsors'            },
                { value: '2025', label: 'STEM Racing Season'  }
            ] as stat}
                <div class="text-center space-y-1">
                    <p class="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                    <p class="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         ABOUT
    ══════════════════════════════════════════════════════════ -->
    <section class="py-24 px-6 md:px-10">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <!-- PHOTO LEFT -->
            <div class="order-2 md:order-1">
                <!-- 📷 PHOTO PLACEHOLDER — about section
                     Suggested : Team in workshop / at sponsor event
                     How to add : 1) Put file at  static/images/about.jpg
                                  2) Replace the <div class="w-full aspect-[4/3]…"> with:
                                     <img src="{base}/images/about.jpg"
                                          class="w-full aspect-[4/3] rounded-3xl object-cover"
                                          alt="About Pegaso Team" /> -->
                <div class="w-full aspect-[4/3] rounded-3xl bg-linear-to-br from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center overflow-hidden relative">
                    <div class="absolute top-4 left-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"></div>
                    <div class="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-blue-700/20 blur-2xl"></div>
                    <div class="relative text-center space-y-2">
                        <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                            <svg class="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <p class="text-[10px] text-white/20 uppercase tracking-widest">About photo</p>
                    </div>
                </div>
            </div>

            <!-- TEXT RIGHT -->
            <div class="space-y-6 order-1 md:order-2">
                <div class="space-y-2">
                    <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">{$t("homepage.what_is_pegaso")}</p>
                    <h2 class="text-3xl md:text-4xl font-black leading-tight">
                        {$t("homepage.stem_racing")}<br />
                        <span class="text-gray-400">{$t("homepage.student_project")}</span>
                    </h2>
                </div>
                <p class="text-gray-400 leading-relaxed">{$t("homepage.about_description")}</p>
                <div class="grid grid-cols-2 gap-3">
                    {#each [
                        { icon: '🎯', label: $t("homepage.focus"),    text: $t("footer.description")              },
                        { icon: '👥', label: $t("homepage.team"),     text: $t("homepage.team_collaboration")     },
                        { icon: '⚡', label: $t("homepage.goal"),     text: $t("homepage.learn_by_doing")         },
                        { icon: '📍', label: $t("homepage.location"), text: $t("homepage.italy_collaborations")   }
                    ] as card}
                        <div class="bg-gray-900 border border-white/5 rounded-2xl p-4 space-y-1 hover:border-blue-500/20 transition-colors duration-200">
                            <p class="text-lg">{card.icon}</p>
                            <p class="text-xs font-semibold uppercase tracking-widest text-gray-500">{card.label}</p>
                            <p class="text-xs text-gray-400 leading-relaxed">{card.text}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         PHOTO GALLERY STRIP
    ══════════════════════════════════════════════════════════ -->
    <section class="pb-6 px-6 md:px-10">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 📷 PHOTO PLACEHOLDERS — gallery strip (3 slots)
                 Suggested : Mix of team, vehicle/competition, celebration
                 How to add : For each slot replace the inner <div> with:
                              <img src="{base}/images/gallery-N.jpg"
                                   class="w-full aspect-[16/9] object-cover rounded-2xl" alt="" /> -->
            {#each [
                { g: 'from-blue-900/60 to-gray-900', label: 'Gallery Photo 1' },
                { g: 'from-gray-800 to-gray-900',    label: 'Gallery Photo 2' },
                { g: 'from-blue-950/80 to-gray-900', label: 'Gallery Photo 3' }
            ] as s}
                <div class="w-full aspect-[16/9] rounded-2xl bg-linear-to-br {s.g} border border-white/5 flex items-center justify-center">
                    <div class="text-center space-y-1">
                        <svg class="w-5 h-5 text-white/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <p class="text-[10px] text-white/20 uppercase tracking-widest">{s.label}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         TEAM TEASER CARD
    ══════════════════════════════════════════════════════════ -->
    <section class="py-24 px-6 md:px-10">
        <div class="max-w-7xl mx-auto">
            <div class="bg-gray-900 border border-white/5 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="space-y-3 text-center md:text-left">
                    <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">{$t("homepage.team")}</p>
                    <h2 class="text-3xl md:text-4xl font-black">{$t("team.title")}</h2>
                    <p class="text-gray-400 max-w-md">{$t("homepage.team_teaser")}</p>
                </div>
                <a href="{base}/team"
                   class="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-sm">
                    {$t("team.title")}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- SPONSORS -->
    <Sponsor />

    <!-- ══════════════════════════════════════════════════════════
         CTA
    ══════════════════════════════════════════════════════════ -->
    <section class="py-24 px-6 md:px-10">
        <div class="max-w-4xl mx-auto text-center space-y-6">
            <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">{$t("homepage.support_collaborate")}</p>
            <h2 class="text-3xl md:text-5xl font-black leading-tight">{$t("homepage.support_collaborate")}</h2>
            <p class="text-gray-400 max-w-xl mx-auto leading-relaxed">{$t("homepage.support_description")}</p>
            <a href="mailto:pegasoteam2025@gmail.com"
               class="inline-flex items-center gap-2 bg-white text-gray-950 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:-translate-y-0.5">
                {$t("common.contact_us")}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            </a>
        </div>
    </section>

    <Footer />
</main>
