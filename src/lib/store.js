import { writable } from "svelte/store";


export let isLoggedIn = writable(false);
export let imgsData = writable([
    {
        src: 'https://i.pinimg.com/564x/68/b5/77/68b577ba7cb013903567b3537fd73747.jpg',
        id: 1
    },
    {
        src: 'https://i.pinimg.com/564x/cb/20/e9/cb20e993514992e6094139a4bac417c6.jpg',
        id: 2
    },
    {
        src: 'https://i.pinimg.com/564x/66/69/92/6669920f15a4b9593e2c52589fc93621.jpg',
        id: 3
    },
    {
        src: 'https://i.pinimg.com/564x/1a/11/cf/1a11cf9d73af1466b9d76fd38d4c33ab.jpg',
        id: 4
    },
    {
        src: 'https://i.pinimg.com/564x/4d/86/dd/4d86ddf13eda96c2cab1c79489925e2e.jpg',
        id: 5
    },
    {
        src: 'https://i.pinimg.com/564x/9b/fd/d5/9bfdd53be19cb460e83cbfd735f88516.jpg',
        id: 6
    }
]);