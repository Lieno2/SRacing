<script>
    import { t } from "$lib/i18n";
    import { Instagram, Facebook, Linkedin } from 'lucide-svelte';
    import { base } from '$app/paths';
    export let email = "pegasoteam2025@gmail.com";
    export let phone = "";

    export let socials = [
        { name: "Facebook",  href: "",  icon: "facebook",  disabled: true  },
        { name: "Instagram", href: "https://www.instagram.com/pegasoteam_official/", icon: "instagram", disabled: false },
        { name: "LinkedIn",  href: "",  icon: "linkedin",  disabled: true  }
    ];

    export let usefulLinks = [
        { labelKey: "footer.links.stem",        href: "https://www.stemracing.it/"              },
        { labelKey: "footer.links.rules",       href: "https://www.stemracing.it/regolamento/" },
        { labelKey: "footer.links.competition", href: "https://www.stemracing.it/competizioni/"}
    ];

    const year = new Date().getFullYear();
</script>

<footer class="bg-black border-t border-white/5 text-white">
    <div class="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div class="space-y-4">
            <img src="{base}/logo.svg" alt="Pegaso Team" class="h-10 w-auto" />
            <p class="text-sm text-gray-500 leading-relaxed">{$t("footer.description")}</p>
            <div class="flex items-center gap-3 pt-1">
                {#each socials as social}
                    {#if !social.disabled}
                        <a href={social.href} target="_blank" rel="noopener noreferrer"
                           class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/30 transition-all duration-200">
                            {#if social.icon === 'instagram'}<Instagram class="w-4 h-4 text-gray-400" />
                            {:else if social.icon === 'facebook'}<Facebook class="w-4 h-4 text-gray-400" />
                            {:else if social.icon === 'linkedin'}<Linkedin class="w-4 h-4 text-gray-400" />
                            {/if}
                        </a>
                    {/if}
                {/each}
            </div>
        </div>

        <div class="space-y-4">
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-500">{$t("footer.project_title")}</h3>
            <ul class="space-y-2">
                <li><a href="{base}/project" class="text-sm text-gray-400 hover:text-white transition-colors">{$t("footer.project.project")}</a></li>
                <li><a href="{base}/team"    class="text-sm text-gray-400 hover:text-white transition-colors">{$t("footer.project.team")}</a></li>
            </ul>
        </div>

        <div class="space-y-4">
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-500">{$t("footer.links_title")}</h3>
            <ul class="space-y-2">
                {#each usefulLinks as link}
                    <li><a href={link.href} target="_blank" rel="noopener noreferrer"
                           class="text-sm text-gray-400 hover:text-white transition-colors">{$t(link.labelKey)}</a></li>
                {/each}
            </ul>
        </div>

        <div class="space-y-4">
            <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-500">{$t("footer.contacts_title")}</h3>
            <ul class="space-y-3">
                <li class="flex flex-col gap-0.5">
                    <span class="text-xs text-gray-600 uppercase tracking-wide">{$t("footer.email")}</span>
                    <a href="mailto:{email}" class="text-sm text-gray-400 hover:text-white transition-colors">{email}</a>
                </li>
                <li class="flex flex-col gap-0.5">
                    <span class="text-xs text-gray-600 uppercase tracking-wide">{$t("footer.phone")}</span>
                    <span class="text-sm text-gray-500">{phone || $t("footer.not_available")}</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="border-t border-white/5 px-6 md:px-10 py-5">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <span>© {year} Pegaso Team. {$t("footer.rights")}.</span>
            <span class="text-gray-700">ITIS Meucci · STEM Racing</span>
        </div>
    </div>
</footer>
