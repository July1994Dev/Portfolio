import { defineStore } from '../Vue/pinia.js'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        User: {
            UserName: "Ricardo Josue"
        },
    }),
    actions: {
        async MetodoTest() {
            alert("Esto es una prueba");
        }
    }
});