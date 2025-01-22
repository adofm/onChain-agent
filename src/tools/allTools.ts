import { getBalanceTool } from './getBalance.js';
import { getWalletAddressTool } from './getWalletAddress.js';
import { readContractTool } from './readContract.js';
import { sendTransactionTool } from './sendTransaction.js';
import { writeContractTool } from './writeContract.js';
import { getContractAbiTool } from './getContractAbi.js';
import { getTransactionReceiptTool } from './getTransactionReceipt.js';
import { deployErc20Tool } from './deployErc20.js';
import { uniswapV3CreatePoolTool } from './uniswapV3createPool.js';
import { approveTokenAllowanceTool } from './approveTokenAllowance.js';
import { getTokenBalanceTool } from './getTokenBalance.js';

export interface ToolConfig<T = any> {
    definition: {
        type: 'function';
        function: {
            name: string;
            description: string;
            parameters: {
                type: 'object';
                properties: Record<string, unknown>;
                required: string[];
            };
        };
    };
    handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
    // == READ == \\
    get_balance: getBalanceTool,
    get_wallet_address: getWalletAddressTool,
    get_contract_abi: getContractAbiTool,
    read_contract: readContractTool,
    get_transaction_receipt: getTransactionReceiptTool,
    get_token_balance: getTokenBalanceTool,
    

    // == WRITE == \\
    send_transaction: sendTransactionTool,
    write_contract: writeContractTool,
    deploy_erc20: deployErc20Tool,
    create_uniswap_v3_pool: uniswapV3CreatePoolTool,
    approve_token_allowance: approveTokenAllowanceTool,
};
