$(function() {
    
    const ROOT_ELEMENT = $('body');
    const oLoader = new Loader('.loader-backdrop');
    let btnShowLoader;

    function init() {
        initDOMs();
        initEvents();
    }

    function initDOMs() {
        btnShowLoader = ROOT_ELEMENT.find('button.k-btn');
    }

    function initEvents() {
        btnShowLoader.on('click', () => {
            oLoader.show();
        });

        oLoader.loader.on('click', () => {
            oLoader.hide();
        });
    }

    init();
});