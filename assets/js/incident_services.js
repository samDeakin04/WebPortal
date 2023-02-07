$(function () {

    //$('#loginSubmit').click(() => {
        getAllIncident('63e0cbd79f4fe79c13fcf21f');
    //})
    //getProjects();

    //$('.modal').modal();
});
const getAllIncident = async (userId) => {
    var incidentData  = await $.post('/incident/getdata', {uid:userId}, (response) => {
       return response
       
        //else{return false;}
    })
    if(incidentData.data.length >= 1){
        addTableRow(incidentData.data)
    }
    console.log(incidentData.data)
}

const addTableRow = (items) => {
    
    items.forEach(item => {
console.log(item)
     let itemToAppend = '<tr>'
                        +'<td><span >'+item.title+'</span></td>'
                        +'<td>'+item.date+'</td>'
                        +'<td>'+item.location+'</td>'
                        +'<td>'
                        +'<div class="progress">'
                        +'<div class="progress-bar" data-transitiongoal="95" aria-valuenow="'+item.risk+'" style="width: '+item.risk+'%;">'+item.risk+'%</div>'
                        +'</div>'
                        +'</td>'
                        +'<td><span class="label label-warning">'+item.action+'</span></td>'
                        +'<td><span class="label label-success">'+item.status+'</span></td>'
                        +'</tr>'
                        $("#incidentrow").append(itemToAppend)

    });
}