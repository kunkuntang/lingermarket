window.onload = function() {
    var imgData = []
    var imgNum = 21;
    var handleCon1 = $('#handleCon .section1')
    var handleCon4 = $('#handleCon .section4')

    for(var i = 101; i <= 127; i++) {
        imgData.push(i)
    }

    for(var i = 201; i <= 205; i++) {
        imgData.push(i)
    }

    for(var i = 301; i <= 309; i++) {
        imgData.push(i)
    }

    insertImg(handleCon1, imgData)
    imgData = []
    for(var i = 421; i <= 430; i++) {
        imgData.push(i)
    }
    insertImg(handleCon4, imgData, 3)
}

function insertImg(parent, imgData, col) {
    col = col || 4;
    console.log(imgData)
    if(imgData instanceof Array) {
        imgData.forEach(function(imgIdx) {
            var imgDiv =$('<div/>')
            imgDiv.addClass('handle col-sm-' + col)
            var img = $('<img/>')
            img.addClass('img-responsive')
            img.attr('src', '/img/production/handle/LR-' + imgIdx + '.jpg')
            imgDiv.append(img)
            parent.append(imgDiv)
        })
    } else {
        console.error('insertImg must past a array arg')
    }
    
}