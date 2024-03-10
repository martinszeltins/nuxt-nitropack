type Comment = {
    id: number
    body: string
}

export default defineEventHandler((): Comment => {
    return {
        id: 1,
        body: 'First comment'
    }
})
