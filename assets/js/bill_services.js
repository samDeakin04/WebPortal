$(function () {

    //$('#loginSubmit').click(() => {
        getAllBill('63e0cbd79f4fe79c13fcf21f');
    //})
    //getProjects();

    //$('.modal').modal();
});
const getAllBill = async (userId) => {
    var incidentData  = await $.post('/bill/getUserBill', {uid:userId}, (response) => {
       return response
       
        //else{return false;}
    })
    if(incidentData.data.length >= 1){
        addTableRow(incidentData.data)
    }
    console.log(incidentData.data)
}

const addTableRow = (items) => {
    $.each(items , function (index, value){  
  
console.log(value)
     let itemToAppend = 
   '<div class="accordion-item card">'
   +'<h2 class="accordion-header" id="flush-headingOne_'+index+'">'
   +'<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_'+index+'" aria-expanded="false" aria-controls="flush-collapseOne_'+index+'">'
   +'Order Number #'+ value.order_no
   +'</button>'
   +'</h2>'
   +'<div id="flush-collapseOne_'+index+'" class="accordion-collapse collapse" aria-labelledby="flush-headingOne_'+index+'" data-bs-parent="#accordionFlushExample">'
   +'<div class="accordion-body">'

   +'<div bgcolor="#f6f6f6" style="color: #333; height: 100%; width: 100%;" height="100%" width="100%">'
   +'<table bgcolor="#f6f6f6" cellspacing="0" style="border-collapse: collapse; padding: 40px; width: 100%;" width="100%">'
   +'<tbody>'
   +'<tr>'
   +'<td width="5px" style="padding: 0;"></td>'
   +'<td style="clear: both; display: block; margin: 0 auto; max-width: 600px; padding: 10px 0;">'
   +'<table width="100%" cellspacing="0" style="border-collapse: collapse;">'
   +'<tbody>'
   +'<tr>'
   +'<td style="padding: 0;">'

   +'</td>'
   +'<td style="color: #999; font-size: 12px; padding: 0; text-align: right;" align="right">'
   +value.userid+'<br />'
   +'Invoice #INV_'+value.order_no+'<br />'
   +value.date
   +'</td>'
   +'</tr>'
   +'</tbody>'
   +'</table>'
   +'</td>'
   +'<td width="5px" style="padding: 0;"></td>'
   +'</tr>'
   +'<tr>'
   +'<td width="5px" style="padding: 0;"></td>'
   +'<td bgcolor="#FFFFFF" style="border: 1px solid #000; clear: both; display: block; margin: 0 auto; max-width: 600px; padding: 0;">'
   +'<table width="100%" style="background: #f9f9f9; border-bottom: 1px solid #eee; border-collapse: collapse; color: #999;">'
   +'<tbody>'
   +'<tr>'
   +'<td width="50%" style="padding: 20px;"><strong style="color: #333; font-size: 24px;">$'+value.amt+'</strong> '+value.status+'</td>'
   +'<td align="right" width="50%" style="padding: 20px;"></span></td>'
   +'</tr>'
   +'</tbody>'
   +'</table>'
   +'</td>'
   +'<td style="padding: 0;"></td>'
   +'<td width="5px" style="padding: 0;"></td>'
   +'</tr>'
   +'<tr>'
   +'<td width="5px" style="padding: 0;"></td>'
   +'<td style="border: 1px solid #000; border-top: 0; clear: both; display: block; margin: 0 auto; max-width: 600px; padding: 0;">'
   +'<table cellspacing="0" style="border-collapse: collapse; border-left: 1px solid #000; margin: 0 auto; max-width: 600px;">'
   +'<tbody>'
   +'<tr>'
   +'<td valign="top"  style="padding: 20px;">'
   +'<h3 class="billh3">'
   +'    Summary'
   +'</h3>'
   +'<table cellspacing="0" style="border-collapse: collapse; margin-bottom: 40px;">'
   +'    <tbody>'
   +'        <tr>'
   +'            <td style="padding: 5px 0;">Service</td>'
   +'            <td align="right" style="padding: 5px 0;">'+value.service+'</td>'
   +'        </tr>'
   +'    '
   +'        <tr>'
   +'            <td style="padding: 5px 0;">Service amount due</td>'
   +'            <td align="right" style="padding: 5px 0;">$'+value.amt+'</td>'
   +'        </tr>'
   +'        <tr>'
   +'            <td style="border-bottom: 2px solid #000; border-top: 2px solid #000; font-weight: bold; padding: 5px 0;">Amount paid</td>'
   +'            <td align="right" style="border-bottom: 2px solid #000; border-top: 2px solid #000; font-weight: bold; padding: 5px 0;">$'+value.amt+'</td>'
   +'        </tr>'
   +'    </tbody>'
   +'</table>'
   +'</td>'
   +'</tr>'
   +'</tbody>'
   +'</table>'
   +'</td>'
   +'<td width="5px" style="padding: 0;"></td>'
   +'</tr>'


   +'</tbody>'
   +'</table>'
   +'</div>'

   +'</div>'
   +'</div>'
   +'</div>'
$("#accordionFlushExample").append(itemToAppend)

    });
}