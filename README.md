# Namaste-NodeJs

<!-- Epidose 1 -->
<!-- What is Node Js  -->

Run JavaScript Everywhere
JavaScript Runtime built on Chrome's V8 Engine
Node js is a Cross Platform,Open source JavaScript Runtime Environment
Node js run on the V8 Javasctipt engine and executes JavaScript code outside a web browser.

Node js has an event driven architecture of asychronous I/O /Non-Blocking I/O.

<!-- History of Node JS -->

Node Js was craeted by John Dahl in 2009 on Spider Monkey Js engine
after few days or 2days John move to V8 Engine and never move back.
and then John and Company Named Joyent work on node js.
Initially John named node js as web js for creating web servers.
and then it become to Node js as it not only for creating web servers.
John was to create an Non Blocking I/O Server because at that time apache http server has blocking server

Right Now : The OpenJS Foundation has taken over ownership, maintenance, and management of the Node. js trademarks from Joyent.
Node js is Powered or Ignit by V8 Js Engine.
When were there is javascript ,there is Javascript engine.
Every Browser has Js Engine
Chrome has V8
Mozilla Firefoz has Spider Monkey

in 2010, NPM happened => Node Package Manager is a registory ,a single page package would be anything
Significant achievement for Node Js

In 2011, Windows Support Initially Node js was build for Linux and MacOs and Joyent + Microsoft make
Windows Support also make it more accessible more developer community.

in 2012 , Issac Creator of NPM and took lead of node js and managed it.
So ,Basically Issac took over it

so ,chrome increase upgradation the node js cannot catch and so many things .
in 2014, fedor created a fork of node js named io.js has
then two js
node js | io.js
joyent | fedor

after september ,2015 they merged in one
in NODEJS Foundation Community and they will maintained

In 2019, Js Foundation Community + Node Js Foundation Community and Merged into One.

<!-- Named Open Source Js Community Managed active development of node js -->

<!-- Epidose 2 -->
<!-- Node Js on Server  -->

Client ---------- Server
Client write domain that represents ip goes to Server
and Server Revert back with response Server is Node Js
Frontent and backend with one language JavaScript
so, basically it become FUll stack MERN MONGO EXPRESS REACT NODE

 <!-- Node js is C++ Code -->

JS engine - V8 Engine => C++ Code
JavaScript Executes C++ to exceutes Javascript code

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++
It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly.
V8 can be embedded into any C++ application.

<!-- Node Js is a C++ Application with V8  embedded on it.  -->

ECMAScript is a scripting language specification on which JavaScript is based. Ecma International is in charge of standardizing ECMAScript.

Standard /Rules
JS engines follow these Standard /Rules

Node js build on V8 which is written in C ++ ,

<!-- Js Runtime -->

additon to that has Super Power => API on Server /Modules

<!-- Js -->
<!-- C++  --> High Level Code

Machine Code ->Low Level Code
Assembly Code ->Low Level Code
Binary Code

<!-- Episode 3 Let's Write Code -->

shahil@Mac ~ % node -v
v22.12.0
shahil@Mac ~ % npm -v
10.9.0

<!-- REPL =>  READ EVALAUTE PRINT LOOP -->
<!-- Node Js is JavaScript Environment  -->
<!-- global object gives us lot of feaures  -->
<!-- global is Node Js thing and not a V8 Engine -->

<!-- due to the window,this,frame,self and much more point to global  -->
<!-- so globalThis which contain the global property conatins the global this -->

<!-- Episode 4 Module Export and Require -->

by default commonjs is used
Common Js Modules => cjs

module.exports
require();

ES Modules => mjs

import
export

<!-- How are variables and functions private in different module -->

Answer : IIFE and require(statement) wrapping code inside IIFE

<!-- How do you get access to module.export -->

Node js passes modules as a parameter to the IIFE.

<!-- Five Steps that Happen #require  -->

1. Resolving the Module
   eg ./localpath , .json , .node:module

   wrapped inside IIFE and passed into V8 Engine

2.Loading the Module
File Content is Loaded According to file type
3.Wraps inside IIFE ---> Compile
module.exports
4.Evalaution
5.Caching
Not Loading the file again, just once loaded and cached it
Just return from the cached

<!-- Node js Makes it Efficient by caching it up -->

<!-- LIBUV  :Asynchronous I/O Made Simple   :acts as miidleware in between V8 and OS(side-effect)-->

https://v8.dev/

Phases Overview
┌───────────────────────────┐
┌─>│ timers │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
│ │ pending callbacks │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
│ │ idle, prepare │
│ └─────────────┬─────────────┘ ┌───────────────┐
│ ┌─────────────┴─────────────┐ │ incoming: │
│ │ poll │<─────┤ connections, │
│ └─────────────┬─────────────┘ │ data, etc. │
│ ┌─────────────┴─────────────┐ └───────────────┘
│ │ check │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
└──┤ close callbacks │
└───────────────────────────┘
timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
pending callbacks: executes I/O callbacks deferred to the next loop iteration.
idle, prepare: only used internally.
poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
check: setImmediate() callbacks are invoked here.
close callbacks: some close callbacks, e.g. socket.on('close', ...).

<!-- Is Node JS is Single Threaded or Multi Threaded -->
<!-- It Depends how and what code is there  -->

<!-- One Full Cycle is Known as ONE TICK -->

<!-- Thread Pool  -->

<!-- fs / dns.lookup - crypto  -->
<!-- user specified Input -->

<!-- Size of UV Thread Pool is 4  -->

<!-- process.UV_THREADPOOL_SIZE =  4 -->

iF user requesting from api then so it basically make a connection TCP IP so Networking
So,Socket is Needed for a Connection

Each Socket has Socket Descriptor also known as File Descriptor and operates in O(1).

<!-- Scaleable I/O Event Notification Mechanism -->

Os => epoll (linux)
kqueue => (Macos)

Collection of Socket Descriptor is called as epoll descriptor
One Epoll Descriptor Handle Multiple Connections.

Epoll is a Linux kernel system call that monitors multiple file descriptors for I/O activity. It was introduced in Linux kernel version 2.5.45.

Epoll in Node.js
There is a low-level Node.js binding for the Linux epoll API.
Epoll can be used to monitor multiple file descriptors in Node.js.

epoll uses a red–black tree (RB-tree) data structure to keep track of all file descriptors that are currently being monitored.

While Timers have a min heap

Learn Event Emitter ,Stream and Buffer and Pipe

<!-- Some Learning -->

<!-- Dont Block the Main Thread  -->

Sync Methods
Complex Regex
Heavy Json Objects
Complex Calculations/loops

<!-- Data Structure is Important -->
<!-- Naming is Very Important -->

process.nextTick() vs setImmediate()
We have two calls that are similar as far as users are concerned, but their names are confusing.

process.nextTick() fires immediately on the same phase
setImmediate() fires on the following iteration or 'tick' of the event loop
In essence, the names should be swapped. process.nextTick() fires more immediately than setImmediate(), but this is an artifact of the past which is unlikely to change. Making this switch would break a large percentage of the packages on npm. Every day more new modules are being added, which means every day we wait, more potential breakages occur. While they are confusing, the names themselves won't change.

<!-- There's a lot of Learn -->
