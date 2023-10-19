# React + Vite

Live link: https://food-store-8c281.web.app/

About my project with 5 bullet points:

Firebase Authentication Integration:
Firebase Authentication is integrated into the application, allowing users to create accounts, sign in, and sign out.

PrivateRoute Component:
A custom PrivateRoute component is created to protect routes that should only be accessible to authenticated users.
It checks the user's authentication status and redirects them to the login page if they are not authenticated.

Loading State Handling:
The component handles loading states gracefully to provide a better user experience.
While authentication status is being determined (loading), it displays a loading spinner.

Context-Based Authentication:
Context API is used to manage user authentication and share this information across the application.
The AuthContext provides user-related data and authentication methods to child components.

Google Authentication Integration:
Users can sign in using their Google accounts by clicking the "Sign in with Google" button, which is provided by Firebase's Google Sign-In functionality.
This setup allows for secure, authenticated routes within the application, ensuring that users can access protected content only after signing in. The loading state handling provides a smoother user experience during authentication checks. The application seamlessly integrates Firebase Authentication, making it easy to manage user sign-ins and registrations.





