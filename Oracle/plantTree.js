function plantTree(arr, type) {
    if (arr.length>1) {
        for (var j = 0; j < arr[arr.length - 2].length; j++) {
            for (var k = 0; k < arr[arr.length - 2][j].child.length; k++) {
                if (arr[arr.length - 1].length === 0) {
                    arr[arr.length - 2][j].child[k].leaf = 1;
                } else {
                    if (arr[arr.length - 2][j].partNumber === arr[arr.length - 1][j].partNumber) {
                        if (arr.length <= type) {
                            arr[arr.length - 2][j].child[k].child = arr[arr.length - 1][j].child;
                            arr[arr.length - 2][j].child[k].leaf = 0;
                        } else {
                            arr[arr.length - 2][j].child[k].leaf = 0;
                        }
                    }
                }
            }
        }
        arr.splice(arr.length - 1, 1);
        plantTree(arr, type);
        return arr;
    }else {
        for (var i = 0; i < arr[0].length; i++) {
            if(arr[0][i].child.length>0){
                arr[0][i].leaf = 0;
            }else{
                arr[0][i].leaf = 1;
            }
        }
        return arr;
    }
}
