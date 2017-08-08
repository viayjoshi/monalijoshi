// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    $(".meter > span").each(function() {
      $(this).animate({
          width: $(this).data("width")+'%' // or + "%" if fluid
        }, 1200);
    });
    $('a.portfolio-link').click(function(event){
        event.preventDefault();
        console.log($(event.target))
        var html=
                // '<h2>Project Title</h2>'+
                // '<hr class="star-primary">'+
                '<img src="'+$(event.target).parents('.portfolio-link').find('img').attr('src')+'" class="img-responsive img-centered" alt="">'+
                '<p>'+$(event.target).parents('.portfolio-link').find('p').text()+'</p>'+
                // '<ul class="list-inline item-details">'+
                // '<li>Client:'+
                // '<strong><a href="#">Start Bootstrap</a>'+
                // '</strong>'+
                // '</li>'+
                // '<li>Date:'+
                // '<strong><a href="#">April 2014</a>'+
                // '</strong>'+
                // '</li>'+
                // '<li>Service:'+
                // '<strong><a href="#">Web Development</a>'+
                // '</strong>'+
                // '</li>'+
                // '</ul>'+
                '<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>';
        $('#portfolioModal1').modal('show');
        $('#portfolioModal1  .modal-body').empty().append(html);
    })
    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
    CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2a4451",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"                
                ]);
   
    var chart = new CanvasJS.Chart("chartContainer",
        {
            colorSet: "greenShades",
            dataPointWidth: 20,
            title:{
                text: "Skills"
            },
            toolTip:{   
                content: "{text}: {y}"      
            },
             axisX:{
                gridColor: "white",
                labelAngle: -1    
              },
              axisY:{        
                gridColor: "white"
              },
            data: [
            {        
                type: "column",
                dataPoints: [

                { x: 10, y: 71,text:'Graphics Design',label:'Graphics' ,indexLabelOrientation: "vertical", indexLabelPlacement: "inside"},
                { x: 20, y: 55,text:'UI Design',label:'UI'},
                { x: 30, y: 50,text:'Web Template Design',label:'Web Template'},
                { x: 40, y: 65,text:'HTML & CSS',label:'HTML & CSS' },
                { x: 50, y: 95,text:'Logo Design',label:'Logo Design' },
                { x: 60, y: 68,text:'Flash Animation',label:'Flash Animation' },
                { x: 70, y: 28,text:'Print Media Design',label:'Print Media Design' },
                { x: 80, y: 34 ,text:'Socil Media Design',label:'Socil Media Design'}
                ]
            }
            ]
        });

        chart.render();
        var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    

})(jQuery); // End of use strict
