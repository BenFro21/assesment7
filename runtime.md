Answer to number 2/3
tinyArray       || i4nsert 57.1 μs     || append 299.2 μs

smallArray      || insert 48.9 μs     || append 112.7 μs

mediumArray     ||  insert 172.8 μs   || append 142.2 μs

largeArray      || insert 8.9605 ms   || append 550.2 μs
                
extraLargeArray || insert 999.3287 ms || append 3.1964 ms

Answer to number 4/5:
The two functions differ greatly even though they do similar things. The insert function is at a o(n^2) incressing quadraticly. You can see this by the value of change from the tinyArray compared to the extra largeArray. the larger the array gets the more quadratic the line incresses. This is due to the unshift method having to slide each index of the array 1 spot. The append could be one of two in my opionion. Either o(log n) or o(n). It is not quite incressing linerly, and for that reason I think it is o(log n). I am assumeing this due to the smaller amounnt of incress as we jump from tinyArray to extraLargeArray. This is do to .push() appending an element to the end of the array. therefore it just has to find the last index of the array and add the new value to the last/new index.