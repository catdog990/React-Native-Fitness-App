          
    function fetchMacro() {
        fetch('http://192.168.0.10:3000/api/macros')
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson.movies;
          })
          .catch((error) => {
            console.error(error);
          });
      }     
        


    export {fetchMacro};