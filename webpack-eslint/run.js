// import { execSync } from "node:child_process";
const { execSync } = require("child_process");

const runWebpackESLint = () => {
	const hyperfineCommand = `hyperfine  --show-output -i -w 2 -n ESLint "npx eslint 'lib/**/*.js'  --no-ignore" -n Biome "npx biome check 'lib' --max-diagnostics=0"`;
	console.log(hyperfineCommand);

	execSync(hyperfineCommand, {
		stdio: "inherit"
	});
};

runWebpackESLint();
