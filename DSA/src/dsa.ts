function isAnagram(first: string, second: string): boolean {
  if (first.length !== second.length) return false;

  const count: Record<string, number> = {};

  for (const element of first) {
    count[element] = (count[element] || 0) + 1;
  }

  for (const element of second) {
    if (!count[element]) {
      return false;
    }
    count[element]--;
  }
  return true;
}

// console.log(isAnagram("silent", "listen"));
// console.log(isAnagram("rider", "dryer"));

function twoSum(arr: number[], target: number) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[index] + arr[j] === target) {
        return [index, j];
      }
    }
  }
  return [];
}

// console.log(twoSum([1, 2, 3], 7));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([8, 10, 45, 19, 17], 36));

function twoSumOptimized(arr: number[], target: number): number[] {
  const map = new Map<number, number>(); // value → index

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(arr[i], i);
    console.log(complement);
    
  }

  return [];
}
// console.log(twoSumOptimized([8, 10, 19, 45, 17], 36));

const otherStories = [{name: "avgh", user: {_id: 1}}, {name: "ajkfhkj", user: {_id: 2}}, {name: "fkllf", user: {_id: 3}}]

 const uniqueUsers = Array.from(
    new Map(
      otherStories
        .filter((s) => s.user && s.user._id)
        .map((s) => [s.user._id, s.user])
    ).values()
  );
console.log(uniqueUsers);
