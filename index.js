import fs from 'fs';
import { join } from 'path';
import { getInput, setOutput, setFailed } from '@actions/core';


function getPackageJson(path) {
    return fs.readFileSync(join(path, 'package.json')).toString();
}

function main() {
    try {
        const path = getInput('path');
        console.log(`Reading ${join(path, 'package.json')}!`);

        const pkg = JSON.parse(getPackageJson(path));

        console.log(`The version is ${pkg.version}`)
        setOutput("version", pkg.version);
    } catch (error) {
        setFailed(error.message);
    }
}

main()
