var app = angular.module("discworldApp", ['ui']);

app.factory('Discworld', function() {
	var Discworld = {};
	Discworld = [
{
	image: "img/colour_magic.jpg",
	alt: "The Colour of Magic",
	title: "The Colour of Magic",
	description: "On a world supported on the back of a giant turtle (sex unknown), a gleeful, explosive, wickedly eccentric expedition sets out. There's an avaricious buy inept wizard, a naive tourist whose luggage moves on hundreds of dear little legs, dragons who only exist if you believe in them, and of course THE EDGE of the planet...",
	year: 1983,
	story: "Rincewind"
},
{
	image: "img/light_fantastic.jpg",
	alt: "The Light Fantastic",
	title: "The Light Fantastic",
	description: "In this novel, only one individual can save the world from a disastrous collision. Unfortunately, the hero happens to be the singularly inept wizard Rincewind, who was last seen falling off the edge of the world...",
	year: 1986,
	story: "Rincewind"
},
{
	image: "img/equal_rites.jpg",
	alt: "Equal Rites",
	title: "Equal Rites",
	description: "On Discworld, a dying wizard tries to pass on his powers to an eighth son of an eighth son, who is just at that moment being born. The fact that the son is actually a daughter is discovered just a little too late. The town witch insists on turning the baby into a perfectly normal witch, thus mending the magical damage of the wizard's mistake. But now the young girl will be forced to penetrate the inner sanctum of the Unseen University--and attempt to save the world with one well-placed kick in some enchanted shins! Reissue.",
	year: 1987,
	story: "The Witches"
},
{
	image: "img/mort.jpg",
	alt: "Mort",
	title: "Mort",
	description: "In this Discworld installment, Death comes to Mort with an offer he can't refuse -- especially since being, well, dead isn't compulsory. As Death's apprentice, he'll have free board and lodging, use of the company horse, and he won't need time off for family funerals. The position is everything Mort thought he'd ever wanted, until he discovers that this perfect job can be a killer on his love life.",
	year: 1987,
	story: "Death"
},
{
	image: "img/sourcery.jpg",
	alt: "Sourcery",
	title: "Sourcery",
	description: "When last seen, the singularly inept wizard Rincewind had fallen off the edge of the world. Now magically, he's turned up again, and this time he's brought the Luggage. \n But that's not all.... \n Once upon a time, there was an eighth son of an eighth son who was, of course, a wizard. As if that wasn't complicated enough, said wizard then had seven sons. And then he had an eighth son -- a wizard squared (that's all the math, really). Who of course, was a source of magic -- a sorcerer.",
	year: 1988,
	story: "Rincewind"
},
{
	image: "img/wyrd_sisters.jpg",
	alt: "Wyrd Sisters",
	title: "Wyrd Sisters",
	description: "Witches are not by nature gregarious, and they certainly don't have leaders. Granny Weatherwax was the most highly-regarded of the leaders they didn't have. But even she found that meddling in royal politics was a lot more difficult than certain playwrights would have you believe...",
	year: 1988,
	story: "The Witches"
},
{
	image: "img/pyramids.jpg",
	alt: "Pyramids",
	title: "Pyramids",
	description: "It's bad enough being new on the job, but Teppic hasn't a clue as to what a pharaoh is supposed to do. After all, he's been trained at Ankh-Morpork's famed assassins' school, across the sea from the Kingdom of the Sun. First, there's the monumental task of building a suitable resting place for Dad -- a pyramid to end all pyramids. Then there are the myriad administrative duties, such as dealing with mad priests, sacred crocodiles, and marching mummies. And to top it all off, the adolescent pharaoh discovers deceit, betrayal - not to mention a headstrong handmaiden - at the heart of his realm.",
	year: 1989,
	story: "Ancient Civilizations"
},
{
	image: "img/guards.jpg",
	alt: "Guards! Guards!",
	title: "Guards! Guards!",
	description: "Here there be dragons . . . and the denizens of Ankh-Morpork wish one huge firebreather would return from whence it came. Long believed extinct, a superb specimen of draco nobilis ('noble dragon' for those who don't understand italics) has appeared in Discworld's greatest city. Not only does this unwelcome visitor have a nasty habit of charbroiling everything in its path, in rather short order it is crowned King (it is a noble dragon, after all . . .). Meanwhile, back at Unseen University, an ancient and long-forgotten volume--The Summoning of Dragons--is missing from the Library's shelves. To the rescue come Captain Vimes, Constable Carrot, and the rest of the Night Watch who, along with other brave citizens, risk everything, including a good roasting, to dethrone the flying monarch and restore order to Ankh-Morpork (before it's burned to a crisp). A rare tale, well done as only Terry Pratchett can.",
	year: 1989,
	story: "The City Watch"
},
{
	image: "img/eric.jpg",
	alt: "Eric",
	title: "Eric",
	description: "Discworld's only demonology hacker, Eric, is about to make life very difficult for the rest of Ankh-Morpork's denizens. This would-be Faust is very bad...at his work, that is. All he wants is to fulfill three little wishes: to live forever, to be master of the universe, and to have a stylin' hot babe. \nBut Eric isn't even good at getting his own way. Instead of a powerful demon, he conjures, well, Rincewind, a wizard whose incompetence is matched only by Eric's. And as if that wasn't bad enough, that lovable travel accessory the Luggage has arrived, too. Accompanied by his best friends, there's only one thing Eric wishes now -- that he'd never been born!",
	year: 1990,
	story: "Rincewind"
},
{
	image: "img/moving_pictures.jpg",
	alt: "Moving Pictures",
	title: "Moving Pictures",
	description: "People might say that reality is a quality that things possess in the same way that they possess weight. Sadly alchemists never really held with such a quaint notion. They think that they can change reality, shape it to their own purpose. Imagine then the damage that could be wrought if they get their hands on the ultimate alchemy: the invention of motion pictures, the greatest making of illusions. It may be a triumph of universe-shaking proportions. It's either that or they're about to unlock the dark terrible secret of the Holy Wood hills - by mistake...",
	year: 1990,
	story: "The Wizards"
},
{
	image: "img/reaper_man.jpg",
	alt: "Reaper Man",
	title: "Reaper Man",
	description: "But it can. And it has. So what happens after death is now less of a philosophical question than a question of actual reality. On the disc, as here, they need Death. If Death doesn't come for you, then what are you supposed to do in the meantime? You can't have the undead wandering about like lost souls. There's no telling what might happen, particularly when they discover that life really is only for the living...",
	year: 1991, 
	story: "Death"
},
{
	image: "img/witches_abroad.jpg",
	alt: "Witches Abroad",
	title: "Witches Abroad",
	description: "Once upon a time there was a fairy godmother named Desiderata who had a good heart, a wise head, and poor planning skills--which unforunately left the Princess Emberella in the care of her other (not quite so good and wise) godmother when DEATH came for Desiderata. So now it's up to Magrat Garlick, Granny Weatherwax, and Nanny Ogg to hop on broomsticks and make for far-distant Genua to ensure the servant girl doesn't marry the Prince. \nBut the road to Genua is bumpy, and along the way the trio of witches encounters the occasional vampire, werewolf, and falling house (well this is a fairy tale, after all). The trouble really begins once these reluctant foster-godmothers arrive in Genua and must outwit their power-hungry counterpart who'll stop at nothing to achieve a proper 'happy ending'--even if it means destroying a kingdom.",
	year: 1991,
	story: "The Witches"
},
{
	image: "img/small_gods.jpg",
	alt: "Small Gods",
	title: "Small Gods",
	description: "Just because you can't explain it, doesn't mean it's a miracle.' Religion is a controversial business in the Discworld. Everyone has their own opinion, and indeed their own gods. Who come in all shapes and sizes. In such a competitive environment, there is a pressing need to make one's presence felt. And it's certainly not remotely helpful to be reduced to be appearing in the form of a tortoise, a manifestation far below god-like status in anyone's book. In such instances, you need an acolyte, and fast. Preferably one who won't ask too many questions...",
	year: 1992,
	story: "Ancient Civilizations"
},
{
	image: "img/lords_ladies.jpg",
	alt: "Lords and Ladies",
	title: "Lords and Ladies",
	description: " It's a hot Midsummer Night. The crop circles are turning up everywhere-even on the mustard-and-cress of Pewseyy Ogg, aged four. And Magrat Garlick, witch, is going to be married in the morning...Everything ought to be going like a dream. But the Lancre All-Comers Morris Team have got drunk on a fairy mound and the elves have come back, bringing all those things traditionally associated with the magical, glittering realm of Faerie: cruelty, kidnapping, malice and evil, evil murder.* Granny Weatherwax and her tiny argumentative coven have really got their work cut out this time...With full supporting cast of dwarfs, wizards, trolls, Morris Dancers and one orang-utan. And lots. of hey-nonny-nonny and blood all over the place.",
	year: 1992,
	story: "The Witches"
},
{
	image: "img/men_arms.jpg",
	alt: "Men at Arms",
	title: "Men at Arms",
	description: "A Young Dwarf's Dream Corporal Carrot has been promoted! He's now in charge of the new recruits guarding Ankh-Morpork, Discworld's greatest city, from Barbarian Tribes, Miscellaneous Marauders, unlicensed Thieves, and such. It's a big job, particularly for an adopted dwarf. \nBut an even bigger job awaits. An ancient document has just revealed that Ankh-Morpork, ruled for decades by Disorganized crime, has a secret sovereign! And his name is Carrott... \nAnd so begins the most awesome epic encounter of all time, or at least all afternoon, in which the fate of a city--indeed of the universe itself!--depends on a young man's courage, an ancient sword's magic, and a three-legged poodle's bladder.",
	year: 1993,
	story: "The City Watch"
},
{
	image: "img/soul_music.jpg",
	alt: "Soul Music",
	title: "Soul Music",
	description: "Susan Sto Helit is rather bored at her boarding school in the city of Ankh-Morpork, which is just as well, since it seems that her family business--she is the granddaughter of Death--suddenly needs a new caretaker",
	year:  1994,
	story: "Death"
},
{
	image: "img/interesting_times.jpg",
	alt: "Interesting Times",
	title: "Interesting Times",
	description: "\"May you live in interesting times\" is the worst thing one can wish on a citizen of Discworld -- especially on the distinctly unmagical sorcerer Rincewind, who has had far too much perilous excitement in his life. But when a request for a \"Great Wizzard\" arrives in Ankh-Morpork via carrier albatross from the faraway Counterweight Continent, it's he who's sent as emissary. Chaos threatens to follow the impending demise of the Agatean Empire's current ruler. And, for some incomprehensible reason, someone believes Rincewind will have a mythic role in the war and wholesale bloodletting that will surely ensue. (Carnage is pretty much a given, since Cohen the Barbarian and his extremely elderly Silver Horde are busily formulating their own plan for looting, pillaging, and, er, looking wistfully at girls.) However, Rincewind firmly believes there are too many heroes already in the world, yet only one Rincewind. And he owes it to the world to keep that one alive for as long as possible.",
	year: 1994,
	story: "Rincewind"
},
{
	image: "img/maskerade.jpg",
	alt: "Maskerade",
	title: "Maskerade",
	description: "There are strange goings-on at the Opera House in Ankh-Morpork. A ghost in a white mask is murdering, well, quite a lot of people, and two witches (it really isn't wise to call them 'meddling, interfering old baggages'), or perhaps three, take a hand in unraveling the mystery.",
	year: 1995,
	story: "The Witches"
},
{
	image: "img/feet_of_clay.jpg",
	alt: "Feet of Clay",
	title: "Feet of Clay",
	description: "It's murder in Discworld! -- which ordinarily is no big deal. But what bothers Watch Commander Sir Sam Vimes is that the unusual deaths of three elderly Ankh-Morporkians do not bear the clean, efficient marks of the Assassins' Guild. An apparent lack of any motive is also quitetroubling. All Vimes has are some tracks of white clay and more of those bothersome \"clue\" things that only serve to muck up an investigation. The anger of a fearful populace is already being dangerously channeled toward the city's small community of golems -- the mindless, absurdlyindustrious creatures of baked clay who can occasionally be found toiling in the city's factories. And certain highly placed personages are using the unrest as an excuse to resurrect a monarchy -- which would be bad enough even if the \"king\" they were grooming wasn't as empty-headed as your typical animated pottery.",
	year: 1996,
	story: "The City Watch"
},
{
	image: "img/hogfather.jpg",
	alt: "Hogfather",
	title: "Hogfather",
	description: "There are those who believe and those who don't. Through the ages, superstition has had its uses. Nowhere more so than in the Discworld where it's helped to maintain the status quo. Anything that undermines superstition has to be viewed with some caution. There may be consequences, particularly on the last night of the year when the time is turning. When those consequences turn out to be the end of the world, you need to be prepared. You might even want more standing between you and oblivion than a mere slip of a girl - even if she has looked Death in the face on numerous occasions...",
	year: 1996,
	story: "Death"
},
{
	image: "img/jingo.jpg",
	alt: "Jingo",
	title: "Jingo",
	description: "It isn't much of an island that rises up one moonless night from the depths of the Circle Sea -- just a few square miles of silt and some old ruins. Unfortunately, the historically disputed lump of land called Leshp is once again floating directly between Ankh-Morpork and the city of Al-Khali on the coast of Klatch -- which is spark enough to ignite that glorious internationalpastime called \"war.\" Pressed into patriotic service, Commander Sam Vimes thinks he should be leading his loyal watchmen, female watchdwarf, and lady werewolf into battle against local malefactors rather than against uncomfortably well-armed strangers in the Klatchian desert. But war is, after all, simply the greatest of all crimes -- and it's Sir Samuel's sworn duty to seek out criminal masterminds wherever they may be hiding ... and lock them away before they can do any real damage. Even the ones on his own side.",
	year: 1997,
	story: "The City Watch"
},
{
	image: "img/last_continent.jpg",
	alt: "The Last Continent",
	title: "The Last Continent",
	description: "Something is amiss at Unseen Unversity, Ankh-Morpork's most prestigious (i.e., only) institution of higher learning. A professor is missing—but a search party is on the way! A bevy of senior wizards will follow the trail wherever it leads—even to the other side of Discworld, where the Last Continent, Fourecks, is under construction. Imagine a magical land where rain is but a myth and the ordinary is strange and the past and present run side by side. experience the terror as you encounter a Mad Dwarf, the Peach Butt, and the dreaded Meat Pie Floater. \nFeel the passion as the denizens of the Last Continent learn what happens when rain falls and the rivers fill with water (it spoils regattas, for one thing). Thrill to the promise of next year's regatta, in remote, rustic Didjabringabeeralong. It'll be asolutely gujeroo (no worries).",
	year: 1998,
	story: "Rincewind"
},
{
	image: "img/carpe_jugulum.jpg",
	alt: "Carpe Jugulum",
	title: "Carpe Jugulum",
	description: "In a fit of enlightenment democracy and ebullient goodwill, King Verence invites Uberwald's undead, the Magpyrs, into Lancre to celebrate the birth of his daughter. But once ensconced within the castle, these wine-drinking, garlic-eating, sun-loving modern vampires have no intention of leaving. Ever. \nOnly an uneasy alliance between a nervous young priest and the argumentative local witches can save the country from being taken over by people with a cultivated bloodlust and bad taste in silk waistcoats. For them, there's only one way to fight. \nGo for the throat, or as the vampyres themselves say...Carpe Jugulum",
	year: 1998,
	story: "Rincewind"
},
{
	image: "img/fifth_elephant.jpg",
	alt: "The Fifth Elephant",
	title: "The Fifth Elephant",
	description: "They say that diplomacy is a gentle art. That its finest practitioners are subtle, sophisticated individuals for whom nuance and subtext are meat and drink. And that mastering it is a lifetime's work. But you do need a certain inclination in that direction. It's not something you can just pick up on the job. \nWhich is a shame if you find yourself dropped unaccountably into a position of some significant diplomatic responsibility. If you don't really do diplomacy or haven't been to school with the right foreign bigwigs or aren't even sure whether a nod is as good as a wink to anyone, sighted or otherwise, then things are likely to go wrong. It's just a question of how badly...",
	year: 1999,
	story: "The City Watch"
},
{
	image: "img/truth.jpg",
	alt: "The Truth",
	title: "The Truth",
	description: "There's been a murder. Allegedly. William de Worde is the Discworld's first investigative journalist. He didn't mean to be - it was just an accident. But, as William fills his pages with reports of local club meetings and pictures of humorously shaped vegetables, dark forces high up in Ankh-Morpork's society are plotting to overthrow the city's ruler, Lord Vetinari.",
	year: 2000,
	story: "The City Watch"
},
{
	image: "img/thief_time.jpg",
	alt: "Thief of Time",
	title: "Thief of Time",
	description: "Time is a resource. Everyone knows it has to be managed. \nAnd on Discworld that is the job of the Monks of History, who store it and pump it from the places where it's wasted (like underwater -- how much time does a codfish need?) to places like cities, where there's never enough time. \nBut the construction of the world's first truly accurate clock starts a race against, well, time, for Lu Tze and his apprentice Lobsang Ludd. Because it will stop time. And that will only be the start of everyone's problems. \nThief of Time comes complete with a full supporting cast of heroes and villains, yetis, martial artists and Ronnie, the fifth Horseman of the Apocalypse (who left before they became famous).",
	year: 2001,
	story: "Death"
},
{
	image: "img/last_hero.jpg",
	alt: "The Last Hero",
	title: "The Last Hero",
	description: "Cohen the Barbarian. He's been a legend in his own lifetime. \nHe can remember the good old days of high adventure, when being a Hero meant one didn't have to worry about aching backs and lawyers and civilization. But these days, he can't always remember just where he put his teeth...So now, with his ancient (yet still trusty) sword and new walking stick in hand, Cohen gathers a group of his old -- very old -- friends to embark on one final quest. He's going to climb the highest mountain of Discworld and meet the gods.It's time the Last Hero in the world returns what the first hero stole. Trouble is, that'll mean the end of the world, if no one stops him in time.",
	year: 2001, 
	story: "Rincewind"
},
{
	image: "img/amazing_maurice.jpg",
	alt: "The Amazing Maurice and his Educated Rodents",
	title: "The Amazing Maurice and his Educated Rodents",
	description: "The Amazing Maurice runs the perfect Pied Piper scam. This streetwise alley cat knows the value of cold, hard cash and can talk his way into and out of anything. But when Maurice and his cohorts decide to con the town of Bad Blinitz, it will take more than fast talking to survive the danger that awaits. For this is a town where food is scarce and rats are hated, where cellars are lined with deadly traps, and where a terrifying evil lurks beneath the hunger-stricken streets.... \nSet in Terry Pratchett's widely popular Discworld, this masterfully crafted, gripping read is both compelling and funny. When one of the world's most acclaimed fantasy writers turns a classic fairy tale on its head, no one will ever look at the Pied Piper -- or rats -- the same way again!",
	year: 2001,
	story: "Miscellaneous"
},
{
	image: "img/night_watch.jpg",
	alt: "Night Watch",
	title: "Night Watch",
	description: "For a policeman, there can be few things worse than a serial killer at loose in your city. Except, perhaps, a serial killer who targets coppers, and a city on the brink of bloody revolution. The people have found their voice at last, the flags and barricades are rising...And the question for a policeman, an officer of the law, a defender of the peace, is: Are you with them, or are you against them?",
	year: 2002,
	story: "The City Watch"
},
{
	image: "img/wee_free_men.jpg",
	alt: "The Wee Free Men",
	title: "The Wee Free Men",
	description: "A nightmarish danger threatens from the other side of reality... \nArmed with only a frying pan and her common sense, young witch-to-be Tiffany Aching must defend her home against the monsters of Fairyland. Luckily she has some very unusual help: the local Nac Mac Feegle—aka the Wee Free Men—a clan of fierce, sheep-stealing, sword-wielding, six-inch-high blue men. \nTogether they must face headless horsemen, ferocious grimhounds, terrifying dreams come true, and ultimately the sinister Queen of the Elves herself. ...",
	year: 2003,
	story: "The Witches"
},
{
	image: "img/monstrous_regiment.jpg",
	alt: "Monstrous Regiment",
	title: "Monstrous Regiment",
	description: "It began as a sudden strange fancy...Polly Perks had to become a boy in a hurry. Cutting off her hair and wearing trousers was easy. Learning to fart and belch in public and walk like an ape took more time. \nAnd now she's enlisted in the army, and is searching for her lost brother. But there's a war on and whatever anyone says, their side's coming off worse. Polly and her fellow recruits are suddenly in the thick of it, without any training, and the enemy is hunting them.\" All they have on their side is the most artful sergeant in the army, a vampire with a lust for coffee and a readiness to fight dirty. And as they take the war to the heart of the enemy, they have to use all the resources of...the Monstrous Regiment.",
	year: 2003,
	story: "Industrial Revolution"
},
{
	image: "img/hat_sky.jpg",
	alt: "A Hat Full of Sky",
	title: "A Hat Full of Sky",
	description: "Tiffany Aching, a hag from a long line of hags, is trying out her witchy talents again as she is plunged into yet another adventure when she leaves home and is apprenticed to a real witch. This time, will the thieving, fighting and drinking skills of the Nac Mac Feegle the Wee Free Men be of use, or must Tiffany rely on her own abilities?",
	year: 2004,
	story: "The Witches"
},
{
	image: "img/going_postal.jpg",
	alt: "Going Postal",
	title: "Going Postal",
	description: "Suddenly, condemned arch-swindler Moist von Lipwig found himself with a noose around his neck and dropping through a trapdoor into ... a government job? \nBy all rights, Moist should be meeting his maker rather than being offered a position as Postmaster by Lord Vetinari, supreme ruler of Ankh-Morpork. Getting the moribund Postal Service up and running again, however, may prove an impossible task, what with literally mountains of decades-old undelivered mail clogging every nook and cranny of the broken-down post office. Worse still, Moist could swear the mail is talking to him. Worst of all, it means taking on the gargantuan, greedy Grand Trunk clacks communication monopoly and its bloodthirsty piratical headman. But if the bold and undoable are what's called for, Moist's the man for the job -- to move the mail, continue breathing, get the girl, and specially deliver that invaluable commodity that every being, human or otherwise, requires: hope.",
	year: 2004, 
	story: "Industrial Revolution"
},
{
	image: "img/thud.jpg",
	alt: "Thud!",
	title: "Thud!",
	description: "Koom Valley? That was where the trolls ambushed the dwarfs, or the dwarfs ambushed the trolls. It was far away. It was a long time ago. \nBut if he doesn't solve the murder of just one dwarf, Commander Sam Vimes of Ankh-Morpork City Watch is going to see it fought again, right outside his office. \nWith his beloved Watch crumbling around him and war-drums sounding, he must unravel every clue, outwit every assassin and brave any darkness to find the solution. And darkness is following him. \nOh . . . and at six o'clock every day, without fail, with no excuses, he must go home to read 'Where's My Cow?', with all the right farmyard noises, to his little boy. \nThere are some things you have to do.",
	year: 2005, 
	story: "The City Watch"
},
{
	image: "img/wintersmith.jpg",
	alt: "Wintersmith",
	title: "Wintersmith",
	description: "Tiffany Aching is a trainee witch — now working for the seriously scary Miss Treason. But when Tiffany witnesses the Dark Dance — the crossover from summer to winter — she does what no one has ever done before and leaps into the dance. Into the oldest story there ever is. And draws the attention of the Wintersmith himself. \nAs Tiffany-shaped snowflakes hammer down on the land, can Tiffany deal with the consequences of her actions? Even with the help of Granny Weatherwax and the Nac Mac Feegle — the fightin’, thievin’ pictsies who are prepared to lay down their lives for their “big wee hag.”",
	year: 2006,
	story: "The Witches"
},
{
	image: "img/making_money.jpg",
	alt: "Making Money",
	title: "Making Money",
	description: "Amazingly, former arch-swindler-turned-Postmaster General Moist von Lipwig has somehow managed to get the woefully inefficient Ankh-Morpork Post Office running like . . . well, not like a government office at all. Now the supreme despot Lord Vetinari is asking Moist if he'd like to make some real money. Vetinari wants Moist to resuscitate the venerable Royal Mint—so that perhaps it will no longer cost considerably more than a penny to make a penny. \nMoist doesn't want the job. However, a request from Ankh-Morpork's current ruling tyrant isn't a \"request\" per se, more like a \"once-in-a-lifetime-offer-you-can-certainly-refuse-if-you-feel-you've-lived-quite-long-enough.\" So Moist will just have to learn to deal with elderly Royal Bank chairman Topsy (née Turvy) Lavish and her two loaded crossbows, a face-lapping Mint manager, and a chief clerk who's probably a vampire. But he'll soon be making lethal enemies as well as money, especially if he can't figure out where all the gold has gone.",
	year: 2007,
	story: "Industrial Revolution"
},
{
	image: "img/unseen_academicals.jpg",
	alt: "Unseen Academicals",
	title: "Unseen Academicals",
	description: "The wizards at Ankh-Morpork's Unseen University are renowned for many things--wisdom, magic, and their love of teatime--but athletics is most assuredly not on the list. And so when Lord Ventinari, the city's benevolent tyrant, strongly suggests to Archchancellor Mustrum Ridcully that the university revive an erstwhile tradition and once again put forth a football team composed of faculty, students, and staff, the wizards of UU find themselves in a quandary. To begin with, they have to figure out just what it is that makes this sport--soccer with a bit of rugby thrown in--so popular with Ankh-Morporkians of all ages and social strata. Then they have to learn how to play it. Oh, and on top of that, they must win a football match without using magic. \nMeanwhile, Trev (a handsome street urchin and a right good kicker) falls hard for kitchen maid Juliet (beautiful, dim, and perhaps the greatest fashion model there ever was), and Juliet's best pal, UU night cook Glenda (homely, sensible, and a baker of jolly good pies) befriends the mysterious Mr. Nutt (about whom no one knows very much, including Mr. Nutt, which is worrisome . . .). As the big match approaches, these four lives are entangled and changed forever. Because the thing about football--the most important thing about football---is that it is never just about football.",
	year: 2009,
	story: "Rincewind"
},
{
	image: "img/wear_midnight.jpg",
	alt: "I Shall Wear Midnight",
	title: "I Shall Wear Midnight",
	description: "Tiffany Aching has spent years studying with senior witches, and now she is on her own. As the witch of the Chalk, she performs the bits of witchcraft that aren’t sparkly, aren’t fun, don’t involve any kind of wand, and that people seldom ever hear about: She does the unglamorous work of caring for the needy. \nBut someone—or something—is igniting fear, inculcating dark thoughts and angry murmurs against witches. Aided by her tiny blue allies, the Wee Free Men, Tiffany must find the source of this unrest and defeat the evil at its root—before it takes her life. Because if Tiffany falls, the whole Chalk falls withher.",
	year: 2010,
	story: "The Witches"
},
{
	image: "img/snuff.jpg",
	alt: "Snuff",
	title: "Snuff",
	description: "Sam Vimes, watch commander of Ankh-Morpork, is at long last taking a much-needed (and well deserved) vacation. But, of course, this is Discworld, where nothing goes as planned—and before Vimes can even change his cardboard-soled boots for vacationer’s slippers, the gruff watch commander soon finds himself enmeshed in a fresh fiasco fraught with magic, cunning, daring, and (for the reader more than for poor Vimes) endless hilarity. Did he really expect time off? As Vimes himself says in Feet of Clay, “there’s some magical creature called ‘overtime,’ only no one’s even seen its footprints.”",
	year: 2011, 
	story: "The City Watch"
},
{
	image: "img/raising_steam.jpg",
	alt: "Raising Steam",
	title: "Raising Steam",
	description: "To the consternation of the patrician, Lord Vetinari, a new invention has arrived in Ankh-Morpork - a great clanging monster of a machine that harnesses the power of all the elements: earth, air, fire and water. This being Ankh-Morpork, it's soon drawing astonished crowds, some of whom caught the zeitgeist early and arrive armed with notepads and very sensible rainwear. \nMoist von Lipwig is not a man who enjoys hard work - as master of the Post Office, the Mint and the Royal Bank his input is, of course, vital... but largely dependent on words, which are fortunately not very heavy and don't always need greasing. However, he does enjoy being alive, which makes a new job offer from Vetinari hard to refuse... \nSteam is rising over Discworld, driven by Mister Simnel, the man wi' t' flat cap and sliding rule who has an interesting arrangement with the sine and cosine. Moist will have to grapple with gallons of grease, goblins, a fat controller with a history of throwing employees down the stairs and some very angry dwarfs if he's going to stop it all going off the rails...",
	year: 2013,
	story: "The City Watch"
}
];


return Discworld;
})

function DiscworldCtrl($scope, Discworld) {
	$scope.discworld = Discworld;
	$scope.orderReverse = year;
}




