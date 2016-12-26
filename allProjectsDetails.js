var api_key = 'keyx8KoDimBmlkxCL';
var all_project_records = 'https://api.airtable.com/v0/appUun0GAPq3O4DNe/Art%20Pieces?api_key=' + api_key;

// all wordpress projects
function wordpressRecords(data)
{
    $(data.records).each(function(index, project)
                         {
                           var project_name = project.fields['Name']
                           var project_picture = project.fields['Photos']
                           var wordpress_check = project.fields['Wordpress']

                           var project_info = ''
                           if (project_name && wordpress_check) {
                                            project_info += `<div class="column">`;
                                                project_info += `<div class="col-sm-6 col-md-4">`;
                                                if (project_picture) {
                                                    project_info += `<div class="thumbnail">`;


                                                $.each(project_picture, function(i, pic){
                                                    project_info +=`<a href="projectDetail.html?projectID=${project.id}"><img src="${pic.url}"></a>`;

                         });

                        }

                         project_info += `</div>`;
                         project_info += `<div class="caption">${project_name} </div>`;
                         project_info += `</div>`;
                         project_info += `</div>`;

                         }
      $('.wordpressProjects').append(project_info);
                       });
}


$.get(all_project_records, wordpressRecords);



// all wordpress projects
function codedRecords(data)
{
    $(data.records).each(function(index, project)
                         {
                           var project_name = project.fields['Name']
                           var project_picture = project.fields['Photos']
                           var coded_check = project.fields['Coded']

                           var project_info = ''
                           if (project_name && coded_check) {
                                            project_info += `<div class="column">`;
                                                project_info += `<div class="col-sm-6 col-md-4">`;
                                                if (project_picture) {
                                                    project_info += `<div class="thumbnail">`;


                                                $.each(project_picture, function(i, pic){
                                                    project_info +=`<a href="projectDetail.html?projectID=${project.id}"><img src="${pic.url}"></a>`;

                         });

                        }

                         project_info += `</div>`;
                         project_info += `<div class="caption">${project_name} </div>`;
                         project_info += `</div>`;
                         project_info += `</div>`;

                         }
      $('.codedProjects').append(project_info);
                       });
}


$.get(all_project_records, codedRecords);
