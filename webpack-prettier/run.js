// import { execSync } from "node:child_process";
const { execSync } = require("child_process");

const runWebpackPrettier = () => {
	const hyperfineCommand = `hyperfine  --show-output -i -w 2 -n Prettier "npx prettier '**/*.js' '**/*.ts'  --write --loglevel=error" -n Biome "npx biome format  'lib' 'examples' 'declarations' 'benchmark'  --write --max-diagnostics=0"`;
	console.log(hyperfineCommand);

	execSync(hyperfineCommand, {
		stdio: "inherit"
	});
};

runWebpackPrettier();
