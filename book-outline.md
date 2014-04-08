# Part I A modding workbench
## Overview
Welcome to the exciting world of Minecraft Modding. In this first section of the book I'll introduce you to the tools you'll need to start modding. Just as in the Minecraft game you need to first create a Workbench (also sometimes called a Crafting Table) before you can craft more sophisticated tools, so too in real life we'll need to first gather some resources and setup a work area where we can create sophisticated minecraft plugins. This first section describes the resources you'll need, how to get them and how to setup your 'modding workbench'. All of the resource you'll need are freely available online.

In this book I will sometimes use the word 'mod' and sometimes use the term 'plugin'. For the purpose of this book, these words mean the same thing. Mojang - the makers of Minecraft - prefer to use the term 'Plugin API' rather than 'Modding API' when refering to their forthcoming official API which will make extending Minecraft easier.

Before we begin I better explain some of the words I'll use throughout this book. 

 * Plugin - A Plugin is a file you add to Minecraft which extends the game in some way. 
 * Mod - Mod is short for Modification. In this book, Plugin and Mod are used interchangebly (they mean the same thing).
 * Modding - The practice of writing modifications or plugins for Minecraft. Modding requires some programming knowledge which we will learn about in this book.
 * Mojang - Mojang is the name of the company which makes Minecraft.
 * API - API is short for Application Programming Interface - an official way to write Minecraft Plugins using a guide provided by Mojang.
 * Multiplayer - The mode of playing minecraft with other players all connected to the same server.
 * Server - A computer which is running the minecraft server software. In this book I will show you how to setup and run your own minecraft server.
 * Client Mod - A modification for Minecraft which only works with the Minecraft Client. TODO: Example
 * Server Mod - A modification for Minecraft which works on the Minecraft Server so that the extensions to the game are available for all players who connect to that server. Example: Hunger Games Mod.

### Why I wrote this book

I've been playing Minecraft since 2010 and have been playing Multiplayer Minecraft with my 2 kids on a shared server at our kitchen table since 2011. I work in IBM as a software developer and have been developing software for over 20 years. I took my Kids to local CoderDojo sessions where they learned to use Scratch and create simple web pages using HTML and Javascript. I thought "Wouldn't it be cool if kids could learn to program using Minecraft?". When I first looked into developing Minecraft plugins I was a littled bewildered (read: confused) by the different options available. 

All of the options available also required you to write code in Java. Java is the programming language which Minecraft is written in. It is a fine general purpose language used for many different purposes. It is especially suited to developing large complex business applications. However, it is not ideal as a first language to learn. Learning Java can take some time and you need to write a lot of Java code to get things done. On top of that, even for a seasoned Java developer, the options available for modding minecraft were bewildering. That's when I came up with the idea of making modding easier by letting plugin developers use Javascript instead. 

In late 2012 I launched ScriptCraft - a way of writing Minecraft plugins using Javascript, a much simpler language than its close cousin Java. In early 2014 PeachPit publishing talked to me about writing a book to help beginners learn to program Minecraft Plugins using Javascript. 

I wrote this book to make learning to program fun and easy. I believe that learning even a little about software - how it's made and how it works - is good. Developing Minecraft Plugins is a great way to learn programming and create something fun for yourself and your friends. Maybe you want to create your own Minecraft mini-game or you can't find a Plugin that does exactly what you want or need it to do. This book will teach you how to create your own plugins and mini-games. Playing games is fun. Creating mini-games for others to play is a whole different level of fun.

I hope you'll enjoy reading and exploring the world of programming and Minecraft modding. 

Walter Higgins

April 2014

### Why JavaScript?

In this book I will teach you how to program using the Javascript programming language. Javascript is just one of many programming languages. When I set out with the goal of making Minecraft Plugin development easier I chose Javascript for a few reasons:

 * Javascript is an easy language to learn. 
 * I like Javascript. I enjoy writing code in Javascript and hope you will too.
 * Javascript is expressive. You can do more with less. A little bit of Javascript code can do quite a lot compared to other programming languages such as Java. The shorter your programs are, the easier they are to understand. 
 * Javascript is bundled with Java. The latest versions of Java include Javascript. This means you won't need to install any additional software just to use ScriptCraft. 
 * Anything you can do using Java, you can do using Javascript. In this book we'll learn about the Bukkit API - a set of guidelines for creating Minecraft Plugins. The Bukkit API is Java-based but we can use Javascript too!
 * Javascript isn't a toy. Javascript is a proper programming language used professionally by thousands of programmers around the world. Although originally only used for adding simple extensions to web pages, it's now used for developing all kinds of software and has become one of the most popular programming languages. 
 * Javascript is cross-platform. What this means is Javascript is available on Macintosh, Windows and Linux.


### About the Upcoming Minecraft API

When I created ScriptCraft (this was late 2012) there was no one true way to write Minecraft Plugins because there was no official way provided by Mojang. At the time of writing (April 2014) Mojang announced an upcoming official way to write Minecraft Plugins using the Plugin API. The Plugin API will provide a standard way for Plugin Developers to extend the Minecraft game. There is still no official release date for the Plugin API but I'll be watching closely and will make any necessary changes to ScriptCraft when the API is released.
 
## Running your own Minecraft server

I began playing Minecraft in 2010 in Single Player mode. It was fun and a relaxing way to pass the time. One year later, one afternoon I installed the Minecraft Server software and ran it on one of the computers on our kitchen table. My youngest son Sean had just finished his homework so I asked him if he wanted to join the home server. Seeing each other in the game was quite a novelty. Soon my eldest daughter Kate joined in and we began some serious building together. Building in Minecraft is much more fun with others. 

