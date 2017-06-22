#!/usr/bin/env zsh

# Get HEAD commit id
HEAD_ID=$(git rev-parse HEAD)

# Wipe out existing build directory
rm -rf build/

# Clone pranavtbhat.github.io
git clone git@github.com:pranavtbhat/pranavtbhat.github.io.git temp

# Run build
npm run build

# Copy contents over
cp -r build/* temp/

# Go into directory, commit and push
cd temp
git add .
git commit -m "Matching commit in website: $(HEAD_ID)"
git push origin master

# Step out and wipe out temp
cd ..
rm -rf temp
