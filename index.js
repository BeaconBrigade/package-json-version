const fs = require('fs');
const join = require('path').join;
const core = require('@actions/core');


function getPackageJson(path) {
    return fs.readFileSync(join(path, 'package.json')).toString();
}

function main() {
    try {
        const path = core.getInput('path');
        console.log(`Reading ${join(path, 'package.json')}!`);

        const pkg = JSON.parse(getPackageJson(path));

        console.log(`The version is ${pkg.version}`)
        core.setOutput("version", pkg.version);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main()
