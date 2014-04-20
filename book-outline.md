# Preface

## Who is this book for?

This book is for anyone who is curious about Minecraft Modding and Programming. It teaches how to create Minecraft Server Plugins and assumes the reader has no previous programming experience. This book is for beginners of all ages. 

## Introduction

This book shows you how to create your own Minecraft Server Plugins using Javascript. In this book I will sometimes use the word 'mod' and sometimes use the term 'plugin'. For the purpose of this book, these words mean the same thing. Mojang - the makers of Minecraft - prefer to use the term 'Plugin API' rather than 'Modding API' when refering to their forthcoming official API which will make extending Minecraft easier.

Before we begin I better explain some of the words I'll use throughout this book. 

 * Plugin - A Plugin is a file you add to Minecraft which extends the game in some way. 
 * Mod - Mod is short for Modification. In this book, Plugin and Mod are used interchangebly (they mean the same thing).
 * Modding - The practice of writing modifications or plugins for Minecraft. Modding requires some programming knowledge which we will learn about in this book.
 * Mojang - Mojang is the name of the company which makes Minecraft.
 * API - API is short for Application Programming Interface - an official way to write Minecraft Plugins using a guide. Players and regular users of software don't need to care about APIs but they are essential for programmers, because they make it easier to change the software. An API is like a list of Recipes - you probably crafted your first pick-axe by refering to an online guide - how much more difficult would it be to have tried creating one without knowing where all the materials show go in the crafting grid? Similarly, programmers need APIs to provide help and guidance in building plugins. The API we will use in this book is the Bukkit API. We'll learn more about this later.
 * Multiplayer - The mode of playing minecraft with other players all connected to the same server.
 * Server - A computer which is running the minecraft server software. In this book I will show you how to setup and run your own minecraft server.
 * Client Mod - A modification for Minecraft which only works with the Minecraft Client. TODO: Example
 * Server Mod - A modification for Minecraft which works on the Minecraft Server so that the extensions to the game are available for all players who connect to that server. Example: Hunger Games Mod.

## Why I wrote this book

I've been playing Minecraft since 2010 and have been playing Multiplayer Minecraft with my 2 kids on a shared server at our kitchen table since 2011. I work in IBM as a software developer and have been developing software for over 20 years. I took my Kids to local CoderDojo sessions where they learned to use Scratch and create simple web pages using HTML and Javascript. I thought "Wouldn't it be cool if kids could learn to program using Minecraft?". When I first looked into developing Minecraft plugins I was a littled bewildered (read: confused) by the different options available. 

All of the options available also required you to write code in Java. Java is the programming language which Minecraft is written in. It is a fine general purpose language used for many different purposes. It is especially suited to developing large complex business applications. However, it is not ideal as a first language to learn. Learning Java can take some time and you need to write a lot of Java code to get things done. On top of that, even for a seasoned Java developer, the options available for modding minecraft were bewildering. That's when I came up with the idea of making modding easier by letting plugin developers use Javascript instead. 

In late 2012 I launched ScriptCraft - a way of writing Minecraft plugins using Javascript, a much simpler language than its close cousin Java. In early 2014 PeachPit publishing talked to me about writing a book to help beginners learn to program Minecraft Plugins using Javascript. 

I wrote this book to make learning to program fun and easy. I believe that learning even a little about software - how it's made and how it works - is good. Developing Minecraft Plugins is a great way to learn programming and create something fun for yourself and your friends. Maybe you want to create your own Minecraft mini-game or you can't find a Plugin that does exactly what you want or need it to do. This book will teach you how to create your own plugins and mini-games. Playing games is fun. Creating mini-games for others to play is a whole different level of fun.

I hope you'll enjoy reading and exploring the world of programming and Minecraft modding. 

Walter Higgins

April 2014

## Why JavaScript?

In this book I will teach you how to program using the Javascript programming language. Javascript is just one of many programming languages. When I set out with the goal of making Minecraft Plugin development easier I chose Javascript for a few reasons:

 * Javascript is an easy language to learn. 
 * I like Javascript. I enjoy writing code in Javascript and hope you will too.
 * Javascript is expressive. You can do more with less. A little bit of Javascript code can do quite a lot compared to other programming languages such as Java. The shorter your programs are, the easier they are to understand. 
 * Javascript is bundled with Java. The latest versions of Java include Javascript. This means you won't need to install any additional software to use ScriptCraft. 
 * Anything you can do using Java, you can do using Javascript. In this book we'll learn about the Bukkit API - a set of guidelines for creating Minecraft Plugins. The Bukkit API is Java-based but we can use Javascript too!
 * Javascript isn't a toy. Javascript is a proper programming language used professionally by thousands of programmers around the world. Although originally only used for adding simple extensions to web pages, it's now used for developing all kinds of software and has become one of the most popular programming languages. 
 * Javascript is cross-platform. What this means is Javascript is available on Macintosh, Windows and Linux.


### About the Upcoming Minecraft API

When I created ScriptCraft (this was late 2012) there was no one true way to write Minecraft Plugins because there was no official way provided by Mojang. At the time of writing (April 2014) Mojang announced an upcoming official way to write Minecraft Plugins using the Plugin API. The Plugin API will provide a standard way for Plugin Developers to extend the Minecraft game. There is still no official release date for the Plugin API but I'll be watching closely and will make any necessary changes to ScriptCraft when the API is released.
 
# Part I A modding workbench

![Crafting Table](img/Crafting_Table.png "A Modding Workbench")

