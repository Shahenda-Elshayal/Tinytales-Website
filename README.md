# TINYTALES-WEBSITE

*Built with the tools and technologies:*

![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Formik](https://img.shields.io/badge/Formik-43E97B?style=flat-square&logo=formik&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

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
