function addProject(projects){
    // get a referece to the #projects tag
    var projectsDiv = d3.select("#projects").selectAll("div")
                        .data(projects)
                        .enter()
                        .append("div")
                        .attr("class","col-xl-3 col-lg-4 col-md-6")
                        .append("div")
                        .attr("class","github-card")
                        .append("div")
                        .attr("class","card-body");
    // add project to #projects tag
    projectsDiv.append("div").classed("circle", true)
    projectsDiv.append("h3").attr("class","card-title text-center")
                            .html((p,i) => p.title)
    projectsDiv.append("h6").attr("class","card-text text-center")
                            .html((p,i) => p.skill)
    projectsDiv.append("p").attr("class","card-text text-center")
                           .html((p,i) => p.abstract)
    projectsDiv.append("a").attr("target","_blank")
                           .attr("class","btn btn-warning centered")
                           .attr("href", (p,i)=>p.href)
                           .text((p,i) => p.link_type)
}

function init(){
    // clear existing project cards
    var projectsDiv = d3.select("#projects")
    projectsDiv.html("")

    // add project cards to the tag
    addProject(projects)

}

init()