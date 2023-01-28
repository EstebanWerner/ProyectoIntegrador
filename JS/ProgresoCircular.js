let options = {
  startAngle: -1.55,
  size: 75,
  value: 0.70,
  fill: {gradient: ['#a445b2', '#fa4299']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".SkillsPps .bar").circleProgress({
  value: 0.90
});
$(".Comunicacionverbal .bar").circleProgress({
  value: 0.70
});
$(".Liderazgo .bar").circleProgress({
  value: 0.85
});
$(".Resoluciondeproglemas .bar").circleProgress({
  value: 0.95
});
$(".DiseñoCircuitos .bar").circleProgress({
  value: 0.99
});
$(".ManejoDeProgramas .bar").circleProgress({
  value: 0.95
});








