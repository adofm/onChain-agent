import OpenAi from  "openai";
import { Assistant } from "openai/resources/beta/assistants.mjs";
import { tools } from "../tools/allTools";
export async function createAssistant(client:OpenAi): Promise<Assistant>{
    return await client.beta.assistants.create({
        model:"gpt-4o-mini",
        name:"adofm",
        instructions:`you can use the and you are in control of the tolls which are listed 
        -get_balance :get the balance of a wallet `,
        tools:Object.values(tools).map(tool=>tool.definition)
    });
}
