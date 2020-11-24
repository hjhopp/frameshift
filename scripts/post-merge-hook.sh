#!/usr/bin/env bash
# source: https://blog.theodo.com/2019/04/local-project-always-date-post-merge-git-hook/

function changed {
    git diff --name-only HEAD@{2} HEAD | grep "^$1" > /dev/null 2>&1
}

if changed 'package.json' || changed 'package-lock.json'; then
    echo -ne '\n\e[31mWARNING:\e[m \e[33mThe package.json or package-lock.json file changed, npm install needs to be executed.\e[m\n\n'
    npm ci
fi

exit 0
