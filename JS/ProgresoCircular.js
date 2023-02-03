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
$(".skill1 .bar").circleProgress({
  value: 0.90
});
$(".skill2 .bar").circleProgress({
  value: 0.70
});
$(".skill3 .bar").circleProgress({
  value: 0.85
});
$(".skill4 .bar").circleProgress({
  value: 0.95
});
$(".skill5 .bar").circleProgress({
  value: 0.99
});
$(".skill6 .bar").circleProgress({
  value: 0.95
});








