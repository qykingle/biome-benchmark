// import { execSync } from "node:child_process";
const { execSync } = require("child_process");

const runWebpackPrettier = () => {
	const hyperfineCommand = `hyperfine  --show-output -i -w 2  -n Biome "npx biome format  'lib'  --write --max-diagnostics=0" -n Prettier "npx prettier 'lib/**/*.js'  --write --loglevel=error"`;
	console.log(hyperfineCommand);

	execSync(hyperfineCommand, {
		stdio: "inherit"
	});
};

runWebpackPrettier();
