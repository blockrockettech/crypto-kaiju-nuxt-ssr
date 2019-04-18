#!/usr/bin/env bash

npm run build;

echo "Deploying Kaiju SSR BETA ONLY"
firebase use cryptokaiju-beta;
firebase deploy --only functions:nuxtssr,hosting
