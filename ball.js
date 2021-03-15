// var ball = document.getElementById('circle');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("keydown", function(event){
    var ball = document.getElementById('circle');
    // const rect = ball.getBoundingClientRect();
    // console.log(ball.offsetLeft + 10);
    // console.log(document.documentElement.clientWidth);
    if( (ball.offsetLeft + 10) <= (window.innerWidth-150) && event.key == "d" && isInViewport(ball)){
        //var ball = document.getElementById('circle');
        ball.style.left = `${ball.offsetLeft + 10}px`;
    }else if((ball.offsetLeft - 10) >= 0 && event.key == "a" && isInViewport(ball)){
        //var ball = document.getElementById('circle');
        ball.style.left = `${ball.offsetLeft - 10}px`;
    }else if((ball.offsetTop - 10) >= 0 && event.key == "w" && isInViewport(ball)){
        //var ball = document.getElementById('circle');
        ball.style.top = `${ball.offsetTop - 10}px`;
    }else if((ball.offsetTop + 10) <= (window.innerHeight-150) && event.key == "s" && isInViewport(ball)){
        //var ball = document.getElementById('circle');
        ball.style.top = `${ball.offsetTop + 10}px`;
    }
});