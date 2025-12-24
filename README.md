# TINYTALES-WEBSITE

*Transforming Stories into Seamless Digital Experiences*

![GitHub last commit](https://img.shields.io/github/last-commit/Shahenda-Elshayal/Tinytales-Website?style=flat-square)
![JavaScript](https://img.shields.io/badge/javascript-98.3%25-yellow?style=flat-square)
![Languages](https://img.shields.io/badge/languages-2-blue?style=flat-square)

*Built with the tools and technologies:*

![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat-square&logo=markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Formik](https://img.shields.io/badge/Formik-43E97B?style=flat-square&logo=formik&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

---

## Overview

**TinyTales-Website** is a modern, Next.js-based web platform crafted for dynamic storytelling and user engagement. The project emphasizes maintainability, performance, and developer productivity through a modular architecture and integrated best practices.

---

## Why TinyTales-Website?

This project provides a comprehensive foundation for building scalable, feature-rich web applications. Here are the core features:

- **🎨🧩 Customizable Styling:** Seamless Tailwind CSS integration via PostCSS for utility-first, maintainable design.

- **🔒🔑 Secure Authentication:** Robust user login, registration, and verification workflows managed through context and API integrations.

- **🚀⚡ Optimized Performance:** Next.js configuration and code organization ensure fast load times and smooth user experiences.

- **🛠️🧱 Reusable Components:** Modular UI elements like product reviews, image galleries, and navigation enhance development efficiency.

- **📦📝 Developer-Friendly Setup:** Clear configurations with jsconfig, ESLint, and deployment support.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** npm

### Installation

Build TinyTales-Website from the source and install dependencies:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shahenda-Elshayal/Tinytales-Website.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Tinytales-Website
   ```

3. **Install the dependencies:**
   
   Using npm:
   ```bash
   npm install
   ```

---

## Usage

### Run the project:

**Using npm:**
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build for production:

```bash
npm run build
```

### Start production server:

```bash
npm start
```

### Run linter:

```bash
npm run lint
```

---

## Project Structure

```
tinytales/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── verify/            # Email verification page
│   ├── welcome/           # Welcome page
│   └── layout.js          # Root layout
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Navbar, Footer, etc.)
│   └── product/          # Product-related components
├── contexts/             # React contexts (AuthContext)
├── lib/                  # Utility libraries
│   ├── api.js           # Axios API configuration
│   ├── auth.js          # Authentication functions
│   └── validationSchemas.js  # Form validation schemas
└── public/               # Static assets
```

---

## Features

### Authentication Flow
- User registration with phone number validation
- Email verification system
- Secure login with token management
- Protected routes and automatic token refresh

### UI Components
- Responsive navigation bar
- Product image galleries
- Rating and review system
- Similar items recommendations
- Breadcrumb navigation

### Developer Experience
- TypeScript-ready configuration
- ESLint for code quality
- Tailwind CSS for styling
- Form validation with Formik and Yup
- Centralized API configuration

---

## Technologies

- **Framework:** [Next.js 16](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Form Management:** [Formik](https://formik.org/)
- **Validation:** [Yup](https://github.com/jquense/yup)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Phone Input:** [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input)

---

## API Configuration

The project uses a centralized API configuration located in `lib/api.js`. All API requests automatically include authentication tokens and handle error responses.

**Base URL:** `https://tinytales.trendline.marketing/api`

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is private and proprietary.

---

## Author

**Shahenda Elshayal**

- GitHub: [@Shahenda-Elshayal](https://github.com/Shahenda-Elshayal)

---

## Testing

To test the application:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate through the authentication flow:
   - Register a new account
   - Verify your email
   - Login to your account
   - Access the dashboard

---

*Built with ❤️ using Next.js and React*
