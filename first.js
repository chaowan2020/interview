const moveElement = arr => {
    const swap = (l, r) => {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
    const getDirection = (l, r) =>{
        const bothNegative = arr[l] < 0 && arr[r] < 0;
        const bothPositive = arr[l] >= 0 && arr[r] >= 0;
        return bothNegative ? [l, r-1] : bothPositive ? [l+1, r] : [l+1, r-1];
    }
    const recur = ([l ,r]) => {
        if(l > r) return arr; // base case
        if(arr[l] <= 0 && arr[r] >= 0) swap(l, r); // swap before move if both incorrect
        return recur(getDirection(l, r)); 
    }
    return recur([0, arr.length - 1]);
}