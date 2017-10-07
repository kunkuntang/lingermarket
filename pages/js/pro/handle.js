window.onload = function() {
    var imgData = []
    var handleCon1 = $('#handleCon .section1')
    var handleCon4 = $('#handleCon .section4')
    var handleCon5 = $('#handleCon .section5')
    var handleCon6 = $('#handleCon .section6')

    imgData = initImgArray(imgData, 101, 127, true)
    imgData = initImgArray(imgData, 201, 205, true)
    imgData = initImgArray(imgData, 301, 309, true)
    insertImg(handleCon1, imgData)

    imgData = initImgArray(imgData, 421, 430)
    insertImg(handleCon4, imgData, 3)

    imgData = initImgArray(imgData, 601, 607)
    insertImg(handleCon5, imgData, 6)

    imgData = initImgArray(imgData, 701, 708)
    insertImg(handleCon5, imgData, 6)
}