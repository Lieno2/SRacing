<script>
    import { base } from '$app/paths';
    export let team;
    export let members_open;
    export let onToggleMembers;
    export let t;
</script>

<article class="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:h-full flex flex-col">
    <div class="relative h-60 md:h-80">
        <img src={`${base}/images/${team.slug}.jpeg`} alt="Team {$t(`team.${team.key}`)}" class="w-full h-full object-cover object-top" />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4 text-left">
            <p class="text-xs font-medium uppercase tracking-wide text-white/70">{$t(`team.${team.key}`)}</p>
            <h2 class="text-xl font-semibold text-white">{$t(`team.${team.key}_headline`)}</h2>
        </div>
    </div>

    <div class="p-6 flex flex-col gap-4 flex-1">
        <p class="text-sm text-gray-600 leading-relaxed">{$t(`team.${team.key}_description`)}</p>

        <!-- FIXED: removed flex-1 so it doesn't push the button out, added min-h-0 -->
        <div class="min-h-0 transition-all duration-300">
            {#if members_open}
                <hr class="mb-4 border-gray-200">
                <div class="max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-1 space-y-2">
                    {#each team.members as member}
                        <div class="flex items-center gap-3 px-3 py-2.5 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors duration-150 border border-transparent hover:border-blue-100">
                            <!-- Avatar circle with a default neutral style since color is 'none' -->
                            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <span class="text-xs font-bold text-blue-700">{member.initials}</span>
                            </div>
                            <div class="min-w-0">
                                <h4 class="font-semibold text-gray-800 text-sm truncate">{member.name}</h4>
                                <p class="text-xs text-gray-400">{member.role}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <!-- Spacer to push button to bottom -->
        <div class="flex-1"></div>

        <button
            on:click={onToggleMembers}
            class="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-xl border transition-all duration-200
                   {members_open
                     ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                     : 'text-gray-600 border-gray-200 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-300'}"
        >
            <svg class="w-4 h-4 transition-transform duration-200 flex-shrink-0" class:rotate-180={members_open} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            {$t(members_open ? 'team.hide_members' : 'team.show_members')}
        </button>
    </div>
</article>