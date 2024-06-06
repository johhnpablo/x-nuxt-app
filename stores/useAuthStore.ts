export const useAuthStore = defineStore('auth', () => {

    const user = ref();
    const isLoggedIn = computed(() => !!user.value);

    async function fetchUser () {
        const response = await fetch('/api/user');

        return response;
    }
    async function login(form: any) {

        await useApi('/sanctum/csrf-cookie');

        const response = await useApi('/login', {
            method: 'POST',
            body: form,
        });

        return response;
    }

    return {login};
});