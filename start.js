import { spawnSync, spawn } from "child_process";
import { config } from "dotenv";
import inquirer from "inquirer";

// Load environment variables from .env file
config();

// Define a list of available clients
const clients = [
  { name: "Default", env: {} },
  { name: "Client A", env: { VITE_APP_TITLE: "CLIENT A" } },
  { name: "Client B", env: { VITE_APP_TITLE: "CLIENT B" } },
  { name: "Client C", env: { VITE_APP_TITLE: "CLIENT C" } },
];

inquirer
  .prompt({
    type: "list",
    name: "client",
    message: "Select a client:",
    choices: clients.map((client) => client.name),
  })
  .then((answers) => {
    // Get the selected client object
    const selectedClient = clients.find(
      (client) => client.name === answers.client
    );

    // Set the environment variables for the selected client
    Object.keys(selectedClient.env).forEach((key) => {
      process.env[key] = selectedClient.env[key];
    });

    // Start the server with the selected environment variables
    const env = Object.keys(process.env)
      .map((key) => `${key}=${process.env[key]}`)
      .join(" ");
    const result = spawn("npx", ["vite", process.argv[2]], {
      stdio: "inherit",
      shell: true,
      env: { ...process.env, env },
    });
  })
  .catch((error) => {
    console.error(error);
  });
