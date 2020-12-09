# BASIS 

Building this based on the Create Social Network (see [Create-Social-Network](https://github.com/DimiMikadze/create-social-network/)) project. This a large, scalable project with Javascript and trying to build on top of that base.

Repository is divided into two main packages:

- **api** This package contains API for the app, built with Nodejs, Express, GraphQL, Apollo Server and MongoDB with Mongoose.
- **frontend** Is a frontend for the app, built with React, GraphQL, Apollo Client and Styled Components.

## Features

- **Messenger** Real time messaging system.
- **Notifications** Get instant notification when someone follows/messages you or likes/comments on your post.
- **User Status** Check if user is Online or not in real time.
- **News Feed** Fresh posts from people you are following.
- **Explore** New Posts and People.
- **Follow** a particular user and get notified for their activity.
- **Personalize Profile** With profile/cover photo and personal posts.
- **Authentication & Authorization** with Password reset functionality.

## To-Do

- **Profile** Update format of the profile page to include user details and links to other accounts such as Twitch, YouTube, etc.
  - See ```frontend/src/pages/EditProfile``` for Cardzilla app that I want to iterate on and incorporate into the profile page
- **Posts** Implement hyperlinking and thumbnails in posts
- **MongoDB** Setup local/cloud mongoDB to replace current demo version

## Quick Installation

```sh
git clone https://github.com/basisesports/basis
cd basis
npm start
```

After installation open [http://localhost:3000/](http://localhost:3000/) to see the app.

## Requirements and Configuration

You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine

By default, the app uses MongoDB hosted on [mLab](https://mlab.com/) and [Cloudinary](https://cloudinary.com/) CDN for hosting images. Currently using a demo user for mLab and Cloudinary so ythe app can run locally without adding Mongo URL and Cloudinary API Key, however when we start developing to deploy, we will replace that information with our own.

### Replacing Mongo URL

Replace `MONGO_URL` value in `api/.env` file with your `mLab` database url or with local one.

### Replacing Cloudinary API Key

Grab `Cloud name` `API Key` and `API Secret` from Cloudinary dashboard and replace corresponding values inside `api/.env` file.

### Mail Provider

For password reset functionality you will need to replace Email Provider values also in `api/.env` file.



Initial project structure is as follows:

```
basis
├── api
├── frontend
├── node_modules
├── .gitignore
├── netlify.toml
├── package.json
├── README.md
```

The app is organized as [Monorepo](https://en.wikipedia.org/wiki/Monorepo) using [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)

## Deployment

In development mode we are starting `api` and `frontend` servers with one command, but we need to deploy them separately.

[API Deployment](https://github.com/dimimikadze/create-social-network/tree/master/api#api-deployment-to-heroku)

[Frontend Deployment](https://github.com/dimimikadze/create-social-network/tree/master/frontend#frontend-deployment-to-netlify)