When you play Minecraft in Multi-Player mode and chat, build and mine with other players, you do so on a Minecraft "Server". The Minecraft Server is just a computer program (like Minecraft Client, Microsoft Word or Internet Explorer) which when running provides a shared virtual place for minecraft players to connect, build and chat. You don't need to buy any special type of computer to run a Minecraft Server. You can run a Minecraft Server on your laptop computer (assuming it's not too old). Minecraft server software won't run on an iPad or Android Tablet or phone. It only runs on Windows, Macintosh or Linux computers.


### Why run your own server?
### CraftBukkit
### Installing CraftBukkit
### Configuring your server
#### Permissions
#### Operators
#### World Type
#### Monsters
#### Game Mode


## ScriptCraft
### What is ScriptCraft?

### Downloading ScriptCraft
### Installing ScriptCraft
### Verifying ScriptCraft is installed.


## A Javascript command prompt
### First steps with Javascript
### Variables
### Printing results


## Your Modding Workbench.
### Choosing an editor
#### SublimeText
#### Notepad++
#### TextWrangler
#### Other options


# Part II Basic Modding 

## Rolling Dice
### Goal
The goal of this chapter is to gently introduce some basic
javascript concepts by way of creating a simple minecraft mod which
simulates the roll of a dice. The goal of this recipe/chapter (as
with all recipes/chapters) is to engage young readers in
programming by way of useful examples which they can incorporate in
their minecraft servers. Getting young readers up to speed on
modding is the primary goal, learning javascript is a side-effect.
     
At the end of this recipe, readers will have a working minecraft
mod which they can use at the in-game prompt to generate random
numbers. This plugin will be used in the recipe #3.

### Programming Concepts Introduced:

Creating, Editing and Saving Files.
A few illustrative screenshots of SublimeText will be required.

### Javascript Concepts Introduced:
    
#### Variables
Numbers: Integers and Floats

#### Functions
(Built-in functions - parseInt, Math.random)
Writing your own function.

#### Objects 
Math, 

### Minecraft Concepts Introduced:

Plugins
The ScriptCraft directory tree.

## Multi-sided dice

## Greeting Players

### Goal
Each player who joins the server will be greeted using a random
international greeting, Hola, Hello, Dia Dhuit, Bonjour,
Konnichiwa.  The greeting will be different each time the player
joins. This is a fun twist on the standard 'Hello World' example
used by most programming tutorials. It builds upon the 'Dice Roll'
recipe.

### Programming Concepts Introduced:

Re-use. (using functions/modules we've already written)

### Javascript Concepts Introduced:

1. Arrays
2. Accessing Arrays

### Minecraft Concepts Introduced:

1. Events

## Create a Fireworks Show

### Goal
A recipe for creating spectacular fireworks shows.

### Programming Concepts Introduced:
1. Deferred Execution

### Javascript Concepts introduced:
1. This recipe introduces the setTimeout() function.
2. The 'if' statement is introduced.

## Don't stray too far

### Goal
A recipe which periodically checks each player's location and automatically moves them
back into an area close to the spawn location. 

### Javascript Concepts introduced:
1. for loops 
2. Conditionals are examined in more detail.

## A number-guessing game

### Goal

Readers learn how to create a simple number-guessing
mini-game. The computer generates a random number (using the same
function created in Recipe 1). Players try to guess the number
and are told if the number they guessed is too high or too low.

    var number = Math.ceil(Math.random() * 10);
    var guess = prompt( sender, 'Pick a number between 1 and 10');
    guess.input( function( value, sender ) {
      if (value == 'quit'){
         return;
      }
      value = parseInt(value);
      if (value === number){
         sender.sendMessage('Correct!');
         return;
      }
      guess.repeat();    
    });
    

### Javascript Concepts introduced:
     
1. while loops
2. conditionals (reinforced)
3. comparisons and operators
4. Prompting for input.


# Part III Advanced Modding

The latter half of the book will focus on Event-Driven Programming and
using Bukkit's API - in particular, how Bukkit's Java-based API maps
to Javascript.

## Arrows that Teleport you.

### Goal

In this recipe, event-driven programming is explained in more
detail. At the end of the chapter the reader will have created a
simple mod which teleports players when they fire arrows. Players are
teleported to wherever the arrow lands.


## A TNT-Free Zone

### Goal 

In this recipe, readers learn about more events and will explore
Bukkit's event package. They'll learn how to browse JavaDoc
documentation and how to map Bukkit event classes to
Javascript. This recipe provides a mod which will prevent players
from placing TNT, Lava and other destructive blocks in the game.

## Protecting areas against griefing.

### Goal

In this recipe, players will learn how to listen for and cancel block-breaking events.

## It's a small world

### Goal
Readers learn how to limit the size of the game world and thus
make more memory-efficient game worlds. This is an event-driven
refinement of recipe 5.

### Concepts introduced

Computer Memory.

## Horse-Clicker, A simple mini-game

### Goal
This is the first recipe in a series of recipes which will
introduce mini-games. In this recipe, basic game mechanics are
introduced.  Keeping score.
    
## Snowball Fight, A player-vs-player mini-game

### Goal
This recipe and the followin recipe will go into much greater
detail in developing and presenting a javascript mini-game within
Minecraft. Each part of the mini-game source code will be
explained. The goal of these two recipes will be to reinforce
what the reader has learnt in the preceding recipes/chapters.

## Piggie Pandemonium, A pig-herding mini-game
 
