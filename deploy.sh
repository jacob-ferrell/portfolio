#!/usr/bin/env sh

# abort on errors
set -e

#delete previous dist directory
rm -r dist

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:jacob-ferrell/jacob-ferrell.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jacob-ferrell/portfolio.git main:gh-pages

cd -