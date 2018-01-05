const path = require('path')
const {
  fr,
  drawRects,
  rescaleRect
} = require('./commons')

const detector = new fr.FrontalFaceDetector()

const lenna = fr.loadImage('./data/Lenna.png')
const lennaFaceRects = detector.detect(lenna)
console.log('detection result for Lenna.png:')
console.log(lennaFaceRects)

const win1 = new fr.ImageWindow()
win1.setImage(lenna)
drawRects(win1, lennaFaceRects)

const got = fr.loadImage('./data/got.jpg')
// scale image up to detect smaller faces
const gotBig = fr.pyramidUp(got);
const gotFaceRects = detector.detect(gotBig)
console.log('detection result for got.jpg:')
console.log(gotFaceRects)

const win2 = new fr.ImageWindow()
win2.setImage(got)
drawRects(win2, gotFaceRects.map(rect => rescaleRect(rect, 0.5)))

fr.hitEnterToContinue()



