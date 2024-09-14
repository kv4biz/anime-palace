# Anime Viewer with Infinite Scroll

![Banner](./public/hero.png)

Welcome to the Anime Palace! This web application allows users to explore a wide range of anime, with an infinite scroll feature for seamless browsing. The app uses server-side actions in Next.js to fetch popular anime data from the Shikimori API, ensuring an optimized and smooth user experience.

## Features

- **Infinite Scroll**: Automatically load more anime as you scroll down the page.
- **Server Actions**: Efficient data fetching with server-side rendering for faster performance.
- **Popular Anime List**: Discover anime ranked by popularity.
- **Responsive Layout**: Optimized for all screen sizes, from mobile to desktop.
- **Smooth Animations**: Engaging hover effects and transitions using Framer Motion.
- **Real-time Updates**: Fetches the latest anime data from the Shikimori API.

## Benefits of Server-Side Rendering (SSR)

- **Improved Performance**: By utilizing server actions, data is fetched and rendered on the server before being sent to the client, reducing load times and improving performance.
- **SEO Optimization**: Since the content is pre-rendered on the server, it is more accessible for search engine crawlers, improving the visibility of your app in search results.
- **Enhanced User Experience**: Server-side rendering ensures that users receive fully rendered pages on their initial load, improving the overall experience, especially for slower networks.

## Technologies Used

- **Next.js**: React framework with built-in support for server-side rendering.
- **Shikimori API**: Source of anime data.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for smooth transitions and hover effects.

## Future Enhancements

- **Filter Options**: Add more filtering capabilities (e.g., genre, release year).
- **User Accounts**: Allow users to save favorite anime and create watchlists.
- **Detailed Anime Pages**: Add individual anime detail pages with more information.
