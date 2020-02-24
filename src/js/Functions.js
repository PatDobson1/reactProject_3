
const axios = require('axios').default;

// -- Get data from API --------------------------------------------------------

    // -- Left here for the future - 'fetch' isn't supported in IE...
    // const getData = (self) => {
    //     fetch('https://project3.patrickdobson.co.uk/data.php')
    //         .then((resp) => resp.json())
    //         .then(function(data){
    //             self.setState({
    //                 data : data,
    //                 dataLoaded : true
    //             })
    //     })
    // }

    const getFeaturedData = (self) => {
        const formData = new FormData();
        formData.append('requested', 'featured');
        axios.post('https://project3.patrickdobson.co.uk/data.php',formData)
        .then(
            data => {
                self.setState({
                    featuredData : data.data,
                    featuredDataLoaded: true
                });
                getFullData(self);
            }
        )
    }

    const getFullData = (self) => {
        const formData = new FormData();
        formData.append('requested', 'full');
        axios.post('https://project3.patrickdobson.co.uk/data.php',formData)
        .then(
            data => {
                self.setState({
                    fullData : data.data,
                    fullDataLoaded : true
                })
            }
        )
    }
// -----------------------------------------------------------------------------

export { getFeaturedData, getFullData };
