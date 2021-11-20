HOW TO RUN

This was written with python3. I haven't tried in python2, but no guarantee it'll work.

A base python install won't quite work with this. You'll also need cairo and PIL. You can easily get them with pip. If you don't have already have pip, you can get it easily via python:

python -m ensurepip --upgrade

Then grab the packages:

pip install cairosvg
pip install pillow

Cairo is missing a dll in Windows, unfortunately. The easiest way to deal with it is to install unicode (https://sk1project.net/uc2/download/). Then update the os.environ['path'] line to

os.environ['path'] += r';C:\Program Files\UniConvertor-2.0rc5\dlls'

or wherever it downloaded

HOW TO WRITE RULES

The rules.txt file contains one or more lines, each with a rule for a different monster type. Here is a sample rule:

base/crab-base.svg clothes:240,500 eyes:0,0 leftHand:550,0 rightHand:0,0 mouth:0,200

This shows a base image type, followed by a set of accessories.

An accessory is composed of a category and a location in the base image, looking like "<category>:<x_offset>,<y_offset>".

The choice for a given accessory will be offset by the location value provided in the rule. (0,0) represents the top left of the screen. For example, a leftHand item will be offset by (550,0), placing it toward the top right of the crab.

Each generated image starts with the base image, and overlays one choice from each accessory category--each crab will get one set of clothes, one set of eyes, a left hand item, a right hand item, and a mouth.

Every possible image for each rule will be generated.