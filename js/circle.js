/*
    25/11/2018 :D
    update 10/12019
 */

{//Mousve Event
    temp = false
    function MouseDown(e) {
        temp = true;
        document.getElementById("outside").style.cursor = "-webkit-grabbing"
    }
    function MouseUp(e) {
        temp = false;
        document.getElementById("outside").style.cursor = "-webkit-grab"
    }
    function MouseMove(e) {
        if (temp === true) {
            x = e.pageX;
            y = e.pageY;

            var sw = document.getElementById("offset-sw");
            topsw = sw.offsetTop;
            leftsw = sw.offsetLeft;

            var sw = document.getElementById("aligncenter-circle");
            topAC = sw.offsetTop;
            leftAC = sw.offsetLeft;

            var outside = document.getElementById("outside");
            rXoutside = outside.clientHeight / 2;
            rYoutside = outside.clientWidth / 2;

            var oc = document.getElementById("offset-circle");
            leftoc = oc.offsetLeft;
            topoc = oc.offsetTop;

            // tâm id = inside
            inX = rXoutside + leftoc + leftAC - 15;
            inY = topsw + topoc + rYoutside;

            r = Math.sqrt(Math.pow((x - inX), 2) + Math.pow((y - inY), 2));

            if (97 < r) {
                r = 100;
                phamvi = " Toàn khu vực"
            }
            if (100 > r && r > 88) {
                phamvi = " nhỏ hơn 20 Km"
            }
            if (88 > r && r > 64) {
                phamvi = "  nhỏ hơn  10 Km"
                if (88 >= r && r > 85) {
                    r = 88;
                }
            }
            if (74 >= r && r > 58) {
                phamvi = " nhỏ hơn  7 Km"
                if (74 >= r && r > 71) {
                    r = 74;
                }
            }
            if (58 >= r && r > 32) {
                phamvi = " nhỏ hơn 5 Km"
                if (58 >= r && r > 54) {
                    r = 58;
                }
            }
            if (42 >= r && r > 26) {
                phamvi = " nhỏ hơn 3 Km"
                if (42 >= r && r > 38) {
                    r = 42;
                }
            }
            if (26 >= r && r > 10) {
                phamvi = " nhỏ hơn 2 Km"
                if (26 >= r && r > 22) {
                    r = 26;
                }
            }
            if (r <= 10) {
                r = 10;
                phamvi = " nhỏ hơn 1 Km"
            }

            var inside = document.getElementById("inside");
            inside.style.margin = rXoutside + 1 - r + "px";
            inside.style.height = 2 * r + "px";
            inside.style.width = 2 * r + "px";

            coor = "Phạm vi <br>" + phamvi;
            document.getElementById("range").innerHTML = coor
        }
    }
}

{//Touch Event
    temptouch = false
    function TouchStart(e) {
        temptouch = true;
        e.preventDefault();
    }
    function TouchEnd(e) {
        temptouch = false;
    }
    function TouchMove(e) {
        if (temptouch === true) {
            var xx = event.touches[0].pageX;
            var yy = event.touches[0].pageY;

            var sw = document.getElementById("offset-sw");
            topsw = sw.offsetTop;
            leftsw = sw.offsetLeft;

            var sw = document.getElementById("aligncenter-circle");
            topAC = sw.offsetTop;
            leftAC = sw.offsetLeft;

            var outside = document.getElementById("outside");
            rXoutside = outside.clientHeight / 2;
            rYoutside = outside.clientWidth / 2;

            var oc = document.getElementById("offset-circle");
            leftoc = oc.offsetLeft;
            topoc = oc.offsetTop;

            // tâm id = inside
            inX = rXoutside + leftoc + leftAC - 15;
            inY = topsw + topoc + rYoutside;

            r = Math.sqrt(Math.pow((xx - inX), 2) + Math.pow((yy - inY), 2));

            if (97 < r) {
                r = 100;
                phamvi = " Toàn khu vực"
            }
            if (100 >= r && r > 88) {
                phamvi = " nhỏ hơn 20 Km"
            }
            if (88 > r && r > 64) {
                phamvi = "  nhỏ hơn  10 Km"
                if (88 >= r && r > 85) {
                    r = 88;
                }
            }
            if (74 >= r && r > 58) {
                phamvi = " nhỏ hơn  7 Km"
                if (74 >= r && r > 71) {
                    r = 74;
                }
            }
            if (58 >= r && r > 32) {
                phamvi = " nhỏ hơn 5 Km"
                if (58 >= r && r > 54) {
                    r = 58;
                }
            }
            if (42 >= r && r > 26) {
                phamvi = " nhỏ hơn 3 Km"
                if (42 >= r && r > 38) {
                    r = 42;
                }
            }
            if (26 >= r && r > 10) {
                phamvi = " nhỏ hơn 2 Km"
                if (26 >= r && r > 22) {
                    r = 26;
                }
            }
            if (r <= 10) {
                r = 10;
                phamvi = " nhỏ hơn 1 Km"
            }

            var inside = document.getElementById("inside");
            inside.style.margin = rXoutside + 1 - r + "px";
            inside.style.height = 2 * r + "px";
            inside.style.width = 2 * r + "px";

            coor = "Phạm vi <br>" + phamvi;
            document.getElementById("range").innerHTML = coor
        }
    }
}
