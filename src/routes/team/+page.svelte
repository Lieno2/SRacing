<script>
    import { t } from "$lib/i18n.ts";
    import Footer from "$lib/components/Footer.svelte";
    import LanguageSwapper from "$lib/components/LanguageSwapper.svelte"
</script>

<main class="min-h-screen flex flex-col">

    <!-- NAV -->
    <nav class="flex items-center justify-between p-6 border-b border-black/10">
        <img src="" alt="logo" class="h-8 w-auto" />

        <h1 class="text-lg font-medium">
            {$t("homepage.team_name")}
        </h1>

        <LanguageSwapper class="w-[300px]"/>
    </nav>

    <section class="flex-1">
        <div class="flex  flex-col md:flex-row gap-4 mx-12 my-12 h-[70dvh]">
            <div class="w-full h-full border-2     transition-all
    duration-300
    ease-in-out
    transform
    md:hover:scale-105 border-gray-800 rounded-2xl p-10">
                <img src="" alt="image marketing" class="w-[100%] h-[50%] rounded-2xl">
                <h1 class="text-xl font-bold underline" >{$t("team.marketing")}</h1>
                <p>{$t("team.marketing_description")}</p>
            </div>

            <div class="w-full h-full border-2     transition-all
    duration-300
    ease-in-out
    transform
    md:hover:scale-105 border-gray-800 rounded-2xl p-10">                <img src="" alt="image engineering" class="w-[100%] h-[50%] rounded-2xl">
                <h1 class="text-xl font-bold underline" >{$t("team.engineering")}</h1>
                <p>{$t("team.engineering_description")}</p>
            </div>

            <div class="w-full h-full border-2     transition-all
    duration-300
    ease-in-out
    transform
    md:hover:scale-105 border-gray-800 rounded-2xl p-10">                <img src="" alt="image comunication" class="w-[100%] h-[50%] rounded-2xl">
                <h1 class="text-xl font-bold underline" >{$t("team.comunication")}</h1>
                <p>{$t("team.comunication_description")}</p>
            </div>

            <div class="w-full h-full border-2     transition-all
    duration-300
    ease-in-out
    transform
    md:hover:scale-105 border-gray-800 rounded-2xl p-10">                <img src="" alt="image project_management" class="w-[100%] h-[50%] rounded-2xl">
                <h1 class="text-xl font-bold underline" >{$t("team.project_management")}</h1>
                <p>{$t("team.project_management_description")}</p>
            </div>
        </div>

    </section>

    <Footer class="mt-auto" />

</main>
