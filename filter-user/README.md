This project is created using React Hooks to display a list of users and provide a search functionality. The user data is fetched from an API (https://jsonplaceholder.typicode.com/users).

The main functionality is implemented in the FilterUser component. Initially, an HTTP request is sent and user data is fetched when the component is loaded using the useEffect hook. The retrieved data is stored in two separate state variables: users and cloneUsers. cloneUsers is used to preserve the original user data for filtering purposes.

For the search functionality, an input field and a "Search" button are provided. The handleSearch function takes the user's input, converts it to lowercase, and filters the cloneUsers array to find users that match the search term. The filtered users are assigned to the users state variable, and the page is automatically re-rendered to display the filtered users.

Lastly, the users array is mapped using the map function to generate user components, which are passed the user prop to the ListElement component. Each user is displayed as a list item, showing their name, phone number, email, and address information.


# Görevler
1-Kullanıcı verilerine sahip olan linke istek at
2-İtseği bileşen ekrana geldiği anda yalnızca bir kere at.
3-Api'den gelen cevabı state'e aktarmak.
4-eğer users null ise loading ekranı yap 
5-değilse State'te tutulan kullanıcıları listeleme
6-inputun içerisine yazılan değeri ara butonuna tıklandığı anda almak.
7-Ana dizide filtreleme yapmak
  - a- yeni bir dizi oluştur ve bütün filtreleme işlemlerini o dizi üzerinde yapmak
8-input'un içerisinde aratılan isme sahip kullanılacarı filtrelemek.
9-filtrelenmiş dizinin ekrana basılması.
10-Büyük küçük harfe duyarlılığı kaldırmak için hem aratılan terimi hem kullanıcı isimlerini küçük harfe çevirmek.