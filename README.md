## Issue with `generateMetadata`

This is a simplified example highlighting an issue I've encountered with `generateMetadata`. When a user navigates to a page containing a `generateMetadata` function that fetches data from a slow API, there's a problem. The application appears to hang for approximately 3 seconds, providing no indication that it's actively loading. Notably, the `fetch` operation within `generateMetadata` doesn't trigger React's Suspense, and the browser also fails to display any loading indicators.

To simulate a slow API response, a `setTimeout` is intentionally used within the `getUsers` function.

### To Reproduce

To replicate this issue, follow these steps:

1. Run the application using the command: `yarn run dev`.

2. Navigate to the root path (`/`). Here, you'll find two lists of "users" retrieved from jsonplaceholder.

3. The top list contains links to `/user/[userId]`, and these links have a `generateMetadata` function that fetches data. Upon clicking these links, for the initial 3 seconds, there is no visible loading indication, making users believe that something might be wrong with the link.

4. In contrast, if you click on any of the links in the bottom list, which leads to `/user-no-metadata/[userId]` that doesnt use `generateMetadata`, you'll notice that a Loading state is triggered by Suspense, providing a clear loading indication.

I encountered this issue while working on a project with a tens of thousands number of subpages, and it's highly likely that a given subpage will be opened for the first time and only once, with new entries continually being added.

### Question

Is there a way to display a loading state or any form of indication that something is loading while still utilizing the `generateMetadata` function to fetch metadata information from a slow API?
