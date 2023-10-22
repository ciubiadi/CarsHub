# Car Hub App
## App description
This app allows the user to search fpr diverse cars and filter them by Fuel and Year. The user can view extra details for each car, such as images of the car, the Fuel Urban Consumption, the class of the car, the number of cylinders, type of transmission. and many others.
The Images of the car were provided by the ImaginStudio Car Image API(https://www.imagin.studio/car-image-api) by simply giving dynamically the source of the Image from "https://cdn.imagin.studio/getimage?", with the desired parameters of course.
The cars were fetched with the help of Cars By API Ninjas ( https://rapidapi.com/apininjas/api/cars-by-api-ninjas ).

### What I have learned
In this project I've learned and practiced :
* Practiced Typescript
* Tailwind CSS
* Next.js 13 App Folder Structure
* Next.js 13 Client Components vs Server Components
* Use Next.js 13 App Router and Server side Rendering
* Implement Advanced Search Functionality
* Create Filtering Capabilities
* Optimize Metadata and SEO
* Create custom filter, combo box, and modal elements
* Maintain a well-organized file and folder structure.
* Embrace the principles of writing clean code.
* How to use Vercel for application deployment

### Note: NextJs 13 Bug 
Due to the NextJS 13 bug that resets scroll position when search params are updated (https://github.com/vercel/next.js/issues/49087). So in order to fix this, <strong>the code was refactored and from server-rendering the app switched to client-rendering. </strong>
<strong>! This version can be checked here ( on the "client-side-rendered" branch ) : https://github.com/ciubiadi/CarsHub/tree/client-side-rendered ! </strong>

### Desktop Hero Home
<img width="90%" alt="Screenshot 2023-10-22 at 16 30 12" src="https://github.com/ciubiadi/CarsHub/assets/46215033/fccc1381-51c2-4c4f-990d-fe8e63860f92">

### Desktop Catalogue
<img width="90%" alt="Screenshot 2023-10-22 at 16 30 26" src="https://github.com/ciubiadi/CarsHub/assets/46215033/a89b5d0d-bf47-4889-8a76-7c4caa5977bc">

### Desktop Footer
<img width="90%" alt="Screenshot 2023-10-22 at 16 30 42" src="https://github.com/ciubiadi/CarsHub/assets/46215033/db08dfa2-f3f8-4d42-b178-e30c7bd9c82d">

### Mobile Hero Home
<img width="90%" alt="Screenshot 2023-10-22 at 16 37 41" src="https://github.com/ciubiadi/CarsHub/assets/46215033/2299b3a3-5b1e-4d00-9e7f-19ca663cda56">

### Mobile Catalogue
<img width="90%" alt="Screenshot 2023-10-22 at 16 38 03" src="https://github.com/ciubiadi/CarsHub/assets/46215033/a1d505ce-5f24-41b2-957c-7a9ef1c39e58">

### Mobile Footer
<img width="45%" alt="Screenshot 2023-10-22 at 16 45 04" src="https://github.com/ciubiadi/CarsHub/assets/46215033/f457c83a-29b1-478b-851e-2833b4fb4746">
<img width="45%" alt="Screenshot 2023-10-22 at 16 44 53" src="https://github.com/ciubiadi/CarsHub/assets/46215033/18f2195a-a119-42cb-b0b3-505c91208b4d">
