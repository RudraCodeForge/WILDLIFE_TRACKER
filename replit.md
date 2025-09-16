# Wildlife Tracker

## Overview

Wildlife Tracker is a React-based web application designed for tracking and monitoring wildlife data. The project is built using modern frontend technologies including React 18, Vite as the build tool, and Bootstrap for styling. The application is configured to run on Replit with TypeScript support and hot module reloading for efficient development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a component-based React architecture using functional components and modern React patterns. The build system leverages Vite for fast development and optimized production builds with Hot Module Reloading (HMR) capabilities.

**Key Design Decisions:**
- **React 18**: Chosen for its concurrent features and improved performance
- **Vite Build Tool**: Selected over Create React App for faster development builds and better TypeScript integration
- **TypeScript Support**: Configured but optional, allowing gradual migration from JavaScript to TypeScript by renaming `.jsx` files to `.tsx`

### Styling and UI Framework
The application uses Bootstrap 5.3.8 for responsive design and pre-built UI components, providing a consistent and mobile-friendly user interface without requiring custom CSS frameworks.

**Rationale:** Bootstrap was chosen for rapid prototyping and consistent styling across different screen sizes, which is essential for a wildlife tracking application that may be used in field conditions on various devices.

### Development Environment
The project is optimized for Replit deployment with specific host configurations and port settings (port 5000) to ensure proper functionality in the cloud-based development environment.

### Build Configuration
- **ES Modules**: The project uses modern ES module syntax with `"type": "module"` in package.json
- **Strict TypeScript**: TypeScript is configured with strict mode enabled for better code quality and error prevention
- **JSX Transform**: Uses the modern React JSX transform for cleaner component syntax

## External Dependencies

### Core Framework Dependencies
- **React 18.2.0**: Core library for building user interfaces
- **React DOM 18.2.0**: DOM-specific methods for React
- **Vite 7.1.5**: Build tool and development server

### UI and Styling
- **Bootstrap 5.3.8**: CSS framework for responsive design and pre-built components

### Development Tools
- **TypeScript 5.2.2**: Type checking and enhanced developer experience
- **@vitejs/plugin-react 4.2.0**: Vite plugin for React support
- **@types/react & @types/react-dom**: TypeScript definitions for React

### Hosting Platform
- **Replit**: Cloud-based development and hosting platform with specific configuration for allowed hosts and port mapping

**Integration Notes:** The application is configured specifically for Replit's hosting environment with custom host allowlists and port configurations. The Vite development server is set up to accept connections from Replit's domain structure.