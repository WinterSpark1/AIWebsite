import ollama from 'ollama'

export const generateReply = async ({ input_message }) => {
    const response = await ollama.chat({
        model: 'llama3.2',
        messages: [{ role: 'user', content: input_message }],
    })
    console.log(response.message.content)
    return response;
}

export default { generateReply }