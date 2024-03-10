type User = {
    id: number
    name: string
}

export default defineEventHandler((): User[] => {
    return [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ]
})
