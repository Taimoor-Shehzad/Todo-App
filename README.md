# Todo App 👋

A clean and modern Todo application built with Expo + React Native for daily task tracking. It helps you manage tasks, mark them complete, edit entries, and monitor your progress at a glance.

## Features

- Add new tasks quickly from the home screen
- Mark todos as complete or incomplete
- Edit existing task text inline
- Delete tasks with confirmation
- View empty-state UI when no tasks are present
- Track daily progress with a polished dashboard-style layout
- Built with a mobile-first design using Expo Router and NativeWind
- Persistent backend powered by Convex

## Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript
- NativeWind / Tailwind CSS
- Convex for data storage and real-time updates
- React Native Safe Area Context
- Expo Vector Icons

## Project Structure

```bash
.
├── app/                 # App screens and routing
├── assets/             # App assets and static files
├── components/         # Reusable UI components
├── convex/             # Convex schema and database functions
├── hooks/              # Custom hooks
├── .gitignore
├── app.json            # Expo app configuration
├── babel.config.js     # Babel config
├── eslint.config.js    # ESLint configuration
├── global.css          # Global Tailwind styles
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── README.md           # Project documentation
└── package-lock.json   # Lockfile for npm dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- A Convex account/project if you want to run the backend locally

### Installation

```bash
git clone https://github.com/Taimoor-Shehzad/Todo-App.git
cd Todo-App
npm install
```

### Run the app

Start the Convex backend in one terminal:

```bash
npx convex dev
```

Start the Expo app in another terminal:

```bash
npm start
```

You can then run it on:

- Android: `npm run android`
- iOS: `npm run ios`
- Web: `npm run web`

## How It Works

The app uses a simple task model stored in Convex:

- Each todo has a text value and completion status
- Tasks are fetched in real time from the database
- Users can add, update, toggle, and delete tasks without reloading the app
- The layout is designed to feel lightweight and friendly for daily use

## Screens

- Home screen: task list and task creation
- Settings screen: app preferences and utility actions

## Notes

This project is a good starting point for building a production-ready productivity app, and it can be extended with features such as:

- task priorities
- due dates
- categories or labels
- local notifications
- authentication
- cloud sync across devices

## Contributing

Contributions are welcome. If you'd like to improve the app, feel free to fork the repository and submit a pull request.

## License

This project is currently unlicensed. If you plan to distribute or publish it publicly, consider adding a license file.
