function Enviar() {

  var nomevmid = document.getElementById("nomevmid");
  var ipid = document.getElementById("ipid");
  var ramid = document.getElementById("ramid");
  var cpuid = document.getElementById("cpuid");

  var name = nomevmid.value;
  var cpu = cpuid.value;
  var ram = ramid.value;
  var ip = ipid.value;

  if (nomevmid.value != "") {
    alert('Obrigado sr(a) ' + ramid.value + ' os seus dados foram encaminhados com sucesso');
  }
  var httpRequest = new XMLHttpRequest();
  httpRequest.open(
    'GET',
    `http://localhost:3000?cpu=${cpu}&ram=${ram}&ip=${ip}&name=${name}`,
    true
  );

  httpRequest.send();


}
main();