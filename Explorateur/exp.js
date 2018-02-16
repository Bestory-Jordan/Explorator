$('#zona').fileTree({
    root: "../SIMULATOR/",
    script: 'connector/jqueryFileTree.php'
},
    function (file) {
        openFile(file)
        // alert(file);
    });