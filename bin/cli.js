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

function findNextBinary() {
  const possiblePaths = [
    path.join(__dirname, '..', 'node_modules', '.bin', 'next'),
    path.join(__dirname, '..', '..', '.bin', 'next'),
    'next' // This will use the globally installed next if available
  ];

  for (const binPath of possiblePaths) {
    if (fs.existsSync(binPath)) {
      return binPath;
    }
  }

  throw new Error('Unable to find the Next.js binary. Make sure Next.js is installed.');
}

async function main() {
  console.log('Welcome to YourNextJsApp!');

  // Ask for environment variables
  const envVars = {};
  const requiredEnvVars = [
    'NOVU_SECRET_KEY',
    'NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIRER',
    'NEXT_PUBLIC_NOVU_SUBSCRIBER_ID'
  ];

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

  // Find and run the Next.js app
  try {
    const nextBin = findNextBinary();
    console.log(`Using Next.js binary: ${nextBin}`);

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
  } catch (error) {
    console.error('Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

main().catch(console.error);