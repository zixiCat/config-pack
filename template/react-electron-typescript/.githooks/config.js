const { execSync } = require('child_process');

try {
    const hooksPath = execSync("git config --local --get core.hookspath", { encoding: 'utf8' })
    if (hooksPath !== '.githooks/') execSync("git config --local core.hookspath .githooks/")
} catch {
    execSync("git config --local core.hookspath .githooks/")
}