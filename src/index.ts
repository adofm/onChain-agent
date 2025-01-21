import OpenAI from "openai";
import "dotenv/config"
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { performRun } from "./openai/performRun";
async function main() {
    const client = new OpenAI();
    const message = "het my balance of this wallet address 0x131f89fD02Fda2a0837eaD0c93DE5f2B127ac69D";
    const assistants= await createAssistant(client);
    const thread = await createThread(client,message);
    const run = await createRun(client,thread,assistants.id);
    const result = await performRun(client,run,thread);
    console.log(result);    
}
main();