<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8' lang='pt-br'>
        <link rel="stylesheet" href="_css/style.css">
        <script src="_js/calc.js"></script>
		<style>
		*{
    padding: 0;
    margin: 0;
}
#title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin: 0px;
}
.main{
    margin: 0 auto;
}
#n0{
    margin-left: 54px;
}
.button{
    width: 50px;
    height: 50px;
    font-size: 25px;
    margin: 2;
}
.textview{
    width: 211px;
    height: 30px;
}

		</style>
    </head>
    <body>
        <div>
            <h1 id='title'>Online Calculator</h1>
            <div class='main'>
                <form name='form'> 
                    <input class="textview" name='textview'> 
                </form>                  
                    <table>
                        <td>
                            <input type="button" class='button' onclick='c()' value="C">
                            <input type="button" class='button' onclick="back()" value="<">
                            <input type="button" class='button' onclick="insert('/')" value="/">
                            <input type="button" class='button' onclick="insert('*')" value="*">
                        </td>
                        <tr>
                            <td>
                                <input type="button" class='button' onclick="insert(7)" value="7">
                                <input type="button" class='button' onclick="insert(8)" value="8">
                                <input type="button" class='button' onclick="insert(9)" value="9">
                                <input type="button" class='button' onclick="insert('+')" value="+">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class='button' onclick="insert(4)" value="4">
                                <input type="button" class='button' onclick="insert(5)" value="5">
                                <input type="button" class='button' onclick="insert(6)" value="6">
                                <input type="button" class='button' onclick="insert('-')" value="-">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class='button' onclick="insert(1)" value="1">
                                <input type="button" class='button' onclick="insert(2)" value="2">
                                <input type="button" class='button' onclick="insert(3)" value="3">
                                <input type="button" class='button' onclick='equal()' value="=">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="hidden">
                                <input type='button' value='0' onclick="insert(0)" class='button' id='n0'>
                                <input type='button' value='.' onclick="insert('.')" class='button' id='n0'>
                            </td>
                        </tr>
                </form>               
            </div>
        </div>
    </body>
	<script>
	function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function equal(){
    exp = document.form.textview.value;
    if(exp){
       document.form.textview.value = eval(exp);
}
}
function c(){
    document.form.textview.value = "";
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
	</script>
</html>
