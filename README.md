# TradeSight Admin Dashboard

![Admin Dashboard UI](assets/AdminDash.png)

[Live Demo](https://trade-sight-app.onrender.com/)

## Overview
TradeSight is a modern admin dashboard for business analytics and management. It provides a comprehensive view of sales, customers, products, transactions, and geographic data, all in a visually appealing and interactive interface.

### Key Features
- **Dashboard Analytics:** Visualize sales, customer growth, and product performance with interactive charts and tables.
- **Product & Customer Management:** Browse, search, and manage products and customers efficiently.
- **Sales Tracking:** Monitor daily, monthly, and yearly sales, including breakdowns by category and geography.
- **Responsive UI:** Built with Material-UI and Nivo charts for a seamless experience across devices.
- **Admin & Performance Tools:** Access management and performance insights for business optimization.

### Architecture

#### Frontend Libraries
- **React 18.2.0** - Core JavaScript library for building user interfaces
- **Material-UI 5.15.14** - React component library for consistent, modern UI design
- **Redux Toolkit 2.2.1** - State management for predictable data flow
- **React Router 6.22.3** - Client-side routing and navigation

#### Data Visualization
- **@nivo/line** - Interactive line charts for sales trends and time-series data
- **@nivo/bar** - Bar charts for comparing metrics and performance indicators
- **@nivo/pie** - Pie and donut charts for category breakdowns and distributions
- **@nivo/geo** - Geographic maps for location-based data visualization

#### Data Management & Tables
- **MUI X Data Grid 6.19.6** - Advanced data tables with pagination, sorting, filtering, and search
- **React DatePicker 4.8.0** - Date selection component for filtering time-based data
- **React Redux 9.1.0** - State management integration for data persistence

#### Backend & Database
- **Express 4.18.3** - Web application framework for Node.js
- **Mongoose 8.2.1** - MongoDB object modeling library for data validation and querying
- **MongoDB** - NoSQL database for storing user, product, transaction, and analytics data
- **Helmet 7.1.0** - Security middleware for HTTP headers
- **CORS 2.8.5** - Cross-origin resource sharing middleware
- **Morgan 1.10.0** - HTTP request logger middleware
- **Body Parser 1.20.2** - Middleware for parsing request bodies

#### Data Models
- **User Schema** - User profiles, authentication, and role management
- **Product Schema** - Product catalog with pricing, categories, and inventory
- **Transaction Schema** - Purchase records and transaction history
- **OverallStat Schema** - Aggregated analytics and performance metrics
- **ProductStat Schema** - Individual product performance tracking
- **AffiliateStat Schema** - Affiliate marketing and referral data

---
