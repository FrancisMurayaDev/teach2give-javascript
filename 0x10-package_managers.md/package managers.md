# Package Managers

A package manager is a tool that automates the process of installing, updating, configuring and removing software dependencies (packages) in JavaScript projects. 

Dependencies - concept where on piece of software depends on another software to function correctly. 

- If program A depends on program B to run, program B is a dependency of program A.

There are 2 types of dependencies:

## 1. Direct Dependencies
- Core frameworks, modules and the libraries that the code calls to perform specific functionalities.
- Listed in `package.json` in JS.

## 2. Transitive Dependencies.
- Dependencies of direct dependencies.

### Importance of Dependencies 
- speed up development process.
- Helps avoid re-inventing or re-building.
- By using pre-written and tested code, developers can focus on creating new features rather than building from scratch.
- Increase efficiency and allow creation of complex applications in a shorter time. 


## JavaScript has 3 main types of package managers (for managing dependencies).

1. Node Package Manager (`npm`) - default package manager for `node.js`.

2. Yarn - Developed by Facebook as an alternative to npm, offering better performance and security.

3. pnpm - A modern package manager that uses a more efficient way of handling dependencies by creating a global store.


