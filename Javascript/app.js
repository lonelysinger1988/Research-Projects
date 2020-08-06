// Enter your solution below:
var summarize = function(arrayList){
    var countArrayList = 0
    var result = array()
    while(countArrayList != length(arrayList)){
        var isValid = true
        var childArray = get(arrayList, countArrayList)
        var sumChild = 0
        var recursiveChild = function(childArray){
            if(length(childArray) > 0){
                if(get(childArray,0) > 0){
                    sumChild = sumChild + get(childArray,0)
                    remove(childArray,0)
                    recursiveChild(childArray)
                } else {
                    isValid = false
                }    
            } else {
                return "done"
            }
        }
        if(isValid) {
            insert(result,countArrayList, sumChild)   
        }
        countArrayList = countArrayList + 1
    }
    return result
}