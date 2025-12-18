<script>
    import { t } from "$lib/i18n.ts";
    import LanguageSwapper from "$lib/components/LanguageSwapper.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
    <title>{$t("homepage.title")}</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <!-- NAVBAR -->
    <Navbar {t}/>

    <!-- HERO SECTION -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                Pegaso Team
            </h1>
            <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                {$t("homepage.title")}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/team" class="group bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-lg font-semibold text-white hover:bg-white/30 transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-3xl">
                    {$t("team.title")}
                    <span class="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="/project" class="border-2 border-white/50 px-8 py-4 rounded-2xl text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    View Project
                </a>
            </div>
        </div>
        <!-- Hero background video/image -->
        <video
                src="/videos/race-hero.mp4"
                autoplay
                loop
                muted
                class="absolute inset-0 w-full h-full object-cover"
                poster="/images/hero-poster.jpg"
        ></video>
    </section>

    <!-- STATS SECTION -->
    <section class="py-24 px-6 md:px-12 bg-white">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="group">
                <div class="text-4xl md:text-5xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">320</div>
                <div class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Top Speed (km/h)</div>
            </div>
            <div class="group">
                <div class="text-4xl md:text-5xl font-black text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">28</div>
                <div class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Team Members</div>
            </div>
            <div class="group">
                <div class="text-4xl md:text-5xl font-black text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Competitions</div>
            </div>
            <div class="group">
                <div class="text-4xl md:text-5xl font-black text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">2024</div>
                <div class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Founded</div>
            </div>
        </div>
    </section>

    <!-- FEATURED PROJECT -->
    <section class="py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">Pegaso R1</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Our latest prototype designed for maximum performance in STEM Racing competitions.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="relative group">
                    <img src="/images/pegaso-r1.jpg" alt="Pegaso R1" class="rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 w-full" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"></div>
                    <div class="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 class="text-2xl font-bold mb-2">0-100 km/h</h3>
                        <div class="text-4xl font-black text-blue-400">3.8s</div>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="space-y-3">
                        <h3 class="text-2xl font-bold text-gray-900">Engineering Excellence</h3>
                        <p class="text-lg text-gray-600 leading-relaxed">Aerodynamic optimization, lightweight carbon fiber chassis, and cutting-edge electric propulsion system.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div class="text-center p-4 bg-blue-50 rounded-xl">
                            <div class="text-2xl font-bold text-blue-600">1.2m</div>
                            <div class="text-sm text-gray-600">Drag Coefficient</div>
                        </div>
                        <div class="text-center p-4 bg-emerald-50 rounded-xl">
                            <div class="text-2xl font-bold text-emerald-600">180kg</div>
                            <div class="text-sm text-gray-600">Weight</div>
                        </div>
                    </div>
                    <a href="/project" class="block w-full text-center bg-blue-600 text-white py-4 px-8 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl mt-6">
                        Learn More →
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- TEAM TEASER -->
    <section class="py-24 px-6 md:px-12">
        <div class="max-w-6xl mx-auto text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-black mb-6">Meet the Team</h2>
            <p class="text-xl text-gray-600 max-w-lg mx-auto">28 passionate students pushing the limits of engineering excellence.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <!-- Team cards teaser linking to /team -->
            {#each ['marketing', 'engineering', 'comunication', 'project_management'] as teamKey}
                <a href="/team" class="group">
                    <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 flex flex-col justify-end group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                        <h3 class="text-lg font-semibold text-gray-900 mb-1">{$t(`team.${teamKey}`)}</h3>
                        <p class="text-sm text-gray-600">View team →</p>
                    </div>
                </a>
            {/each}
        </div>
    </section>

    <!-- FINAL CTA -->
    <section class="py-24 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-black mb-6">Ready to race with us?</h2>
            <p class="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Join Pegaso Team and be part of the future of STEM racing.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/team" class="bg-white text-blue-600 px-12 py-6 rounded-3xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                    Join the Team
                </a>
                <a href="mailto:pegasoteam2025@gmail.com" class="border-2 border-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Contact Us
                </a>
            </div>
        </div>
    </section>
</main>