## Overview
Welcome to the exciting world of Minecraft Modding. In this first section of the book I'll introduce you to the tools you'll need to start modding. Just as in the Minecraft game you need to first create a Workbench (also sometimes called a Crafting Table) before you can craft more sophisticated tools, so too in real life we'll need to first gather some resources and setup a work area where we can create sophisticated minecraft plugins. This first section describes the resources you'll need, how to get them and how to setup your 'modding workbench'. All of the resource you'll need are freely available online. The ingredients you'll need to construct your modding workbench are...

 * CraftBukkit - A freely-available open-source Minecraft Server.
 * ScriptCraft - A Plugin for CraftBukkit.
 * SublimeText - Or any other text editor suitable for programming.

... The following chapters will show you how to install and setup each of the above.

## Running your own Minecraft server

I began playing Minecraft in 2010 in Single Player mode. It was fun and a relaxing way to pass the time. One year later, one afternoon I installed the Minecraft Server software and ran it on one of the computers on our kitchen table. My youngest son Sean had just finished his homework so I asked him if he wanted to join the home server. Seeing each other in the game was quite a novelty. Soon my eldest daughter Kate joined in and we began some serious building together. Building in Minecraft is much more fun with others. 

![Client Server Kids](img/Client_Server_Kids.png "The Kids on Minecraft Server")

When you play Minecraft in Multi-Player mode and chat, build and mine with other players, you do so on a Minecraft "Server". The Minecraft Server is just a computer program (like Minecraft Client, Microsoft Word or Internet Explorer) which when running provides a shared virtual place for minecraft players to connect, build and chat. You don't need to buy any special type of computer to run a Minecraft Server. You can run a Minecraft Server on your laptop computer (assuming it's not too old). Minecraft server software won't run on an iPad or Android Tablet or phone. It only runs on Windows, Macintosh or Linux computers. 

Minecraft Multi-Player is "Client-Server". That means that one or more "client" computers - computers running the minecraft game - can connect to a central "server" - a computer which is responsible for storing all of the Minecraft World information so that players can play together in the same world. The following diagram is shows a simple Client/Server network with just one client (Player) connected to a Server.

![Client Server 1](img/Client_Server1.png "A simple client server network")

The Client must be connected to the Server over some kind of Network. The line between the Client and the Server in the above diagram represents the network. The client and the server chat with each other using a language which would be gobbledigook to you and I. A Server with just one Client computer isn't much fun though. Servers really become fun when many players are connected to the same server like in the following diagram.

![Client Server 2](img/Client_Server2.png "A client server network with many clients (players)")

In the above diagram, the server must chat with all of the connected clients. For example, if it starts raining in the game, the server must send a message to each client that it's begun raining. In Minecraft Multiplayer, the server is responsible for an awful lot. The server decides what the weather will be like in the in-game world, what time of day it is and so on. This is so that the time of day and weather will be the same for all connected players. 

You'll notice that in the above diagrams, the server is shown a separate computer. This is just for illustration. While very often, Server software *does* run on a separate computers, you won't need a separate computer to run Minecraft Server or following the tutorials in this book. In fact, for learning how to create Minecraft Plugins and to get the best from this book I recommend running Minecraft Server on the same computer you play Minecraft on. **This means your computer will act as both a Client and a Server**. This is by far the most convenient and cost-effective way to run a server and learn how to create Minecraft Server Plugins.

![Client And Server](img/Client_Server_Combined.png "A computer which is both a client and a server")

When you play Minecraft in Multi-Player mode, before you can connect to a server you have to enter the Server details into the game. The Server details are a 'hostname' or an 'IP Address', either one of these provides a way for Minecraft Client (the game) to connect to a computer running the Minecraft Server. The 'hostname' or 'IP Adress' are how computers uniquely identify one another on the internet, much like how we identify each other by name and/or address. When you run Minecraft Server on your own computer, you will use a special hostname called `localhost` or IP address `127.0.0.1`. I'll talk more about these in the following sections.

If you haven't already considered running your own Minecraft Server, maybe you've thought it would be too difficult to do. Servers - those are computers in big air-conditioned data-centers looked after by people with computer science degrees - right? Wrong! Servers aren't scary at all. Anyone can run a server. In the following sections I'll show you how. 

### Why run your own server?

Why should you run your own server? Running your own server means you have total control over the Minecraft world you want to create and share with your friends. You can decide what type of server and world you and your friends will play in; what server plugins to install, what rules will govern the server and world, and who can and cannot join the server. In short, you get to play god in the Minecraft world when you administer your own server. As a server 'operator' you will have access to commands that normal players don't. You can control the weather using Minecraft commands, start and stop thunderstorms, even change the time of day. You can also install popular Minecraft Server mods like HungerGames and MobArena. The real power of running your own server comes when you add ScriptCraft which makes it easier to create your own Minecraft Server Plugins. If you have an idea for a new Minecraft mod or would like to do something which current Mods don't support, you can create your own mod and test it on your own server. 

Minecraft Server Plugin developers run their own servers because they need to be able to test their creations before releasing them into the wild for others to use. No serious Modder would consider releasing a plugin which they hadn't first tested on their own private servers. Last but not least, running your own Minecraft server will impress your friends :-)

### Which Minecraft Server Software should I use?

There are a couple of different flavours of Minecraft Server. Mojang provide their own server software which can be downloaded from the Minecraft.net website. This was the very first server software released for Minecraft. This is often refered to as 'Vanilla' Minecraft Server. At the time of writing it doesn't provide any way to add plugins although this will probably change once Mojang release an official Plugin API. The Minecraft Server provided by Mojang is fine if you want to run a server with no modifications. The problems with running such a server are that there's no reliable way to protect against 'griefing'. 

