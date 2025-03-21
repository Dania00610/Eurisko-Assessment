//Challenge 1
function reverseString(str) {
    return str === "" ? "" : reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello"));
//Challenge 2
function countVowels(str) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("typescript"));
//Challenge 3
function findMissingNumber(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var expectedSum = 0;
    for (var i = min; i <= max; i++) {
        expectedSum += i;
    }
    var actualSum = 0;
    for (var j = 0; j < arr.length; j++) {
        actualSum += arr[j];
    }
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));
//Challenge 4
function firstNonRepeatingChar(str) {
    for (var i = 0; i < str.length; i++) {
        var count = 0;
        for (var j = 0; j < str.length; j++) {
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
function deepEqual(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    if (typeof obj1 !== "object" ||
        typeof obj2 !== "object" ||
        obj1 === null ||
        obj2 === null)
        return false;
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length)
        return false;
    return keys1.every(function (key) { return deepEqual(obj1[key], obj2[key]); });
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
//Challenge 6
var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    LRUCache.prototype.get = function (key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        // Move accessed key to end (most recently used)
        var value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    };
    LRUCache.prototype.put = function (key, value) {
        // Remove existing key to update order
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        // Add new key-value pair
        this.cache.set(key, value);
        // If capacity is exceeded, remove the **least recently used** (first entry)
        if (this.cache.size > this.capacity) {
            var firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    };
    return LRUCache;
}());
var cache = new LRUCache(2);
cache.put(1, 10);
cache.put(2, 20);
console.log(cache.get(1));
cache.put(3, 30);
console.log(cache.get(2));
cache.put(4, 40);
var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["COMPLETED"] = "completed";
})(Status || (Status = {}));
//Challenge 7
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        this.tasks.push({ id: this.currentId++, name: name, status: Status.PENDING });
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (task)
            task.status = Status.COMPLETED;
    };
    TaskManager.prototype.displayTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
        });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();
