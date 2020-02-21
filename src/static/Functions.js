
// -- Get data from API --------------------------------------------------------
    const getData = (self) => {
        fetch('https://project3.patrickdobson.co.uk/data.php')
            .then((resp) => resp.json())
            .then(function(data){
                self.setState({
                    data : data,
                    dataLoaded : true
                })
        })
    }
// -----------------------------------------------------------------------------

export { getData };
