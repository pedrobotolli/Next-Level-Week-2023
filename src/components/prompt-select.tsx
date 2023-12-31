import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Prompt {
    id: string
    title: string
    template: string
}

interface PromptSelectProps{
    onPromptSelected: (template: string) => void
}

export function PromptSelect(props: PromptSelectProps) {
    const [prompts, setPrompts] = useState<Prompt[] | null>(null)

    useEffect(() => {
        api.get('/prompts').then((response) => {
            setPrompts(response.data)
        })
    }, [])

    function handlePromptSelected(promptId: string){
        const selectedPrompt = prompts?.find(prompt => prompt.id === promptId)

        if (!selectedPrompt) {
            return
        }

        props.onPromptSelected(selectedPrompt.template)
    }

    return (
        <Select onValueChange={handlePromptSelected}>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um Prompt..."></SelectValue>
            </SelectTrigger><SelectContent>
                {prompts?.map((prompt) => (
                    <SelectItem key={prompt.id} value={prompt.id}>{prompt.title}</SelectItem>
                ))}
            </SelectContent>

        </Select>
    )
}