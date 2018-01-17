# TLDR / What is it?

A template application with React, Redux, Node, Express, PM2, Nginx and LetsEncrypt to run on CentOS. Use this as starter for each project 

# Why?

No more fiddling around with nginx or files. The create script punts out a skeleton express app and configures nginx for you, the deploy script pushes up your server.js and your dist folder. 

I felt there was a gap between creating a production build and deploying to a non PAAS environment. Especially when it comes to handling static assets


# How do I run it?

To create an app called cadiz, clone this repo and then run eg
```
npm run create cadiz
```

This will create a skeleton app available at eg cadiz.malham.io and add the name to config.env

```
npm run deploy
```

Deploy script to push to name of app contained in config.env


# What does it do?

### create.sh

1. creates an nginx file for your app, with app name (eg cadiz) and port set
2. creates a directory for your app, and uploads the template server.js file, and a dist folder with an index.html inside
3. install express
4. starts your app with pm2 
5. installs a LetsEncrypt certificate, and runs app on https
5. reloads nginx

app should be visible at your url

### deploy.sh

1. rsyncs your server.js and dist folder, from eg something bundled with react. you can add this to a package.json like

```
deploy: './bin/deploy.sh'
```

# Requirements

1. CentOS on your cloud server, though I'll add in a Debian/Ubuntu version too
2. Nginx installed and running. 
3. PM2 installed and running. Though this could be replaced with something like forever.
4. LetsEncrypt installed

# What doesn't it do?

1. Sets up nginx or pm2 for you. Really this is intended for my working environment, but shouldnt be too difficult to modify for other environments


# Example

See example directory for structuring of app

## TODO

* [ ]  Clean up script to remove template files
* [√]  Edits package.json with name of app
