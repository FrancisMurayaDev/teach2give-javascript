# Node Package Manager (npm).

`npm` is the default package manager for `node.js`.

- allow easy manager JS Libraries and tools (dependencies) easily.

- With npm, you can install, update, and manage project dependencies, as well as publish and distribute packages.

## Key Features of NPM.

- <b>Package Installation</b> - Installs libraries and dependencies easily.

- <b>Version Management</b> - allows installing specific versions of packages.

- <b>Dependency Management </b> - Maintains a package.json file that records installed dependencies.

- <b>Scripts Execution </b> - Runs custom scripts for automation.

- <b> Global and Local Packages </b> - Supports both project-specific and system-wide installations.

## Installing NPM

`npm` comes bundled with `node.js`.

To Install it:

1. Download and Install Node.js from <link>https://nodejs.org/en/download</link>.

2. Verify installation by running the command below:

```js
npm - v;
```

- If a version number is returned, it means you have npm installed.

## package.json and package-lock.json

- The package.json file contains important information about your project including the dependencies/packages your project is using.

- When you are using multiple packages in your project, the way you keep track of these packages is by using the `package.json` file.

- The `package.json` file is important especially when other developers want to clone your project and know the specific packages that your project is using, they can then use the `package.json` file to install all of them.

### Key Elements of `Package.json` file.

1. Project Name.
2. Version of the project, follows a semantic versioning.
3. A brief description of the file.
4. main - entry point of the project.
5. devDependencies - specific libraries and packages needed only for development.
6. scripts - define scripts commands that can be run on the project.
7. author - information about the project author.

## Creating a `package.json` file.

1. To create a `package.json` file, on your terminal or command prompt run:

```
npm init
```

- This will walk you through a utility to enter information about your project such as name, version e.t.c.

- ou can choose to leave a field empty by pressing
  `Enter`
  without providing any information, you can always update, change and add information later, so it's okay if you want to skip some fields or all the fields.

- To quickly generate a package.json file without providing any information, you can pass the y flag:

```
npm init -y
```

- Once you create the package.json file, you can now start installing packages.

- When you install a package, npm stores the files and folders for this package in a folder called `node_modules`.

### package-lock.json

The `package-lock.json` file ensures consistency in dependency installation by storing detailed information about the exact versions of installed packages, along with their source URLs.

This guarantees that when someone else installs the dependencies using `npm install`, they get the same package versions as originally installed, preventing unexpected issues due to version mismatches.

External Resource: What is `package-lock.json`.

## Installing Packages

There are 2 ways to Install packages:

- Locally - specific to a project.
- Globally (system wide).

### Local Installation

- It will only be accessible to that specific project folder.

- To install a package locally, run the `npm install` command without passing any flags.

```
npm install packageName
```

- This installs the package in the node_modules folder and updates the `package.json` file.

### Global Installation

- When you install a package globally, the package will be accessible from any directory.

- To install a package globally, pass the `--global` or `-g` flag to `npm install` command.

```
npm install --global packageName
```

- Globally installed packages can be used anywhere on your system.

## Listing Installed Packages.

- You can list installed packages locally or globally.

- To list locally installed packages, run:

```
npm list
```

- To list globally installed packages, pass the`-g` flag to npm list:

```
npm list -g
```

## Uninstalling a Package

- You can uninstall a package using the `npm uninstall` command:

```
npm uninstall packageName
```

- To uninstall a globally installed package, pass the `-g` flag to the npm uninstall command:

```
npm uninstall -g packageName
```

## Installing a specific version

```
npm install packageName@version
```

## Check security vulnerabilities﻿

- To check the security vulnerabilities of a package, run:

```
npm audit packageName
```

## Development vs Regular/Production Dependencies

- Regular/Production dependencies are dependencies that the project needs to run.

- To install a package as a regular dependency, run npm install without passing any options.

```
npm install packageName
```

- Regular/Production dependencies are listed under the dependencies field in the `package.json` file.

- Development dependencies on the other hand are only used for development and are not needed for the project to function.

- To install a dependency as a development dependency, pass the `-D` flag or `--save-dev` to `npm install` command:

```
npm install --save-dev packageName
```

- Development dependencies are listed under the devDependencies field in the package.json file.

## Running Scripts

You can define scripts in `package.json` under `"scripts"` and run them using:

```
npm run scriptName
```

## Package Versioning and Updates

Packages written by other people are updated by those authors regularly to fix bugs and even introduce new features.

- `npm` versions follow a semantic versioning.

- `Semantic versioning` is a system of numbering software versions which each number containing three digits separated by a dot such as `12.17.19`.

As learnt earlier on Git and GitHub Lessons:

- The first digit represents the major version (12).

- The second digit represents the minor version (17).

- The last digit represents the patch version (19).


- `Major version` is used for changes that are not backward compatible; when changing to this version, we might break things.

``Major versions must be incremented if any backward incompatible changes are introduced.``


- Minor version is used when introducing new features that are backward compatible and won't break anything when we change to that version.

``Minor versions must be incremented if new, backward compatible functionality is introduced.``

Patch updates are used for updates that contain small bug fixes, and updating won't also break anything.

``Patch versions must be incremented if only backward compatible bug fixes are introduced.``

`<b>When a new version is released, the digits to the right usually reset back to zero. For example, if the current version is 2.34.0 and a major release happens, the new version will be 3.0.0, also when a new minor version is released, the version number changes to 2.35.0</b>`

## Symbols Used in npm Package Versions.

<a href="https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json"> StackOverflow Resource </a>
