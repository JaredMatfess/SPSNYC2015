<script src = 'https://sp.slalom.com/ourfirm/offices/Hartford/dte/pcdemos/siteassets/jquery.js'></script>
<script type='text/javascript'>

$(document).ready(function () {
//Clear the value in case there's any metadata associated with the document
//Example: downloaded from ProjectAttachments list and has already been associated to a project
$("[ID*='Request_x0020_ID']").val('');
var ppxAttachID = getParameterByName("ID");
$("[ID*='Request_x0020_ID']").attr("disabled","disabled");
$("[ID*='DocAssigned']").attr("disabled","disabled");
//document.getElementById("s4-ribbonrow").style.display = "none"; 

});


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(parent.location.search);
  var finalString = (results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")));
  return finalString;
}


</script>