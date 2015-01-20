# 404-competition

_If you need help with any of the following steps, feel free to send us an email at_ webkom@!

Read more about the competition on [webkom.abakus.no/404-competition](http://webkom.abakus.no/404-competition)

## What do I need?
The easiest way to participate is to make sure [`git`](https://help.github.com/articles/set-up-git/), `make`
and [`cookiecutter`](https://cookiecutter.readthedocs.org/en/latest/) is installed, and follow 'How to participate'.
If you are more of a power user, you could do whatever you like, as long as the directory structure is the
same as the supplied default project, and you can run `make setup`, and get the final  `.html` file in 
`/entries/<username>/dist/<username>.html`.

## How to participate
1. Fork repo and clone it
2. Run `make new` and work in *entries/<abakus_username>*
3. Commit your awesome game and create a [pull-request](https://github.com/webkom/404-competition/compare)

## Rules :notebook:
Your game must be in one file on the path 
`entries/<abakus_username>/dist/<abakus_username>.html` after the `make setup` command is ran.
We have created a gruntfile in the template project in order to make it easy to concat the final
html file. There can be no dependencies to external files, thus css and js needs to be inline and 
image content must be base-64 encoded and inline.

We included [phaser](http://phaser.io/) in the template project, but you are free to use whatever
framework you like. The only requirement is that you get it into one html file.

### Submodules
It is possible to use submodules and put your code in your own repo.
The requirements above still apply.

### Right to use
By participating you give Abakus Linjeforening the permission
to use and redistribute your game.

Most importantly: **Have fun and learn something new** :bowtie:
