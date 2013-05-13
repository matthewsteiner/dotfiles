# dotfiles

### Requirements
* [Fresh](http://freshshell.com/), Keep your dotfiles fresh.

### Optional Requirements
* [virtualenv](http://www.virtualenv.org/), A tool to create isolated Python environments
* [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/), A set of extensions to virtualenv
* [Slate](https://github.com/jigish/slate), A window management application

### Usage

Clone the repository

    git clone git@github.com:rowofpixels/dotfiles.git ~/.dotfiles

Symlink some configuration

    ln ~/.dotfiles/.freshrc ~/.freshrc
    ln ~/.dotfiles/.slate.js ~/.slate.js # Only needed if slate is installed

Run fresh

    fresh update
