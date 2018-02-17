var storyContent = ﻿{"inkVersion":17,"root":[["^Aboard the submarine <i>Le Plongeur</i> as it traverses the underwater city. <i>Le Plongeur</i>'s powerful searchlight scans the submerged buildings and streets.","\n","^ADA POISSON, captain of <i>Le Plongeur</i> barks instructions in French to a skeleton crew as you don your DIVING SUIT.","\n",["ev","str","^More","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n",{"->":"0.g-0"},{"#f":7}]}],{"g-0":["^GRETA: OK. This is our last, best hope to supply the climate refugee camp. So get down there and load up as many waterproof supplies as you can find. Good luck!","\n","^You step out through the airlock, and into the submerged city ...","\n",["ev","str","^More","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"pike_and_grove"},"\n",{"#f":7}]}],{"#f":7}]}],"done",{"pike_and_grove":["^You are standing on the corner of Pike and Grove. Pike Street runs north/south and Grove Avenue runs east/west. Anchored above you is <i>Le Plongeur</i>.","\n",["G>","ev",{"CNT?":"grocery_store_inside"},"!","/ev",[{"->":".^.b","c":true},{"b":["^Across the street is a grocery store.",{"->":".^.^.^.6"},null]}],"nop","G<",null],"\n",["ev","str","^Return to the submarine.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ You hail the submarine and indicate that you're ready to return.","\n","\n",{"->":"try_return_sub"},{"#f":7}]}],["ev","str","^Swim east on Grove.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ You swim east on Grove.","\n","\n",{"->":"bell_and_grove"},{"#f":7}]}],["ev","str","^Swim north on Pike.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ You swim north on Pike.","\n","\n",{"->":"north_pike"},{"#f":7}]}],["ev","str","^Search the grocery store.","/str",{"CNT?":"grocery_store_inside"},"!","/ev",{"*":".^.c","flg":5},{"c":["^ You search the grocery store.","\n","\n",{"->":"grocery_store"},{"#f":7}]}],{"#f":3}],"north_pike":["^You are standing at the north end of Pike Street.","\n",["G>","ev",{"CNT?":"nice_house"},"!","/ev",[{"->":".^.b","c":true},{"b":["^There is a very nice house seemingly untouched by looters.",{"->":".^.^.^.6"},null]}],"nop","G<",null],"\n",["ev","str","^Swim south on Pike.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ You swim west on Grove.","\n","\n",{"->":"pike_and_grove"},{"#f":7}]}],["ev","str","^Search the nice house.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ You search the nice house.","\n","\n",{"->":"nice_house"},{"#f":7}]}],{"#f":3}],"nice_house":[["G>",["ev",{"VAR?":"have_sledgehammer"},{"CNT?":"house_inside"},"!","&&","/ev",{"->":".^.b","c":true},{"b":["^You smash down the front door of the house.","\n",{"->":"house_inside"},{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"have_sledgehammer"},"!","/ev",{"->":".^.b","c":true},{"b":["^All the doors are locked, find a way to break in!","\n",{"->":"north_pike"},{"->":".^.^.^.4"},null]}],[{"->":".^.b"},{"b":["^You have cleaned the house of all supplies.","\n",{"->":"north_pike"},{"->":".^.^.^.4"},null]}],"nop","G<",null],"\n",{"#f":3}],"house_inside":["ev",{"VAR?":"supply_count"},10,"+","/ev",{"temp=":"supply_count","re":true},"^You find a huge cache of supplies completely untouched in an underground cellar! Jackpot!","\n",{"->":"north_pike"},{"#f":3}],"grocery_store":[["G>",["ev",{"VAR?":"have_sledgehammer"},"/ev",{"->":".^.b","c":true},{"b":["^You smash through the glass doors with the sledgehammer.","\n",{"->":"grocery_store_inside"},{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["^The grocery store is all locked up. If only you had a way of breaking the door!","\n",{"->":"pike_and_grove"},{"->":".^.^.^.3"},null]}],"nop","G<",null],"\n",{"#f":3}],"grocery_store_inside":["ev",{"VAR?":"supply_count"},1,"+","/ev",{"temp=":"supply_count","re":true},"^The grocery store has already been looted, probably as the flood waters approached. You manage to salvage a few cans of beans.","\n",{"->":"pike_and_grove"},{"#f":3}],"bell_and_grove":["^You are standing on the corner of Bell and Grove.","\n",["G>","ev",{"CNT?":"hardware_store"},"!","/ev",[{"->":".^.b","c":true},{"b":["^There's a hardware store here.",{"->":".^.^.^.6"},null]}],"nop","G<",null],"\n",["ev","str","^Swim west on Grove.","/str","/ev",{"*":".^.c","flg":4},{"c":["^ You swim west on Grove.","\n","\n",{"->":"pike_and_grove"},{"#f":7}]}],["ev","str","^Search the hardware store.","/str","/ev",{"*":".^.c","flg":20},{"c":["^ You search the hardware store.","\n","\n",{"->":"hardware_store"},{"#f":7}]}],{"#f":3}],"hardware_store":["ev",{"VAR?":"supply_count"},1,"+","/ev",{"temp=":"supply_count","re":true},"ev",1,"/ev",{"temp=":"have_sledgehammer","re":true},"^You find a first aid kit. That'll come in handy!","\n","^You also found a sledgehammer! Nice!","\n",{"->":"bell_and_grove"},{"#f":3}],"try_return_sub":[["G>",["ev",{"VAR?":"supply_count"},4,">=","/ev",{"->":".^.b","c":true},{"b":[{"->":"ending"},{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["^You don't have enough supplies yet!","\n",{"->":"pike_and_grove"},{"->":".^.^.^.3"},null]}],"nop","G<",null],"\n",{"#f":3}],"ending":["^GRETA: You did it! The refugees are saved ... for now.","\n","end",{"#f":3}],"global decl":["ev",0,{"VAR=":"supply_count"},0,{"VAR=":"have_sledgehammer"},"/ev","end",null],"#f":3}],"listDefs":{}};