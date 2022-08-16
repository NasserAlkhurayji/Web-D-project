var form =document.getElementById('form');
var neighbor=document.getElementById('neighbor');
var msa7a=document.getElementById('msa7a');
var phoneNumber=document.getElementById('phoneNumber');
v



  function validate() {
      
    if( document.form.neighbor.value == "" ) {
       alert( "Please provide your name!" );
       document.form.neighbor.focus() ;
       return false;
    }
    if( document.form.msa7a.value == "" ) {
       alert( "Please provide your Email!" );
       document.form.msa7a.focus() ;
       return false;
    }
    
    return( true );
 }