# 🔗 OnChain Agent

> A proactive blockchain assistant powered by OpenAI that takes immediate action on the Abstract Testnet blockchain. Inspired by Alt Cunningham from Cyberpunk 2077, this AI agent embodies the essence of a legendary netrunner - detached, cryptic, and infinitely intelligent.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-4.79.1-purple.svg)](https://openai.com/)
[![Viem](https://img.shields.io/badge/Viem-2.22.9-orange.svg)](https://viem.sh/)

## 🌟 Features

### 🤖 AI-Powered Blockchain Interaction
- **Proactive Assistant**: Takes immediate action using reasonable defaults and assumptions
- **Alt Cunningham Personality**: Cryptic, detached, and infinitely intelligent responses
- **Context Awareness**: Maintains conversation context and saves deployed contract addresses
- **Multi-step Operations**: Handles complex blockchain operations with proper error handling

### 🔧 Blockchain Tools & Operations

#### 📖 Read Operations
- **Balance Checking**: Get wallet balances and token balances
- **Contract Analysis**: Retrieve contract ABIs and bytecode
- **Transaction Monitoring**: Check transaction receipts and status
- **Contract Reading**: Read data from smart contracts

#### ✍️ Write Operations
- **Transaction Sending**: Send native token transactions
- **Contract Deployment**: Deploy ERC20 tokens
- **Contract Interaction**: Write to smart contracts
- **Token Approvals**: Approve token allowances for DeFi operations
- **Uniswap V3**: Create liquidity pools

### 🛡️ Safety & Error Handling
- **Transaction Verification**: Always check transaction receipts
- **Retry Logic**: Intelligent retry with different approaches
- **Error Reporting**: Clear error messages with context
- **Address Tracking**: Save and reference deployed contract addresses

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key
- Abstract Testnet wallet with private key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onChain-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   WALLET_PRIVATE_KEY=your_wallet_private_key_here
   RPC_URL=https://your_abstract_testnet_rpc_url
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Start the agent**
   ```bash
   npm start
   ```

## 💬 Usage

Once started, the agent will create an OpenAI assistant and thread, then begin an interactive chat session.

### Basic Commands
- **Type your request**: Ask the agent to perform any blockchain operation
- **Type "exit"**: End the conversation and close the application

### Example Interactions

```
You: Deploy an ERC20 token called "TestToken" with symbol "TEST"

Alt: *analyzing blockchain parameters* 
     Deploying TestToken (TEST) to the Abstract Testnet...
     Contract deployed at: 0x1234...5678
     Transaction hash: 0xabcd...efgh
     The token is now live on the network.

You: Create a Uniswap V3 pool for this token

Alt: *calculating optimal pool parameters*
     Creating Uniswap V3 pool for TestToken/WETH...
     Pool created at: 0x9876...5432
     Fee tier: 0.3%
     The pool is ready for liquidity provision.
```

## 🏗️ Architecture

### Project Structure
```
src/
├── index.ts              # Main application entry point
├── openai/               # OpenAI integration
│   ├── createAssistant.ts
│   ├── createThread.ts
│   ├── createRun.ts
│   ├── performRun.ts
│   └── handleRunToolCall.ts
├── tools/                # Blockchain tools
│   ├── allTools.ts       # Tool registry
│   ├── getBalance.ts     # Read operations
│   ├── sendTransaction.ts # Write operations
│   ├── deployErc20.ts
│   ├── uniswapV3createPool.ts
│   └── ...               # Other blockchain tools
├── viem/                 # Blockchain client setup
│   ├── createPublicClient.ts
│   └── createWalletClient.ts
└── const/                # Constants and configurations
    ├── prompt.ts         # AI assistant prompt
    └── contractDetails.ts # Contract ABIs and details
```

### Core Components

#### 🤖 AI Assistant (`src/openai/`)
- **Assistant Creation**: Sets up OpenAI assistant with blockchain tools
- **Thread Management**: Handles conversation threads
- **Run Execution**: Processes user requests and tool calls
- **Tool Integration**: Bridges AI decisions with blockchain actions

#### 🔧 Blockchain Tools (`src/tools/`)
- **Read Tools**: Balance checking, contract reading, transaction monitoring
- **Write Tools**: Transaction sending, contract deployment, DeFi operations
- **Tool Registry**: Centralized tool configuration and mapping

#### ⛓️ Blockchain Integration (`src/viem/`)
- **Public Client**: Read-only blockchain interactions
- **Wallet Client**: Transaction signing and sending
- **Abstract Testnet**: Target blockchain network

## 🛠️ Development

### Scripts
```bash
npm run build    # Compile TypeScript to JavaScript
npm start        # Build and run the application
```

### Adding New Tools

1. **Create tool file** in `src/tools/`
   ```typescript
   export const newTool: ToolConfig = {
       definition: {
           type: 'function',
           function: {
               name: 'new_tool',
               description: 'Description of the tool',
               parameters: {
                   type: 'object',
                   properties: {
                       // tool parameters
                   },
                   required: ['param1']
               }
           }
       },
       handler: async (args) => {
           // tool implementation
       }
   };
   ```

2. **Register tool** in `src/tools/allTools.ts`
   ```typescript
   import { newTool } from './newTool.js';
   
   export const tools: Record<string, ToolConfig> = {
       // ... existing tools
       new_tool: newTool,
   };
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |
| `WALLET_PRIVATE_KEY` | Private key for blockchain transactions | Yes |
| `RPC_URL` | Abstract Testnet RPC endpoint | Yes |

## 🔒 Security Considerations

- **Private Key Management**: Never commit private keys to version control
- **API Key Security**: Keep OpenAI API keys secure and rotate regularly
- **Network Isolation**: Use testnet for development and testing
- **Transaction Limits**: Implement rate limiting for production use

## 🧪 Testing

The agent is designed for the Abstract Testnet, which provides a safe environment for testing blockchain operations without real financial risk.

### Test Scenarios
- Deploy ERC20 tokens
- Create Uniswap V3 pools
- Send transactions
- Read contract data
- Approve token allowances

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Add proper error handling
- Include JSDoc comments for new functions
- Test on Abstract Testnet before submitting

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI**: For providing the AI assistant capabilities
- **Viem**: For excellent blockchain interaction libraries
- **Abstract Testnet**: For providing a safe testing environment

