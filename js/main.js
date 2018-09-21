function switchChannel(channelName){

console.log('Tuning into channel' + channelName);
document.getElementById('#app-bar').innerHTML=channelName;

}
function fillStar()
{
$('#starred').attr("https://ip.lfe.mw.tum.de/sections/star.png");
}
function unfillStar()
{
    $('#starred').attr("https://ip.lfe.mw.tum.de/sections/star-o.png");
}
function selectTab(){

    $('#tab1').removeClass();
    $('#tab2').addClass();

}