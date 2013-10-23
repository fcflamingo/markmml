require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        stellar: '../bower_components/jquery.stellar/jquery.stellar',
        tooltip: '../bower_components/sass-bootstrap/js/bootstrap-tooltip',
        easel: 'vendor/EaselJS-master/lib/easeljs-0.7.0.min',
        preload: 'vendor/PreloadJS-master/lib/preloadjs-0.4.0.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        stellar: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        tooltip: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        easel: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        preload: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }

});

require(['app', 'jquery', 'bootstrap', 'stellar', 'tooltip', 'easel', 'preload'], function (app, $) {
    'use strict';

    $(document).scroll(function() {

        var top = $(document).scrollTop();

        if (top > 600) {
            $('.header-container').removeClass('fadeOut');
            $('.header-container').addClass('slideRight', 1000);

        }

        else {
            $('.header-container').addClass('fadeOut');

        }

    });

    //--------------------------------------
    //ORBITING CIRCLES FUNCTIONS
    //--------------------------------------

    $(document).ready(function(){
        var CENTER_X = 450;
        var CENTER_Y = 275;
        var numCircles = 9;
        var circleArray = new Array();
        var lines;
        var stage = new createjs.Stage("canvas");
        var queue = new createjs.LoadQueue(false);
        var circleContainer, lineContainer;
        var imgArray = ["one","two","three","four","five","six","seven","eight","nine"];
        queue.addEventListener("complete", handleComplete);
        queue.loadManifest([{id:"one", src:"../images/one.png"},
            {id:"two", src:"../images/one.png"},
            {id:"three", src:"../images/one.png"},
            {id:"four", src:"../images/one.png"},
            {id:"five", src:"../images/one.png"},
            {id:"six", src:"../images/one.png"},
            {id:"seven", src:"../images/one.png"},
            {id:"eight", src:"../images/one.png"},
            {id:"nine", src:"../images/one.png"}
        ]);

        function handleComplete(event){
            instantiateCircles();
            instantiateLines();
            addContainers();
        }

        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.setFPS(50);

        function handleTick(){
            orbitCircles();
            updateLines();
            stage.update();
        }
        function instantiateCircles(){
            circleContainer = new createjs.Container();
            for(var i = 0; i<numCircles; i++){
                var temp = new Circle(new createjs.Bitmap(queue.getResult(imgArray[i])));
                circleContainer.addChild(temp.img);
                circleArray[i] = temp;
            }
        }
        function instantiateLines(){
            lineContainer = new createjs.Container();
            lines = new createjs.Shape();
            lines.alpha = 0.6;
            lineContainer.addChild(lines);
        }
        function addContainers(){
            stage.addChild(lineContainer);
            stage.addChild(circleContainer);
        }
        function Circle(bmp){
            var dir = Math.round(Math.random()*1);
            if(dir==0){this.direction = -1;}
            if(dir==1){this.direction = 1;}
            this.img = bmp;
            this.img.scaleX = Math.random()*0.3+0.1;
            this.img.scaleY = this.img.scaleX;
            this.offset = (this.img.getBounds().width*this.img.scaleX)/2;
            this.r = Math.random()*120+130;
            var ang = Math.random()*360;
            this.angle = ang;
            var radians = ang * Math.PI/180;
            this.rads = radians;
            var xo = this.r*Math.cos(radians);
            var yo = this.r*Math.sin(radians);
            this.img.x = CENTER_X + xo - this.offset;
            this.img.y = CENTER_Y + yo - this.offset;

            this.speedMultiplier = (.6-this.img.scaleX)*(1-Math.random()*0.7);
        }
        function orbitCircles(){
            var temp;
            for(var i=0;i<circleArray.length;i++){
                temp = circleArray[i];
                temp.angle += (  0.1 / ((250/temp.r)/2)  ) * (temp.speedMultiplier/2.5);
                temp.rads = temp.angle * Math.PI/180;
                var xo = temp.r*Math.cos(temp.rads*temp.direction);
                var yo = temp.r*Math.sin(temp.rads*temp.direction);
                temp.img.x = CENTER_X + xo - temp.offset;
                temp.img.y = CENTER_Y + yo - temp.offset;
            }
        }
        function updateLines(){
            lines.graphics.clear();
            lines.graphics.setStrokeStyle(2).beginStroke("white");
            for(var i = 0; i<numCircles; i++){
                var temp = circleArray[i];
                lines.graphics.moveTo(temp.img.x+temp.offset, temp.img.y+temp.offset);
                var temp2 = circleArray[(i+1)%numCircles];
                lines.graphics.lineTo(temp2.img.x+temp2.offset, temp2.img.y+temp2.offset);
                //var temp3 = circleArray[(i+2)%numCircles];
                //lines.graphics.moveTo(temp.img.x+temp.offset, temp.img.y+temp.offset);
                //lines.graphics.lineTo(temp3.img.x+temp3.offset, temp3.img.y+temp3.offset);
                lines.graphics.moveTo(temp.img.x+temp.offset, temp.img.y+temp.offset);
                lines.graphics.lineTo(450,300);
            }
            lines.shadow = new createjs.Shadow("#505050",0,0,3);
        }
    });

    //END OF ORBITING CIRCLES FUNCTIONS

    $(function() {
        $('[data-toggle=tooltip]').tooltip();
    });

    $("ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);

        // edit: Opera and IE requires the "html" elm. animated
    });

    $(".logo-nav").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);

        // edit: Opera and IE requires the "html" elm. animated
    });

    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});



