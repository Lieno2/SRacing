<script>
    import { locale, locales } from "$lib/i18n";
    let open = false;
    function pick(l) { $locale = l; open = false; }
</script>

<div class="relative">
    <button
        on:click={() => open = !open}
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10
               hover:bg-white/10 hover:border-white/20 transition-all duration-200
               text-sm font-semibold text-white/70 hover:text-white select-none">
        {$locale.toUpperCase()}
        <svg class="w-3 h-3 transition-transform duration-200 {open ? 'rotate-180' : ''}"
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
        </svg>
    </button>

    {#if open}
        <!-- backdrop to close on outside click -->
        <div class="fixed inset-0 z-40" on:click={() => open = false} aria-hidden="true"></div>

        <div class="absolute right-0 top-full mt-2 min-w-[72px] z-50
                    bg-gray-900 border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
            {#each locales as l}
                <button
                    on:click={() => pick(l)}
                    class="w-full px-4 py-2 text-sm text-left transition-colors duration-150
                           {$locale === l
                             ? 'bg-blue-500/20 text-blue-400 font-bold'
                             : 'text-gray-300 hover:bg-white/5 hover:text-white'}">
                    {l.toUpperCase()}
                </button>
            {/each}
        </div>
    {/if}
</div>
