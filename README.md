# ReactHooksUsageSimpleExample
This project is created using React Hooks to display a list of users and provide a search functionality. The user data is fetched from an API (https://jsonplaceholder.typicode.com/users).

The main functionality is implemented in the FilterUser component. Initially, an HTTP request is sent and user data is fetched when the component is loaded using the useEffect hook. The retrieved data is stored in two separate state variables: users and cloneUsers. cloneUsers is used to preserve the original user data for filtering purposes.

For the search functionality, an input field and a "Search" button are provided. The handleSearch function takes the user's input, converts it to lowercase, and filters the cloneUsers array to find users that match the search term. The filtered users are assigned to the users state variable, and the page is automatically re-rendered to display the filtered users.

Lastly, the users array is mapped using the map function to generate user components, which are passed the user prop to the ListElement component. Each user is displayed as a list item, showing their name, phone number, email, and address information.
<br/>
Preview: 


https://github.com/nursedaturkcan/ReactHooksUsageSimpleExample/assets/129687664/58d389d0-7f99-41a5-83cf-17e03c411e2c

