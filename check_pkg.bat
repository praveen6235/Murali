@echo off
echo Check node: > pkg_check.txt
node -v >> pkg_check.txt 2>&1
echo Check npm: >> pkg_check.txt
npm.cmd -v >> pkg_check.txt 2>&1
echo Check pnpm: >> pkg_check.txt
pnpm.cmd -v >> pkg_check.txt 2>&1
echo Check yarn: >> pkg_check.txt
yarn.cmd -v >> pkg_check.txt 2>&1
echo Done.
