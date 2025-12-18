<script>
    import { t } from "$lib/i18n.ts";
    import Footer from "$lib/components/Footer.svelte";
    import LanguageSwapper from "$lib/components/LanguageSwapper.svelte";
    import TeamCard from "$lib/components/TeamCard.svelte";
    import { UserRound, House } from 'lucide-svelte';
    import Navbar from "$lib/components/Navbar.svelte";

    let members_open = {
        marketing: false,
        engineering: false,
        communication: false,
        project_management: false
    };

    const teams = [
        {
            key: 'marketing',
            slug: 'marketing',
            members: [
                { initials: 'AR', name: 'Alice Rossi', role: 'Team Lead', color: 'none' },
                { initials: 'MB', name: 'Marco Bianchi', role: 'Social Media', color: 'none' },
                { initials: 'AR', name: 'Alice Rossi', role: 'Team Lead', color: 'none' },
                { initials: 'MB', name: 'Marco Bianchi', role: 'Social Media', color: 'none' },
                { initials: 'AR', name: 'Alice Rossi', role: 'Team Lead', color: 'none' },
                { initials: 'MB', name: 'Marco Bianchi', role: 'Social Media', color: 'none' },
            ]
        },
        {
            key: 'engineering',
            slug: 'engineering',
            members: [
                { initials: 'LG', name: 'Luca Giordano', role: 'Lead Engineer', color: 'none' }
            ]
        },
        {
            key: 'comunication',
            slug: 'communication',
            members: [
                { initials: 'SR', name: 'Sara Ricci', role: 'Logistics Lead', color: 'none' }
            ]
        },
        {
            key: 'project_management',
            slug: 'project-management',
            members: [
                { initials: 'DM', name: 'Davide Moretti', role: 'Project Manager', color: 'none' }
            ]
        }
    ];

    function toggleMembers(teamKey) {
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
                        href="/"
                        class="inline-flex items-center justify-center rounded-full bg-blue-600 px-12 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:shadow-2xl transition-all duration-300 mx-auto"
                >
                    <House class="mr-2"/>
                    {$t("common.back_home")}
                </a>

            </div>
    </section>

    <Footer class="mt-auto" />
</main>
