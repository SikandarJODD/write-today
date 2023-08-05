import supabase from "$lib/db";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async () => {
        await supabase.auth.signOut();
        throw redirect(302, '/');
    }
};