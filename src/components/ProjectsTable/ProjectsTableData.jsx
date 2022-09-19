import React from 'react';

const data = [
  {
    id: 0,
    title: 'Crown Clothing',
    imgSrc: '/crown-clothing.png',
    description:
  <>
    Crown Clothing is an online clothing platform built with React and Firebase.
    It allows users to create an account, login, add items to cart, and checkout.
    It uses a free version of the
    {' '}
    <a target="_blank" href="https://stripe.com/en-ca" rel="noreferrer">Stripe API</a>
    {' '}
    to simulate a checkout process for the users.
  </>,
    skillsList: ['React', 'Redux', 'Stripe', 'Firebase', 'HTML', 'CSS', 'JSX'],
    links: [
      {
        id: 0,
        type: 'DEPLOYMENT',
        label: 'Deployed on Heroku!',
        href: 'https://crwn-commerce-app.herokuapp.com/',
      },
      {
        id: 1,
        type: 'GITHUB',
        href: 'https://github.com/padmaashini/crownclothing',
      },
    ],
  },
  {
    id: 1,
    title: 'ParkinGrid',
    imgSrc: '/parkingrid.jpg',
    description:
  <>
    This project was a team project at the Yale Hacks 2022! Our team of two built a
    backend system that analyzes a recording of a parking lot to determine the number
    of empty parking spaces and their locations in the parking lot. Drivers can buy
    parking tickets for lots that require it!
    {' '}
    <br />
    <br />
    I developed REST endpoints in the Django framework in Python for the buying of
    parking lot tickets for various durations!
    {' '}
  </>,
    skillsList: ['Python', 'Django', 'REST endpoints'],
    links: [
      {
        id: 0,
        type: 'GITHUB',
        href: 'https://github.com/padmaashini/parkingrid',
      },
      {
        id: 1,
        type: 'DEVPOST',
        label: 'Devpost Submission',
        href: 'https://devpost.com/software/parkingrid',
      },
    ],
  },
  {
    id: 2,
    title: 'The Institute of Film Awards',
    imgSrc: '/institute-film-awards.png',
    description:
  <>
    The Institute of Film Awards is a webpage where users can search for
    movies and nominate them. Users can nominate for a maximum of 5 movies,
    adding and removing from their nominations list. They can view their
    nominations in the /nominations page, where they can also remove nominations.
    Nominations are persisted across navigations but reset on hard page refresh.
    {' '}
    <br />
    <br />
    The films are fetched using OMDB API (https://www.omdbapi.com/). This application
    was build using Next.js (React framework), with libraries such as Material UI,
    Redux Persist, and Reselect.
  </>,
    skillsList: ['Next.js', 'React', 'Redux', 'Redux Persist', 'Reselect', 'HTML', 'CSS', 'JSX'],
    links: [
      {
        id: 0,
        type: 'DEPLOYMENT',
        label: 'Deployed on Heroku!',
        href: 'https://institute-film-awards.herokuapp.com/',
      },
      {
        id: 1,
        type: 'GITHUB',
        href: 'https://github.com/padmaashini/institute-film-awards',
      },
    ],
  },
  {
    id: 3,
    title: 'GroceryCart',
    imgSrc: '/grocerycart.png',
    description:
  <>
    This is a project I am currently working on in the Fast API framework in Python.
    I am working to build a grocery store platform, where stores can keep track of
    product inventory by adding, updating, and deleting products.
  </>,
    skillsList: ['Python', 'FastAPI', 'AWS RDS', 'SQL Alchemy ORM'],
    links: [
      {
        id: 0,
        type: 'GITHUB',
        href: 'https://github.com/padmaashini/grocerycart',
      },
    ],
  },
  {
    id: 4,
    title: 'Skin Lesion Classifier',
    imgSrc: '/skin-lesion-classifier.jpg',
    description:
  <>
    This project was a team project at the MedHacks 2020! Our team built a
    web application where users can upload an image of a suspected skin lesion
    to get back results of the probability of the lesion being one of seven categories
    supported.
    {' '}
    <br />
    <br />
    I worked on building display components in the Flask framework (Python).
    {' '}
  </>,
    skillsList: ['Flask', 'HTML5', 'Python'],
    links: [
      {
        id: 0,
        type: 'GITHUB',
        href: 'https://github.com/candaceng/medhacks',
      },
      {
        id: 1,
        type: 'DEVPOST',
        label: 'Devpost Submission',
        href: 'https://devpost.com/software/skin-lesion-classification',
      },
    ],
  },
  {
    id: 5,
    title: 'Project Pink',
    imgSrc: '/project-pink.png',
    description:
  <>
    This project was a team project at the StarterHacks 2020! Our team of five built a
    frontend crowdsourcing platform using HTML, CSS, JavaScript and the Google Maps API to display
    nearby locations of free menstrual products based on the user current location.
    Users can also add more locations to the platform.
    {' '}
    <br />
    <br />
    I worked on incorporating Google Maps into the webpage and developing other components of the
    frontend pages.
    {' '}
  </>,
    skillsList: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
    links: [
      {
        id: 0,
        type: 'GITHUB',
        href: 'https://github.com/anna-xing/project-pink',
      },
      {
        id: 1,
        type: 'DEVPOST',
        label: 'Devpost Submission',
        href: 'https://devpost.com/software/project-pink',
      },
    ],
  },
];

export default data;
