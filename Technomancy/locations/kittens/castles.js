({
    "unlocked": function () { return adventure_data.inventory_size > 25; },
    "go_again_text": "Dig Sand",
    "encounters": [
        ({
            "condition": function () { return adventure_data["logicat_points"] == undefined; },
            "types": [],
            "weight": 0,
            "title": "The Abandoned Kitten Colony",
            "run_encounter": function () {
                adventure_data["logicat_points"] = 0;
                adventure_data["logicat_level"] = 0;
                $("#events_content").html("You land on a strange planet. It seems to be covered in sandcastles as far as you can see. Dragons fly overhead, but you see no other forms of life. <br />");
                setTimeout(function () { return $("#events_content").append("Suddenly, a ... kitten? appears in front of you. At least you think it's a kitten - the head is upside down and it's spouting nonsense about how Statement A is true. <br />"); }, 2000);
                setTimeout(function () {
                    $("#events_content").append("<span class='clickable'>Okay?</span>");
                    $("#events_content > span").last().click(function () {
                        /* Enter them into logicat. */
                        $('#events').addClass('hidden');
                        $('#events_content').html('');
                        $('#character').addClass('hidden');
                        force_event(10);
                    });
                }, 5000);
            }
        }),
        ({
            "condition": function () { return true; },
            "types": [],
            "weight": 1,
            "title": "Continued exploration",
            "run_encounter": function () {
                $("#events_content").html("You continue to explore. <br />");
                if (Math.random() > .5) {
                    setTimeout(function () { return $("#events_content").append("Another one of those strange kittens appears. What do they want?<br />"); }, 1000);
                    setTimeout(function () {
                        $("#events_content").append("<span class='clickable'>Okay?</span>");
                        $("#events_content > span").last().click(function () {
                            /* Enter them into logicat. */
                            $('#events').addClass('hidden');
                            $('#events_content').html('');
                            $('#character').addClass('hidden');
                            force_event(10);
                        });
                    }, 3000);
                }
                else {
                    $("#events_content").append("You don't find anything notable. <br/>");
                    $("#events_content").append("<span class='clickable' onclick='start_adventure()'>Okay</span>");
                }
            }
        }),
    ],
    "connects_to": ["kittens/umbra"],
    "enter_cost": 5,
    "leave_cost": 4,
    "name": "Abandoned Colony",
});
//# sourceMappingURL=castles.js.map