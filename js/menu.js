{
    let menudiv = document.getElementById("menu");
    let menutext = '';
    menutext += '<h2>MAIN MENU</h2>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./index.html" class="button">\Home</a> </li>';
    menutext += '<li> <a href="./credits.html" class="button">\Credits</a> </li>';
    menutext += '</ul>';
    menutext += '<h3>LIGHT MECHS</h3>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./lm_raven_runngun.html" class="button">\RVN-1X-RUNNGUN</a> </li>';
    menutext += '<li> <a href="./lm_urban_scootandshoot.html" class="button">\UM-SA1-SCOOTANDSHOOT</a> </li>';
    menutext += '</ul>';
    menutext += '<h3>MEDIUM MECHS</h3>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./mm_hunchback_lancer.html" class="button">\HBK-VEST-LANCER</a> </li>';
    menutext += '</ul>';
    menutext += '<h3>HEAVY MECHS</h3>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./hm_archer_whyowepaistthbl.html" class="button">\ARCHER-ARC-2P-WHILE YOUR WERE PARTYING I STUDIED THE BLADE</a> </li>';
    menutext += '<li> <a href="./hm_jagermech_pompom.html" class="button">\JAGERMECH-JM6-S-POM POM</a> </li>';
    menutext += '<li> <a href="./hm_marauder_splatv1.html" class="button">\MARAUDER-MAD-3M-SPLAT V1</a> </li>';
    menutext += '<li> <a href="./hm_marauder_splatv2.html" class="button">\MARAUDER-MAD-3M-SPLAT V2</a> </li>';
    menutext += '</ul>';
    menutext += '<h3>ASSUALT MECHS</h3>';
    menutext += '<ul class="menu">';
    menutext += '<li> <a href="./am_kingcrab_mg.html" class="button">\KINGCRAB-KGC-000-UNKOWN MG</a> </li>';
    menutext += '<li> <a href="./am_kingcrab_v2.html" class="button">\KINGCRAB-KGC-000-UNKOWN V2</a> </li>';
    menutext += '<li> <a href="./am_stalker_eye.html" class="button">\STALKER-STK-4N-EYE</a> </li>';
    menutext += '<li> <a href="./am_stalker_sauron.html" class="button">\STALKER-STK-4N-SAURON</a> </li>';
    menutext += '<li> <p>ATLAS-AS7-P-NOESCAPE</p> </li>';
    menutext += '<ul class="menu" style="margin-left: 2%;">';
    menutext += '<li> <a href="./am_atlas_noescape.html" class="button">\ATLAS-AS7-P-NOESCAPE V1</a> </li>';
    menutext += '<li> <a href="./am_atlas_noescapev2.html" class="button">\ATLAS-AS7-P-NOESCAPE V2</a> </li>';
    menutext += '<li> <a href="./am_atlas_noescapev3.html" class="button">\ATLAS-AS7-P-NOESCAPE V3</a> </li>';
    menutext += '</ul>';
    menutext += '</ul>';
    menudiv.innerHTML = menutext;
}