$(document).ready(function () {

    // Voltar ao topo
    $(window).scroll(function () {
        if ($("html").scrollTop() > 400) {
          $("#voltarTopo").show();
    
        } else {
          $("#voltarTopo").hide();
        }
      });
});
function voltarTopo(){
    $("html").animate({ scrollTop: 0},800);
  }