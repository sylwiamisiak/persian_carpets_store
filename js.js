let now = new Date();
    console.log ( now.getDay() );

    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
       ];

    console.log ( week [ now.getDay() ]);
      let day = [
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
       ];

    console.log ( day [ now.getDay() ]);

    let Month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
       ];

    console.log ( Month [ now.getMonth() ]);
    result.innerHTML =  "Hello, today is" + '<br>' + week [ now.getDay() ] + ',' + ' ' + day  [ now.getDay() ] + ' ' + Month  [ now.getMonth() ] + ' ' + "2020" ;




        var video = document.getElementById('myvideo'), fraction = 0.8;

            function checkScroll() {
                var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
                b = y + h, //bottom
                visibleX, visibleY, visible;

                visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
                visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

                visible = visibleX * visibleY / (w * h);

                if (visible > fraction) {
                    video.play();
                } else {
                    video.pause();
                }
            }

            checkScroll();
            window.addEventListener('scroll', checkScroll, false);
            window.addEventListener('resize', checkScroll, false);



        var carpets = [
    "History & Use" + '<br>' + "Originally Persian carpets were used by nomadic people for private use as floor coverings, blankets or wall decorations. In trade, the carpets were made as decorative elements for palaces, mosques and houses of respected citizens of the old Persian Empire. This way they also found their way to european royal families and wealthy classes of the population who could afford a genuine Persian carpet." + '<p>' + '<br>' +

    "Knots" + '<br>' + "Depending on the pattern and desired fineness, two types of knots are used: the symmetrical and the asymmetrical knot. Asymmetrically knotted carpets mainly depict figures and floral elements, while the Giordes knot is mostly used for geometric patterns." + '<p>' + '<br>' +

    "Colours" + '<br>' + "To achieve the wonderful patterns of Persian carpets, different coloured yarns are needed. These can be dyed by hand and with natural or synthetic pigments. Again, natural dyes are more valuable. Probably the best known natural colour and usually the dominating colour in Persian carpets is madder red, which is obtained from the so-called dyer madder, which has its area of distribution in the Middle East and the eastern Mediterranean. In addition, blue is extracted from the indigo plant, which is now common as the basic colour of jeans, and yellow is often extracted from chamomile. Almost all nuances of the entire colour spectrum can be produced by mixing colours." + '<p>' + '<br>' +

    "Patterns" + '<br>' + "Persian carpets can show the widest variety of patterns and are often characterized by the place of origin. Often there is a medallion in the middle, which builds up the carpet from the centre. However, a major part is often left to the creativity of the weaver." + '<p>',
];

document.getElementById("Info").innerHTML = carpets;






























