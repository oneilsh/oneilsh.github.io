+++
banner = "images/network_banner.png"
categories = []
date = "2003-10-05"
description = ""
images = []
menu = ""
tags = ["Programming", "Class"]
title = "CS228, Network Programming"
nodateline = true
+++

Once upon a time, I knew how to use Unix sockets. 

<!--more-->

### Web Server

Supports binary files, ~user, http 0.9 and 1.0, and several other features. Other projects from this class (not shown) include a port scanner, file transfer utility, and chat program.

{{< expand "server.cc" >}}
{{< highlight c >}}
{{< readfile file="post/cs228/images/apache3/server.cc" >}}
{{< /highlight >}}
{{< /expand >}}


### Command Server

A little utility to run commands on a linux box via the web and see the results; 
limited to `fortune` and `echo`, as in `http://server:port/echo_hi_there`. 

{{< expand "server.cc" >}}
{{< highlight c >}}
{{< readfile file="post/cs228/images/fortunes/server.cc" >}}
{{< /highlight >}}
{{< /expand >}}
