var SALTY_FOOD = [{
    name: "ojja mergez",
    image:"https://www.tounsia.net/media/cache/singlepost/uploads/2019/02/ojja-merguez.jpg" ,
    p:"500g merguez/ 4 eggs/1 onion/ 2 cloves garlic/1 green pepper/ 1 red pepper",
    watch_video:"https://youtube.com/watch?v=VZGwbemGZS0&feature=share"
},
{
    name: "makrouna",
    image: "https://lesucresale-doumsouhaib.com/wp-content/uploads/2020/04/p%C3%A2te-tunisienne-%C3%A0-la-sauce-piquante-makrouna.jpg",
    p:"300gr of veal/beef or lamb shank meat/3 tbsp olive oil/1 tbsp sunflower oil/ 1 small can of tomato puree/3 cloves of garlic/1 tbsp tabel karouia (Tunisian spices)/1 tbsp hot pepper powder/a few bay leaves/ 1 green chilli/ salt and p",
    watch_video:"https://youtube.com/watch?v=iiCwR4l23L0&feature=share"},
{
    name: "kosksi",
    image:"https://3.bp.blogspot.com/-HlyVqY5McVI/WyEJawoLdCI/AAAAAAAAW_s/O4sXOAAoijkg_CZsnzfG_GixgNTVCuUbACLcBGAs/s1600/000.jpg",
    p:"500g lamb meat/chopped onion/3-4 carrots/2-3 zucchini/2 potatoes/chickpeas soaked the day before (canned for me)/1 tsp harissa/2 cloves garlic/Green peppers 2 or 3/2 tbsp tomato puree/salt, black pepper to taste/1 tsp cayenne pepper/1 tsp cumin/1 tsp turmeric/1 tsp coriander powder/½ tsp ginger/3-4 tomatoes /1 turnip/Medium Couscous",
    watch_video:"https://youtube.com/watch?v=hs3DbCovPF0&feature=share"
},
{
    name: "kafteji",
    image:"https://ais.kochbar.de/kbrezept/526614_951972/1500x1500/kafteji-rezept-bild-nr-3030.jpg" ,
    p:"6 potatoes/6 tomatoes/6 eggs/6 large fresh chillies/1 teaspoon of karouia/salt pepper/olive oil/500ml frying oil/fresh parsley/ garlic",
    watch_video:"https://youtube.com/watch?v=XRu__-DyUK4&feature=share"
},
{
    name: "lablebi",
    image:"https://cuisine.nessma.tv/uploads/7/2020-01/da1b14b91bbf238b84fddcb48f34cd50.png" ,
    p:"500g bag of dried chickpeas/250 g broad beans/Homemade harissa which can be sweet/a clove of garlic/ Spice: Cumin (Kamoun) ground/Olive oil/ vinegar and lemon",
    watch_video:"https://youtube.com/watch?v=XRuDyUK4&feature=share"
}
]




var SPICY_FOOD = [{
    name: "crepe chocolat",
    image:"https://i.notrefamille.com/1400x787/smart/2022/01/24/crepe-banane-chocolat.jpg" ,
    p:"For the dough/ 2 eggs/5 c. flour/2 tbsp. sugar/ 1 C. oil soup",
    watch_video:"https://youtube.com/watch?v=duMIqx5kZsE&feature=share"
},
{
    name: "fondant",
    image:"https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/Import/coulant-fondant-chocolat_ss.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393" ,
    p:"200g chocolate/ 150g butter/ 150g caster sugar/ 50g flour/ 3 eggs",
    watch_video:"https://youtube.com/watch?v=qN6bSCFrhpU&feature=share"
},
{
    name: "gaufre chocolat",
    image:"https://static.750g.com/images/1200-630/349612e4746b351d36422a52f1b011c2/gaufres-et-leur-sauce-au-chocolat.jpeg" ,
    p:"2 small eggs./40g of sugar/50 g of dark baking chocolate/60g unsalted butter/80g of flour//0.5 teaspoon of baking powder/10 cl of milk",
    watch_video :"https://youtu.be/il0gdOCAu4E"
},
{
    name: "cake ",
    image:"https://sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-5.jpg" ,
    p:"3 eggs/150g of sugar/150g flour/0.5teaspoon baking powder/170g melted butter",
  watch_video : "  https://youtube.com/watch?v=9KBlblnd0Oc&feature=share"

}
]



var _APPETIZERS = [{
    name: "ice cream",
    image:"https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg" ,
    p:" ",
    watchvideo:"https://youtu.be/5M9Ot3WWs_o"
},
{
    name: "assida boufriwa",
    image:"https://www.latunisienne.fr/wp-content/uploads/2015/12/assida-noisette-boufriwa-4.jpg" ,
    p:"500g hazelnuts/150g flour/1 liter of milk (or water)/150g sugar/2 tablespoons condensed milk/2 tablespoons of geranium water (3terchiya)/Dried fruits for decoration",
    watch_video:"https://youtu.be/9K2A7Ndd7kE"
},
{
    name: "crima ",
    image:"https://www.196flavors.com/wp-content/uploads/2018/03/Krima-Tounsiya-3-FP.jpg",
    p:"750ml milk/4 tablespoons of sugar/2 egg yolks/3 tablespoons of starch/2 tablespoons of rose water/100g dried fruit",
    watch_video:"https://youtu.be/QUGg1dxyxPo"

},

]





function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
        if (predicate(element, i)) {
            acc.push(element);
        }
    });
    return acc;
}

function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
        acc.push(func(element, i));
    });
    return acc;
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

var format
var myEach = function () {
    return map(SALTY_FOOD, function (e) {
        // console.log(e);
        format = $(`<div class="card">
    <img id="imagefood" src=${e.image}>
    <div class="container">
        <h2>${e.name}</h2>
        <h3>${e.p}</h3>
        <a href=${e.watch_video}> this is your food </a>
    </div>
</div>

`)
        $("#mela7").append(format);
    }
    )

}

var format
var myEacht = function () {
    return map(SPICY_FOOD, function (e) {
        // console.log(e);
        format = $(`<div class="card">
    <img id="imagefood" src=${e.image}>
    <div class="container">
    <h2><b>${e.name}</b></h2>
    <h3>${e.p}</h3>
        <a href=${e.watch_video}></a>
    </div>
</div>

`)
        $("#hlow").append(format);
    }
    )

}


var format
var myEachs = function () {
    return map(_APPETIZERS, function (e) {
        // console.log(e);
        format = $(`<div class="card">
    <img id="imagefood" src=${e.image}>
    <div class="container">
    <h2><b>${e.name}</b></h2>
    <h3>${e.p}</h3>
        <a href=${e.watch_video}></a>
    </div>
</div>

`)
        $("#mest7ali").append(format);
    }
    )

}

