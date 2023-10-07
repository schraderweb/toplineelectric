# Topline Electric Landing Page

### Built with 11ty.js to utilize templating for a static stie

## Introduction

This guide will walk you through setting up and starting the page locally and to get it ready to deploy to production. 11ty is a simple static site generator that allows you to build static websites using various templating languages.

## Prerequisites

Before starting with Eleventy, make sure you have the following installed:

- Node.js: Eleventy requires Node.js to be installed on your machine. You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)

## Getting Started

1. Open a terminal or command prompt and navigate to the project directory.
2. Run the below commands to either view the project locally on port 8080 or build for production.

## Project Initialization

1. Initialize your environment to have all the dependencies nesseccary to run it:

`npm install`

2. Start viewing the project locally. After this command go to localhost:8080

`npm run start`

## Building for production

11ty provides npm scripts that make it easy to build and run your project.

To build your project, run the following command:

`npm run build`

11ty will compile your templates and generate the output files in the specified output directory (default: \_site).
use this folder for your server

Congratulations! You've set up this project.

## Structure of the app

\Src->
\includes

- \layouts

  -base.layout # this is basic layout which your index.html is using

- footer.html # this is your seperated footer include

- header.html # this is your seperated header file nav in there

index.html # this file this main content file basic this the part of where your content is this part between header and footer
