//Challenge 1
function reverseString(str: string): string {
  return str === "" ? "" : reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));

//Challenge 2
function countVowels(str: string): number {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("typescript"));

//Challenge 3
function findMissingNumber(arr: number[]): number {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let expectedSum = 0;
  for (let i = min; i <= max; i++) {
    expectedSum += i;
  }

  let actualSum = 0;
  for (let j = 0; j < arr.length; j++) {
    actualSum += arr[j];
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));

//Challenge 4
function firstNonRepeatingChar(str: string): string | null {
  for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    switch (count) {
      case 1:
        return str[i];
      default:
        break;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("racecar"));

//Challenge 5
function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));

//Challenge 6
class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    // Move accessed key to end (most recently used)
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    // Remove existing key to update order
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // Add new key-value pair
    this.cache.set(key, value);

    // If capacity is exceeded, remove the **least recently used** (first entry)
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, 10);
cache.put(2, 20);
console.log(cache.get(1));
cache.put(3, 30);
console.log(cache.get(2));
cache.put(4, 40);

enum Status {
  PENDING = "pending",
  COMPLETED = "completed",
}
interface Task {
  id: number;
  name: string;
  status: Status;
}
//Challenge 7
class TaskManager {
  private tasks: Task[] = [];
  private currentId: number = 1;

  addTask(name: string): void {
    this.tasks.push({ id: this.currentId++, name, status: Status.PENDING });
  }

  completeTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) task.status = Status.COMPLETED;
  }

  displayTasks(): void {
    this.tasks.forEach((task) => {
      console.log(
        `Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`
      );
    });
  }
}

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();
