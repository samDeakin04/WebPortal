$(function () {

    //$('#loginSubmit').click(() => {
        getAllFaq();
    //})
    //getProjects();

    //$('.modal').modal();
});
const getAllFaq = async (userId) => {
    var faqData  = await $.get('/faq/getAllFaq', {}, (response) => {
       return response
       
        //else{return false;}
    })
    if(faqData.data.length >= 1){
        addTableRow(faqData.data)
    }
    console.log(faqData.data)
}

const addTableRow = (items) => {
    $.each(items , function (index, value){  
  
console.log(value)
     let itemToAppend = 
   '<div class="accordion-item card">'
   +'<h2 class="accordion-header" id="flush-heading'+index+'">'
   +'<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse'+index+'" aria-expanded="false" aria-controls="flush-collapse'+index+'">'
   +value.ques
   +'</button>'
   +'</h2>'
   +'<div id="flush-collapse'+index+'" class="accordion-collapse collapse" aria-labelledby="flush-heading'+index+'" data-bs-parent="#accordionFlushExample">'
   +'<div class="accordion-body">'+value.ans+'</div>'
   +'</div>'
   +'</div>'
$("#accordionFlushExample").append(itemToAppend)

    });
}