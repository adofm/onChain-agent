import { createPublicClient, http } from 'viem'
import { sepolia } from 'viem/chains'
 
export function createViemPublicClient(){
    return createPublicClient({ 
        chain: sepolia,
        transport: http()
    })
}