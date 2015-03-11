#Houston Give Camp 2015 [![Build Status](https://travis-ci.org/daneSchilling/HoustonGiveCamp.svg?branch=master)](https://travis-ci.org/daneSchilling/HoustonGiveCamp)

##Instruction

### Setting up node on Mac OS X
1. Install [Homebrew](http://brew.sh/)
2. Run ```brew install node``` to install node via Homebrew

### Setting up node on Windows
1. Install Node from [Node Offcial Website](http://nodejs.org)

#### Once node is setup on your machine, open terminal or command prompt under the project folder as administrator
1. Run ```npm install -g bower gulp``` to install bower and gulp
2. Run ```npm install ``` and ```bower install``` under your repository folder
>**Note**
>If ```bower install``` runs into issue for: 'Bower: ENOGIT git is not installed or not in the PATH', do the following:
> - Open command prompt as admin
> - Type 'PATH' to retrieve the current environment variable path. Store this value for backup.
> - Next, append to the path the Git bin directory and the Git cmd directory.
> - Type 'set PATH=%PATH%;< Git bin path >;< Git cmd path >;
> - Ex: ```set PATH=%PATH%;C:\Program Files (x86)\Git\bin;C:\Program Files (x86)\Git\cmd;```
> - Reopen the command prompt to see the updated changes and to rerun the bower install command.

3. Run ```gulp serve``` to preview and watch for changes
4. Run ```gulp``` to build your webapp for production