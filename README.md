# mevn-heroku-template
GitHub template project with basic ExpressJS back-end and VueJS front-end applications with automated client build and deploy to heroku.

## Setup
### 1) Press the "Use this template" button.
### 2) Select name for the repo.
You need all branches, becouse the Heroku application needs to be connected to the "deploy" branch.
### 3) Go to the Settings > Secrets and create EMAIL and NAME secrets
They are needed for the git commands in the workflow. Without them the workflow fails.
### 4) Go to heroku and create new application.
### 5) Go to "Deploy" and in "Deployment method" select "GitHub"
### 6) Press the "Search" button and select the repo.
### 7) In "Choose a branch to deploy" select "deploy"
### 8) Leave "Wait for CI to pass before deploy" UNCHECKED!
The push to deploy branch is last in the workflow.
### 9) Press "Enable Automatic Deploys"

# !!! If you ever need to delete branch "deploy" and create it again, then you must go to heroku too and set again Auto Deploy (step 7) !!!