#### Term: Griefing 
A griefer is a player in a multiplayer video game who deliberately irritates and harasses other players within the game, using aspects of the game in unintended ways. A griefer enjoys annoying other users by destroying other player's work, cursing and harrassing players and server administrators.

The standard (Vanilla) Minecraft Server has only limited ways to protect against griefing. Because of this other more popular Minecraft Server Software arose - Server software which allowed server administrators to more stricty control who could and could not join the server, and enforce penalties and bans on players who misbehaved. Popular alternatives such as CraftBukkit - which we'll use in this book - let administrators add any number of anti-griefing plugins to make the server as safe and secure and player-friendly as possible.

### CraftBukkit

> Your server, your way. More for less. The possibilities are endless...
>
> [http://dl.bukkit.org/](http://dl.bukkit.org/)

CraftBukkit has become the most popular Minecraft Server Software. It has a thriving community of Plugin developers. In 2012 Mojang hired the CraftBukkit team to work on Minecraft and the Minecraft API. In this book we'll use CraftBukkit as our Minecraft Server software. CraftBukkit is the Server software but it has an API ( a system which Plugin developers can use to exend the server ) which is called 'Bukkit'. We'll look at the Bukkit API in more detail later. For now, all you need to know is that CraftBukkit is the name of the server Software and Bukkit is the API on top which it's built.

![CraftBukkit and Bukkit](img/CraftBukkit_Bukkit.png "CraftBukkit is built on Bukkit")

CraftBukkit has become so popular because of its underlying API (Bukkit) which makes it easy for Plugin Developers to extend the Minecraft multiplayer server. There are hundreds of plugins available for CraftBukkit include all of the poplular mulit-player mini-games such as HungerGames and CaptureTheFlag. Chances are, if you've ever played Minecraft Multiplayer on one of the popular public servers, it's been running CraftBukkit. The CraftBukkit Wiki Website provides a wealth of informatoin for both Administrators (the people who run CraftBukkit Servers) and Developers (the people who create plugins for CraftBukkit - you) and I highly recommend checking it out [http://wiki.bukkit.org/](http://wiki.bukkit.org/) .

### Installing CraftBukkit

The first step in constructing your Modding Workbench is to install CraftBukkit. Unlike many games, Minecraft is in ongoing development. This means that new versions of Minecraft are released quite often. When you purchase and download the Minecraft Client you automatically get new versions of the game when they are released. This is great for players because you get the latest and greatest version for free, which often includes bug fixes and new features. If you've played Minecraft Multi-Player before on one of the popular public servers, you'll know that there's just one downside to Mojang's commitment to improving Minecraft - Server software upgrades does not happen as often as Client software upgrades. This can lead to Client software and Server software which is "incompatible". When the Client and Server versions are incompatible it means is that the client and the server cannot chat with one another. 

#### Term: Bug
"Bugs" in software are errors or mistakes in the software code which can cause problems. Nobody quite knows for sure why errors in software are called bugs but one story goes that a problem with an early mechanical computer in the 1940s was caused by a Moth which somehow found its way inside. The term "Bug" had been used to describe errors long before computers came along, so when the engineers captured the Moth they kept it with a note that said "First actual case of bug being found." 

![Compatibility between Client and Server](img/mc-server-client-incompat.png "Compatibility between Client and Server")

Usually, a compatible version of the Minecraft Server software is released shortly after the Minecraft Client is upgraded. One thing to keep in mind is that CraftBukkit is an open-source and voluntary project - this means that the people who develop CraftBukkit don't get paid to do so. They do it for fun. Upgrading Server software takes a lot of work and the software needs to be tested (by volunteers) before it can be released. That's why sometimes it may take a while for a new version of the Minecraft Server Software to be released which is compatible with the latest and greatest client. Be patient and remember that the developers who work on CraftBukkit do it for fun and don't get paid so posting questions on the CraftBukkit forums asking when will the new version be ready won't speed things up :-)

At the time of writing the Minecraft Client Version 1.7.8 is the most current version. This is what the CraftBukkit website's Home page looks like at that time.

![CraftBukkit Home Page](img/bukkit-homepage.png)

The large Download button will download the CraftBukkit Recommended Build. The Recommended Build is the version of the Craftbukkit server software which is considered to be the most reliable version because it has undergone the most testing. However, the Recommended Build is not always the most current or up-to-date version of the software. Fortunately the developers of CraftBukkit also let you download up-to-date versions of the software with the warning that the most up-to-date version may not always be the most reliable version. 

![Craftbukkit download](img/bukkit-download1.png)

Just beneath the prominent "Recommended Build" Button, you'll see "Beta Build" link. "Beta" software is software which is "nearly" ready for release. It's software which is functionally complete - that is - the developers have added all of the features they're going to add but the software still needs to be tested for quality assurance. It's usually OK to run Beta software but you may come across one or two software "Bugs". If the "Beta Build" version does not match the current version of Minecraft then click on the "Alternate Versions" link beneath the "Beta Build" link. This will take you to the CraftBukkit Builds page where you will see a list of "Builds" or versions. The following screenshot shows what the download page looks like at the time of writing.

![CraftBukkit download 2](img/bukkit-download2.png)

Along the right-hand side of the page are three big color-coded download buttons. The Green button is for the most recent stable release. Note that though this is the most stable version, it may not be the most up-to-date version or a version which is compatible with the current Client. The Amber button is for the most recent Beta build. This is a version which is not as stable as the released version but will have undergone some testing and will most likely be in use already on some servers. The Red button is for the most recent development build. It's colored red because it is the least stable version. Development builds will not have undergone the same rigorous testing as Beta or Release software. On the other hand, development builds will be the most up-to-date and chances are, there will be a development build of the Server Software for the latest version of the Client software.

Choosing which version of the Server Software to use - Recommended, Beta or Development - is a big decision and one I unfortunately can't make for you. That decision is entirely up to you. However, If you feel safer using only the Recommended build of CraftBukkit, and that build version is not for the most up-to-date Client, then there's a way you can safely and temporarily (for the short-term) "Downgrade" your Minecraft Client Software so that it will be compatible with your Server software. 

Since version 1.6, the Minecraft Launcher (the software you run on your computer to start Minecraft Client and to upgrade to new versions when they become available) lets you choose which verison of the Client software to run. By default the Launcher is configured to always download and run the Latest Version but you can easily change this using the new "Profiles" feature. The following are step-by-step instructions for changing your Launcher profile to use a different version of Minecraft Client...

![](img/mc-launcher2.png)

1. Launch Minecraft 
2. Click on the 'New Profile' button in the bottom right of the Launch Screen.
3. Fill in the Profile Name field. For example you should call it something like 'Version 1.7.8' (replacing 1.7.8 with the version you've chosen). I find it helpful to include the version name in a new Profile so I can see at-a-glance which Client version the profile will use.
4. Choose the appropriate version from the 'Use Version' drop-down list.
5. Click the Save Profile button.

![](img/mc-profile-editor.png)

The newly created profile should now be automatically selected in the Profile drop-down list on the main launcher page. Click the Play button to begin playing using the chosen version of Minecraft Client software.

![](img/mc-launcher3.png)

By using the profile editor to "Downgrade" your Minecraft Client Software, you can ensure that your Client and Server are compatible and that you can play Multi-Player minecraft even when the Server Software is not as up-to-date as the current latest version of Minecraft Client. This means you can always use the most stable Recommended build of CraftBukkit, you just (temporarily) sacrifice some of the latest features in the Client. 

Once you've chosen between the Recommended, Beta and Development versions of CraftBukkit (If you're unsure, choose the Recommended Version), click on the appropriate color-coded button to begin downloading the software. Depending on which Browser software you use (Chrome, Safari, Internet Explorer or Firefox) the instructions for downloading will differ. Please read the instructions for the Browser you use. 

#### Term: JAR File
![](img/jar_icon.png)
The CraftBukkit software is downloadable as a `.jar` file. Programs which are created using the Java Programming Language are often distributed as JAR files and will have a name which ends with `.jar`. JAR is short for **J**ava **AR**chive file. It's an archive of all of the code and resources needed by Java to run the software. CraftBukkit is distributed as a JAR file. So too are all of the plugins for CraftBukkit.

#### Download Instructions: Chrome

1. Click on the appropriate color-coded button on the Bukkit Downloads page (Remember: Green for Recommended/Stable, Amber for Beta and Red for Development/Unstable).
2. A warning prompt will appear at the bottom of the Chrome window with the following text: "This type of file can harm your computer. Do you want to keep craftbukkit.jar anyway?"
3. Alongside the above message there will be two buttons "Discard" and "Keep". Make sure to click the "Keep" button to start downloading.
4. Press the CTRL key (on the bottom left side of your keyboard) and the 'J' key together to open the Downloads view in Chrome.
![](img/download-bukkit-chrome1.png)
5. You will see a list of recently downloaded files. Underneath the craftbukkit jar file you just downloaded, you'll see a 'Show in Folder' link. Click this link to open the folder containing the recently downloaded file.

6. Select the craftbukkit jar file you just downloaded, right-click and choose 'Copy' from the popup menu. 
7. Create a new folder on your computer and call it 'CraftBukkit'. Make sure you create the folder somewhere convenient so you don't forget where it is.
8. Paste the file from step 6. into the newly created Folder. 

#### Download Instructions: Safari

1. Click on the appropriate color-coded button on the Bukkit Downloads page (Remember: Green for Recommended/Stable, Amber for Beta and Red for Development/Unstable).
2. Once the download is complete click the Download button (A button with a Down arrow) in the top right corner of the Safari screen. 
![](img/download-bukkit-safari1.png)
3. Next to the file you will see a 'Show in Finder' link. Click this link to open the folder containing the recently downloaded file.
4. Select the craftbukkit jar file you just downloaded, ctrl-click (hold down the Ctrl key while clicking) and choose 'Copy' from the popup menu. 
5. Create a new folder on your computer and call it 'CraftBukkit'. Make sure you create the folder somewhere convenient so you don't forget where it is.
6. Paste the file from step 4. into the newly created Folder. 

#### Download Instructions: Internet Explorer

1. Click on the appropriate color-coded button on the Bukkit Downloads page (Remember: Green for Recommended/Stable, Amber for Beta and Red for Development/Unstable).
2. When prompted, you should click the 'Save' button to save the file.
3. When the download has completed, you can view the downloads by pressing Ctrl+J
![](img/download-bukkit-ie1.png)
4. Next to the file you will see a 'Downloads' link. Click this link to open the folder containing the recently downloaded file.
5. Select the craftbukkit jar file you just downloaded, right-click and choose 'Copy' from the popup menu. 
6. Create a new folder on your computer and call it 'CraftBukkit'. Make sure you create the folder somewhere convenient so you don't forget where it is.
7. Paste the file from step 5. into the newly created Folder. 

#### Download Instructions: Firefox

1. Click on the appropriate color-coded button on the Bukkit Downloads page (Remember: Green for Recommended/Stable, Amber for Beta and Red for Development/Unstable).
2. When prompted, you should click the 'Save' button to save the file.
3. Once the download is complete click the Download button (A button with a Down arrow) in the top right corner of the Firefox screen. 
![](img/download-bukkit-firefox1.png)
4. Next to the file you will see a 'Open Containing Folder' link. Click this link to open the folder containing the recently downloaded file.
5. Select the craftbukkit jar file you just downloaded, right-click and choose 'Copy' from the popup menu. 
6. Create a new folder on your computer and call it 'CraftBukkit'. Make sure you create the folder somewhere convenient so you don't forget where it is.
7. Paste the file from step 5. into the newly created Folder. 

Once downloaded, the next step is to install CraftBukkit on your computer. The instructions are slightly different for each operating system so skip directly to the instructions for your operating system ...

#### Installing Bukkit on Windows

1. Open Notepad (You can find it by clicking the 'Start' or Windows button in the bottom left of the screen then typing 'Notepad' in the search box.
2. Type the following into Notepad...

         java -Xmx1024M -jar craftbukkit.jar -o true
         PAUSE

   ... depending on the name of the file you downloaded earlier, you may need to change `craftbukkit.jar` to match the exact name of the file.
   
3. Save the document as run.bat in the Folder you created earlier (the same Folder where you copied the craftbukkit jar file). It's important that you change the 'Save as type:' option from `Text Documents` to `All Files` otherwise Notepad will try to save the document as run.bat.txt. 

4. Double click the run.bat file you saved in the previous step and CraftBukkit should start running. If you see an error message along the lines of "Java is not recognized as an internal or external command, operable program or batch file" then you need to reinstall Java. Java is the programming language Minecraft is written in. It's also the programming language the CraftBukkit Minecraft Server is written in. You can download Java by visiting `http://www.java.com/` and following the instructions. If after installing Java you still get the same error then follow the instructions at `http://www.java.com/en/download/help/path.xml`.

5. Assuming the server has started up (you didn't see any errors), you can shut down the server by issuing the `stop` command at the server console (type `stop` then hit ENTER).

#### Installing Bukkit on Mac OS

1. The first thing you'll need to do is install Java. Since OS X 10.7 Java no longer comes bundled with OS X so you will need to install Java from Apple's Java Install page `http://support.apple.com/kb/DL1421` .

2. Open TextEdit (you can find it by typing `TextEdit` in the Spotlight field in the top right of the screen. Click the Magnifying Glass Icon to bring up Spotlight)

3. Under the `Format` menu, choose `Make Plain Text` then type the following...

        #!/bin/bash
        cd "$( dirname "$0" )"
        java -Xmx1024M -jar craftbukkit.jar -o true    

   ... depending on the name of the file you downloaded earlier, you may need to change `craftbukkit.jar` to match the exact name of the file.

4. Save the file in your CraftBukkit folder as start_server.command

5. You will need to be able to run this newly created file so...

    1. Open the Terminal Application (to find it, click the Magnifying Glass icon and type `Terminal` in the Spotlight field)
    2. Type `chmod a+x` (don't hit enter yet)
	3. Find the file you just created in the Finder and drag and drop it into the Terminal window.
	4. The name of the file you just dropped into the terminal window will be appended to the `chmod a+x` command so you can now hit ENTER.
	
6. Start the server by double clicking the start_server.command file. 

7. To stop the server issue the `stop` command in the terminal window (type `stop` then hit ENTER).

If you run into trouble installing CraftBukkit you can find plenty of useful tips and troubleshooting on the CraftBukkit Wiki website `http://wiki.bukkit.org/Setting_up_a_server`. 
	
#### Installing Bukkit on Linux (Ubuntu)

1. Open `Text Editor` by clicking the `Dash Home` button in the top left corner of the screen, then type `Edit` to see a list of editors (you can choose `Text Editor` or another editor of your choice)

2. Type the following into the editor...

        #!/bin/sh
        BINDIR=$(dirname "$(readlink -fn "$0")")
        cd "$BINDIR"
        java -Xmx1024M -jar craftbukkit.jar -o true

   ... depending on the name of the file you downloaded earlier, you may need to change `craftbukkit.jar` to match the exact name of the file.

3. Save the file as `craftbukkit.sh` in the folder you created earlier (the same Folder where you copied the craftbukkit jar file).

4. You will need to make this new file executable. In Nautilus (Linux's File browser) right-click on the file and select properties. In the properties dialog, click the 'Permissions' tab then ensure that the 'Execute' checkbox is ticked. (You can also make the file executable by issuing the unix command `chmod +x craftbukkit.sh` from the folder where you saved the file.

5. Launch the Terminal Application and type `~/craftbukkit/craftbukkit.sh` (assuming you created a folder called `craftbukkit` in your home folder).

6. Once the Craftbukkit server console has launched, you can stop it by issuing the Craftbukkit `stop` command (type `stop` then hit ENTER).




### Configuring your server
Once you've installed CraftBukkit, the next step is configuration. This is where you decide what kind of Minecraft Server you want to run. Will it have Monsters? Will it be Survival mode or Creative mode? Will it be Player vs Player, and so on. While configuration is something you'll probably only do once, you can later change the server configuration at any time you like. The server configuration isn't set in stone, just bear in mind you will need to restart your server if you change the configuration. I'll show you how to do that later.

#### The server.properties file
When you first launch CraftBukkit a couple of configuration files and folders will be created in the CraftBukkit folder (the folder where you store the craftbukkit jar file and startup script). When configuring your server, the most important file is `server.properties`. This is a plain-text file (meaning it can be edited using any text editor) containing all of the configuration for your server. The first few lines of my own `server.properties` look like this:

    #Minecraft server properties
    #Sun Apr 20 11:11:20 IST 2014
    generator-settings=
    op-permission-level=4
    allow-nether=false
    level-name=world
    enable-query=false
    allow-flight=false
    announce-player-achievements=true
    server-port=25565
    level-type=FLAT

The first two lines - the lines which begin with a `#` character (also known as the Hash symbol) - are comments, they are ignored by the server. The configuration begins properly on line 3 `generator-settings=` which is used for generating worlds (this has a default value of blank - no value). The settings for the server are specified using `Name Value Pairs`. A Name Value pair is programmer-speak for how settings are written. For example in the setting `allow-flight=false`, `allow-flight` is the Name of the property and `false` is the value. `allow-flight=false` is a Name Value Pair where the name is `allow-flight` and the value is `false`. In property files the name and value are separated by the `=` (equals) symbol. Let's look at just some of the properties you might want to change.

##### World Type
Later in the book I'll show you how to use Javascript to create castles, forts, roads and skyscrapers. If you plan to eventually put your newfound programming prowess to use building large-scale places for others to visit, you'll probably want to change the `level-type` property from `DEFAULT` (Minecraft's standard setting where worlds are made of varied landscapes of hills, valleys, and oceans) to `FLAT`. In a `FLAT` world, everything is - as you can probably imagine - flat. There are no hills, no valleys, just flat terrain for as far as you can see. While this might be considered boring, it does have the advantage of being easier to build upon. If you plan to build roads, houses and other large-scale constructions, a `FLAT` world might be the best place to start. It's not essential that the `level-type` is set to `FLAT`, you can always leave this setting at `DEFAULT` and just flatten the area you want to build on first. **If you later decide to change the level-type, the setting only applies when creating new worlds. Existing worlds will not be modified.**

If you decide to create a new world and want to use a `level-type` other than `DEFAULT` you have two options:

1. Change both the `level-name` and `level-type` properties to create a brand new world while keeping the old world (The old world will not be wiped out - it will still be on your computer stored in the `world` folder). This is the best option if you want to keep your existing world data. You need to change the `level-name` setting to something other than `world` (the default value). Call your new world something memorable like `walter-flat-world`. 

2. If you don't care about keeping the existing world, delete the `world` Folder from the CraftBukkit Folder and change the `level-type` property. The next time the server starts, a brand new world and a new `world` folder will be created.

##### Monsters
The next setting you'll probably want to change is the `spawn-monsters` setting. This determines if monsters will be spawned. By default it's set to `true` which means monsters will appear at night and in the dark. I recommend changing this setting from `true` to `false` because the last thing you need while learning to program is to be attacked by giant spiders. You can change this setting any time you like. The setting won't take effect until you restart the server. I'll talk about starting and stopping the server very shortly.

##### Game Mode
For the same reason I suggest making your server a monster-free zone, I also suggest changing your server's `gamemode` property from 0 (Survival) to 1 (Creative). In Survival mode, you will need to constantly seek food and be careful not to fall. In Creative mode you can give your full attention to learning to program and master your surroundings through the power of Javascript.

#### The ops.txt file

The ops.txt file is a file listing all of the 'Operators' for the server. Operators are players who have special privileges on the server. Operators (also sometimes called 'Administrators' or 'Admins') are responsible for keeping the server running and ensuring that players play nice and don't grief. If players don't play nice, Operators have to power to ban or kick players off the server using special commands only available to them. 

There may already be an ops.txt file present in your CraftBukkit folder. If there isn't, you can create one using the Text Editor you used to create the startup script. In your Text Editor, create a new document and type in your own minecraft username. For example, my own ops.txt file looks like this:

    walterh

Type your own minecraft username and save the file as `ops.txt` in the CraftBukkit folder. The next time you play minecraft and join your server, you will have `Operator` privileges. This means you can perform many administration commands. You will need to be an Operator to issue Javascript commands in the game. 

We're done with all of the server configuration we'll need for now. If you want to delve deeper into server configuration, a good place to start is by reading the http://minecraft.gamepedia.com/Server.properties page.

### Basic Server administration commands
CraftBukkit's usefulness as a minecraft server comes from its extensibility - that is - its ability to be extended and made more interesting by adding plugins. Many of the high-profile public minecraft servers actually run CraftBukkit because of the wide range of server plugins available for it. Popular Minecraft Mini-games like 'Hunger Games' and 'Spleef' are all CraftBukkit plugins. In this book we'll use just one plugin - ScriptCraft which lets operators extend the game using Javascript. There are just a few things you'll need to know about server administrator to get the most from this book. 

#### Starting and stopping your server
To start your minecraft server, double click on the startup script you created earlier in this chapter. This launches the minecraft server in a terminal window. The terminal window will look something like this:

![](img/server-console.png)

Don't worry if your terminal window doesn't look exactly like this or has slightly different content. The important thing is that after starting up, your server should display a server console prompt - `>` (right arrow symbol) in the bottom left of the screen along with a blinking cursor. This is called the server console and you can issue administration commands here even if you aren't an operator. Try it: issue the `help` command to see the full list of commands you can use as the Server Console user.

In the Server Console window, you don't need to put a `/` (forward slash symbol) in front of commands the way you do in the Minecraft Client. So you simply type the command name instead of `/` followed by the command name. So remember `help` instead of `/help`, `toggledownfall` instead of `/toggledownfall` and so on. 

Another thing to note about the server console is that when you enter commands there, you do so as a special player called 'CONSOLE'. In Minecraft the `/me` command is used to send a message to other players in the form of 'Yourname Action'. For example, if *I* issue the command `/me sneezes` in the Minecraft client, all other players on the server will see `walterh sneezes`. However, if you or I issue the same command in the server console, you will see `CONSOLE sneezes` instead of your own name. When you issue commands in the Server Console, you do so as a special player called 'CONSOLE'. CONSOLE is not visible to other players and does not inhabit the minecraft world. Normally only the person who starts the server can issue commands as CONSOLE.

To stop the server, you should issue the `stop` command at the server console. If you plan to administer a minecraft server for others to play, the `stop` command will come in handy whenever you want to shutdown the server for maintenance or troubleshooting.

#### Reloading plugins

Another useful command you should know about is the `reload` command. This command will unload all of the server's plugins and then load them up again. This is a faster and more convenient way of reloading plugins than shutting down the server and restarting it. If you manage a server with many players connected and want to install a new version of a plugin then the `reload` command lets you load the plugin without shutting down your server and disconnecting players.

### Other Server Options

By now you should have your very own Minecraft server installed and running. **Congratulations, you're well on your way to becoming a Minecraft Modder!** There are other Minecraft Server options available but installing and running your own server is the only sensible option if you want to start modding. 

#### Commercial Minecraft Hosting
Once you've mastered Server Administration and Modding you might eventually decide to use one of the many commercial minecraft hosting plans available online. These Minecraft hosting providers usually charge a monthly fee, so they are not free. For your money, they provide you with a Minecraft server you and your friends can connect to and play. They usually offer managed install of plugins through a web-based Administration portal (A web page where you can choose which plugins your server should use). Commercial Minecraft Hosting isn't cheap and it's not as flexible as running your own server. You certainly don't need to sign up to commercial minecraft hosting to get the most from this book. You can find a list of minecraft hosting providers by searching 'Minecraft Hosting' on Google.

#### Minecraft Realms
Mojang are rolling out their own Minecraft Hosting solution - Minecraft Realms - throughout the world. It's available in some countries right now and will be available in more soon. Minecraft Realms does not currently support plugins of any kind though that may change in the future. 

## ScriptCraft

In the previous chapter we downloaded and installed CraftBukkit; a customizable Minecraft Server. In this chapter we'll install ScriptCraft - a server plugin which lets you write your own plugins using the Javascript programming language. 

### What is ScriptCraft?

ScriptCraft is a plugin for Minecraft which lets you create plugins using Javascript instead of Java. It is a server plugin which means it is installed on a server (CraftBukkit) but once installed can be used by all players connected to that server. I created ScriptCraft for a couple of reasons:

1. To make it easier for myself to create Minecraft mods.
2. To make it easier for my kids (and others) to create Minecraft mods.
3. To make it easier to teach programming to kids using Javascript and Minecraft as tools.

Most Minecraft Plugins are written in a language called 'Java'. Java was invented back in the 1990s as a simpler way to program. Before Java, programmers used languages like C and C++ which were difficult to program in. C and C++ were difficult because if you wrote a program that wanted to grab some space in the computer's memory, you had to remember to free up that space when you no longer needed it, otherwise the computer would quickly run out of memory and the program would crash. Java solved this problem by having automatic `Garbage Collection` (yes - that's what we programmers actually call it) which automatically frees up memory when it was no longer needed. Java has many other advantages too. It has a large library of functions to do common tasks so you don't have to write those functions yourself and Java is `cross-platform` which mean it runs on Windows, Linux and Mac OS. Minecraft is written in Java and so too are Minecraft servers. 

Java is a fine language and is widely used. However, it can be a little difficult to learn - especially if you are completely new to programming. Java can be verbose - meaning you need to write a lot of Java code to do even simple things. Java code can't be executed right away either. You need to first "compile" it. Compiling is the process of converting Java source code into a form the computer can understand. 

Javascript came along shortly after Java. It was invented in the mid 1990s just when the Internet was becoming really popular. Although their names sound alike 

### Downloading ScriptCraft
### Installing ScriptCraft
### Verifying ScriptCraft is installed.


## A Javascript command prompt
### First steps with Javascript

#### A Minecraft Calculator
##### Addition, Subtraction, Multiplication and Division

1 + 1
3 + 2
3 - 2
1 + 3 * 2
= 7 not 8
1 + 3 / 2
= 2.5 not 2

3 * 4 * 4
3000000 * 4000000 * 2000000 * 5000000

10 / 2
10 / 3

##### Operator Precedence
### Variables
#### Variables as Chests - containers for stuff
### Functions
#### 
### Printing results


## Your Modding Workbench.
### Choosing an editor
#### SublimeText
#### Notepad++
#### TextWrangler
#### Other options


# Part II Basic Modding 

## Rolling Dice

Traditional board-games such as Ludo, Monopoly and Snake & Ladders all have an element of chance. Success is sometimes down solely to luck and the roll of the dice. In this first recipe we're going to create a Javascript module which mimics a 6-sided dice (the standard dice that comes with most board-games). We'll use this module in later recipes to give random greetings to players who join the game.

In this recipe, I'll walk you through creating your very first Javascript module using the SublimeText programming editor.

### Randomness
When you throw a 6-sided dice, there's no way of knowing what the throw will be, it can be any number between 1 and 6 but it's impossible to know ahead of time what the number will be. The number which is thrown is said to be 'Random'. Computers can also provide random numbers. In the Javascript programming language there's a special method of getting a random number `Math.random()` . In this recipe we'll use this method to get a random number. 

### Think of a number between 0 and 1
Before we begin writing the module, let's do some command-prompt exploration. At the in-game prompt type the following and hit ENTER...

/js Math.random()

... you should see something like the following returned ...

0.7184312066528946

The number you see will be different but it will be a number between 0 and 1. Try it again: type the same command at the in-game prompt and hit ENTER. This time you'll see a different number than the previous number but it too will be between 0 and 1. You can do this as many times as you like and the number will be different each time. 

Tip: You can quickly perform the previous command at the in-game prompt by pressing the / key and then pressing the UP Arrow key.

The numbers which Math.random() returns are called floating point numbers. You might not think there are any numbers between 0 and 1 but there are many, many, numbers between them. It's this range of numbers which Javascript uses. The actual range of numbers is 0. 0000000000000000 to 0. 9999999999999999. That's 9 Quadrillion, 999 Trillion, 999 billion, 999 million, 999 thousand and 999 possible numbers. 

### A special 6-sided dice.
A regular 6-sided dice has numbers from 1 through 6 printed or etched on each of the 6 sides. That's because we typically count up from 1. The number 1 is usually the starting point when we want to count up to something. Javascript (like many programming languages) is different. In Javascript counting begins at the number 0. So if you want to count 10 numbers, where normally you'd count from 1 to 10 ...

1, 2, 3, 4, 5, 6, 7, 8, 9, 10

In Javascript the count would look like this...

0, 1, 2, 3, 4, 5, 6, 7, 8, 9

This can be confusing for beginning and experienced programmers and takes some getting used to. I'll explain why counting from 0 is important in the following recipes. Our virtual 6-sided dice will have the numbers 0, 1, 2, 3, 4, 5 rather than the usual 1, 2, 3, 4, 5, 6.

### Playing with Numbers
We have a problem to solve. Math.random() will give us a number between 0.0 and 0. 9999999999999999 which isn't useful for most everyday uses. We're only interested in 6 possible numbers so we need to do some Math to get the result we need. We'll explore some basic Math you can do in Javascript and some operations you can perform on floating point numbers but first let's think about what we want to be able to do once our first recipe is complete. 

Ideally we'd like to be able to issue the following command at the in-game prompt and have a useful number returned...

/js dice.roll()

That is; calling dice.roll() should return a random number between 0 and 5 behaving much like a real world dice. If you try to run the above command now, it will fail because we haven't yet created this function. That's what we're going to do in the following steps.

Step 1: Launch SublimeText  
Step 2: Open ScriptCraft Directory
Step 3: Create a new Javascript file 
Step 4: The Code
Type the following code into the newly created file...

exports.roll = function( ) { 
  var result = Math.random();
  result = result * 6;
  result = Math.floor(result);
  return result;
};
Listing 1 dice.js

We'll talk about this code later. For now, type the code as you see it above.

Step 5: Save your work.
Step 6: Try it out

Once you've saved your work go back to Minecraft and at the in-game command prompt (remember, you can bring up the prompt by pressing the / key on your computer's keyboard) type the following...

/js refresh()

The refresh() function is a ScriptCraft function which reloads all of the javascript code. Bukkit has a /reload command which will reload all of the server plugins but for our purposes we only need to reload ScriptCraft to reload our Javascript. /js refresh() is like reload but it only reloads ScriptCraft and Javascript code.

The refresh() function is important, you should execute it every time you change your Javascript code because changes to your code won't be activated in the game until you do so.

Tip: While working on a Minecraft plugin, if the plugin isn't working as you expect, make sure you've run the /js refresh() function first.

Once you've executed the /js refresh() function, you can try out your new Javascript module. Type the following at the in-game prompt then hit ENTER...

/js var dice = require('dice')

The above statement loads your newly created dice.js module into the computer's memory. The require() function is how ScriptCraft loads Javascript modules. The resulting module is assigned to a variable called dice which can be used as follows...

/js dice.roll()

A random number between 0 and 5 should be displayed. Try running the above command a couple of times. Each time you should see a different number returned. Remember, you can run the previous command quickly by typing / then pressing the UP Arrow key.

Troubleshooting: If you don't see a number or if the /js var dice = require('dice') command didn't work (you saw an error), take a look at the Server console window to see what kind of error occurred. More than likely there was a typing error when entering the code. Double-check the code to make sure it's exactly the same as the code in Listing 1 dice.js


### Code Breakdown
Let's look at the code we've just added to Minecraft. The code is reprinted below, this time with line numbers...

1.	exports.roll = function( ) { 
2.	  var result = Math.random();
3.	  result = result * 6;
4.	  result = Math.floor(result);
5.	  return result;
6.	};

A Javascript module is a file with one or more related functions. In the above file is one single function called roll. We let others use functions by exporting them. We'll take a closer look at the exports object and modules in later recipes, for now let's look at the function body (lines 2 through 5). 



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

	var input = require('input');
	function onGuess( guess, repeat ) {
      if (guess == 'quit'){
        return;
      }
      guess = parseInt(guess);
      if (+guess === number){
        sender.sendMessage('Correct!');
      } else { 
	    repeat()
      }
    };
	exports.numberGuess = function( sender ) { 
      var number = Math.ceil(Math.random() * 10);
      input( sender, 'Pick a number between 1 and 10', onGuess);
	};
    

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
 
