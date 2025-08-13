// interface Story {
//   id: string;
//   userId: string;
//   title: string;
// }

function groupByUserId(stories: Story[]): Record<string, Story[]> {
  const groupedStories: Record<string, Story[]> = {};

  stories.forEach((story) => {
    if (!groupedStories[story.userId]) {
      groupedStories[story.userId] = [];
    }
    groupedStories[story.userId].push(story);
  });

  return groupedStories;
}

// console.log(groupByUserId([
//   {id:'1', userId:'u1', title:'story1'},
//   {id:'2', userId:'u1', title:'story2'},
//   {id:'3', userId:'u2', title:'story3'}
// ]
// ));
// console.log("Script started at:", new Date().toLocaleTimeString());

// const stories: Story[] = [
//   { id: "1", userId: "u1", title: "story1" },
//   { id: "2", userId: "u1", title: "story2" },
//   { id: "3", userId: "u2", title: "story3" },
//   { id: "4", userId: "u3", title: "story4" },
//   { id: "5", userId: "u1", title: "story5" },
// ];

function countStoriesByUser(stories: Story[]): Record<string, number> {
  const count: Record<string, number> = {};

  stories.forEach((story) => {
    if (!count[story.userId]) {
      count[story.userId] = 0;
    }
    count[story.userId] = count[story.userId] + 1;
  });

  return count;
}

// console.log(countStoriesByUser(stories));

type Story = {
  id: string;
  userId: string;
  timestamp: number;
};
const stories: Story[] = [
  { id: "1", userId: "u1", timestamp: 1710 },
  { id: "2", userId: "u2", timestamp: 1700 },
  { id: "3", userId: "u1", timestamp: 1720 },
  { id: "4", userId: "u3", timestamp: 1600 },
  { id: "5", userId: "u2", timestamp: 1750 },
];

function groupAndSortLatestStories(stories: Story[]): Record<string, Story[]> {
  const grouped: Record<string, Story[]> = {};

  stories.forEach((story) => {
    if (!grouped[story.userId]) {
      grouped[story.userId] = [];
    }
    grouped[story.userId].push(story);

    // Object.values(grouped).forEach((userStory) => {
    //   userStory.sort((a, b) => b.timestamp - a.timestamp);
    // });
  });

  for (const key in grouped) {
    grouped[key].sort((a, b) => b.timestamp - a.timestamp);
  }

  return grouped;
}

// console.log(groupAndSortLatestStories(stories));

// const usernames = ["alice", "bob", "adam", "charlie", "bruce"];
// const grouped: Record <string, string[]> = {}

// usernames.forEach(element => {
// if (!grouped[element.split('')[0]]) {
//   grouped[element.split("")[0]] = []
// }
//   grouped[element.split('')[0]].push(element)

// });

// console.log(grouped);

// const usernames = ["alice", "bob", "adam", "charlie", "bruce", "anna"];
// const grouped: Record<string, string[]> = {};

// usernames.forEach((element) => {
//   const firstElement = element[0]
//   if (!grouped[firstElement]) {
//     grouped[firstElement] = [];
//   }
//   grouped[firstElement].push(element);
//   grouped[firstElement].sort((a, b) => a.localeCompare(b))
// });

// console.log(grouped);

const groupedCount: Record<string, number> = {};

function groupCountFunc(arr: string[]): Record<string, number> {
  arr.forEach((items) => {
    const firstElement = items[0];
    if (!groupedCount[firstElement]) {
      groupedCount[firstElement] = 0;
    }
    groupedCount[firstElement]++;
  });

  return groupedCount;
}

// console.log(
//   groupCountFunc(usernames)
// );

const usernames = ["alice", "adam", "amy", "bob", "billy", "bella", "charlie"];

interface finalData {
  letter?: string;
  count?: number;
}

function countLetter(arr: string[]): finalData {
  const count: Record<string, string[]> = {};

  const finalData: finalData = {};

  arr.forEach((element) => {
    const firstElement = element[0];
    if (!count[firstElement]) {
      count[firstElement] = [];
    }

    count[firstElement].push(element);
  });

  const extractValues = Object.values(count);
  const sort = extractValues.sort((a, b) => b.length - a.length);

  finalData.count = sort[0].length;
  finalData.letter = sort[0][0][0];

  return finalData;
}

// console.log(countLetter(usernames));

interface CharCount {
  char?: string;
  count?: number;
}
function mostFrequentChar(str: string): CharCount {

  const obj : Record<string, string[]> = {}

  const charCount : CharCount = {}
  const arr = str.toLowerCase().split("").sort((a, b) => a.localeCompare(b)).filter(item => item !== " ")

  arr.forEach(char => {
    if (!obj[char]) {
      obj[char] = []
    }
      obj[char].push(char)
  })
  
  const extractValue = Object.values(obj)
  const sorted = extractValue.sort((a, b) => b.length - a.length)

  charCount.char = sorted[0][0]
  charCount.count = sorted[0].length

  return charCount
}

console.log(mostFrequentChar("This is the start of greatness"));
