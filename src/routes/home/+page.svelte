<script>
    import {
        Navbar,
        NavBrand,
        NavUl,
        NavHamburger,
        Button,
        Modal,
        Label,
        Input,
    } from "flowbite-svelte";

    import { browser } from "$app/environment";

    // IMPORTANT TO MOUNT, IDK Y NGL
    import { onMount } from 'svelte';

	onMount(() => {
		mounted = true;
	});
	let mounted = false;

    import logo_full from "$lib/assets/logo_full.svg";
    import hero_image from "$lib/assets/hero_image.png";
    import daily_planning from "$lib/assets/daily_planning_feature.png";
    import metrics_image from "$lib/assets/metrics_image.png";
    import custom_list from "$lib/assets/custom_list.png";
    import success_icon from "$lib/assets/ICONS/success_check_icon.svg";


    /** @type {import('./$types').ActionData} */
    export let form;


    let loginModal = false;
    let signupModal = false;
    let successModal = true;


    let signupUsername = "";
    let signupEmail = "";
    let signupPassword = "";
    let signupFullName = "";

    function saveFormData() {
        localStorage.setItem("fullName", form?.user.fullName);
        localStorage.setItem("deviceToken", form?.user.deviceToken);
        localStorage.setItem("username", form?.user.username);
    }

    $: if (form?.success === true && browser) {
        saveFormData();
    }

</script>
{#if mounted}
<title>Taskblitz Home</title>

<!-- NAVBAR -->
<Navbar let:hidden let:toggle>
    <NavBrand href="/home">
        <img 
            src={logo_full}
            alt="Taskblitz Logo"
            class="h-9"
        />
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} class="lg:bg-none">
        <Button size="sm" color="none" on:click={() => loginModal = true}>Log In</Button>
        <Button size="sm" on:click={() => signupModal = true}>Sign Up</Button>
    </NavUl>
</Navbar>

<!-- SIGNUP MODAL -->
<Modal bind:open={signupModal} size="xs" autoclose={false} class="w-full rounded-2xl">
    <form class="flex flex-col space-y-6" method="POST" action="?/signup">
      <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Create Account</h3>
      <Label class="space-y-2">
        <span>Name</span>
        <Input type="text" name="fullname" placeholder="Full Name" required bind:value={signupFullName}/>
      </Label>
      <Label class="space-y-2">
        <span>User Name</span>
        <Input type="text" name="username" placeholder="User Name" required bind:value={signupUsername}/>
      </Label>
      <Label class="space-y-2">
        <span>Email</span>
        <Input type="email" name="useremail" placeholder="name@youremail.com" required bind:value={signupEmail}/>
      </Label>
      <Label class="space-y-2">
        <span>Your password</span>
        <Input type="password" name="password" placeholder="••••••••" required bind:value={signupPassword}/>
      </Label>
      <Button type="submit" class="w-full1" on:click={() => signupModal = false}>Create a new account</Button>
    </form>
</Modal>

<!-- LOGIN MODAL -->
<Modal bind:open={loginModal} size="xs" autoclose={false} class="w-full rounded-2xl">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Log In</h3>
      <Label class="space-y-2">
        <span>User Name</span>
        <Input type="text" name="username" placeholder="User Name" required />
      </Label>
      <Label class="space-y-2">
        <span>Your password</span>
        <Input type="password" name="password" placeholder="••••••••" required />
      </Label>

      <Button type="submit" class="w-full1">Login to your account</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
        </div>
    </form>
</Modal>


<!-- INITIAL CTA (W HERO) -->
<div class="flex flex-row items-center justify-evenly mt-20">
    <div class="max-w-xs lg:max-w-sm flex flex-col text-center items-center lg:text-left lg:items-start">
        <span class="text-5xl font-[800]">Effortlessly power through tasks.</span>
        <p class="my-4">With intuitive visualizations, 
            TaskBlitz empowers users to do more.</p>
        <Button size="sm" on:click={() => signupModal = true} class="max-w-fit">Get Started</Button>
    </div>
    <img src={hero_image} alt="TaskBlitz Hero" class="h-84 hidden lg:block"/>
</div>


<!-- FEATURE DESCRIPTION #1 -->
<div class="flex flex-col-reverse items-center justify-center md:mt-40 mt-20 md:flex-row">
    <div class="max-w-xs text-center md:mr-20 md:text-left mt-10 md:mt-0">
        <span class="font-bold text-3xl mt-4 md:m-0">Clear Perspective</span>
        <p class="my-4">Quickly and intuitively view the day's activities with Daily Summary </p>
    </div>

    <img src={daily_planning} alt="Daily Planning Feature" class="h-48 md:h-64"/>
</div>

<!-- FEATURE DESCRIPTION #2 -->
<div class="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:mt-40 mt-20">
    <div class="max-w-xs md:ml-20 text-center md:text-left mt-10 md:mt-0">
        <span class="font-bold text-3xl">Track your productivity</span>
        <p class="my-4">With easy to understand metrics, TaskBlitz helps stay focused on your goals. </p>
    </div>

    <img src={metrics_image} alt="Taskblitz metrics" class="h-48 md:h-64"/>
</div>

<!-- FEATURE DESCRIPTION #2 -->
<div class="flex flex-col-reverse md:flex-row items-center justify-center md:mt-40 mt-20">
    <div class="max-w-xs md:mr-20 md:text-left text-center mt-10 md:mt-0">
        <span class="font-bold text-3xl">Custom Lists</span>
        <p class="my-4">Quickly and intuitively view the day's activities with Daily Summary </p>
    </div>

    <img src={custom_list} alt="Custom Lists" class="h-48 md:h-64"/>
</div>

<!-- FINAL CTA -->
<div class="flex flex-col items-center justify-center">
    <span class="font-[700] text-4xl mt-20">Get Started Now</span>
    <Button size="sm" class="my-8" on:click={() => signupModal = true}>Sign Up</Button>
</div>


<!-- FOOTER -->
<div class="w-full bg-nonprimary-50 h- flex flex-col">
    <div class="ml-5 mt-5">
        <a href="/home" class="">
            <img src={logo_full} alt="Taskblitz" class="h-8 mb-2"/>
        </a>
        <span class="text-xs">© 2023 TaskBlitz™ All Rights Reserved.</span>
    </div>

</div>

{#if form?.success}
  <Modal bind:open={successModal} size="xs" autoclose>
    <div class="text-center flex flex-col items-center">
        <!-- THIS IS THE SUCCESS CHECK ICON -->
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-12 h-12 fill-gray-500 dark:text-white mb-4">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      <h3 class="mb-5 text-lg font-sm text-gray-500 dark:text-gray-400">Sign in successful! Welcome {form?.user.fullName}</h3>
      <Button class="mr-2 w-24" href="/" >Continue</Button>
    </div>
  </Modal>
{/if} 
{/if}
