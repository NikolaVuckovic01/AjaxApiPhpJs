<?php
if(isset($_POST['termin'])){
    $db=mysqli_connect("localhost","root","","kompanija");
    mysqli_query($db,"SET NAMES utf8");
    $termin=$_POST['termin'];
    $upit="SELECT * FROM korisnici WHERE ime LIKE ('%$termin%') OR prezime LIKE ('%$termin%')";
    $rez=mysqli_query($db,$upit);
    $odgovor=mysqli_fetch_all($rez,MYSQLI_ASSOC);
    echo JSON_encode($odgovor,256);
}

?>