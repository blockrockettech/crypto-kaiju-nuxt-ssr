#!/usr/bin/env bash

npm run build;

echo "Deploying Kaiju SSR LIVE"
firebase use cryptokaiju;
firebase deploy --only functions:nuxtssr,hosting
