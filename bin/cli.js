#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('Welcome to YourNextJsApp!');

  // Ask for environment variables
  const envVars = {};
  const requiredEnvVars = ['VAR1', 'VAR2']; // Add your required env vars here

  for (const varName of requiredEnvVars) {
    const value = await askQuestion(`Enter value for ${varName}: `);
    envVars[varName] = value;
  }

  // Create a temporary .env.local file
  const envContent = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  const tempEnvPath = path.join(process.cwd(), '.env.local');
  fs.writeFileSync(tempEnvPath, envContent);

  // Run the Next.js app
  const nextBin = path.join(__dirname, '..', 'node_modules', '.bin', 'next');
  const child = spawn(nextBin, ['dev'], {
    stdio: 'inherit',
    env: { ...process.env, ...envVars }
  });

  child.on('close', (code) => {
    // Clean up the temporary .env.local file
    fs.unlinkSync(tempEnvPath);
    rl.close();
    process.exit(code);
  });
}

main().catch(console.error);