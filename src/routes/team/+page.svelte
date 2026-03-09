<script lang="ts">
    import { t } from "$lib/i18n";         
    import Footer from "$lib/components/Footer.svelte";
    import TeamCard from "$lib/components/TeamCard.svelte";
    import { UserRound, House } from 'lucide-svelte';
    import Navbar from "$lib/components/Navbar.svelte";
    import { base } from '$app/paths';

    // Tipa correttamente l'oggetto
    let members_open: Record<string, boolean> = {
        marketing: false,
        engineering: false,
        comunication: false,
        project_management: false
    };

    const teams = [
        {
            key: 'marketing',
            slug: 'marketing',
            members: [
                { initials: 'LC', name: 'Lapo Casati', role: 'Marketing', color: 'none' },
                { initials: 'DD', name: 'Diego Delbene', role: 'Marketing', color: 'none' },
                { initials: 'LM', name: 'Leonardo Marra', role: 'Marketing', color: 'none' },
            ]
        },
        {
            key: 'engineering',
            slug: 'engineering',
            members: [
                { initials: 'GN', name: 'Giulio Nesi', role: 'Tecnico', color: 'none' },
                { initials: 'GC', name: 'Giacomo Capriolo', role: 'Tecnico', color: 'none' },
                { initials: 'CM', name: 'Christian Mauro', role: 'Tecnico', color: 'none' },
                { initials: 'ND', name: 'Niccolò Dimatteo', role: 'Tecnico', color: 'none' },
                { initials: 'LB', name: 'Lorenzo Baldi', role: 'Tecnico', color: 'none' },
                { initials: 'MG', name: 'Mario Giannini', role: 'Tecnico', color: 'none' },
                { initials: 'MP', name: 'Martina Perlatti', role: 'Tecnico', color: 'none' },
            ]
        },
        {
            key: 'comunication',
            slug: 'communication',
            members: [
                { initials: 'SA', name: 'Samiullah Asadullah', role: 'Comunicazione', color: 'none' },
                { initials: 'WF', name: 'Wishmath Fernando Attacchi Danascus', role: 'Comunicazione', color: 'none' },
                { initials: 'PS', name: 'Paolo Salvestrini', role: 'Comunicazione', color: 'none' },
                { initials: 'BG', name: 'Barrios Gilmoryared Padilla', role: 'Comunicazione', color: 'none' },
            ]
        },
        {
            key: 'project_management',
            slug: 'project-management',
            members: [
                { initials: 'RB', name: 'Ricardo Brogi', role: 'Project Manager', color: 'none' },
                { initials: 'KP', name: 'Kian Pescini', role: 'Project Manager', color: 'none' },
                { initials: 'LC', name: 'Lorenzo Cardillo', role: 'Project Manager', color: 'none' },
                { initials: 'AM', name: 'Alessio Merendoni', role: 'Project Manager', color: 'none' },
                { initials: 'LC', name: 'Lorenzo Corsinovi', role: 'Project Manager', color: 'none' },
            ]
        }
    ];

    function toggleMembers(teamKey: string) {
        members_open[teamKey] = !members_open[teamKey];
    }
</script>

<main class="min-h-screen flex flex-col bg-slate-50">
    <!-- NAV -->
    <Navbar {t}/>

    <!-- MAIN SECTION -->
    <section class="flex-1">
        <div class="mx-6 md:mx-12 my-12 flex flex-col md:flex-row gap-6 md:h-[70dvh]">
            {#each teams as team}
                <TeamCard
                        {team}
                        members_open={members_open[team.key]}
                        onToggleMembers={() => toggleMembers(team.key)}
                        t={t}
                />
            {/each}

        </div>

            <div class="mx-6 md:mx-12 mb-12 text-center">
                <a
                        href="mailto:pegasoteam2025@gmail.com"
                        class="inline-flex items-center justify-center rounded-full bg-blue-600 px-12 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:shadow-2xl transition-all duration-300 mx-auto"
                >
                    <UserRound class="mr-2"/>
                    {$t("common.contact_us")}
                </a>

                <a
                        href="{base}/"
                        class="inline-flex items-center justify-center rounded-full bg-blue-600 px-12 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:shadow-2xl transition-all duration-300 mx-auto"
                >
                    <House class="mr-2"/>
                    {$t("common.back_home")}
                </a>

            </div>
    </section>

    <Footer/>
</main>