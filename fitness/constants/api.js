          
    function Macrosys() {
        fetch('http://localhost:3000/api/macros')
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson.movies;
          })
          .catch((error) => {
            console.error(error);
          });
      }     
        


    export {Macrosys};