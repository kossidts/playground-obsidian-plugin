import process from "node:process";
import path from "node:path";
import { copyFileSync, readFileSync, writeFileSync } from "node:fs";

import esbuild from "esbuild";
import builtins from "builtin-modules";

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
`;

const prod = process.argv[2] === "production";
const buildOptions = {
	banner: {
		js: banner,
	},
	entryPoints: ["main.ts", "styles.css"],
	bundle: true,
	outdir: "dist",
	// outfile: "main.js",
	external: [
		"obsidian",
		"electron",
		"@codemirror/autocomplete",
		"@codemirror/collab",
		"@codemirror/commands",
		"@codemirror/language",
		"@codemirror/lint",
		"@codemirror/search",
		"@codemirror/state",
		"@codemirror/view",
		"@lezer/common",
		"@lezer/highlight",
		"@lezer/lr",
		...builtins,
	],
	format: "cjs",
	watch: !prod,
	target: "es2018",
	logLevel: "info",
	sourcemap: prod ? false : "inline",
	treeShaking: true,
};

esbuild
	.build(buildOptions)
	.catch(() => process.exit(1))
	.then((result) => {
		// update the manifest.json and copy it to dist
		// console.log(
		// 	"Done!!!!",
		// 	process.cwd(),
		// 	process.env.npm_lifecycle_event,
		// 	process.env.npm_package_version,
		// 	process.env.npm_new_version
		// );
		/**
		 * If there is a new version number:
		 * - update the manifest.json file and copy it to the dist folder
		 * - update the versions.json file
		 */
		if (process.env.npm_new_version) {
			const targetVersion = process.env.npm_new_version;
			const manifestJsonSrc = path.join(process.cwd(), "manifest.json");
			const manifestJsonDist = path.join(
				process.cwd(),
				buildOptions.outdir,
				"manifest.json"
			);
			// Read the manifest.json file, update the version number and save the change
			const manifest = JSON.parse(readFileSync(manifestJsonSrc, "utf8"));
			manifest.version = targetVersion;
			writeFileSync(
				manifestJsonSrc,
				JSON.stringify(manifest, null, "\t")
			);

			// Copy the manifest.json file over to the dist folder
			copyFileSync(manifestJsonSrc, manifestJsonDist);

			// Read the versions.json file, set the new version number as a new key with the value of minAppVersion from manifest.json
			const versionsJsonSrc = path.join(process.cwd(), "versions.json");
			const versions = JSON.parse(readFileSync(versionsJsonSrc, "utf8"));
			versions[targetVersion] = manifest.minAppVersion;
			writeFileSync(
				versionsJsonSrc,
				JSON.stringify(versions, null, "\t")
			);
		}
	});
