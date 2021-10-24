import itertools
import os
import uuid

os.environ['path'] += r';E:\Python\Python38\Lib\site-packages\cairosvg' # Hack to get cairosvg working on Windows, the dir is going to be wherever you put libcairo-2.dll
import cairosvg

from io import BytesIO
from PIL import Image

def generateImages(rule, combos):
   rule = rule.split(' ')
   base = rule[0]
   accessoryList = rule[1:]
   for combo in combos:
      out = BytesIO()
      cairosvg.svg2png(url='inputs/' + base, write_to=out)
      monster = Image.open(out)
      for idx, img in enumerate(combo):

         (accessory, offset) = accessoryList[idx].split(":")
         offset = [int(off) for off in offset.split(",")]

         out = BytesIO()
         cairosvg.svg2png(url='inputs/' + accessory + '/' + img, write_to=out)
         accessoryImg = Image.open(out)
         monster.paste(accessoryImg, offset, accessoryImg)
      monster.save('outputs/' + str(uuid.uuid4()) + '.png')

def generateSVGCombos(rule):
   rule = rule.split(' ')
   SVGCombos = []
   for category in rule[1:]:
      category = category.split(":")[0]
      SVGCombos.append(os.listdir('inputs/' + category))
   SVGCombos = itertools.product(*SVGCombos)
   return SVGCombos

def main():
   os.makedirs('outputs', exist_ok=True)
   with open('inputs/rules.txt') as rules:
      for rule in rules:
         SVGCombos = generateSVGCombos(rule)
         generateImages(rule, SVGCombos)


if __name__ == '__main__':
   main()