# Example frontend application using React and Material UI

Frontend of an application to view a list of jobs, and to add new jobs.

This application is intended to be used with the backend here [https://github.com/srayner/joblog-backend](https://github.com/srayner/joblog-backend)

## Prerequisites

The following installation instructions assume you have git and a recent version of node and npm installed.

## Installation

Download this repo...
    git clone https://github.com/srayner/joblog-frontend.git

Install the dependencies...
    npm install

Create a local environemnt file...
    cd joblog-frontend
    echo REACT_APP_API_BASE_URL=http://localhost:8000/api/v1 > .env.local

Start the application...
    npm start
