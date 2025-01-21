import OpenAI from "openai";
import { Thread } from "openai/resources/beta/threads/threads.mjs";
import { Run } from "openai/resources/beta/threads/runs/runs.mjs";
import { handleRunToolCalls } from "./handleRunToolCall";

export async function performRun(client:OpenAI,run:Run,thread:Thread){
    while(run.status=="requires_action"){
        run=await handleRunToolCalls(client,run,thread);
    }
    if(run.status=="failed"){
        const errorMessage =`error encounterd ${run.last_error?.message || "Unkown error"}`;
        console.log("Run failed",run.last_error);
        await client.beta.threads.messages.create(thread.id,{
            role:"assistant",
            content:errorMessage
        }) 
        return {
            type:"Text",
            text:{
                value:errorMessage,
                annotations:[]
            }
        }
    }

    const message = await client.beta.threads.messages.list(thread.id);

    const lastestAssistantMessage=message.data.find(message=>message.role=="assistant");

    return lastestAssistantMessage?.content[0] || {type:'text', text:{value:'No response from the assistant',annotations:[]}};
}