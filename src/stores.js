import { writable } from 'svelte/store'

// Get the value out of storage on load.
localStorage.getItem('language')

// Set the stored value or a sane default.
export const language = writable(storedLanguage || 'english')

// Anytime the store changes, update the local storage value.
localStorage.setItem('language', value)

