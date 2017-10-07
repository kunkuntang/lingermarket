window.initImgArray = function(imgArr, startIdx, endIdx, keepArr) {
    var i = 0;
    if (!keepArr) {
        imgArr = []
    }
    for(var i = startIdx; i <= endIdx; i++) {
        imgArr.push(i)
    }
    return imgArr
}

window.insertImg = function(parent, imgData, col) {
    col = col || 4;
    category = window.location.pathname.split('/').pop();
    if(imgData instanceof Array) {
        imgData.forEach(function(imgIdx) {
            var imgDiv =$('<div/>')
            imgDiv.addClass(category + ' imgCon col-sm-' + col)
            var img = $('<img/>')
            img.addClass('img-responsive')
            img.attr('src', '/img/production/' + category + '/LR-' + imgIdx + '.jpg')
            imgDiv.append(img)
            parent.append(imgDiv)
        })
    } else {
        console.error('insertImg must past a array arg')
    }
    
}

$(function() {
    console.log('is pc: ' + IsPC())
    if (IsPC()) {
        $('#production').on('mouseover', function() {
            $(this).addClass('open');
            $(this).find('.dropdown-toggle').attr('aria-expanded', 'true')
        })
    
        $('#production').on('mouseout', function() {
            $(this).removeClass('open');
            $(this).find('.dropdown-toggle').attr('aria-expanded', 'false')
        })
    }
})

function IsPC() {  
    var userAgentInfo = navigator.userAgent;  
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
}  