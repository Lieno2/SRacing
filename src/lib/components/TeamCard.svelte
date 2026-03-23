<script>
    import { slide } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { base } from '$app/paths';
    export let team;
    export let members_open;
    export let onToggleMembers;
    export let t;

    // Per-team color palette — full class strings so Tailwind scanner includes them
    const palette = {
        marketing: {
            badge:    'text-rose-400',
            dot:      'bg-rose-400',
            avatar:   'from-rose-600 to-rose-900',
            hover:    'hover:border-rose-500/25 hover:shadow-rose-500/5',
            btnOn:    'bg-rose-500/10 text-rose-400 border-rose-500/25 hover:bg-rose-500/20',
            btnOff:   'text-gray-400 border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20',
            memberHover: 'hover:bg-rose-500/10 hover:border-rose-500/20',
        },
        engineering: {
            badge:    'text-blue-400',
            dot:      'bg-blue-400',
            avatar:   'from-blue-600 to-blue-900',
            hover:    'hover:border-blue-500/25 hover:shadow-blue-500/5',
            btnOn:    'bg-blue-500/10 text-blue-400 border-blue-500/25 hover:bg-blue-500/20',
            btnOff:   'text-gray-400 border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20',
            memberHover: 'hover:bg-blue-500/10 hover:border-blue-500/20',
        },
        comunication: {
            badge:    'text-emerald-400',
            dot:      'bg-emerald-400',
            avatar:   'from-emerald-600 to-emerald-900',
            hover:    'hover:border-emerald-500/25 hover:shadow-emerald-500/5',
            btnOn:    'bg-emerald-500/10 text-emerald-400 border-emerald-500/25 hover:bg-emerald-500/20',
            btnOff:   'text-gray-400 border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20',
            memberHover: 'hover:bg-emerald-500/10 hover:border-emerald-500/20',
        },
        project_management: {
            badge:    'text-violet-400',
            dot:      'bg-violet-400',
            avatar:   'from-violet-600 to-violet-900',
            hover:    'hover:border-violet-500/25 hover:shadow-violet-500/5',
            btnOn:    'bg-violet-500/10 text-violet-400 border-violet-500/25 hover:bg-violet-500/20',
            btnOff:   'text-gray-400 border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20',
            memberHover: 'hover:bg-violet-500/10 hover:border-violet-500/20',
        },
    };

    $: c = palette[team.key] ?? palette.engineering;
</script>

<article class="group bg-gray-900 border border-white/5 rounded-3xl overflow-hidden
                {c.hover} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">

    <!-- Image header -->
    <div class="relative h-52 overflow-hidden">
        <img src={`${base}/images/${team.slug}.jpeg`}
             alt="Team {$t(`team.${team.key}`)}"
             class="w-full h-full object-cover object-top brightness-75
                    group-hover:brightness-90 group-hover:scale-105 transition-all duration-500" />
        <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
        <div class="absolute bottom-4 left-5 right-5">
            <p class="text-[10px] font-semibold uppercase tracking-widest mb-0.5 {c.badge}">
                {$t(`team.${team.key}`)}
            </p>
            <h2 class="text-lg font-bold text-white leading-tight">
                {$t(`team.${team.key}_headline`)}
            </h2>
        </div>
    </div>

    <div class="p-5 flex flex-col gap-4 flex-1">
        <p class="text-sm text-gray-400 leading-relaxed">{$t(`team.${team.key}_description`)}</p>

        <!-- Members — smooth slide transition -->
        {#if members_open}
            <div transition:slide={{ duration: 280, easing: cubicOut }}
                 class="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {#each team.members as member}
                    <div class="flex items-center gap-3 px-3 py-2 bg-gray-800/50
                                border border-transparent {c.memberHover}
                                rounded-xl transition-colors duration-150">
                        <div class="w-8 h-8 rounded-full bg-linear-to-br {c.avatar}
                                    flex items-center justify-center shrink-0">
                            <span class="text-[10px] font-bold text-white">{member.initials}</span>
                        </div>
                        <div class="min-w-0">
                            <p class="text-sm font-semibold text-white truncate">{member.name}</p>
                            <p class="text-xs text-gray-500">{member.role}</p>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}

        <div class="flex-1"></div>

        <button on:click={onToggleMembers}
            class="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium
                   rounded-xl border transition-all duration-200
                   {members_open ? c.btnOn : c.btnOff}">
            <svg class="w-4 h-4 transition-transform duration-250 shrink-0 {members_open ? 'rotate-180' : ''}"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            {$t(members_open ? 'team.hide_members' : 'team.show_members')}
        </button>
    </div>
</article>
