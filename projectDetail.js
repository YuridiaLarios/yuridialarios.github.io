/*global $*/

// This runs on the detail view

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}


/*global api_key*/
var url_one_project = function() {
  var url_id = $.urlParam('projectID');
  return 'https://api.airtable.com/v0/appUun0GAPq3O4DNe/Art%20Pieces?/' + url_id +'?api_key=' + api_key;
}


function renderOneProject(project) {
  var project_name = project.fields['Name']
  var project_picture = project.fields['Photos']
  var wordpress_check = project.fields['Wordpress']
  var project_link = project.fields['link']
  var project_date = project.fields['date']
  var project_description = project.fields['Description']
  var project_code = project.fields['sourceCode']

  var project_info = ''
      if (project_name) {
        project_info +=`<div class="panel panel-default">`;
          project_info +=`<div class="panel-body">`;
          if (project_picture) {
            $.each(project_picture, function(i, pic){
              project_info +=`<a href="projectDetail.html?projectID=${project.id}"><img src="${pic.url}"></a>`;
            });
          }
          project_info +=`</div>`;
        project_info += `<div class="panel-footer"> <h3><strong> ${project_name} </strong></h3> <br> `;


          if(project_date){
          project_info += `Date of completition: ${project_date} <br> `;
          }

          if(project_description){
            project_info += ` Short Description: ${project_description} <br> `;
          }

          if(project_link){
            project_info += `Link: <a href="${project_link}" target="_blank">${project_link}</a><br>`
          }

          if(project_code){
            project_info += `Source Code: <a href="${project_code}" target="_blank">${project_code}</a>
                        <br>`;
          }
      }
      $('.project-detail').append(student_info);
}

if ($.urlParam('projectID')) {
  $.get(url_one_project(), renderOneProject);
}
