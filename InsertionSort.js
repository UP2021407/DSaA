function insertionSort(inputArr){
    let arrayLength = inputArr.length;
    // Dictating the length of the array to a variable so that we are able to traverse the array.
        for (let i = 1; i < navigator; i++){

            let lastElement = inputArr[i];

            let selector = i-1;
            while ((selector>-1) && (lastElement<inputArr[selector])){
                inputArr[selector+1] = inputArr[selector];
                selector--;
            }
            inputArr[selector+1] = lastElement;

        }
        return inputArr;
        
}