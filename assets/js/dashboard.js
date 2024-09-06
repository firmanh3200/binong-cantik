 
    
    $(function() {
        "use strict";
        // ============================================================== 
        // Perkembangan penduduk jenis kelamin
        // ============================================================== 

        new Chartist.Bar('.ct-chart-penduduk', {
            labels: ['Sem1 2017', 'Sem2 2017', 'Sem1 2018', 'Sem2 2018',
                    'Sem1 2019', 'Sem2 2019', 'Sem1 2020', 'Sem2 2020',
                    'Sem1 2021', 'Sem2 2021', 'Sem1 2022', 'Sem2 2022',
                    'Sem1 2023', 'Sem2 2023'],
            series: [
                [8972, 9041, 9329, 9337, 9423, 9445, 9482, 9513, 9569, 9613, 9606, 9632, 9645, 9705],
                [8806, 8867, 9155, 9201, 9287, 9272, 9322, 9343, 9449, 9474, 9445, 9498, 9523, 9569]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value) + ' Jiwa';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 40px'
                });
            }
        });
    });
    
    $(function() {
        "use strict";
        // ============================================================== 
        // Perkembangan keluarga
        // ============================================================== 

        new Chartist.Bar('.ct-chart-keluarga', {
            labels: ['Sem1 2017', 'Sem2 2017', 'Sem1 2018', 'Sem2 2018',
                    'Sem1 2019', 'Sem2 2019', 'Sem1 2020', 'Sem2 2020',
                    'Sem1 2021', 'Sem2 2021', 'Sem1 2022', 'Sem2 2022',
                    'Sem1 2023'],
            series: [
                [5555, 5732, 5812, 5911, 6024, 6082, 6162, 6031, 6096, 5911, 6189, 6212, 6243]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value) + ' KK';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 40px'
                });
            }
        });
    });




    // ============================================================== 
    // Penduduk Jenis Kelamin
    // ============================================================== 
    var chart = new Chartist.Pie('.ct-chart-category', {
        series: [9705, 9569],
        labels: ['Laki-laki', 'Perempuan']
    }, {
        donut: true,
        showLabel: false,
        donutWidth: 40

    });


    chart.on('draw', function(data) {
        if (data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1000,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                    fill: 'freeze'
                }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    
    // ============================================================== 
    // Penduduk Cards
    // ============================================================== 
    $("#sparkline-penduduk").sparkline([17778, 17908, 18484, 18538, 18710, 18717, 18804, 18856, 19018, 19087, 19051, 19130, 19168, 19274], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#5969ff',
        fillColor: '#dbdeff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });



    $("#sparkline-laki").sparkline([8972, 9041, 9329, 9337, 9423, 9445, 9482, 9513, 9569, 9613, 9606, 9632, 9645, 9705], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#ff407b',
        fillColor: '#ffdbe6',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });



    $("#sparkline-perempuan").sparkline([8806, 8867, 9155, 9201, 9287, 9272, 9322, 9343, 9449, 9474, 9445, 9498, 9523, 9569], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#25d5f2',
        fillColor: '#dffaff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });



    $("#sparkline-keluarga").sparkline([5555, 5732, 5812, 5911, 6024, 6082, 6162, 6031, 6096, 5911, 6189, 6212, 6243], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#fec957',
        fillColor: '#fff2d5',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true,
    });





    // ============================================================== 
    // Total Revenue
    // ============================================================== 
    Morris.Bar({
        element: 'keluarga_bar',
        behaveLikeLine: true,
        data: [
            { x: 'Sem1 2017', y: 5555, },
            { x: 'Sem2 2017', y: 5732, },
            { x: 'Sem1 2018', y: 5812, },
            { x: 'Sem2 2018', y: 5911, },
            { x: 'Sem1 2019', y: 6024, },
            { x: 'Sem2 2019', y: 6082, },
            { x: 'Sem1 2020', y: 6162, },
            { x: 'Sem2 2020', y: 6031, },
            { x: 'Sem1 2021', y: 6096, },
            { x: 'Sem2 2021', y: 5911, },
            { x: 'Sem1 2022', y: 6189, },
            { x: 'Sem2 2022', y: 6212, },
            { x: 'Sem1 2023', y: 6243, }
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['KK'],
        lineColors: ['#5969ff'],
        resize: true

    });
    
    Morris.Bar({
        element: 'penduduk_bar',
        behaveLikeLine: true,
        data: [
            { x: 'Sem1 2017', y: 17778, },
            { x: 'Sem2 2017', y: 17908, },
            { x: 'Sem1 2018', y: 18484, },
            { x: 'Sem2 2018', y: 18538, },
            { x: 'Sem1 2019', y: 18710, },
            { x: 'Sem2 2019', y: 18717, },
            { x: 'Sem1 2020', y: 18804, },
            { x: 'Sem2 2020', y: 18856, },
            { x: 'Sem1 2021', y: 19018, },
            { x: 'Sem2 2021', y: 19087, },
            { x: 'Sem1 2022', y: 19051, },
            { x: 'Sem2 2022', y: 19130, },
            { x: 'Sem1 2023', y: 19168, },
            { x: 'Sem2 2023', y: 19274, }
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['Jiwa'],
        lineColors: ['#5969ff'],
        resize: true

    });
    
(function(window, document, $, undefined) {
    "use strict";
    $(function() {

        if ($('#morris_area').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Area({
                element: 'morris_area',
                behaveLikeLine: true,
                data: [
                    { x: '2011 Q1', y: 4, z: 3 },
                    { x: '2011 Q2', y: 2, z: 1 },
                    { x: '2011 Q3', y: 2, z: 3 },
                    { x: '2011 Q4', y: 4, z: 1 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['Y', 'Z'],
                 lineColors: ['#5969ff', '#ff407b'],
                   resize: true,
                   gridTextSize: '14px'

                
            });

        }




        if ($('#morris_line').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Line({
                element: 'morris_line',
                behaveLikeLine: true,
                data: [
                    { y: '2006', a: 10, b: 20 },
                    { y: '2007', a: 65, b: 45 },
                    { y: '2008', a: 50, b: 40 },
                    { y: '2009', a: 75, b: 65 },
                    { y: '2010', a: 50, b: 40 },
                    { y: '2011', a: 75, b: 65 },
                    { y: '2012', a: 100, b: 90 }
                ],

                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                   lineColors: ['#5969ff', '#ff407b'],
                     resize: true,
                        gridTextSize: '14px'
            });

        }

        if ($('#morris_bar').length) {
            Morris.Bar({
                element: 'morris_bar',
                data: [
                    { x: '2011 Q1', y: 0 },
                    { x: '2011 Q2', y: 1 },
                    { x: '2011 Q3', y: 2 },
                    { x: '2011 Q4', y: 3 },
                    { x: '2012 Q1', y: 4 },
                    { x: '2012 Q2', y: 5 },
                    { x: '2012 Q3', y: 6 },
                    { x: '2012 Q4', y: 7 },
                    { x: '2013 Q1', y: 8 }
                ],
                xkey: 'x',
                ykeys: ['y'],
                labels: ['Y'],
                   barColors: ['#5969ff'],
                     resize: true,
                        gridTextSize: '14px'

            });
        }


        if ($('#morris_stacked').length) {
            // Use Morris.Bar
            Morris.Bar({
                element: 'morris_stacked',
                data: [
                    { x: '2011 Q1', y: 3, z: 2, a: 3 },
                    { x: '2011 Q2', y: 2, z: null, a: 1 },
                    { x: '2011 Q3', y: 0, z: 2, a: 4 },
                    { x: '2011 Q4', y: 2, z: 4, a: 3 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                stacked: true,
                   barColors: ['#5969ff', '#ff407b', '#25d5f2'],
                     resize: true,
                        gridTextSize: '14px'
            });
        }


        if ($('#morris_udateing').length) {
            var nReloads = 0;

            function data(offset) {
                var ret = [];
                for (var x = 0; x <= 360; x += 10) {
                    var v = (offset + x) % 360;
                    ret.push({
                        x: x,
                        y: Math.sin(Math.PI * v / 180).toFixed(4),
                        z: Math.cos(Math.PI * v / 180).toFixed(4)
                    });
                }
                return ret;
            }
            var graph = Morris.Line({
                element: 'morris_udateing',
                data: data(0),
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['sin()', 'cos()'],
                parseTime: false,
                ymin: -1.0,
                ymax: 1.0,
                hideHover: true,
                lineColors: ['#5969ff', '#ff407b'],
                  resize: true
            });

            function update() {
                nReloads++;
                graph.setData(data(5 * nReloads));
                $('#reloadStatus').text(nReloads + ' reloads');
            }
            setInterval(update, 100);
        }


        if ($('#morris_usia').length) {
            Morris.Donut({
                element: 'morris_usia',
                data: [
                    { value: 1989, label: '7-12 Tahun' },
                    { value: 1000, label: '13-15 Tahun' },
                    { value: 839, label: '16-18 Tahun' },
                    { value: 1906, label: '19-24 Tahun' }
                ],
             
                labelColor: '#2e2f39',
                   gridTextSize: '14px',
                colors: [
                     "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750"
                               
                ],

                formatter: function(x) { return x + " Jiwa" },
                  resize: true
            });
        }
        
        if ($('#morris_kerja').length) {
            Morris.Donut({
                element: 'morris_kerja',
                data: [
                    { value: 18807, label: 'Islam' },
                    { value: 314, label: 'Kristen' },
                    { value: 124, label: 'Katholik' },                    
                    { value: 6, label: 'Hindu' },                    
                    { value: 23, label: 'Budha' }                    
                ],
             
                labelColor: '#2e2f39',
                   gridTextSize: '14px',
                colors: [
                     "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750",
                                "#fff740",
                                "#ffe730"
                               
                ],

                formatter: function(x) { return x + " Orang" },
                  resize: true
            });
        }








    });

})(window, document, window.jQuery);
