<script>
    export let team;
    export let members_open;
    export let onToggleMembers;
    export let t;
</script>

<article class="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:h-full flex flex-col">
    <div class="relative h-60 md:h-80">
        <img src={`/images/${team.slug}.jpeg`} alt="Team {$t(`team.${team.key}`)}" class="w-full h-full object-cover" />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4 text-left">
            <p class="text-xs font-medium uppercase tracking-wide text-white/70">{$t(`team.${team.key}`)}</p>
            <h2 class="text-xl font-semibold text-white">{$t(`team.${team.key}_headline`)}</h2>
        </div>
    </div>

    <div class="p-6 flex flex-col gap-4 flex-1">
        <p class="text-sm text-gray-600 leading-relaxed">{$t(`team.${team.key}_description`)}</p>

        <div class="flex-1 transition-all duration-300 overflow-hidden" class:height-auto={members_open}>
            {#if members_open}
                <hr class="my-4 border-gray-200">
                <div class="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pr-2 space-y-3">
                    {#each team.members as member}
                        <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                            <div class={`w-10 h-10 ${member.color}-100 rounded-full flex items-center justify-center`}>
                                <span class={`text-xs font-semibold bg-${member.color}-600`}>{member.initials}</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">{member.name}</h4>
                                <p class="text-xs text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <button
                on:click={onToggleMembers}
                class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 border border-gray-200 rounded-xl hover:bg-gray-50 group-hover:border-gray-300"
                class:text-gray-500TypeError={members_open}
        >
            <svg class="w-4 h-4 transition-transform duration-200" class:rotate-180={members_open} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            {$t(members_open ? 'team.hide_members' : 'team.show_members')}
        </button>
    </div>
</article>

<style>
    .height-auto {
        height: auto !important;
        max-height: none !important;
    }
</style>
