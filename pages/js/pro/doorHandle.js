window.onload = function() {
    var imgData = []
    var imgNum = 21;
    var handleCon1 = $('#doorHandleCon .section1')

    imgData = initImgArray(imgData, 1911, 1918, true)
    imgData = initImgArray(imgData, 1920, 1925, true)
    imgData = initImgArray(imgData, 1933, 1970)
    insertImg(handleCon1, imgData, 6)
}

