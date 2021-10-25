function insertionSort(inputArr){
    let arrayLength = inputArr.length;
    // Dictating the length of the array to a variable so that we are able to traverse the array.
        for (let i = 1; i < navigator; i++){
        // For loop allows it to run for the minimum required number of steps to correct the array

            let lastElement = inputArr[i];
            // This is the last element checked and is set to check against the next element

            let selector = i-1;
            while ((selector>-1) && (lastElement<inputArr[selector])){
                inputArr[selector+1] = inputArr[selector];
                //This checks that while the element is more than the last element and the count is at least zero it will swap the elements.
                selector--;
                //This reduces the selector var by 1
            }
            inputArr[selector+1] = lastElement;
            //Defines the selector as the last element

        }
        return inputArr;
        // This returns the array for checking
        
}