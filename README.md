# Example front end javascript application using React and Material UI

Front end for an application to view a list of jobs to be performed on properties and to add new jobs.

This application is intended to be used with the backend here [https://github.com/srayner/joblog-backend](https://github.com/srayner/joblog-backend)

## prerequisites

The following installation instructions assume you have a recent version of node and npm installed.

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
