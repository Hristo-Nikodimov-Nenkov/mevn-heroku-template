# mevn-heroku-template
GitHub template project with basic ExpressJS back-end and VueJS front-end applications with automated client build and deploy to heroku.

## Setup
### 1) Press the "Use this template" button.
### 2) Select name for the repo.
You need master and deploy branches, becouse the Heroku application will connect to the "deploy" branch and deploy it's content.
### 3) Go to the Settings > Secrets and create EMAIL and NAME secrets
They are needed for the git commands in the workflow. Without them the workflow fails.
#### If you put file that is not needed in the deploy branch you must add it's deletion in the workflow.
### 4) Go to heroku and create new application.
### 5) Go to "Deploy" and in "Deployment method" select "GitHub"
### 6) Press the "Search" button and select the repo.
### 7) In "Choose a branch to deploy" select "deploy"
### 8) Leave "Wait for CI to pass before deploy" UNCHECKED!
The push to the "deploy" branch is last in the workflow.
### 9) Press "Enable Automatic Deploys"
### 10) You must setup some environment variables:
COOKIES_SECRET - The cookies signing secret.
JWT_SECRET - The JsonWebToken signing secret.
JWT_EXPIRY - The expiration time of the token. (24h 2d ...) 

# !!! If you ever need to delete branch "deploy" and create it again, then you must go to heroku too and set again Auto Deploy (step 7) !!!
