// step 1

const library = [
    {
       title: 'Americanah',
       author: 'Chimamanda Ngozi Adichie',
       status: {
           own: true,
           reading: false,
           read: false
       }
   },
    {
       title: 'Beasts of no Nation',
       author: 'Uzodinma Iweala',
       status: {
           own: true,
           reading: false,
           read: false
       }
   },
    {
       title: 'The Secret Lives of Baba Segis Wives',
       author: 'Tola Shoneyin',
       status: {
           own: true,
           reading: false,
           read: false
       }
   }
   ];
   
   // step 2
   
   library[0].status.read = true;
   library[1].status.read = true;
   library[2].status.read = true;
   
   console.log(library);
   
   // step 3
   
   const {
       title : firstBook
   } = library[0];
   
   console.log(firstBook);
   
   // step 4
   
   const jsonLibrary = JSON.stringify(library);
   
   console.log(jsonLibrary);
   