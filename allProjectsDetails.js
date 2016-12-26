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
                           var project_link = project.fields['link']
                           var project_date = project.fields['date']
                           var project_description = project.fields['Description']

                           var project_info = ''
                           if (project_name && wordpress_check) {
                                            project_info += `<div class="column">`;
                                                project_info += `<div class="col-1-1">`;
                                                if (project_picture) {
                                                    project_info += `<div class="thumbnail">`;


                                                $.each(project_picture, function(i, pic){
                                                    project_info +=`<a href="projectDetail.html?projectID=${project.id}"><img src="${pic.url}"></a>`;

                         });

                        }

                         project_info += `</div>`;
                         project_info += `<div class="caption">${project_name}  </div>`;
                         project_info += `</div>`;
                         project_info += `</div>`;

                         }
      $('.wordpressProjects').append(project_info);
                       });
}


$.get(all_project_records, wordpressRecords);



// all coded projects
function codedRecords(data)
{
    $(data.records).each(function(index, project)
                         {
                           var project_name = project.fields['Name']
                           var project_picture = project.fields['Photos']
                           var coded_check = project.fields['Coded']
                           var project_link = project.fields['link']
                           var project_date = project.fields['date']
                           var project_description = project.fields['Description']

                           var project_info = ''
                           if (project_name && coded_check) {
                                            project_info += `<div class="column">`;
                                                project_info += `<div class="col-1-1">`;
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





// all logo projects
function logoRecords(data)
{
    $(data.records).each(function(index, project)
                         {
                           var project_name = project.fields['Name']
                           var project_picture = project.fields['Photos']
                           var logo_check = project.fields['Logo']
                           var project_link = project.fields['link']
                           var project_date = project.fields['date']
                           var project_description = project.fields['Description']

                           var project_info = ''
                           if (project_name && logo_check) {
                                            project_info += `<div class="column">`;
                                                project_info += `<div class="col-1-1"a>`;
                                                if (project_picture) {
                                                    project_info += `<div class="thumbnail">`;


                                                $.each(project_picture, function(i, pic){
                                                    project_info +=`<a href="projectDetail.html?projectID=${project.id}"><img src="${pic.url}"></a>`;

                         });

                        }

                         project_info += `</div>`;
                         project_info += `<div class="caption">${project_name}</div>`;
                         project_info += `</div>`;
                         project_info += `</div>`;

                         }
      $('.logoProjects').append(project_info);
                       });
}


$.get(all_project_records, logoRecords);
