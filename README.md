# javascript-rep
The javascript repo for begginers
-----------------------------------------
JavaScript is a single-threaded, non-blocking language. This means it can execute tasks asynchronously, allowing other tasks to proceed without waiting for a potentially time-consuming task (like fetching data from an API) to complete.
------------------------------------------
scope in javascript refer to the current context of code , which determines the accessinbility of variable to javascript .

there are two types of scopes in js

global scope variable are those decalred outside of a block

local scope variable are those declarred inside of block.
 
--------------------------------------


Destructuring allows us to "unpack" values from data-structure (Array, objects) into separate distinct variables 

---------------------------------------------------------------------------------------
Synchronous vs. Asynchronous
------------------------------------------------
Synchronous: Code is executed line by line, waiting for each line to complete before moving to the next. This can block execution.
Ex.......
console.log("Start");
console.log("Middle");
console.log("End");

------------------------------------------------
Asynchronous: Code initiates a task and moves to the next one, allowing other operations to run. The result of the asynchronous task is handled later.
Ex....................

console.log("Start");
setTimeout(() => console.log("Middle"), 1000); // Executes after 1 second
console.log("End");
--------------------------------------------------------------------------------------
a. Callbacks   
------------------------------------------------------------------------------------
A callback is a function passed as an argument to another function, executed after the asynchronous task is complete.


----------------------------------------------------------------------------------------------------
b.Promises   
-------------------------------------------------
A Promise represents a value that may be available now, in the future, or never.
  Promises make it easier to handle asynchronous tasks and avoid callback hell.
  
States of a Promise:
----------------------
 Pending: Initial state, not fulfilled or rejected.
 Fulfilled: Operation completed successfully.
 Rejected: Operation failed.

-----------------------------------------------------------------------------------------------
c. Async/Await
---------------------------------------------------

Introduced in ES2017 (ES8), async/await is built on Promises and provides a cleaner syntax for handling asynchronous operations.
async and await make promises easier to write"
async makes a function return a Promi
await makes a function wait for a Promise

------------------------------------------
3.Handling Multiple Async Tasks
-----------------
a. Promise.all
-------
Waits for all Promises to resolve or rejects if any Promise fails.

---------------------------
b. Promise.race
--------------------------------
Returns the result of the first Promise that resolves or rejects.

4.Error Handling in Async Code
=========================
a. Using .catch with Promises
------------------------------
b. Using try/catch with Async/Await
---------------------------------

