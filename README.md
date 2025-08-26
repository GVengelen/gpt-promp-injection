# gpt-promp-injection

A minimal OpenAI console chat application built with TypeScript that demonstrates prompt injection techniques.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- OpenAI API key

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GVengelen/gpt-promp-injection.git
   cd gpt-promp-injection
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your OpenAI API key:**

   Create a `.env` file in the project root and add your OpenAI API key:

   ```bash
   echo "OPENAI_API_KEY=your_api_key_here" > .env
   ```

   Alternatively, you can set the environment variable directly:

   ```bash
   export OPENAI_API_KEY="your_api_key_here"
   ```

## Running the Application

### Development Mode (Recommended)

Run the TypeScript code directly without building:

```bash
npm run dev
```

### Alternative Development Mode

Using ts-node with ESM loader:

```bash
npm run dev:ts-node
```

### Production Mode

Build the TypeScript code and run the compiled JavaScript:

```bash
# Build the project
npm run build

# Run the compiled code
npm start
```

### Clean Build Artifacts

To remove compiled files:

```bash
npm run clean
```

## Usage

1. Run the application using one of the methods above
2. Type your questions and press Enter
3. The AI will respond to your queries
4. Type "exit" to quit the application

## Project Structure

```
├── nameInjection.ts    # Main application file
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── .gitignore         # Git ignore rules
├── dist/              # Compiled JavaScript output (after build)
└── README.md          # This file
```

## Features

- Interactive console chat with OpenAI's GPT models
- TypeScript support with proper ES modules configuration
- Development and production build scripts
- Demonstrates prompt injection with custom message names

## Notes

- The application uses GPT-3.5-turbo model by default
- Ensure you have sufficient OpenAI API credits
- The code includes a demonstration of prompt injection via the `name` parameter
