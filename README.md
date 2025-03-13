# DEMO APP ROJECT FOR JOB INTERVIEW
=========================================
### Project setup

**Please fork the project repository before starting your work.**
You'll be working within a `pnpm` monorepo on a `demo` application.

### Task

In the `HomeView` component, create a table using the `@mui/x-data-grid` library. This table will display a list of posts fetched from the https://jsonplaceholder.typicode.com/posts API using `react-query`.

#### Table specifications

##### Columns:

1. Displays the post's title.
2. Displays the length of the post's body.
3. Contains an action button. Clicking this button
   opens a Menu with the following actions:

##### Actions:

1. View details: Opens a Modal displaying detailed information about the post.
2. Delete: Sends a delete request to remove the post.
   Add new post:

In the top right corner of the table, include a button that opens a Modal with a form for creating a new post.
Use `formik` to build the form (you can use a pre-built `FormField` component for individual inputs) and `Yup` for validation.

### Deliverables:

1. Functional table displaying data from the API.
2. Modal for viewing post details.
3. Functionality to delete posts.
4. Modal with a form for creating new posts.
5. Proper form validation using Yup.

#### Additional notes:

Follow best practices for code organization and styling.
Write clean, well-documented code.
