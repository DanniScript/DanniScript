<script lang="ts">
	import '../app.css'
	import profile from '$lib/assets/profile.png?as=run'

	import {
		Sidebar,
		SidebarMenu,
		SidebarMenuItem,
		SidebarMenuHeading,
		SidebarMenuSubItem
	} from './+components'
	import {
		Profile,
		ProfileImg,
		ProfileDetails,
		ProfileDetailsName,
		ProfileDetailsUsername
	} from './+components'
</script>

<svelte:head>
	<title>@DanniScript</title>
</svelte:head>

<div class="flex h-screen">
	<Sidebar class="w-[var(--sidebar-width)] shrink-0">
		<Profile>
			<ProfileImg src={profile} />
			<ProfileDetails>
				<ProfileDetailsName>Daniel Rincón</ProfileDetailsName>
				<ProfileDetailsUsername>@DanniScript</ProfileDetailsUsername>
			</ProfileDetails>
		</Profile>

		<SidebarMenu class="mb-[2rem] mt-[0.25rem]">
			<SidebarMenuItem href="/" icon="interrogation">Overview</SidebarMenuItem>
		</SidebarMenu>

		<SidebarMenu>
			<SidebarMenuHeading class="mb-[0.75rem]">My workbench</SidebarMenuHeading>
			<SidebarMenuSubItem href="/pressable-button">Pressable button</SidebarMenuSubItem>
		</SidebarMenu>
	</Sidebar>

	<main class="grow py-[1rem] pr-[1rem]">
		<div class="h-full overflow-hidden rounded-[0.5rem] bg-gray-200">
			<slot />
		</div>
	</main>
</div>
