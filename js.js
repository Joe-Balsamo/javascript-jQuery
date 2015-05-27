$(document).ready(function() {
    createGrid(16);
});

function doGridButton() {
    $(".wrapper").html("");
    gridDim = prompt("Please enter grid dimension: ");
    //Now call the grid creator.
    createGrid(gridDim);
}


function createGrid(gridDim) {
    //Get the wrapper handle.
    var $container = $(".wrapper");

    //Loop through each row.
    for (var rowIndex = 0; rowIndex < gridDim; rowIndex++) {

        //Create the skeleton for the row.
    //   var rowId = "row-" + rowIndex; //Not needed. 
        var $row = $("<div>", {
            "class": "row",
            /*"id": rowId*/
        });

        //Loop through each column
        for (var columnIndex = 0; columnIndex < gridDim; columnIndex++) {

            //Create skeleton for the column. (Note: IDs have to be unique)
     //      var columnId = rowIndex + "-col-" + columnIndex; //Not needed. 
            var $column = $("<div>", {
                "class": "column",
                /*"id": columnId*/
            });

            //Append to the row div.
            $row.append($column);

        }

        //Finally append this row to the container.
        $container.append($row);

 //       $("div.column").css({"height": 960/gridDim, "width": 960/gridDim});
 //       $("div.row").css({"height": 960/gridDim, "width": 960/gridDim});

//        $("div.column").mouseenter(function(){
//            $(this).css("background-color", "#99CCFF");    
//        });

    }
    
    $("div.column").css({"height": 960/gridDim, "width": 960/gridDim});
    $("div.row").css({"height": 960/gridDim, "width": 960/gridDim});

    $("div.column").mouseenter(function(){
        $(this).css("background-color", "#99CCFF");    
    });


}