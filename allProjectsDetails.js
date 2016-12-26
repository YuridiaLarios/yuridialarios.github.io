/*global $*/
var api_key = 'keyQO62FoqRTWrrGK';
var all_project_records = 'https://api.airtable.com/v0/appUun0GAPq3O4DNe/Art%20Pieces?api_key=' + api_key;



// all teachers details
function allWordpressProjectsRecords(data)
{
    $(data.records).each(function(index, project)
                         {
                           var project_name = project.fields['Name'];
                           var project_link = project.fields['link'];
                           var project_photo = project.fields['Photos'];
                           var project_description = project.fields['Description'];
                           var wordpressCheckmark = project.fields['Wordpress'];



                           var project_info = ''
                           if (project_name && wordpressCheckmark) {
                                            project_info += `<div class="column">`;
                                                project_info += `<div class="col-sm-4 col-sm-4">`;
                                                if (project_photo) {
                                                    project_info += `<div class="thumbnail">`;
                                                $.each(project_info, function(i, pic){
                                                    project_info +=`<a href="projectDetail.html?studentID=${student.id}"><img src="${pic.url}"></a>`;

                         });
                        }

                         project_info += `</div>`;
                         project_info += `<div class="caption">${project_name} <br> ${project_link}</div>`;
                         pro_info += `</div>`;
                         pro_info += `</div>`;

                         }
      $('.wordpressProjects').append(project_info);
                       });
}

$.get(all_project_records, allWordpressProjectsRecords);
