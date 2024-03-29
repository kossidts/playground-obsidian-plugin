# Obsidian Playground Plugin

**⚠️ Caution:** This copy of the [obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin) repo and is solely for testing and learning the obsidian API. Do not use it in your obsidian app!

## Resources

-   [obsidianmd/obsidian-api](https://github.com/obsidianmd/obsidian-api)
-   [Obsidian Plugin Developer Docs | Obsidian Plugin Developer Docs](https://marcus.se.net/obsidian-plugin-docs/)
-   [For Plugin Developers - Obsidian Hub - Obsidian Publish](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/for+Plugin+Developers)

## Use only for learning purpose - if at all

If you wants to use this repo for learning purpose, follow this steps

-   Clone this repo.
-   Make sure your NodeJS is at least v16 (`node --version`)
-   `npm i` or `yarn` to install dependencies
-   (optional - might break the current state) `npm update` to update the Obsidian API
-   `npm run dev` to start compilation in watch mode.

### Testing and releasing your plugin

-   Reload Obsidian to load the new version of your plugin.
-   Enable plugin in settings window.

#### Release

-   Update `minAppVersion` manually in `manifest.json` is necessary.
-   Run `npm version patch`, `npm version minor` or `npm version major`
-   Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
-   Upload the files `manifest.json`, `main.js`, `styles.css` from the dist folder as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
-   Publish the release.

#### Manually installing the plugin

-   TODO automate: Create a folder with a the same name as your plugin id under your dist folder `dist/your-plugin-id/`
-   TODO automate: Copy over `main.js`, `styles.css`, `manifest.json` to that folder
-   Copy over the `your-plugin-id` folter to your vault `VaultFolder/.obsidian/plugins/`.

#### Adding your plugin to the community plugin list

-   Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
-   Publish an initial version.
-   Make sure you have a `README.md` file in the root of your repo.
-   Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

#### Improve code quality with eslint (optional)

-   [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code.
-   To use eslint with this project, make sure to install eslint from terminal:
    -   `npm install -g eslint`
-   To use eslint to analyze this project use this command:
    -   `eslint main.ts`
    -   eslint will then create a report with suggestions for code improvement by file and line number.
-   If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
    -   `eslint .\src\`

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
	"fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:

```json
{
	"fundingUrl": {
		"Buy Me a Coffee": "https://buymeacoffee.com",
		"GitHub Sponsor": "https://github.com/sponsors",
		"Patreon": "https://www.patreon.com/"
	}
}
```
