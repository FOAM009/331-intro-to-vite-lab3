import type { EditState } from "@/types";
import { defineStore } from 'pinia'
export const useEditStore = defineStore('edit', {
    state: (): EditState => ({
        edit: ''
    }),
    actions: {
        updateMessage(edit: string): void {
            this.edit = edit
        },
        resetMessage(): void{
            this.edit = ''
        }
    }
})