<script>
    import { t } from "$lib/i18n";
    import { Instagram, Facebook, Linkedin } from 'lucide-svelte';
    export let email = "pegasoteam2025@gmail.com";
    export let phone = "";

    export let socials = [
        { name: "Facebook", href: "", icon: "facebook", disabled: true },
        { name: "Instagram", href: "", icon: "instagram", disabled: false },
        { name: "LinkedIn", href: "", icon: "linkedin", disabled: true }
    ];

    export let usefulLinks = [
        {
            labelKey: "footer.links.stem",
            href: "https://www.stemracing.it/"
        },
        {
            labelKey: "footer.links.rules",
            href: "https://www.stemracing.it/regolamento/"
        },
        {
            labelKey: "footer.links.competition",
            href: "https://www.stemracing.it/competizioni/"
        }
    ];


</script>

<footer class="w-full bg-black text-white flex flex-col border-t border-white/10">

    <div class="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Logo + description -->
        <div class="flex flex-col gap-4">
            <div class="w-36 h-14 bg-white/10 flex items-center justify-center text-gray-400 text-sm">
                LOGO
            </div>

            <p class="text-sm text-gray-400 leading-relaxed">
                {$t("footer.description")}
            </p>
        </div>

        <!-- Project -->
        <div class="flex flex-col gap-3">
            <h2 class="text-sm font-semibold tracking-wide">
                {$t("footer.project_title")}
            </h2>

            <ul class="flex flex-col gap-2 text-sm text-gray-400">
                <li>
                    <a href="/project" class="hover:text-white transition">
                        {$t("footer.project.project")}
                    </a>
                </li>
                <li>
                    <a href="/team" class="hover:text-white transition">
                        {$t("footer.project.team")}
                    </a>
                </li>
                <li>
                    <a href="/gallery" class="hover:text-white transition">
                        {$t("footer.project.gallery")}
                    </a>
                </li>
            </ul>
        </div>

        <!-- Useful links -->
        <div class="flex flex-col gap-3">
            <h2 class="text-sm font-semibold tracking-wide">
                {$t("footer.links_title")}
            </h2>

            <ul class="flex flex-col gap-2 text-sm text-gray-400">
                {#each usefulLinks as link}
                    <li>
                        <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:text-white transition"
                        >
                            {$t(link.labelKey)}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>

        <!-- Contacts + socials -->
        <div class="flex flex-col gap-4">
            <h2 class="text-sm font-semibold tracking-wide">
                {$t("footer.contacts_title")}
            </h2>

            <div class="text-sm text-gray-400 flex flex-col gap-2">
                <p>
                    {$t("footer.email")}:
                    <a
                            href={`mailto:${email}`}
                            class="text-gray-200 hover:text-white transition"
                    >
                        {email}
                    </a>
                </p>

                <p>
                    {$t("footer.phone")}:
                    {#if phone}
                        <a
                                href={`tel:${phone}`}
                                class="text-gray-200 hover:text-white transition"
                        >
                            {phone}
                        </a>
                    {:else}
                        <span class="text-gray-500">
                            {$t("footer.not_available")}
                        </span>
                    {/if}
                </p>
            </div>

            <div class="flex gap-4 mt-2">
                {#each socials as social}
                    {#if !social.disabled}
                        <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                class="text-gray-400 hover:text-white transition"
                        >
                            {#if social.icon === "facebook"}
                                <Facebook class="h-5 w-5"/>
                            {:else if social.icon === "instagram"}
                                <Instagram class="h-5 w-5"/>
                            {:else if social.icon === "linkedin"}
                                <Linkedin class="h-5 w-5"/>
                            {/if}

                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <p class="self-center py-4 text-xs text-gray-500 border-t border-white/10 w-full text-center">
        © {new Date().getFullYear()} Pegaso Team — {$t("footer.rights")}
    </p>

</footer>
