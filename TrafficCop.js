<script src = 'https://sp.slalom.com/ourfirm/offices/Hartford/dte/pcdemos/siteassets/jquery.js'></script>
<script type='text/javascript'>

    var spsNYCURL = getURLParameterByName("Source");
    var spsNYCreferrer = spsNYCURL.substring(spsNYCURL.lastIndexOf('/') + 1, spsNYCURL.lastIndexOf('.'));
    var spsNYCbaseURL = location.href;
	var checkActor =  getURLParameterByName("Actor");
	
	if(!checkActor)
		{
		switch(spsNYCreferrer) {
		
		case ("Reviewers"):
		window.location.href = spsNYCbaseURL + "&Actor=ReadOnly&DefaultView=Reviewers";
		break;

	}
}	
	$(document).ready(function () {
		
		var smdbMaterialID = getURLParameterByName("ID");
		
		$.ajax({
	    	url: "https://sp.slalom.com/ourfirm/offices/Hartford/dte/pcdemos/_api/web/lists/getbytitle('WorkRequest')/items('"+smdbMaterialID+"')",
	    	method: "GET",
	    	headers: {"accept": "application/json;odata=verbose"},
	    	success: function(xData, status){
				
				document.title = xData.d.Request_x0020_ID;
				
				if(xData.d.Review_x0020_Status.indexOf('Approved') >= 0){
				$('.ms-addnew').hide()
				}
				
			}
		});
		
	});
	
function getURLParameterByName(name){
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  var finalString = (results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")));
  return finalString;
};
	 
</script>