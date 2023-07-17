import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();
    try {
        await connectToDatabase();
        const newPrompt = new Prompt({
            creator: userId,
            tag,
            prompt
        })
        await newPrompt.save();
        return new Response(JSON.stringify({
            status: 200,
            newPrompt
        }))
    } catch (error) {
        console.log(error);
    }
}