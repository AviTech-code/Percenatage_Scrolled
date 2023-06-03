let scrollScore = document.querySelector('h2');


window.addEventListener('scroll', (e) => {
    if (e) {
        //  count += 1;
        let pos = document.documentElement.scrollTop;
        console.log(pos + ' p')
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log(document.documentElement.scrollHeight + ' h')
        console.log(document.documentElement.clientHeight + ' k')
        let scrollValue = Math.round(pos * 100 / calcHeight);
        //console.log(window)
        scrollScore.innerHTML = scrollValue + ' % Scrolled';

    }

})