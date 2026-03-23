<script lang="ts">
    import { t } from "$lib/i18n";
    import Footer  from "$lib/components/Footer.svelte";
    import TeamCard from "$lib/components/TeamCard.svelte";
    import Navbar  from "$lib/components/Navbar.svelte";
    import { base } from '$app/paths';

    let members_open: Record<string, boolean> = {
        marketing: false, engineering: false, comunication: false, project_management: false
    };

    const teams = [
        {
            key: 'marketing', slug: 'marketing',
            members: [
                { initials: 'LC', name: 'Lapo Casati',         role: 'Marketing', color: 'none' },
                { initials: 'DD', name: 'Diego Delbene',        role: 'Marketing', color: 'none' },
                { initials: 'LM', name: 'Leonardo Marra',       role: 'Marketing', color: 'none' },
                { initials: 'LC', name: 'Lorenzo Corsinovi',    role: 'Marketing', color: 'none' },
            ]
        },
        {
            key: 'engineering', slug: 'engineering',
            members: [
                { initials: 'GN', name: 'Giulio Nesi',           role: 'Tecnico', color: 'none' },
                { initials: 'GC', name: 'Giacomo Capriolo',      role: 'Tecnico', color: 'none' },
                { initials: 'CM', name: 'Christian Mauro',       role: 'Tecnico', color: 'none' },
                { initials: 'ND', name: 'Niccolò Dimatteo',      role: 'Tecnico', color: 'none' },
                { initials: 'LB', name: 'Lorenzo Baldi',         role: 'Tecnico', color: 'none' },
                { initials: 'MG', name: 'Mario Giannini',        role: 'Tecnico', color: 'none' },
                { initials: 'MP', name: 'Martina Perlatti',      role: 'Tecnico', color: 'none' },
            ]
        },
        {
            key: 'comunication', slug: 'communication',
            members: [
                { initials: 'SA', name: 'Samiullah Asadullah',               role: 'Comunicazione', color: 'none' },
                { initials: 'WF', name: 'Wishmath Fernando Attacchi Danascus', role: 'Comunicazione', color: 'none' },
                { initials: 'PS', name: 'Paolo Salvestrini',                  role: 'Comunicazione', color: 'none' },
                { initials: 'BG', name: 'Barrios Gilmoryared Padilla',        role: 'Comunicazione', color: 'none' },
            ]
        },
        {
            key: 'project_management', slug: 'project-management',
            members: [
                { initials: 'RB', name: 'Ricardo Brogi',     role: 'Project Manager', color: 'none' },
                { initials: 'KP', name: 'Kian Pescini',      role: 'Project Manager', color: 'none' },
                { initials: 'LC', name: 'Lorenzo Cardillo',  role: 'Project Manager', color: 'none' },
                { initials: 'AM', name: 'Alessio Merendoni', role: 'Project Manager', color: 'none' },
            ]
        }
    ];

    function toggleMembers(teamKey: string) {
        members_open[teamKey] = !members_open[teamKey];
    }
</script>

<main class="min-h-screen flex flex-col bg-gray-950 text-white">
    <Navbar {t} />

    <!-- HERO -->
    <section class="relative pt-32 pb-16 px-6 md:px-10 overflow-hidden">
        <!-- 📷 PHOTO PLACEHOLDER — team page banner
             Suggested : Wide group photo of the whole team
             How to add : 1) Add static/images/team-hero.jpg
                          2) Add  style="background-image:url('/images/team-hero.jpg')"  to this <section>
                          3) Add  <div class="absolute inset-0 bg-gray-950/70 backdrop-blur-sm"></div>  right after -->
        <div class="absolute inset-0 bg-linear-to-b from-blue-950/40 to-gray-950"></div>
        <div class="absolute inset-0 opacity-[0.05]"
             style="background-image:radial-gradient(circle,#60a5fa 1px,transparent 1px);background-size:28px 28px"></div>

        <div class="relative z-10 max-w-7xl mx-auto text-center space-y-4">
            <p class="text-xs font-semibold uppercase tracking-widest text-blue-400">Pegaso Team</p>
            <h1 class="text-4xl md:text-6xl font-black">{$t("team.title")}</h1>
            <p class="text-gray-400 max-w-xl mx-auto">{$t("homepage.team_teaser")}</p>
        </div>
    </section>

    <!-- CARDS GRID -->
    <section class="flex-1 px-6 md:px-10 pb-16">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {#each teams as team}
                <TeamCard
                    {team}
                    members_open={members_open[team.key]}
                    onToggleMembers={() => toggleMembers(team.key)}
                    t={t}
                />
            {/each}
        </div>
    </section>

    <!-- BOTTOM ACTIONS -->
    <section class="pb-16 px-6 md:px-10">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
            <a href="mailto:pegasoteam2025@gmail.com"
               class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {$t("common.contact_us")}
            </a>
            <a href="{base}/"
               class="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                {$t("common.back_home")}
            </a>
        </div>
    </section>

    <Footer />
</main>
